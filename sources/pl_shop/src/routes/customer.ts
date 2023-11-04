import { lazy } from 'react';

const Main = lazy(() => import('pages/Main'));
const Cart = lazy(() => import('pages/Cart'));
const SignUp = lazy(() => import('pages/SignUp'));
const SignIn = lazy(() => import('pages/SignIn'));
const Products = lazy(() => import('pages/Products'));
const Search = lazy(() => import('pages/Search'));
const Checkout = lazy(() => import('pages/Checkout'));
const Success = lazy(() => import('pages/Success'));
const PurchaseHistory = lazy(() => import('pages/PurchaseHistory'));

export const customerRoutes = [
  {
    path: '',
    Component: Main,
  },
  {
    path: 'cart',
    Component: Cart,
  },
  {
    path: 'sign-up',
    Component: SignUp,
  },
  {
    path: 'sign-in',
    Component: SignIn,
  },
  {
    path: 'new-products',
    Component: Products,
  },
  {
    path: 'promotional-products',
    Component: Products,
  },
  {
    path: 'feature-products',
    Component: Products,
  },
  {
    path: 'products',
    Component: Products,
  },
  {
    path: 'product-group/:productGroupId',
    Component: Products,
  },
  {
    path: 'product-type/:productTypeId',
    Component: Products,
  },
  {
    path: 'search',
    Component: Search,
  },
  {
    path: 'checkout',
    Component: Checkout,
  },
  {
    path: 'success',
    Component: Success,
  },
  {
    path: 'my-order',
    Component: PurchaseHistory,
  },
];
