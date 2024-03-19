import React, { useState, useEffect } from 'react';
import './Nav.css';
import { FaMeetup, FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';
import { RiMenu3Line } from "react-icons/ri";
import { GrClose } from "react-icons/gr";
import logo from '../../assets/light_logo_no_bg.png';
import { Link, NavLink, useLocation } from 'react-router-dom';


const Nav = ({ isMobileMenuOpen, toggleMobileMenu }) => {
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location]);

  return (
    <div>
      {/* Menu links */}
      {isMobileMenuOpen && (
        <div className="Overlay" onClick={toggleMobileMenu}>
          <div className="Menu" onClick={(e) => e.stopPropagation()}>
            
          <NavLink to="/" className={activePath === '/' ? 'activeNavLink' : ''}><h1>Home</h1></NavLink>
          <NavLink to="/hackathons" className={activePath === '/hackathons' ? 'activeNavLink' : ''}><h1>Hackathons</h1></NavLink>
          <NavLink to="/about" className={activePath === '/about' ? 'activeNavLink' : ''}><h1>About Us</h1></NavLink>
          
            <div className='Menu-socials'>
              <a href="https://github.com/Ethical-Spectacle"><FaGithub /></a>
              <a href="https://www.meetup.com/ethical-spectacle-research/events/"><FaMeetup /></a>
              <a href="https://www.linkedin.com/company/ethical-spectacle-research"><FaLinkedinIn /></a>
              <a href="https://www.instagram.com/ethical_spectacle/"><FaInstagram /></a>
            </div>
          </div>
        </div>
      )}

      <nav className="App-nav">
        <div className="Logo-container">
          <Link to="/"> {/* Wrap the img tag with Link and set to as "/" for home */}
            <img src={logo} className="App-logo" alt="Ethical Spectacle logo" />
          </Link>        
        </div>

        <div className="Nav-text">
            <h1>Ethical Spectacle</h1>
        </div>

        {/* Nav buttons */}
        <div className="Nav-buttons">
          <a href="https://github.com/Ethical-Spectacle"><FaGithub /></a>
          <a href="https://www.meetup.com/ethical-spectacle-research/events/"><FaMeetup /></a>
          <a href="https://www.linkedin.com/company/ethical-spectacle-research"><FaLinkedinIn /></a>
          <div className="Menu-icon" onClick={toggleMobileMenu} 
               style={{ color: isMobileMenuOpen ? '#242424' : '#ff93b1' }}> {/* Change color of menu icon when menu is open */}
            {isMobileMenuOpen ? <GrClose /> : <RiMenu3Line />}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
