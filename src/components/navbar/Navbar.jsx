
import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="Navbar">
      <header className="header">
        <div className="logo">Your Logo</div>
        <nav className={`navbar ${menuOpen ? 'show' : ''}`}>
          <ul className="nav-list">
            <li><a href="#">Home</a></li>
            <li className="dropdown">
              <span className="dropdown-toggle">About</span>
              <ul className="dropdown-menu">
                <li><a href="#">Team</a></li>
                <li><a href="#">History</a></li>
                <li><a href="#">Values</a></li>
              </ul>
            </li>
            <li className="dropdown">
              <span className="dropdown-toggle">Services</span>
              <ul className="dropdown-menu">
                <li><a href="#">Service 1</a></li>
                <li><a href="#">Service 2</a></li>
                <li><a href="#">Service 3</a></li>
              </ul>
            </li>
            <li><a href="#">Contact</a></li>
          </ul>
          <div className="hamburger-menu" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </nav>
      </header>
      {/* Your page content goes here */}
    </div>
  );
}


  
export default Navbar




