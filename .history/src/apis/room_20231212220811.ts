import { setLocalRoomId, setLocalUserId } from '@/store';
import { request } from './request';

export interface CreateRoomDto {
  username: string;
  secretKey?: string;
}

export const createRoomApi = async (createRoomDto: CreateRoomDto) => {
  const res = await request<{
    id: string;
    private: boolean;
    master: string;
    secretKey?: string;
    members: string[];
    ownId: string;
  }>({ url: '/room', method: 'post', data: createRoomDto });

  // setLocalUserId(res.data.ownId);
  // setLocalRoomId(res.data.id);

  return res;
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
