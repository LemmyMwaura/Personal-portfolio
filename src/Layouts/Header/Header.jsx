import React from 'react'
import { Routes, Route, } from 'react-router-dom'
// import Loader from '../../Components/Loader'
import Home from '../../Pages/Home'

function Header() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </div>
  )
}

export default Header
