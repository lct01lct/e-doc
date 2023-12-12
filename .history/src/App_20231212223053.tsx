import { RouterProvider } from 'react-router-dom';
import { routers } from './routers';
import { RoomInfoStore } from './store';
import { useAxiosInterceptions } from './apis/request';

function App() {
  useAxiosInterceptions();
  return (
    <RoomInfoStore>
      <RouterProvider router={routers}></RouterProvider>
    </RoomInfoStore>
  );
}

export default App;
