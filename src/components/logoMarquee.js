import React, { useState, useEffect } from 'react';
import Marquee from 'react-fast-marquee';
import './styles/logoMarquee.css'; 

const LogoMarquee = () => {
  const [marqueeSpeed, setMarqueeSpeed] = useState(100);

  useEffect(() => {
    const updateMarqueeSpeed = () => {
      if (window.innerWidth <= 768) {
        setMarqueeSpeed(70);
      } else {
        setMarqueeSpeed(60);
      }
    };

    updateMarqueeSpeed();

    window.addEventListener('resize', updateMarqueeSpeed);
    
    return () => window.removeEventListener('resize', updateMarqueeSpeed);
  }, []);

  
  const images = [
    '/gallery/14stlogo.png',
    '/gallery/misaq.png',
    '/gallery/ls.png',
    '/gallery/deer.png',
    '/gallery/nadra.png',
    '/gallery/sailani.png',
    '/gallery/sanoor.png',
    '/gallery/sh.png',
    '/gallery/sitara.png',
    '/gallery/taj.png',
    '/gallery/msc.png',
    '/gallery/jp.png',
    '/gallery/cths.png',
    '/gallery/cp.png',
    '/gallery/lt.png',
  ];

  return (
    <div>
      <h2 className='ticker-heading'>Our Valued Clients</h2>
    <div className="image-news-ticker-container">
      
      <Marquee gradient={false} speed={marqueeSpeed}>
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Marquee Logo ${index}`} className="news-ticker-logo" />
        ))}
      </Marquee>
    </div>
    </div>
  );
};

export default LogoMarquee;
