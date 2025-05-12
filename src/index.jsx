import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { PetProvider } from './context/PetContext';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PetProvider>
      <App />
    </PetProvider>
  </React.StrictMode>
);