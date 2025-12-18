import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Cards from './components/cards'
import AboutUs from './Routes/AboutUs'
import Footer from './components/Footer'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='app'>
        <Sidebar />
        <main className='main-content'>
          <Routes>
            <Route path='/' element={<Cards />} />
            <Route path='/AboutUs' element={<AboutUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App