'use client';
import axios from 'axios';

const axiosPublicInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL
});

axiosPublicInstance.interceptors.request.use((config) => {
  config.headers['accept-version'] = process.env.REACT_APP_API_DEFAULT_VERSION;
  config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
  return config;
});

export default axiosPublicInstance;
