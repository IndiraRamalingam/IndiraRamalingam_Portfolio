import React from 'react'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <BrowserRouter>   
    <NavBar />
    <Routes>    
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App