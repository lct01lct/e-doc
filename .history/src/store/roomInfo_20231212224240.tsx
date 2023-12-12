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

  return (
    <RoomInfoContext.Provider value={{ userId, setUserId, roomId, setRoomId }}>
      {children}
    </RoomInfoContext.Provider>
  );
};
