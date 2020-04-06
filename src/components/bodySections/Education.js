import React from 'react';

const Education = ({ edu }) => {
    return (
        <div className="row item">
        <div className="twelve columns">
          <h3>{ edu.school }</h3>
          <p className="info">{ edu.major } <span>•</span> <em className="date">{ edu.date }</em></p>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
            ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
            Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Nullam dictum felis eu pede mollis pretium.
          </p> */}
        </div>
      </div>
    );
};

export default Education;