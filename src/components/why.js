// src/WhyChooseUs.js
import React from 'react';
import './styles/why.css';
import { Container, Row, Col } from 'react-bootstrap';

const Why = () => {
  const reasons = [
    {
      title: "Expert Craftsmanship",
      description: "From concept to execution, our team ensures that every detail is handled with the utmost precision.",
      bgColor: "#ffcccc", // Light red
    },
    {
      title: "Comprehensive Solutions",
      description: "Whether you need a simple storefront sign or a large-scale signboards, we offer a range of advertising options tailored to your needs.",
      bgColor: "#ccffcc", // Light green
    },
   
    {
      title: "Innovative Design",
      description: "We believe in pushing the boundaries of creativity to create signage that not only stands out but resonates with your audience.",
      bgColor: "#ffffcc", // Light yellow
    },
  ];

  return (
    <Container fluid className="why-choose-us-section">
      <h2 className="section-title">Why Choose Us?</h2>
      <Row>
        {reasons.map((reason, index) => (
          <Col md={4} key={index} className="reason-col" style={{ backgroundColor: reason.bgColor }}>
            <h3 className="reason-title">{reason.title}</h3>
            <p className="reason-description">{reason.description}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Why;
