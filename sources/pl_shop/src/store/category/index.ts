import { createSlice } from "@reduxjs/toolkit";
import { categoryReducer } from "store/category/reducer";
import { ProductGroup } from "types";

export interface ICategoryStore {
  categories: ProductGroup[];
};

const initialState: ICategoryStore = {
  categories: [],
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: categoryReducer
});

export const { } = categorySlice.actions;

export default categorySlice.reducer;
