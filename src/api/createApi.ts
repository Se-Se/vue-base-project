import axios, {AxiosInstance} from 'axios';
import Cookies from 'js-cookie';
import axiosError from './axiosError';
import apiMerge from './apiMerge';

const API_TIMEOUT = 10000;

function axiosCreate(url: string, token: string): AxiosInstance {
  const axiosInstance = axios.create({
    baseURL: url,
    timeout: API_TIMEOUT,
    headers: {
      accessToken: Cookies.get(token) || '',
      version: '1.0'
    }
  });
  axiosInstance.interceptors.response.use(undefined, axiosError);
  return axiosInstance;
}

export function createAdminApi(url: string, token: string) {
  const axios = axiosCreate(url, token);
  return {
    axios,
    ...apiMerge(axios)
  };
}
