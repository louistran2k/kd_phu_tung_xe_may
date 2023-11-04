import { getLocalStorage } from './../../utils/storage';
import { ActionReducerMapBuilder, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit"
import { userApi } from "api"
import { ISignIn, ISignInRes, ISignUpReq } from "types";
import { IUserStore } from ".";
import { setLocalStorage } from "utils/storage";

export const login = createAsyncThunk(
  "user/login",
  (async (params: ISignIn, { rejectWithValue }) => {
    try {
      const res = await userApi.login(params);
      return res;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  })
);

export const register = createAsyncThunk(
  "user/register",
  (async (params: ISignUpReq, { rejectWithValue }) => {
    try {
      const res = await userApi.register(params);
      return res;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  })
);

export const extraReducers = (builders: ActionReducerMapBuilder<IUserStore>) => {
  builders.addCase(
    login.fulfilled,
    (state: IUserStore, action: PayloadAction<ISignInRes>) => {
      setLocalStorage({
        ...getLocalStorage(),
        ...action.payload,
      });
      const { accessToken, refreshToken, user } = action.payload;
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
      state.user = user;
    }
  )
}
