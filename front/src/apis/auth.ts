import axios from "axios";
import { store } from "../store";
import { login as loginAction } from "../store/user/user.reducers";

interface userType {
  username: string;
  password: string;
}

export const login = (userData: userType) => {
  return new Promise((resolve, reject) => {
    axios
      .post("/auth/login", userData)
      .then((res) => {
        store.dispatch(loginAction(res.data));
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
