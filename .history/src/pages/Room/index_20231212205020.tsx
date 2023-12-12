import { memo } from 'react';
import { RoomHeader } from './RoomHeader';
import { RoomBody } from './RoomBody';

export const Room = memo(() => {
  return (
    <>
      <RoomHeader></RoomHeader>
      <RoomBody></RoomBody>
    </>
  );
});
