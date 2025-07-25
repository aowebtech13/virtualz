import React from "react";
import "./Hero.css";
import HeroImage from "../../../assets/images/HeroImage.png"; // Adjust the path as necessary
import { FaRegStar } from "react-icons/fa"; // Importing the star icon from react-icons
import logo from "../../../assets/images/logo.png"; // Adjust the path as necessary
import { CiLocationArrow1 } from "react-icons/ci"; // Importing the location arrow icon from react-icons



const Hero = () => {
  return (
    <div>
      <header>
        <div className="wrapper">
          <nav>
            <div className="logo">
              <a href="#">
                <img src={logo} alt="Logo" />
              </a>
            </div>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Serrvices</a>
              </li>
              <li>
                <a href="#">Our Work</a>
              </li>
              <li>
                <a href="#" className="DarkBtn">
                  <CiLocationArrow1 /> Enrol Now{" "}
                </a>
              </li>
            </ul>
          </nav>
          <div className="hero-section">
        <div className="hero-left">
          <h1>
            Learn the art oof <br /> Game Dev
          </h1>
          <p>
            Join our community of game developers and start your journey today.
            Whether you're a beginner or an experienced developer, we have
            resources to help you succeed in your carrers.
          </p>
          <a href="#" className="BtnLight">
          
          <CiLocationArrow1 /> Enrol Now
          
          </a>
        </div>
        <div className="hero-right">
          <img src={HeroImage} alt="Hero Image" />
        </div>
        <div className="acheivement-cards">
          <div className="acheivement-card students-enrolled">
            <div className="content">
              <div>
                <h3>32k</h3>
              </div>

              <p>Students Enrolled</p>
            </div>
            <div className="bg"></div>
          </div>
          <div className="acheivement-card overall-rating">
            <div className="content">
              <div>
                <h3>4.7 </h3>
                <FaRegStar style={{ color: 'gold', fontSize: '33px', marginLeft: '4px' }} />

              </div>

              <p>Overall Rating</p>
            </div>
            <div className="bg"></div>
          </div>
        </div>
      </div>
        </div>
      </header>
      
    </div>
  );
};

export default Hero;
