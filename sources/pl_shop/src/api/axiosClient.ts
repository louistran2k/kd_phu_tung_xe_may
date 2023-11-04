import axios from 'axios';

import { getLocalStorage } from 'utils/storage';
import { setupInterceptors } from './interceptors';

const axiosClient = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
  },
});

const axiosClientWithToken = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

setupInterceptors(axiosClientWithToken);

// axiosClientWithToken.interceptors.request.use((request) => {
//   const accessToken = JSON.parse(getAccessToken() as string).accessToken;
//   const authorizationString = `Bearer ${accessToken}`;
//   request.headers && (request.headers['Authorization'] = authorizationString);
//   return request;
// });

export { axiosClient, axiosClientWithToken };
