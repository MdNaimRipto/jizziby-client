import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "./CSS/style.css"
import reportWebVitals from './reportWebVitals';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import FetchContext from './ContextProvider/FetchContext';
import { CartProvider } from './ContextProvider/CartProvider';
import AuthProvider from './ContextProvider/AuthProvider';

AOS.init();

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <FetchContext>
        <CartProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </CartProvider>
      </FetchContext>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
