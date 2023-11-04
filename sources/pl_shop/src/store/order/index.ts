import { createSlice } from "@reduxjs/toolkit";
import { orderReducer } from "store/order/reducer";
import { CustomerOrderDTO } from "types";

export interface IOrderStore {
  orderId: number;
  myOrders: CustomerOrderDTO[];
};

const initialState: IOrderStore = {
  orderId: -1,
  myOrders: [],
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: orderReducer
});

export const { } = orderSlice.actions;

export default orderSlice.reducer;
