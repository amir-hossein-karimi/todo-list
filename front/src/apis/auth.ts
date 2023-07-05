import axios, { AxiosResponse } from "axios";
import { store } from "../store";
import { login as loginAction } from "../store/user/user.reducers";

interface userType {
  username: string;
  password: string;
}

interface loginResponse {
  token: string;
  refreshToken: string;
}

export const login = (userData: userType) => {
  return new Promise((resolve, reject) => {
    axios
      .post("/auth/login", userData)
      .then((res: AxiosResponse<loginResponse>) => {
        store.dispatch(
          loginAction({ ...res.data, username: userData.username })
        );
        resolve(true);
      })
      .catch(reject);
  });
};

export const register = (userData: userType) => {
  return axios.post("/auth/register", userData);
};

export const refreshToken = (refreshToken: string) => {
  return axios.post("/auth/refreshToken", refreshToken);
};
