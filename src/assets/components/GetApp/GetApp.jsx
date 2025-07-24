import React from 'react'
import './GetApp.css' // Adjust the path as necessary
import { BiLogoPlayStore } from 'react-icons/bi' // Importing the Play Store icon from react-icons
import { FaAppStoreIos } from 'react-icons/fa' // Importing the App Store icon from react-icons

const GetApp = () => {
  return (
    <div className='wrapper'>
        <section className='app-section'>
            <h2>Get Our App</h2>
            <p>Download our app to access exclusive content, track your progress</p>
            <div className='app-buttons'>
                <div className='app-button'>
                <FaAppStoreIos />

                    <div className='text'>
                        <span>App Store</span>
                    </div>
                </div>
                <div className='app-button'>
                    <BiLogoPlayStore />
                    <div className='text'>
                        
                        <span>Playstore Store</span>
                    </div>
            </div>
            </div>

        </section>
      
    </div>
  )
}

export default GetApp
