import { useRoomInfoStore } from '@/store';
import axios, { AxiosRequestConfig } from 'axios';

const instance = axios.create({
  baseURL: '/api',
});

export const useAxiosInterceptions = () => {
  const { setLocalRoomId, setLocalUserId } = useRoomInfoStore();
  instance.interceptors.request.use(config => {
    return config;
  });
};

export const request = async <Res>(opt: AxiosRequestConfig) => {
  return await instance<Res>(opt);
};
