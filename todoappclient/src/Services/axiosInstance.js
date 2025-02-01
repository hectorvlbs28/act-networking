import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const axiosInstance = axios.create({
  baseURL: BACKEND_URL,
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' },
});

export default axiosInstance;
