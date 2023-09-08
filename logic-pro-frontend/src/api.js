// src/api.js

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchOrdersApi = async () => {
  const response = await axiosInstance.get('/orders');
  return response.data;
};

// Implement API functions for orders, routes, inventory, etc.
