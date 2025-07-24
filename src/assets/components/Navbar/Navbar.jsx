import React from 'react'
import './Navbar.css'
import logo from '../../../assets/images/logo.png' // Adjust the path as necessary

const Navbar = () => {
  return (
    <div className='wrapper'>
        <nav>
            <div className='logo'>
                <a href="#">
                    <img src={logo} alt="Logo" />
                </a>
                </div>
                <ul className=''>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Serrvices</a></li>
                <li><a href="#">Our Work</a></li>
                <li><a href="#" className='DarkBtn' >Enrol Now</a></li>
                
                </ul>
                
            
        </nav>
      
    </div>
  )
}

export default Navbar
