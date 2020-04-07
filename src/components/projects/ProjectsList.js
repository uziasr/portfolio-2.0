import React from 'react';


const Projects = ({ projects }) => {

    return (
    <div className="twelve columns collapsed">
      <h1>Check Out Some of My Works.</h1>
      {/* portfolio-wrapper */}
      <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
        <div className="columns portfolio-item">
          <div className="item-wrap">
            <a href={`#modal-${1}`} title>
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
      </div> {/* portfolio-wrapper end */}
    </div>
    );
};

export default Projects;