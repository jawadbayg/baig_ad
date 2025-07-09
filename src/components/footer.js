import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './styles/footer.css'; 

const Footer = () => {
  return (
    <footer className="footer bg-dark">
    <div className="row m-0"> {/* Removed default margins */}
  
      {/* Contact Us Section - First on mobile screens */}
      <div className="col-lg-4 col-sm-12 order-sm-1 order-lg-3 contact-section">
        <h5 className="text-uppercase">Contact Us</h5>
        <ul className="list-unstyled">
          <li><a href="mailto:baigadvertising@outlook.com" className="text-white">baigadvertising@outlook.com</a></li>
          <li><a href="+923006653407" className="text-white">+92 300 6653407</a></li>
          <li><a href="" className="text-white">Faisalabad</a></li>
        </ul>
      </div>
  
      {/* Follow Us Section - Second on mobile screens */}
      <div className="col-lg-4 col-sm-12 order-sm-2 order-lg-1 follow-us-section">
        <h5 className="text-uppercase">Follow Us</h5>
        <ul className="list-unstyled d-flex">
          <li><a href="https://facebook.com/BaigAdvertising" target="_blank" rel="noopener noreferrer" className="text-white me-3">Facebook</a></li>
          <li><a href="https://www.instagram.com/baig_advertising_co/" target="_blank" rel="noopener noreferrer" className="text-white">Instagram</a></li>
        </ul>
      </div>
  
      {/* Footer Logo Section - Last on mobile screens */}
      <div className="col-lg-4 col-sm-12 footer-logo-section order-sm-3 order-lg-2">
        <img src="/images/baigad-logo.png" className="footer-logo" alt="Logo" />
        <p>Deals in All Kinds of Advertisements</p>
        <ul className="list-unstyled d-flex justify-content-center">
          <li><a href="/about-us" rel="noopener noreferrer" className="text-c me-3">About Us</a></li>
          <li><a href="/about-us" rel="noopener noreferrer" className="text-c me-3">Privacy Policy</a></li>
        </ul>
        <p className="copywrite">Copyright © Baig Advertising 2025. All Rights Reserved.</p>
      </div>
  
    </div>
  </footer>
  
  );
};

export default Footer;
