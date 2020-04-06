import React from 'react';

const Work = ({ job }) => {
    return (
        <div className="row item">
        <div className="twelve columns">
          <h3>{ job.company }</h3>
          <p className="info">{ job.title } <span>•</span> <em className="date">{ job.title }</em></p>
          <p>
            { job.description }
          </p>
        </div>
      </div>
    );
};

export default Work;