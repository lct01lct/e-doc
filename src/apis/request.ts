import { useRoomInfoStore } from '@/store';
import axios, { AxiosRequestConfig } from 'axios';

const instance = axios.create({
  baseURL: '/api',
});

export const useRoomAxiosInterception = () => {
  const { getLocalRoomId, getLocalUserId } = useRoomInfoStore();

  instance.interceptors.request.use(config => {
    const roomId = getLocalRoomId();
    const userId = getLocalUserId();

    if (roomId && userId) {
      config.headers.userId = userId;
      config.headers.roomId = roomId;
    }
    return config;
  });

  instance.interceptors.response.use(config => {
    return config;
  });
};

export const request = async <Res>(opt: AxiosRequestConfig) => {
  return await instance<Res>(opt);
};
