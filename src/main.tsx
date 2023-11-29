import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './assets/css/index.css';
import { Provider } from 'react-pine';

const root = document.querySelector('#root');

ReactDOM.createRoot(root!).render(
  <Provider>
    <App></App>
  </Provider>
);
