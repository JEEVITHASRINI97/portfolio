import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import Provider from './Context/Provider';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

        <App />
        <ToastContainer />

  </React.StrictMode>
);
