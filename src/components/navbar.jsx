import React from 'react'
import logo from '../assets/doItSvg.png'

function Navbar() {
  return (
    <div className='navbar'>
        <img className="logo" src={logo} alt="app-logo" />
    </div>
  )
}

export default Navbar