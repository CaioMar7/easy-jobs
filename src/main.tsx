import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Home } from './pages/Home/index.tsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  </React.StrictMode>,
)
