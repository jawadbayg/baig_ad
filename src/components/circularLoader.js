import React, { useEffect, useRef, useState } from 'react';
import './styles/circularLoader.css';

const CircularLoader = ({ percentage }) => {
  const [isVisible, setIsVisible] = useState(false); 
  const [currentPercentage, setCurrentPercentage] = useState(0); 
  const circleRef = useRef(null); 
  const containerRef = useRef(null); 

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } 
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      let progress = 0;
      const increment = percentage / 100; 
      const interval = setInterval(() => {
        if (progress < percentage) {
          progress += increment;
          setCurrentPercentage(Math.ceil(progress));
        } else {
          clearInterval(interval); 
        }
      }, 10); 
    }
  }, [isVisible, percentage]);

  const circleStyle = {
    strokeDasharray: `${currentPercentage}, 100`,
  };

  return (
    <div className="circular-progress-bar" ref={containerRef}>
      <svg viewBox="0 0 36 36" className="circular-chart">
        <path
          className="circle-bg"
          d="M18 2.0845
             a 15.9155 15.9155 0 0 1 0 31.831
             a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          className="circle"
          strokeDasharray="0, 100" 
          style={circleStyle} 
          d="M18 2.0845
             a 15.9155 15.9155 0 0 1 0 31.831
             a 15.9155 15.9155 0 0 1 0 -31.831"
          ref={circleRef}
        />
      </svg>
      <div className="percentage">{currentPercentage}%</div>
    </div>
  );
};

export default CircularLoader;
