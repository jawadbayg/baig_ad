import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './styles/navbar.css';

const CustomNavbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <Navbar expand="lg" className="custom-navbar">
        <Navbar.Brand href="/">  <img src="/images/baigad-logo.png" className='logo'/></Navbar.Brand>
      
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleMenu} />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ml-auto d-none d-lg-flex"> {/* Show only on desktop */}
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Features</Nav.Link>
            <Nav.Link href="#">Pricing</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
      {/* Side Menu for Mobile */}
      <div className={`side-menu ${showMenu ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleMenu}>
          &times;
        </button>
        <Nav className="flex-column">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">Features</Nav.Link>
          <Nav.Link href="#">Pricing</Nav.Link>
        </Nav>
      </div>
    </>
  );
};

export default CustomNavbar;
