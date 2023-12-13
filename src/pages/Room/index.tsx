import { memo } from 'react';
import { RoomHeader } from './RoomHeader';
import { RoomBody } from './RoomBody';
import { useRoomAxiosInterception } from '@/apis/request';
import { RoomCheckAuth } from '@/routers';

export const Room = memo(() => {
  useRoomAxiosInterception();

  return (
    <RoomCheckAuth>
      <RoomHeader></RoomHeader>
      <RoomBody></RoomBody>
    </RoomCheckAuth>
  );
});
