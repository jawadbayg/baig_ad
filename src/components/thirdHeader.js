import React from "react";
import './styles/thirdHeader.css';
import { Link } from 'react-router-dom';
const ThirdHeader = () => {
    return (
      <div className="row m-0 third-header">
      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 left-side">
        <img src="/gallery/p4.jpg" alt="Card 1" className="card-img-top" />
        <p>What We Do</p>
        <h1>Get Beautiful Billboard Ads For Your Business</h1>
      </div>
    
      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 right-side">
        <img src="/gallery/p16.jpg" alt="Card 1" className="card-img-top" />
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 ">
            <img src="/images/certified.png" alt="Card 1" className="certified" />
            <h6>Certified Company</h6>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 ">
            <img src="/images/global.png" alt="Card 1" className="certified" />
            <h6>Trusted by People</h6>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 ">
            <img src="/images/pakistan.png" alt="Card 1" className="certified" />
            <h6>Worked All Over Pakistan</h6>
          </div>
        </div>
      </div>
<Link to="/gallery" className='view-more-btn'>View More</Link>
    </div>
    
    )
}

export default ThirdHeader;
