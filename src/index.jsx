import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App as AntApp } from 'antd';
import App from './App';
import { initAnalytics } from 'lib/analytics';
import './index.css';

// Khởi tạo GA4/GTM/GSC (no-op nếu env empty)
initAnalytics();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AntApp>
        <App />
      </AntApp>
    </BrowserRouter>
  </React.StrictMode>
);
