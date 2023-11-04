import { AnyAction, combineReducers, Reducer } from "redux";
import { AppState } from "./index";
import globalSlice from 'store/global';
import userSlice from 'store/user';
import categorySlice from 'store/category';
import cartSlice from 'store/cart';
import motorcycleSlice from 'store/motorcycle';
import orderSlice from 'store/order';
import productSlice from 'store/product';

export const DESTROY_ACTION = "DESTROY_STORE";

export const combinedReducer = combineReducers({
  global: globalSlice,
  user: userSlice,
  category: categorySlice,
  cart: cartSlice,
  motorcycle: motorcycleSlice,
  order: orderSlice,
  product: productSlice,
});

const rootReducer: Reducer = (state: AppState, action: AnyAction) => {
  if (action.type === DESTROY_ACTION) {
    state = {} as AppState;
  }
  return combinedReducer(state, action);
};

export default rootReducer;
