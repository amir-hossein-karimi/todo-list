import {
  AxiosError,
  AxiosResponse,
  AxiosInstance,
  InternalAxiosRequestConfig,
} from "axios";
import { toast } from "react-toastify";
import { store } from "../store";
import { logout, login } from "../store/user/user.reducers";

interface responseError extends AxiosError {
  data: {
    message?: string;
  };
  statusCode?: number | string;
}

const BASE_API_URL = import.meta.env.VITE_BASE_API;

const onUnAuthorize = async () => {
  const { user } = store.getState();
  const { refreshToken, token } = user;

  try {
    const fetchResponse = await fetch(`${BASE_API_URL}/auth/refreshToken`, {
      headers: {
        token,
      },
      body: JSON.stringify({ refreshToken }),
    });
    const refreshData = await fetchResponse.json();

    const newToken = refreshData?.data?.token;
    if (!newToken) throw "token not found";

    store.dispatch(login({ ...user, token: newToken }));
  } catch (e) {
    console.log("refresh token error ", e);
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
  return response.data?.data || response.data;
};

const onResponseError = async (error: responseError): Promise<AxiosError> => {
  if (error.statusCode) {
    switch (+error.statusCode) {
      case 401:
        onUnAuthorize();
        break;
      case 403:
        onForbiden();
        break;
    }
  }

  toast.error(error.data?.message || error.message);
  return Promise.reject(error);
};

export const setupInterceptorsTo = (
  axiosInstance: AxiosInstance
): AxiosInstance => {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
};
