import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import img from './assets/8976.jpg'

 // Make sure to replace with the correct path to your image

document.body.style.backgroundImage = `url(${img})`;
document.body.style.backgroundSize = 'cover';
document.body.style.margin = 0;
document.body.style.padding = 0;


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
