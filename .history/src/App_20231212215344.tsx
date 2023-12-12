import { RouterProvider } from 'react-router-dom';
import { routers } from './routers';
import { RoomInfoContext, RoomInfoDefaultVal } from './store';

function App() {
  return (
    <RoomInfoContext.Provider value={RoomInfoDefaultVal}>
      <RouterProvider router={routers}></RouterProvider>
    </RoomInfoContext.Provider>
  );
}

export default App;
