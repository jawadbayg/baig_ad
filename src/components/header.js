import React from 'react';
import './styles/header.css';
import TypeAnimation from './typeAnimation';

const Header = () => {
  return (
    <div className="header-container">
      <img 
        src={`${process.env.PUBLIC_URL}/images/header.jpg`} 
        alt="header" 
        className="header-image" 
      />
      <div className="header-text">
        <p className='ads-for-reality'>Ads for Reality</p>
        <h1>The New Level For Billboard Advertising</h1>
        <TypeAnimation/>
      </div>
    </div>
  );
}

export default Header;
