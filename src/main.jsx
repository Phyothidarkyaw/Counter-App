import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import CounterApp from './CounterApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterApp />
  </StrictMode>,
)
