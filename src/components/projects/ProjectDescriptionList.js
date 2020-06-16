import React from 'react';

const ProjectDescription = ({ projects }) => {
    return (
        <div>
  {projects.map((project, index)=>{
  
  return <div key={index} id={`modal-${index}`} className="popup-modal mfp-hide">
    <img className="scale-with-grid" src={ project.descriptionImg } alt="" />
    <div className="description-box">
      <h4>{ project.name }</h4>
      <p>{ project.description }</p>
      <span className="categories"><i className="fa fa-tag" />{project.tags}</span>
    </div>
    <div className="link-box">
      <a href={ project.src }>Details </a>
      <a className="repo-link" href={ project.gh }> Repo </a>
      <a className="popup-modal-dismiss"> Close</a>
    </div>
  </div>

  })}
</div>
    
    );
};

export default ProjectDescription;