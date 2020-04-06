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
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
          eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
          voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
          voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
          sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.
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