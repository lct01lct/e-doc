import { request } from './request';

export interface CreateRoomDto {
  username: string;
  secretKey?: string;
}

export const createRoomApi = async (createRoomDto: CreateRoomDto) => {
  return await request<{
    id: string;
    private: boolean;
    master: string;
    secretKey?: string;
    members: string[];
    ownId: string;
  }>({ url: '/room', method: 'post', data: createRoomDto });
};

export interface UploadPdfFileDto {
  file: File;
}

export const uploadPdfFileApi = async (file: File) => {
  const formData = new FormData();
  formData.append('file', file);

  return request({
    url: '/room/upload',
    method: 'post',
    data: formData,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
