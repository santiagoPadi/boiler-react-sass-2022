import axios from 'axios';
import { isLocal } from '../constants';

const axiosApiInstance = axios.create();
export default function createApiInstance(accessToken: string, baseUrl: string) {
  axiosApiInstance.interceptors.request.use(
    async (config) => {
      config.headers = {
        'Content-Type': 'application/json'
      };
      const context = isLocal ? '' : '/api/vivo-core-api/';
      config.baseURL = `${baseUrl}${context}`;
      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );
}

export async function apiGet<T, U>(url: string, options?: T): Promise<U> {
  const { data } = await axiosApiInstance.get<U>(url, options);
  return data;
}

export async function apiPut<T, U = any, V = any>(url: string, body?: U, options?: T): Promise<V> {
  const { data }: any = await axiosApiInstance.put(url, body, options);
  return data;
}

export async function apiPost<T, U = any, V = any>(url: string, body?: U, options?: T): Promise<V> {
  return axiosApiInstance.post(url, body, options)
}
