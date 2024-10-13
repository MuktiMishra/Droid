import React from 'react';
import './Navbar.css';
import logo_light from '../../assets/Droid Black.png';
import logo_dark from '../../assets/DROID white.png';
import search_icon_light from '../../assets/search-w.png';
import search_icon_dark from '../../assets/search-b.png';
import toggle_light from '../../assets/night.png';
import toggle_dark from '../../assets/day.png';

const Navbar = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className='navbar'>
      {/* Left side: Home, About Us */}
      <ul className='nav-links-left'>
        <li>Home</li>
        <li>Team</li>
        <li>About Us</li>
      </ul>

      {/* Center: Logo */}
      <div className='logo-container'>
        <img src={theme === 'light' ? logo_light : logo_dark} alt='Droid Logo' className='logo' />
      </div>

      {/* Right side: Events, Projects, Contact Us, Theme Toggle */}
      <ul className='nav-links-right'>
        <li>Events</li>
        <li>Projects</li>
        <li>Contact Us</li>
        <img
          src={theme === 'light' ? toggle_light : toggle_dark}
          alt='toggle theme'
          className='toggle-icon'
          onClick={toggleTheme}
        />
      </ul>
    </div>
  );
};

export default Navbar;
