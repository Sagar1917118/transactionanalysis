import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { ReportContextProvider } from './AppContext/reportcontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
      <ReportContextProvider>
          <App />
      </ReportContextProvider>
      </BrowserRouter>
  </React.StrictMode>
);


