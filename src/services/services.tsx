import { AxiosRequestConfig } from 'axios';
import { apiGet } from './api';

export const getOf = async (id: string | number): Promise<{ data: any[] }> => {
  return apiGet<AxiosRequestConfig, { data: any[] }>(`/`);
};
