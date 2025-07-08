import React, { useState, useEffect } from 'react';
import './styles/testimonials.css'; // Custom CSS for the slider

const testimonialsData = [
  {
    name: "Ahmad k",
    feedback: "Baig Advertising has been an outstanding partner in helping us grow our brand.",
  },
  {
    name: "Bilal Ali",
    feedback: "Their attention to detail and creativity is truly unmatched in the industry.",
  },
  {
    name: "Tahir S",
    feedback: "Working with Baig Advertising has been a game-changer for our business.",

  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextSlide();
    }, 5000); // Auto-slide every 5 seconds

    return () => clearInterval(autoSlide); // Cleanup interval on component unmount
  }, []);

  return (
    <div>
      <h2 className='t-h'>Testimonials</h2>
    <div className="testimonial-slider">
      <div className="testimonial-content">
        <h3 className="testimonial-feedback">"{testimonialsData[currentIndex].feedback}"</h3>
        <p className="testimonial-name">- {testimonialsData[currentIndex].name}</p>
        <p className="testimonial-role">{testimonialsData[currentIndex].role}</p>
      </div>
      <div className="testimonial-navigation">
        <button onClick={prevSlide} className="testimonial-nav-button">❮</button>
        <button onClick={nextSlide} className="testimonial-nav-button">❯</button>
      </div>
    </div>
    </div>
  );
};

export default Testimonials;
