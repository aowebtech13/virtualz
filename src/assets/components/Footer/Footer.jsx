import React from 'react'
import './Footer.css' // Adjust the path as necessary
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa' // Importing social media icons

const Footer = () => {
  return (
    <div className='wrapper'>
        <footer className='links-container'>
            <div className='links'>
                <h3>Quick Links</h3>
                <ul>
                    <a href="#">About Us</a>
                    <a href="#">Contact Us</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms & Conditions</a>
                </ul>
            </div>
            <div className='links'>
                <h3>Course</h3>
                <ul>
                    <a href="#">Login</a>
                    <a href="#">Download</a>
                    <a href="#">All Courses</a>
                    
                </ul>
            </div>

            <div className='links'>
                <h3>Contact Us</h3>
                <ul>
                    <a href="#">Aowebtech13@gmail.com</a>
                    
                </ul>
                <div className='social-icons'>
                <a href="#"><FaFacebook /></a>
                <a href="#"><FaInstagram /></a>

                <a href="#"><FaTwitter /></a>

                    </div>
                    <form action="">
                        <input type="email" placeholder='Enter your email' />
                        <button className='submit-btn' type='submit'>Subscribe</button>
                    </form>

            </div>

            <p className='copyright'>This website is designed by Aowebtech</p>

        </footer>
      
    </div>
  )
}

export default Footer
