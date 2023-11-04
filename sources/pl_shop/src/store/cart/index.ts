import { createSlice } from "@reduxjs/toolkit";
import { cartReducer } from "store/cart/reducer";
import { CartItemType } from "types";

export interface ICartStore {
  cart: CartItemType[];
};

const initialState: ICartStore = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: cartReducer
});

export const { } = cartSlice.actions;

export default cartSlice.reducer;
