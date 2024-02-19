import React from 'react';
import ReactDOM from 'react-dom/client';
import { Flowbite } from 'flowbite-react';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import store from './states/index';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <Flowbite>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Flowbite>
    </BrowserRouter>
  </Provider>,
);
