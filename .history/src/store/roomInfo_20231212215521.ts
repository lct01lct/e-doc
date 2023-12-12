import { FC, PropsWithChildren, createContext, useContext } from 'react';

export const RoomInfoDefaultVal = {
  userId: '',
  roomId: '',
};

export const RoomInfoContext = createContext(RoomInfoDefaultVal);

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

export const RoomInfoStore: FC<PropsWithChildren<{}>> = ({ children }) => {
  return <RoomInfoContext.Provider value={RoomInfoDefaultVal}></RoomInfoContext.Provider>;
};
