import React from "react";
import CircularLoader from "./circularLoader";
import './styles/secondHeader.css';

const SecondHeader = () => {
  return (
    <div className="row mt-4 circular-loader">
      {/* First 6 columns for Circular Loaders */}
      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center align-items-center">
        <div className="row text-center">
          <div className="col-lg-4 col-md-4 col-sm-6 col-6">
            <div className="loader-container">
              <CircularLoader percentage={91} />
            </div>
            <p className="loader-text">Design</p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-6">
            <div className="loader-container">
              <CircularLoader percentage={98} />
            </div>
            <p className="loader-text">Customer Satisfaction</p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-12">
            <div className="loader-container">
              <CircularLoader percentage={94} />
            </div>
            <p className="loader-text">Reliability</p>
          </div>
        </div>
      </div>
      
      {/* Next 6 columns for Text */}
      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <div className="text-section">
          <p className="subtitle-text-sh">Welcome to</p>
          <h6 className="large-text">Our world of innovation and visual brilliance</h6>
          <p className="loader-detail">
            Our designs not only communicate your brand's identity but also illuminate it with a touch of artistry. Whether it's indoor or outdoor signage, our expert team ensures each creation reflects your unique vision and resonates with your target audience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecondHeader;
