import { createContext, useContext } from 'react';

export const RoomInfoContext = createContext({
  userId: '',
  roomId: '',
});

export const setLocalUserId = () => {
  const roomInfoContext = useContext(RoomInfoContext);
};
