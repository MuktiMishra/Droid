import React from 'react';
import './Footer.css';
import { FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import logo_light from '../../assets/Droid Black.png';
import logo_dark from '../../assets/DROID white.png';

const Footer = ({ theme, setTheme }) => {
  return (
    <footer className={`footer ${theme}`}>
      <div className="footer-section logo">
        <img src={theme === "light" ? logo_light : logo_dark} alt="Club Logo" />
      </div>

      <div className="footer-section">
        <h3>Events</h3>
        <ul>
          <li>Workshops and Seminars</li>
          <li>Robotics Competitions</li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>About Us</h3>
        <p>We are a club focused on robotics and automation, helping students innovate and learn through hands-on projects.</p>
      </div>

      <div className="footer-section">
        <h3>Gallery</h3>
        <ul>
          <li>Project Showcase and more</li>
          <li>Photo Albums and more</li>
        </ul>
      </div>

      <div className="footer-section social-media">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <a href="https://www.instagram.com/droid_glau/profilecard/?igsh=MWZubzd5cHFod2Eydw==" target="_blank" rel="noopener noreferrer">
            <FaInstagram style={{ color: theme === "light" ? '#000' : '#fff' }} />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaGithub style={{ color: theme === "light" ? '#000' : '#fff' }} />
          </a>
          <a href="https://www.linkedin.com/company/droid-glau/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn style={{ color: theme === "light" ? '#000' : '#fff' }} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
