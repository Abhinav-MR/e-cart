// eslint-disable-next-line no-unused-vars
import React from 'react'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import WhishList from './Pages/WhishList'
import Cart from './Pages/Cart'

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/whishlist' element={<WhishList/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
