import {
  AxiosError,
  AxiosResponse,
  AxiosInstance,
  InternalAxiosRequestConfig,
} from "axios";
import { toast } from "react-toastify";
import { store } from "../store";
import { logout } from "../store/user/user.reducers";

interface responseError extends AxiosError {
  data: {
    message?: string;
  };
  statusCode?: number | string;
}

const BASE_API_URL = import.meta.env.VITE_BASE_API;

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
  const {
    user: { refreshToken, token },
  } = store.getState();

  if (error.statusCode && +error.statusCode === 401) {
    try {
      const refreshData = await fetch(`${BASE_API_URL}/auth/refreshToken`, {
        headers: {
          token,
        },
        body: JSON.stringify({ refreshToken }),
      });

      console.log(refreshData);
    } catch (e) {
      console.log("refresh token error", e);
      store.dispatch(logout());
    }
  }

  console.log(error);
  toast.error(error.data?.message || error.message);
  return Promise.reject(error);
};

export function setupInterceptorsTo(
  axiosInstance: AxiosInstance
): AxiosInstance {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
}
