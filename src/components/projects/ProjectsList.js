import React from 'react';


const Projects = ({ projects }) => {

    return (
    <div className="twelve columns collapsed">
      <h1>Check Out Some of My Works.</h1>
      {/* portfolio-wrapper */}
      <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
        {projects.map((project,index)=>{
return <div key={index} className="columns portfolio-item">
          <div style={{borderColor: "white", borderWidth: ".5px", borderStyle:"solid"}} className="item-wrap">
            <a href={`#modal-${index}`}>
              <img alt="" src={ project.img }/>
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{project.name}</h5>
                  <p>{ project.primaryTag }</p>
                </div>
              </div>
              <div className="link-icon"><i className="icon-plus" /></div>
            </a>
          </div>
        </div> })}
      </div> {/* portfolio-wrapper end */}
    </div>
    );
};

export default Projects;