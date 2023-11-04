import { User } from "types";

const ACCESS_TOKEN_KEY: string = 'access_token_pl_shop';

export const setAccessToken = (value: { accessToken: string, user: User }) => {
  localStorage.setItem(ACCESS_TOKEN_KEY, JSON.stringify(value));
};

export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN_KEY);

export const removeAccessToken = () =>
  localStorage.removeItem(ACCESS_TOKEN_KEY);
