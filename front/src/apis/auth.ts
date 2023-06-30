import axios from "axios";

interface userType {
  username: string;
  password: string;
}

export const login = (userData: userType) => {
  return axios.post("/auth/login", userData);
};

export const register = (userData: userType) => {
  return axios.post("/auth/register", userData);
};

export const refreshToken = (refreshToken: string) => {
  return axios.post("/auth/refreshToken", refreshToken);
};
