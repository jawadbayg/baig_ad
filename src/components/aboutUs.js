import React, { useEffect, useState, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './styles/aboutUs.css';
import Testimonials from './testimonials';
import LoadingBar from './loadingBar';
import Footer from './footer';
import Why from './why';

const AboutUs = () => {
  const [designPercentage, setDesignPercentage] = useState(0);
  const [qualityPercentage, setQualityPercentage] = useState(0);
  const [performancePercentage, setPerformancePercentage] = useState(0);
  const loadingBarRef = useRef(null); // Create a reference for the loading bar section

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // When the loading bar section is in view, animate the loading bars
          setDesignPercentage(90);
          setQualityPercentage(96);
          setPerformancePercentage(89);
        }
      },
      {
        threshold: 0.5, // Trigger when at least 10% of the section is visible
      }
    );

    if (loadingBarRef.current) {
      observer.observe(loadingBarRef.current); // Observe the loading bar container
    }

    return () => {
      const currentRef = loadingBarRef.current;
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };

  }, []);

  return (
    <div>
      <div className="header-container-au">
        <img
          src={`${process.env.PUBLIC_URL}/images/header.jpg`}
          alt="header"
          className="header-image"
        />
        <div className="header-text">
          <p>About {' > '}Baig Advertising</p>
          <h1>Deals in all kind of Advertising</h1>
        </div>
      </div>
      <div className="who-we-are">
        <h2>Who we are?</h2>
        <p>
          Welcome to Baig Advertising, where creativity meets innovation to
          bring your brand to life. With a passion for excellence, we specialize
          in designing and crafting high-quality signage that goes beyond the
          ordinary. Whether you're looking for eye-catching Signboards ads, sleek
          stainless steel letters, vibrant neon and 3D signboards, or dynamic
          light boards, we've got you covered.
        </p>
      </div>

      <Container fluid className="about-us-section">
        <Row>
          <Col md={6} className="text-section-au p-0 m-0">
            <h1 className="about-text">EXPERT OUT OF ADVERTISING AGENCY</h1>
          </Col>

          <Col md={6} className="image-section p-0 m-0">
            <img
              src="/images/steel.jpg"
              alt="About Us"
              className="about-image"
            />
            <p className="overlay-text">
              Providing expert assistance with signboard advertising for 20
              years.
              <br />
              quickly present you
            </p>

            {/* Loading bars container with ref for IntersectionObserver */}
            <div className="loading-bar-container" ref={loadingBarRef}>
              <div className="loading-bar-item">
                <p className="loading-bar-p">Design</p>
                <LoadingBar percentage={designPercentage} />
              </div>
              <div className="loading-bar-item">
                <p className="loading-bar-p">Quality</p>
                <LoadingBar percentage={qualityPercentage} />
              </div>
              <div className="loading-bar-item">
                <p className="loading-bar-p">Performance</p>
                <LoadingBar percentage={performancePercentage} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div>
        <Why />
      </div>
      <div className="testimonials-section">
        <Testimonials />
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
