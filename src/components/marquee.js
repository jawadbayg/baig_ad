import React from 'react';
import Marquee from 'react-fast-marquee';
import './styles/marquee.css'; 

const RunningLine = () => {
  return (
    <div className="news-ticker-container">
      <Marquee gradient={false} speed={100}>
        <div className="news-ticker-content">
          Breaking News: This is a scrolling news ticker with react-fast-marquee!
        </div>
      </Marquee>
    </div>
  );
};

export default RunningLine;
