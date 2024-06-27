import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import Modal from 'react-modal';

import '@fontsource/plus-jakarta-sans/400.css';
import '@fontsource/plus-jakarta-sans/600.css';
import './index.css';

Modal.setAppElement('#root');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
