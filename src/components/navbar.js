import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './styles/navbar.css';

const CustomNavbar = () => {
  const [showMenu, setShowMenu] = useState(false);   

  const toggleMenu = () => {
    setShowMenu(!showMenu); 
  };

  
  const handleLinkClick = () => {
    if (showMenu) {
      toggleMenu(); 
    }
  };

  return (
    <>
      <Navbar expand="lg" className="custom-navbar">
        <Navbar.Brand href="/">  
          <img src="/images/baigad-logo.png" className='logo' alt="Logo" />
        </Navbar.Brand>

        <button className="navbar-toggler" onClick={toggleMenu} aria-label="Toggle navigation">
          <span className={`navbar-toggler-icon`}>
            {showMenu ? '' : '☰'} 
          </span>
        </button>
        
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ml-auto d-none d-lg-flex"> 
            <NavLink 
              exact
              to="/" 
              activeClassName="active"
              className="nav-link"
              onClick={handleLinkClick} 
            >
              Home
            </NavLink>
            <NavLink 
              to="/about-us" 
              activeClassName="active"
              className="nav-link"
              onClick={handleLinkClick} 
            >
              About Us
            </NavLink>
            <NavLink 
              to="/gallery" 
              activeClassName="active"
              className="nav-link"
              onClick={handleLinkClick} 
            >
              Projects
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className={`side-menu ${showMenu ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleMenu}>
          &times;
        </button>
        <Nav className="flex-column">
          <NavLink 
            exact
            to="/" 
            activeClassName="active"
            className="nav-link"
            onClick={handleLinkClick} 
          >
            Home
          </NavLink>
          <NavLink 
            to="/about-us" 
            activeClassName="active"
            className="nav-link"
            onClick={handleLinkClick} 
          >
            About Us
          </NavLink>
          <NavLink 
            to="/gallery" 
            activeClassName="active"
            className="nav-link"
            onClick={handleLinkClick} 
          >
            Projects
          </NavLink>
        </Nav>
      </div>
    </>
  );
};

export default CustomNavbar;