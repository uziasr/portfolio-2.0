import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="row">
                <div className="twelve columns">
                    <ul className="social-links">
                        <li><a href="https://github.com/uziasr"><i className="fa fa-github" /></a></li>
                        <li><a href="https://www.linkedin.com/in/uziasrivera/"><i className="fa fa-linkedin" /></a></li>
                    </ul>
                    {/* <ul className="copyright">
                        <li>© Copyright 2014 CeeVee</li>
                        <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
                    </ul> */}
                </div>
                <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
            </div>
        </footer>
    );
};

export default Footer;