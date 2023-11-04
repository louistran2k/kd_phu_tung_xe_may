import { createSlice } from "@reduxjs/toolkit";
import { userReducer } from "store/user/reducer";
import { User } from "types";
import { getLocalStorage } from "utils/storage";
import { extraReducers } from "./thunkApi";

export const userInit: User = {
  id: '',
  firstName: '',
  lastName: '',
  gender: null,
  dateOfBirth: null,
  address: '',
  email: '',
  phoneNumber: '',
  taxCode: '',
};

export interface IUserStore {
  accessToken: string | null;
  refreshToken: string | null;
  user: User;
  isShowInfo: boolean;
  isShowPurchaseDetail: boolean;
};

const initialState: IUserStore = {
  accessToken: getLocalStorage()?.accessToken ?? '',
  refreshToken: getLocalStorage()?.refreshToken ?? '',
  user: getLocalStorage()?.user ?? userInit,
  isShowInfo: false,
  isShowPurchaseDetail: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: userReducer,
  extraReducers: extraReducers,
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
