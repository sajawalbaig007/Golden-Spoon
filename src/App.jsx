import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Menu from './pages/Menu'
import About from './pages/About'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
