import { createContext, useContext } from 'react';

export const RoomInfoContext = createContext({
  userId: '',
  roomId: '',
});

export const setLocalUserId = (userId: string | null) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const roomInfoContext = useContext(RoomInfoContext);
  roomInfoContext.userId = userId ?? '';
};

export const setLocalRoomId = (roomId: string | null) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const roomInfoContext = useContext(RoomInfoContext);
  roomInfoContext.roomId = roomId ?? '';
};
