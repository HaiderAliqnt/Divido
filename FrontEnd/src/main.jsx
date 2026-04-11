import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login_page from './components/login-page/login.jsx'
import './components/login-page/login.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login_page/>
  </StrictMode>,
)
