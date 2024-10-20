// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Navbar.css';
import logo_light from '../../assets/Droid Black.png';
import logo_dark from '../../assets/DROID white.png';
import toggle_light from '../../assets/night.png';
import toggle_dark from '../../assets/day.png';

const Navbar = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`navbar ${theme}`}>
      {/* Left side: Home, About Us */}
      <ul className='nav-links-left'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/team">Team</Link></li>
        <li><Link to="/about">About Us</Link></li>
      </ul>

      {/* Center: Logo */}
      <div className='logo-container'>
        <img src={logo_light} alt='Droid Logo' className='logo' />
      </div>

      {/* Right side: Events, Projects, Contact Us, Theme Toggle */}
      <ul className='nav-links-right'>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        
      </ul>
    </div>
  );
};

export default Navbar;
