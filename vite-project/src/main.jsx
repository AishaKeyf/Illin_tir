import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Link } from 'react-router'
import App from './App.jsx'
import { SupabaseProvider } from './contexts/SupabaseContext'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <SupabaseProvider>
      <App />
    </SupabaseProvider>
  </BrowserRouter>
  // <StrictMode>
  // </StrictMode>,
)
