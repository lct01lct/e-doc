import { FC, PropsWithChildren, createContext, useContext } from 'react';

export const RoomInfoDefaultVal = {
  userId: '',
  roomId: '',
};

export const RoomInfoContext = createContext(RoomInfoDefaultVal);

export const useRoomInfoStore = () => {
  const setLocalUserId = (userId: string | null) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const roomInfoContext = useContext(RoomInfoContext);
    const _userId = userId ?? '';
    roomInfoContext.userId = _userId;
    localStorage.setItem('userId', _userId);
  };

  const setLocalRoomId = (roomId: string | null) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const roomInfoContext = useContext(RoomInfoContext);
    const _roomId = roomId ?? '';
    roomInfoContext.roomId = _roomId;
    localStorage.setItem('roomId', _roomId);
  };

  return { setLocalUserId, setLocalRoomId };
};

export const RoomInfoStore: FC<PropsWithChildren<object>> = ({ children }) => {
  return <RoomInfoContext.Provider value={RoomInfoDefaultVal}>{children}</RoomInfoContext.Provider>;
};
