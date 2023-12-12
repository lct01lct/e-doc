import { useRoomInfoStore } from '@/store';
import axios, { AxiosRequestConfig } from 'axios';

const instance = axios.create({
  baseURL: '/api',
});

instance.interceptors.request.use(config => {
  return config;
});

export const request = async <Res>(opt: AxiosRequestConfig) => {
  return await instance<Res>(opt);
};
