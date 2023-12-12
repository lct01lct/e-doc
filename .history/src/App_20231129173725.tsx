import { RouterProvider } from 'react-router-dom';
import { routers } from './routers';

function App() {
  return <RouterProvider router={routers}></RouterProvider>;
}

export default App;
