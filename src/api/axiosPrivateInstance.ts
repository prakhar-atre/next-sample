'use client';
import axios from 'axios';

import { reduxStore } from '../../lib/redux';
import { updateAuthState } from '../../lib/redux/slices/authSlice';
import { StorageService } from '../services';
import { UNAUTHORIZED_USER } from '../constants/statusCodes';

const dispatch = reduxStore.dispatch;

const axiosPrivateInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_PRIVATE_BASE_URL
});

axiosPrivateInstance.defaults.headers.common['Content-Type'] = 'application/json';

axiosPrivateInstance.interceptors.request.use((config) => {
  config.headers['Authorization'] = `Bearer ${StorageService.get('access_token')}`;
  return config;
});

axiosPrivateInstance.interceptors.response.use(
  (response) => {
    if (response.status === UNAUTHORIZED_USER) {
      dispatch(updateAuthState(false));
    }
    return response;
  },
  (error) => {
    if (error.response?.status === UNAUTHORIZED_USER) {
      dispatch(updateAuthState(false));
    }
    return Promise.reject(error);
  }
);

export default axiosPrivateInstance;
