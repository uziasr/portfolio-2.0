import React from 'react';

const ProjectDescription = ({ projects }) => {
    return (
        <div>
  <div id="modal-1" className="popup-modal mfp-hide">
    <img className="scale-with-grid" src={ projects[0].img } alt="" />
    <div className="description-box">
      <h4>{ projects[0].name }</h4>
      <p>{ projects[0].description }</p>
      <span className="categories"><i className="fa fa-tag" />{projects[0].tags}</span>
    </div>
    <div className="link-box">
      <a href={ projects[0].src }>Details</a>
      <a className="popup-modal-dismiss">Close</a>
    </div>
  </div>{/* modal-01 End */}
  <div id="modal-02" className="popup-modal mfp-hide">
    <img className="scale-with-grid" src="images/portfolio/modals/m-console.jpg" alt="" />
    <div className="description-box">
      <h4>Console</h4>
      <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
      <span className="categories"><i className="fa fa-tag" />Branding, Web Development</span>
    </div>
    <div className="link-box">
      <a href="http://www.behance.net">Details</a>
      <a className="popup-modal-dismiss">Close</a>
    </div>
  </div>{/* modal-02 End */}
  <div id="modal-03" className="popup-modal mfp-hide">
    <img className="scale-with-grid" src="images/portfolio/modals/m-judah.jpg" alt="" />
    <div className="description-box">
      <h4>Judah</h4>
      <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
      <span className="categories"><i className="fa fa-tag" />Branding</span>
    </div>
    <div className="link-box">
      <a href="http://www.behance.net">Details</a>
      <a className="popup-modal-dismiss">Close</a>
    </div>
  </div>{/* modal-03 End */}
  <div id="modal-04" className="popup-modal mfp-hide">
    <img className="scale-with-grid" src="images/portfolio/modals/m-intothelight.jpg" alt="" />
    <div className="description-box">
      <h4>Into the Light</h4>
      <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
      <span className="categories"><i className="fa fa-tag" />Photography</span>
    </div>
    <div className="link-box">
      <a href="http://www.behance.net">Details</a>
      <a className="popup-modal-dismiss">Close</a>
    </div>
  </div>{/* modal-04 End */}
  <div id="modal-05" className="popup-modal mfp-hide">
    <img className="scale-with-grid" src="images/portfolio/modals/m-farmerboy.jpg" alt="" />
    <div className="description-box">
      <h4>Farmer Boy</h4>
      <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
      <span className="categories"><i className="fa fa-tag" />Branding, Webdesign</span>
    </div>
    <div className="link-box">
      <a href="http://www.behance.net">Details</a>
      <a className="popup-modal-dismiss">Close</a>
    </div>
  </div>{/* modal-05 End */}
  <div id="modal-06" className="popup-modal mfp-hide">
    <img className="scale-with-grid" src="images/portfolio/modals/m-girl.jpg" alt="" />
    <div className="description-box">
      <h4>Girl</h4>
      <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
      <span className="categories"><i className="fa fa-tag" />Photography</span>
    </div>
    <div className="link-box">
      <a href="http://www.behance.net">Details</a>
      <a className="popup-modal-dismiss">Close</a>
    </div>
  </div>{/* modal-06 End */}
  <div id="modal-07" className="popup-modal mfp-hide">
    <img className="scale-with-grid" src="images/portfolio/modals/m-origami.jpg" alt="" />
    <div className="description-box">
      <h4>Origami</h4>
      <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
      <span className="categories"><i className="fa fa-tag" />Branding, Illustration</span>
    </div>
    <div className="link-box">
      <a href="http://www.behance.net">Details</a>
      <a className="popup-modal-dismiss">Close</a>
    </div>
  </div>{/* modal-07 End */}
  <div id="modal-08" className="popup-modal mfp-hide">
    <img className="scale-with-grid" src="images/portfolio/modals/m-retrocam.jpg" alt="" />
    <div className="description-box">
      <h4>Retrocam</h4>
      <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
      <span className="categories"><i className="fa fa-tag" />Webdesign, Photography</span>
    </div>
    <div className="link-box">
      <a href="http://www.behance.net">Details</a>
      <a className="popup-modal-dismiss">Close</a>
    </div>
  </div>{/* modal-01 End */}
</div>
    
    );
};

export default ProjectDescription;