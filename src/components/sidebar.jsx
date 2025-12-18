import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className='sidebar'>
       <Link to="/AboutUs">
         <h2>About Us</h2>
       </Link>
       <Link to="/">
         <h2>Home</h2>
       </Link>
    </div>
  )
}

export default Sidebar