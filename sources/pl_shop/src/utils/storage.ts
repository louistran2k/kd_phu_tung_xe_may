import { User } from "types";

const LOCAL_STORAGE_KEY: string = 'pl_shop';

interface ILocalStorage {
  accessToken: string;
  refreshToken: string;
  user: User;
  cart: any;
}

export const setLocalStorage = (value: Partial<ILocalStorage>) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(value));
};

export const getLocalStorage = () => {
  const storage = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (!storage) return undefined;
  return JSON.parse(storage);
};

export const removeLocalStorage = () =>
  localStorage.removeItem(LOCAL_STORAGE_KEY);
