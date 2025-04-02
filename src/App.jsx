import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import Footer from './components/Footer '
import ServicePage from './pages/ServicePage'
import Gallery from './pages/GalleryMain'
import Contact from './pages/Contact'
const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicepage" element={<ServicePage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App