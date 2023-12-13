import { createBrowserRouter, useNavigate } from 'react-router-dom';
import { Index } from '../pages/Index';
import { Room } from '../pages/Room';
import { PropsWithChildren, FC, useEffect } from 'react';
import { useRoomInfoStore } from '@/store';

export const routers = createBrowserRouter([
  { path: '/', Component: Index, index: true },
  { path: '/room', Component: Room },
]);

export const RoomCheckAuth: FC<PropsWithChildren<object>> = ({ children }) => {
  const navigate = useNavigate();
  const store = useRoomInfoStore();
  const userId = store.getLocalUserId();
  const roomId = store.getLocalRoomId();

  useEffect(() => {
    if (!userId || !roomId) {
      navigate('/');
    }
  }, [userId, roomId]);

  return children;
};
