import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import configureStore from './store';
import PetProvider from './Context';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PetProvider>
        <App />
      </PetProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
