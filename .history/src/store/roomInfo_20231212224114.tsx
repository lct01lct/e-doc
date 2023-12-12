import { FC, PropsWithChildren, createContext, useContext, useState } from 'react';
import {} from 'lodash';

export const RoomInfoDefaultVal = {
  userId: '',
  roomId: '',
  setUserId: '',
  setRoomId: '',
};

export const RoomInfoContext = createContext(RoomInfoDefaultVal);

export const useRoomInfoStore = () => {
  const roomInfoContext = useContext(RoomInfoContext);

  const setLocalUserId = (userId: string | null) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const _userId = userId ?? '';
    roomInfoContext.userId = _userId;
    localStorage.setItem('userId', _userId);
  };

  const setLocalRoomId = (roomId: string | null) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const _roomId = roomId ?? '';
    roomInfoContext.roomId = _roomId;
    localStorage.setItem('roomId', _roomId);
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
  const [userId, setUserId] = useState('');
  const [roomId, setRoomId] = useState('');

  return <RoomInfoContext.Provider value={RoomInfoDefaultVal}>{children}</RoomInfoContext.Provider>;
};
