import React from 'react';
import {createRoot} from 'react-dom/client';
import './styles/index.css';
import App from './App';
import {UserProvider} from './context/userContext';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <UserProvider>
    <App />
  </UserProvider>
);

