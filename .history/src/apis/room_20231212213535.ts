import { request } from './request';

export interface CreateRoomDto {
  username: string;
  secretKey?: string;
}

export const createRoomApi = async (createRoomDto: CreateRoomDto) => {
  return request<{
    id: string;
    private: boolean;
    master: string;
    secretKey?: string;
    members: string[];
  }>({ url: '/room', method: 'post', data: createRoomDto });
};

export interface UploadPdfFileDto {
  file: File;
}

export const uploadPdfFileApi = async (uploadPdfFileDto: UploadPdfFileDto) => {
  return request({
    url: '/upload',
    method: 'post',
    data: uploadPdfFileDto,
  });
};
