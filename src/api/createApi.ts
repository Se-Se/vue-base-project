import axios, {AxiosInstance} from 'axios';
import Cookies from 'js-cookie';
import axiosError from './axiosError';


const API_TIMEOUT = 10000;

export default function(url: string, token: string): AxiosInstance {
  const axiosInstance = axios.create({
    baseURL: url,
    timeout: API_TIMEOUT,
    headers: {
      accessToken: Cookies.get('token') || '',
      version: '1.0'
    }
  });
  axiosInstance.interceptors.response.use(undefined,axiosError)
  return axiosInstance;
}
