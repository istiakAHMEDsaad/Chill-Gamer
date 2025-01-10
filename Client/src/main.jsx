import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/router.jsx';
import { HelmetProvider } from 'react-helmet-async';
import ContextProvider from './Provider/ContextProvider.jsx';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
        <ToastContainer></ToastContainer>
      </HelmetProvider>
    </ContextProvider>
  </StrictMode>
);
