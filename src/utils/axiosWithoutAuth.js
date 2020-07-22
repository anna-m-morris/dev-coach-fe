import axios from 'axios';

export default function axiosWithoutAuth() {
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
  });
  return axiosInstance;
}
