
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; 
import './index.css';
import App from './App';
import { SignInProvider } from './contexts/SignIn';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SignInProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</SignInProvider>
);
