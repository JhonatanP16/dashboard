import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ColorModeContextProvider from './context/ColorModeContext.jsx'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ColorModeContextProvider>
      <App />
    </ColorModeContextProvider>
  </React.StrictMode>,
)
