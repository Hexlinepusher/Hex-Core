/* @/web/src/main.tsx - React 应用入口
 * - ../index.html
 * - ./App.tsx
 * - ./index.css */

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element with id "root" not found in HTML');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
