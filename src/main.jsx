import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { PresentationProvider } from './context/PresentationContext'

import './styles.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PresentationProvider>
        <App />
      </PresentationProvider>
    </BrowserRouter>
  </React.StrictMode>
)
