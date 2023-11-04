import { ISignIn, ISignInRes, ISignUpReq } from "types"
import { axiosClient } from "./axiosClient"

const url = "/user"
const authUrl = '/api/v1/auth';

export const login = async (data: ISignIn) => {
  const res = await axiosClient.post(`${authUrl}/login`, data);
  return res.data as ISignInRes;
};

export const refreshToken = (refreshToken: string) => {
  return axiosClient.get("/auth/refresh", {
    headers: {
      Authorization: `Bearer ${refreshToken}`
    }
  }).then((res: any) => res.data);
};

export const register = (data: ISignUpReq) => {
  return axiosClient.post(`${authUrl}/register`, { ...data, role: 1 }).then((res) => res.data);
};
