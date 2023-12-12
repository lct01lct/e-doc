import { useRoomInfoStore } from '@/store';
import axios, { AxiosRequestConfig } from 'axios';

const instance = axios.create({
  baseURL: '/api',
});

export const useAxiosInterceptions = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { setLocalRoomId, setLocalUserId, getLocalRoomId, getLocalUserId } = useRoomInfoStore();

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
