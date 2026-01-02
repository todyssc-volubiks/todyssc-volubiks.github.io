import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles.css';

// Handle client-side routing for GitHub Pages SPA
const handleRedirect = () => {
  const l = window.location;
  if (l.search.startsWith('?/')) {
    const path = l.search.slice(2).replace(/~and~/g, '&');
    window.history.replaceState(null, '', l.pathname + path + l.hash);
  }
};

handleRedirect();

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
