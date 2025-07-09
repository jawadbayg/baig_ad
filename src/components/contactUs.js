import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './styles/contactUs.css';
import Footer from './footer';

const ContactUs = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="header-container-cu">
        <img
          src={`${process.env.PUBLIC_URL}/images/header.jpg`}
          alt="Contact Header"
          className="header-image"
        />
        <div className="header-text">
          <p>Home {' > '} Contact Us</p>
          <h1>Get in Touch With Baig Advertising</h1>
        </div>
      </div>

      {/* Contact Info Section */}
      <Container className="contact-info-section">
        <Row>
          <Col md={6} className="contact-text">
            <h2>Let’s Start a Conversation</h2>
            <p>
              Whether you're interested in signage, branding, or custom advertising solutions — we're here to help. 
              Reach out and our team will respond promptly.
            </p>
          </Col>
          <Col md={6} className="contact-details">
            <div className="contact-item">
              <h5>Email:</h5>
              <p>baigadvertising@outlook.com</p>
            </div>
            <div className="contact-item">
              <h5>Phone:</h5>
              <p>+92 300 6653407</p>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactUs;
