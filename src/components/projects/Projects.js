import React from 'react';


const Projects = ({ projects }) => {

    return (
    <div className="twelve columns collapsed">
      <h1>Check Out Some of My Works.</h1>
      {/* portfolio-wrapper */}
      <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
        <div className="columns portfolio-item">
          <div className="item-wrap">
            <a href={`#modal-0${1}`} title>
              <img alt="" src={ projects[0].img }/>
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{projects[0].name}</h5>
                  <p>{ projects[0].primaryTag }</p>
                </div>
              </div>
              <div className="link-icon"><i className="icon-plus" /></div>
            </a>
          </div>
        </div> {/* item end */}
        <div className="columns portfolio-item">
          <div className="item-wrap">
            <a href="#modal-02" title>
              <img alt="" src="images/portfolio/console.jpg" />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>Console</h5>
                  <p>Web Development</p>
                </div>
              </div>
              <div className="link-icon"><i className="icon-plus" /></div>
            </a>
          </div>
        </div> {/* item end */}
        <div className="columns portfolio-item">
          <div className="item-wrap">
            <a href="#modal-03" title>
              <img alt="" src="images/portfolio/judah.jpg" />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>Judah</h5>
                  <p>Webdesign</p>
                </div>
              </div>
              <div className="link-icon"><i className="icon-plus" /></div>
            </a>
          </div>
        </div> {/* item end */}
        <div className="columns portfolio-item">
          <div className="item-wrap">
            <a href="#modal-04" title>
              <img alt="" src="images/portfolio/into-the-light.jpg" />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>Into The Light</h5>
                  <p>Photography</p>
                </div>
              </div>
              <div className="link-icon"><i className="icon-plus" /></div>
            </a>
          </div>
        </div> {/* item end */}
        <div className="columns portfolio-item">
          <div className="item-wrap">
            <a href="#modal-05" title>
              <img alt="" src="images/portfolio/farmerboy.jpg" />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>Farmer Boy</h5>
                  <p>Branding</p>
                </div>
              </div>
              <div className="link-icon"><i className="icon-plus" /></div>
            </a>
          </div>
        </div> {/* item end */}
        <div className="columns portfolio-item">
          <div className="item-wrap">
            <a href="#modal-06" title>
              <img alt="" src="images/portfolio/girl.jpg" />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>Girl</h5>
                  <p>Photography</p>
                </div>
              </div>
              <div className="link-icon"><i className="icon-plus" /></div>
            </a>
          </div>
        </div> {/* item end */}
        <div className="columns portfolio-item">
          <div className="item-wrap">
            <a href="#modal-07" title>
              <img alt="" src="images/portfolio/origami.jpg" />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>Origami</h5>
                  <p>Illustrration</p>
                </div>
              </div>
              <div className="link-icon"><i className="icon-plus" /></div>
            </a>
          </div>
        </div> {/* item end */}
        <div className="columns portfolio-item">
          <div className="item-wrap">
            <a href="#modal-08" title>
              <img alt="" src="images/portfolio/retrocam.jpg" />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>Retrocam</h5>
                  <p>Web Development</p>
                </div>
              </div>
              <div className="link-icon"><i className="icon-plus" /></div>
            </a>
          </div>
        </div>  {/* item end */}
      </div> {/* portfolio-wrapper end */}
    </div>
    );
};

export default Projects;