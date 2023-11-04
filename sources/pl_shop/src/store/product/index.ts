import { createSlice } from "@reduxjs/toolkit";
import { productReducer } from "store/product/reducer";
import { Product } from "types";

export const productInit: Product = {
  productId: '',
  name: '',
  description: '',
  images: [],
  isNew: false,
  unit: '',
  quantityInStock: 0,
  manufacturerName: '',
  warrantyPeriod: 0,
  price: 0,
  discountPercent: 0,
  discountPrice: 0,
  productTypeId: -1,
  productGroupId: -1,
};

export interface IProductStore {
  newProducts: Product[];
  promotionalProducts: Product[];
  featureProducts: Product[];
  anotherProducts: Product[];
  product: Product;
  products: Product[];
  search: Product[];
};

const initialState: IProductStore = {
  newProducts: [],
  promotionalProducts: [],
  featureProducts: [],
  anotherProducts: [],
  product: productInit,
  products: [],
  search: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: productReducer
});

export const { } = productSlice.actions;

export default productSlice.reducer;
