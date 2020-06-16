import React from 'react';
import Work from './Work'

const WorkList = ({ jobs }) => {
    return (
<div className="row work">
  <div className="three columns header-col">
    <h1><span>Work</span></h1>
  </div>
  <div className="nine columns main-col">
    {jobs.map((job, index)=> <Work key={index} job={job}/>)}
  </div> {/* main-col end */}
</div>  
    );
};

export default WorkList;