import axios from 'axios';

export default function axiosWithAuth() {
  const token =
    localStorage.getItem('token') || localStorage.getItem('tempuser');
  const axiosInstance = axios.create({
    baseURL: process.env.LOCAL_BACKEND_SERVER,
    headers: {
      'Content-Type': 'application/json',
      authorization: token,
    },
  });
  return axiosInstance;
}
