import { createContext, useContext } from 'react';

export const RoomInfoContext = createContext({
  userId: '',
  roomId: '',
});

export const setLocalUserId = (userId: string) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const roomInfoContext = useContext(RoomInfoContext);
  roomInfoContext.userId = userId;
};
