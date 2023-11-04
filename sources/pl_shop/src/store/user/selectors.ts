import { AppState } from "store";
import { createSelector } from "@reduxjs/toolkit";
import { User } from "types";

const getUserDetails = (state: AppState) => state.user.user;

export const sGetUserDetails = createSelector(
  getUserDetails,
  (state): User => state
);