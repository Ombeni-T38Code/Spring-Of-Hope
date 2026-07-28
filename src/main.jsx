import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import logoUrl from './assets/logos.png'

// Set browser tab icon dynamically from src/assets/logos.png
const favicon = document.getElementById('favicon') || document.querySelector("link[rel*='icon']")
if (favicon) {
  favicon.href = logoUrl
  favicon.type = 'image/png'
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)