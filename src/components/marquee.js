import React, { useState, useEffect } from 'react';
import Marquee from 'react-fast-marquee';
import './styles/marquee.css'; 

const RunningLine = () => {
  const [marqueeSpeed, setMarqueeSpeed] = useState(100);

  useEffect(() => {
    const updateMarqueeSpeed = () => {
      if (window.innerWidth <= 768) {
        setMarqueeSpeed(50);
      } else {
        setMarqueeSpeed(100);
      }
    };

    updateMarqueeSpeed();

    window.addEventListener('resize', updateMarqueeSpeed);
    
    return () => window.removeEventListener('resize', updateMarqueeSpeed);
  }, []);

  return (
    <div className="news-ticker-container">
      <Marquee gradient={false} speed={marqueeSpeed}>
        <div className="news-ticker-content">
          <span>From Ideas to Illumination We Create the Signs that Define You</span>
          <span>We deal in all kinds of advertisement</span>
          <span>Elevate Your Brand Visibility and Boost Sales</span>
        </div>
      </Marquee>
    </div>
  );
};

export default RunningLine;
