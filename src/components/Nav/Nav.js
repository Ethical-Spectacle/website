import React, { useState, useEffect } from 'react';
import './Nav.scss';
import { FaMeetup, FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';
import { RiMenu3Line } from "react-icons/ri";
import { GrClose } from "react-icons/gr";
import logo from '../../assets/navlogo.webp';
import huggingFaceLogo from '../../assets/huggingface.svg';
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
          <NavLink to="/account" className={activePath === '/account' ? 'activeNavLink' : ''}><h1>Profile</h1></NavLink>
          <NavLink to="/leaderboard" className={activePath === '/leaderboard' ? 'activeNavLink' : ''}><h1>Leaderboard</h1></NavLink>

            <div className='Menu-socials'>
              <a href="https://github.com/Ethical-Spectacle"><FaGithub /></a>
              <a href="https://www.meetup.com/ethical-spectacle-research/events/"><FaMeetup /></a>
              <a href="https://www.linkedin.com/company/ethical-spectacle-research"><FaLinkedinIn /></a>
              <a href="https://www.instagram.com/ethical_spectacle/"><FaInstagram /></a>
              <a href="https://huggingface.co/ethical-spectacle" target="_blank" rel="noopener noreferrer">
                <img src={huggingFaceLogo} alt="Hugging Face" style={{ width: '28px', height: '28px' }} />
              </a>
            </div>
          </div>
        </div>
      )}

      <nav className='nav-bar'>
        <div className="boxed-container">
            <Link to="/"> 
              <img src={logo} className="nav-logo" alt="Ethical Spectacle logo" />
            </Link>        

            <p className='nav-text'>Ethical Spectacle</p>

            {/* Nav buttons */}
            <div className="Nav-buttons">
              <a href="https://huggingface.co/ethical-spectacle" target="_blank" rel="noopener noreferrer">
                    <img src={huggingFaceLogo} alt="Hugging Face" style={{ width: '22px', height: '22px', marginTop: '1px' }} />
              </a>
              <a href="https://www.meetup.com/ethical-spectacle-research/events/"><FaMeetup /></a>
              <a href="https://www.linkedin.com/company/ethical-spectacle-research"><FaLinkedinIn /></a>
              <div className="Menu-icon" onClick={toggleMobileMenu} 
                  style={{ color: isMobileMenuOpen ? '#242424' : '#ff93b1' }}> 
                {isMobileMenuOpen ? <GrClose /> : <RiMenu3Line />}
              </div>
            </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
