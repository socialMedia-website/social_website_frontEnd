import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/Home/LandingPage'
import Login from './pages/authentication/Login'
import Register from './pages/authentication/Register'


function App() {
 

  return (
    <>
   
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register />} />
        {/* باقي الصفحات */}
      </Routes>
    </>
  )
}

export default App
