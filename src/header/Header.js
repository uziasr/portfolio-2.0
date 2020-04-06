import React from 'react'
export default class NewComponent extends React.Component{
    render() {
      return (
  
        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
              <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
              <li><a className="smoothscroll" href="#about">About</a></li>
              <li><a className="smoothscroll" href="#resume">Resume</a></li>
              <li><a className="smoothscroll" href="#portfolio">Works</a></li>
              {/* <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li> */}
              <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul> {/* end #nav */}
          </nav> {/* end #nav-wrap */}
          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">I'm Uzias Rivera.</h1>
              <h3>I'm a Los Angeles based <span>Front End Developer</span>, <span>Back End Developer</span> and <span>Full Stack Developer</span> creating scalable web applications discovering innovative solutions is where my passion lies. Let's <a className="smoothscroll" href="#about">start scrolling </a>
                and learn more <a className="smoothscroll" href="#about">about me</a>.</h3>
              <hr />
              <ul className="social">
                {/* <li><a href="#"><i className="fa fa-facebook" /></a></li>
                <li><a href="#"><i className="fa fa-twitter" /></a></li>
                <li><a href="#"><i className="fa fa-google-plus" /></a></li> */}
                <li><a href="https://github.com/uziasr"><i className="fa fa-github" /></a></li>
                <li><a href="https://www.linkedin.com/in/uziasrivera/"><i className="fa fa-linkedin" /></a></li>
                {/* <li><a href="#"><i className="fa fa-dribbble" /></a></li>
                <li><a href="#"><i className="fa fa-skype" /></a></li> */}
              </ul>
            </div>
          </div>
          <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
          </p>
        </header>
      );
    }
  };