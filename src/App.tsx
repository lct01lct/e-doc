import { RouterProvider } from 'react-router-dom';
import { routers } from './routers';
import { RoomInfoStore } from './store';

function App() {
  return (
    <RoomInfoStore>
      <RouterProvider router={routers}></RouterProvider>
    </RoomInfoStore>
  );
}

export default App;
