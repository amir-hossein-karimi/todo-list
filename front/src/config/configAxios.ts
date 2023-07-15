import axios, {
  AxiosError,
  AxiosResponse,
  AxiosInstance,
  InternalAxiosRequestConfig,
} from "axios";
import { toast } from "react-toastify";
import { store } from "../store";
import { logout, login } from "../store/user/user.reducers";

const axiosInstance = axios.create();

interface responseError extends Omit<AxiosError, "response"> {
  response: {
    data: {
      data: {
        message?: string;
      };
      statusCode?: string | number;
    };
  };
}

const BASE_API_URL = import.meta.env.VITE_BASE_API;

const onUnAuthorize = async (error: responseError) => {
  const roginalRequest = error.config;
  const { user } = store.getState();
  const { refreshToken, token } = user;

  try {
    const refreshData = await axiosInstance.post(
      `${BASE_API_URL}/auth/refreshToken`,
      { refreshToken },
      { headers: { token } }
    );

    const newToken = refreshData?.data?.data?.token;
    if (!newToken) throw "token is invalid";

    store.dispatch(login({ ...user, token: newToken }));
    return axios({
      ...roginalRequest,
      headers: { ...roginalRequest?.headers, token: newToken },
    });
  } catch (e: any) {
    console.log("refresh token error ", e.data?.message || error.message || e);
    store.dispatch(logout());
  }
};

const onForbiden = () => {
  store.dispatch(logout());
};

const onRequest = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  const newConfig = { ...config };
  const {
    user: { token },
  } = store.getState();

  newConfig.baseURL = BASE_API_URL;
  newConfig.headers["Content-Type"] = "application/json";
  newConfig.headers["token"] = token;

  return newConfig;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response.data;
};

const onResponseError = async (error: responseError): Promise<unknown> => {
  const realError = error.response?.data;

  if (realError.statusCode && +realError.statusCode === 401) {
    return onUnAuthorize(error);
  } else if (realError.statusCode && +realError.statusCode === 403) {
    onForbiden();
  }

  toast.error(realError.data?.message || error.message);
  return Promise.reject(realError || error);
};

export const setupInterceptorsTo = (
  axiosInstance: AxiosInstance
): AxiosInstance => {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
};
