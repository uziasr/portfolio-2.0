import React from 'react';
import Education from './Education'

const EducationList = ({ education }) => {
    return (
        <div className="row education">
  <div className="three columns header-col">
    <h1><span>Education</span></h1>
  </div>
  <div className="nine columns main-col">
      {education.map((edu, index)=> <Education key={index} edu={edu}/>)}
  </div> {/* main-col end */}
</div> 
    );
};

export default EducationList;