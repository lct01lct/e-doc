import { createBrowserRouter } from 'react-router-dom';
import { Index } from '../pages/Index';
import { Room } from '../pages/Room';

export const routers = createBrowserRouter([
  { path: '/', Component: Index, index: true },
  { path: '/room', Component: Room },
]);
