import axios, { AxiosRequestConfig } from 'axios';

const instance = axios.create({
  baseURL: '/api',
});

export const request = async <Res>(opt: AxiosRequestConfig) => {
  return await instance<Res>(opt);
};
