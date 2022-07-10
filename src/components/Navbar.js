import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../assets/images/Logo.png'


const Navbar = () => {
  return (
    
      <Link to='/'>
        <img src={Logo} alt='logo' style={{width: '64px', height: '64px', margin: '0 20px'}}/>
      </Link>
   
  )
}

export default Navbar