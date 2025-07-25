import React from "react";
import "./Courses.css";
import Course1 from "../../../assets/images/course1.jpg"; // Adjust the path as necessary
import Course2 from "../../../assets/images/course2.jpg"; // Adjust the path as necessary


const Courses = () => {
  return (
    <section className="courses-section">
      <div className="wrapper">
        <h2 className="light">Our Courses</h2>

        <div className="course-cards">
          <div className="course-card">
            <img src={Course1} alt="Course Thumbnail" />
            <div className="info">
              <h3>Game Development Essentials</h3>
              <div className="duration">8 Hrs</div>
            </div>
          </div>

          <div className="course-card">
            <img src={Course2} alt="Course Thumbnail" />
            <div className="info">
              <h3>Unity Game Engine Fundamentals</h3>
              <div className="duration">15 Hrs</div>
            </div>
          </div>
        </div>
        <a href="" className="BtnLight">All courses </a>
      </div>
    </section>
  );
};

export default Courses;
