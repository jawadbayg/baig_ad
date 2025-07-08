// LoadingBar.js
import React from 'react';
import './styles/loadingBar.css';

const LoadingBar = ({ percentage }) => {
  return (
    <div className="loading-bar">
      <div className="filled-bar" style={{ width: `${percentage}%` }} />
    </div>
  );
};

export default LoadingBar;
