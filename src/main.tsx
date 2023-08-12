import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { MsalProvider } from '@azure/msal-react';
import { msalConfig } from './auth/authConfig.ts';
import { PublicClientApplication } from '@azure/msal-browser';

const pca = new PublicClientApplication(msalConfig);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MsalProvider instance={pca}>
      <App />
    </MsalProvider>
  </React.StrictMode>
);
