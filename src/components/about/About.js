import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom'

const About = () => {
  return (
    <section id="about">
    <div className="row">
      <div className="three columns">
        <img className="profile-pic" src="images/me_1.jpg" alt="" />
      </div>
      <div className="nine columns main-col">
        <h2>About Me</h2>
        <p>
          With a Bachelors in Hospitality Management and a minor in Computer Information Systems, I learned that I am creator at heart. Being exposed to the technological world of programming for about 5 years starting with writing SQL queries on an app, to taking college level Java, to now enrolling and completing an online coding school. I have expanded my knowledge to HTML, CSS, LESS, JavaScript, React, Angular, Node.js, Express, Knex, Python, and more. <br></br> I am passionate about my work and I continue to learn and improve, everyday. 
        </p>
        <div className="row">
          <div className="columns contact-details">
            <h2>Contact Details</h2>
            <p className="address">
              <span>Uzias Rivera</span><br />
              <span>Los Angeles, CA
              </span><br />
              {/* <span>(123)456-7890</span><br /> */}
              <span>uziasrivera@gmail.com</span>
            </p>
          </div>
          <div className="columns download">
            <p>
              <Router><Link target="_blank" className="button" to="/resume.pdf" download><i className="fa fa-download" />Download Resume</Link></Router>
            </p>
          </div>
        </div> {/* end row */}
      </div> {/* end .main-col */}
    </div>
  </section>
  );
};

export default About;