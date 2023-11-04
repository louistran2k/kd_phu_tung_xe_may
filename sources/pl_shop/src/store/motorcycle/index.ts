import { createSlice } from "@reduxjs/toolkit";
import { motorcycleReducer } from "store/motorcycle/reducer";

export interface IMotorcycleStore {
  motorcycles: string[];
};

const initialState: IMotorcycleStore = {
  motorcycles: [],
};

const motorcycleSlice = createSlice({
  name: "motorcycle",
  initialState,
  reducers: motorcycleReducer
});

export const { } = motorcycleSlice.actions;

export default motorcycleSlice.reducer;
