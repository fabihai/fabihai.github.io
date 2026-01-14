import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import Module2 from './ces/module2.jsx'
import Module1 from './ces/module1.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<App />} />
          <Route path="/ces/module2" element={<Module2/>} />
          <Route path="/ces/module1" element={<Module1/>} />
          <Route path="/Fabiha_Islam_Resume.pdf" />
          <Route path="/SRI-Poster.pdf" />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
