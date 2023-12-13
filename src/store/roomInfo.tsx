import { FC, PropsWithChildren, createContext, useContext, useState } from 'react';
import { noop } from 'lodash';

export const RoomInfoContext = createContext({
  userId: '',
  roomId: '',
  setUserId: noop,
  setRoomId: noop,
});

export const useRoomInfoStore = () => {
  const roomInfoContext = useContext(RoomInfoContext);

  const setLocalUserId = (userId: string | null) => {
    if (userId) {
      roomInfoContext.setUserId(userId);
      localStorage.setItem('userId', userId);
    } else {
      localStorage.removeItem('userId');
    }
  };

  const setLocalRoomId = (roomId: string | null) => {
    if (roomId) {
      roomInfoContext.setRoomId(roomId);
      localStorage.setItem('roomId', roomId);
    } else {
      localStorage.removeItem('roomId');
    }
  };

  const getLocalUserId = () => {
    return roomInfoContext.userId;
  };

  const getLocalRoomId = () => {
    return roomInfoContext.roomId;
  };

  return { setLocalUserId, setLocalRoomId, getLocalUserId, getLocalRoomId };
};

export const RoomInfoStore: FC<PropsWithChildren<object>> = ({ children }) => {
  const [userId, setUserId] = useState(localStorage.getItem('userId') ?? '');
  const [roomId, setRoomId] = useState(localStorage.getItem('roomId') ?? '');

  return (
    <RoomInfoContext.Provider value={{ userId, setUserId, roomId, setRoomId }}>
      {children}
    </RoomInfoContext.Provider>
  );
};
