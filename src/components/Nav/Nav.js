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
              <a href="https://huggingface.co/ethical-spectacle" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn-lfs.huggingface.co/repos/96/a2/96a2c8468c1546e660ac2609e49404b8588fcf5a748761fa72c154b2836b4c83/533d195d96af7a2f996b2170c941e05698e8b270d29366f5e1f109d4ddf0bd55?response-content-disposition=inline%3B+filename*%3DUTF-8%27%27hf-logo-pirate.svg%3B+filename%3D%22hf-logo-pirate.svg%22%3B&response-content-type=image%2Fsvg%2Bxml&Expires=1711151278&Policy=eyJTdGF0ZW1lbnQiOlt7IkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTcxMTE1MTI3OH19LCJSZXNvdXJjZSI6Imh0dHBzOi8vY2RuLWxmcy5odWdnaW5nZmFjZS5jby9yZXBvcy85Ni9hMi85NmEyYzg0NjhjMTU0NmU2NjBhYzI2MDllNDk0MDRiODU4OGZjZjVhNzQ4NzYxZmE3MmMxNTRiMjgzNmI0YzgzLzUzM2QxOTVkOTZhZjdhMmY5OTZiMjE3MGM5NDFlMDU2OThlOGIyNzBkMjkzNjZmNWUxZjEwOWQ0ZGRmMGJkNTU%7EcmVzcG9uc2UtY29udGVudC1kaXNwb3NpdGlvbj0qJnJlc3BvbnNlLWNvbnRlbnQtdHlwZT0qIn1dfQ__&Signature=QfrwsHrpYbSSjNjEdUdl0KM7PByHz7hYeE9-vV9-JktV4QA4i%7EATBbLhW4gfvIH6JlPW7St2MPnbajzUmphTK0vlVIXKwy%7EAAhACaqtDB%7EglSHJwt7L0Od36FqRnpA%7EeHMNPLusAwlvA5tgSPBYtNMdzoJjcljpF3%7E%7EteJMlK0%7EcEUAJRLCA15Bw9wfFWEPlfAZaWSIJ7vBICNwDEkn-SX3JTD76TkkNpn8e1gpmKzi0b4-XBx1QkU-k-u0f-LFtQjcje1mEbVyHqYacMtz2VW7lMyfOVJYKGyLLiE7xlE%7Ej3nUFUCLdDRkwXAbUBNKZ60Qv7SXGydgorXGtSHLKZg__&Key-Pair-Id=KVTP0A1DKRTAX" alt="Hugging Face" style={{ width: '28px', height: '28px' }} />
              </a>
            </div>
          </div>
        </div>
      )}

      <nav className="App-nav">
        <div className="Logo-container">
          <Link to="/"> 
            <img src={logo} className="App-logo" alt="Ethical Spectacle logo" />
          </Link>        
        </div>

        <div className="Nav-text">
            <h1>Ethical Spectacle</h1>
        </div>

        {/* Nav buttons */}
        <div className="Nav-buttons">
          <a href="https://huggingface.co/ethical-spectacle" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn-lfs.huggingface.co/repos/96/a2/96a2c8468c1546e660ac2609e49404b8588fcf5a748761fa72c154b2836b4c83/533d195d96af7a2f996b2170c941e05698e8b270d29366f5e1f109d4ddf0bd55?response-content-disposition=inline%3B+filename*%3DUTF-8%27%27hf-logo-pirate.svg%3B+filename%3D%22hf-logo-pirate.svg%22%3B&response-content-type=image%2Fsvg%2Bxml&Expires=1711151278&Policy=eyJTdGF0ZW1lbnQiOlt7IkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTcxMTE1MTI3OH19LCJSZXNvdXJjZSI6Imh0dHBzOi8vY2RuLWxmcy5odWdnaW5nZmFjZS5jby9yZXBvcy85Ni9hMi85NmEyYzg0NjhjMTU0NmU2NjBhYzI2MDllNDk0MDRiODU4OGZjZjVhNzQ4NzYxZmE3MmMxNTRiMjgzNmI0YzgzLzUzM2QxOTVkOTZhZjdhMmY5OTZiMjE3MGM5NDFlMDU2OThlOGIyNzBkMjkzNjZmNWUxZjEwOWQ0ZGRmMGJkNTU%7EcmVzcG9uc2UtY29udGVudC1kaXNwb3NpdGlvbj0qJnJlc3BvbnNlLWNvbnRlbnQtdHlwZT0qIn1dfQ__&Signature=QfrwsHrpYbSSjNjEdUdl0KM7PByHz7hYeE9-vV9-JktV4QA4i%7EATBbLhW4gfvIH6JlPW7St2MPnbajzUmphTK0vlVIXKwy%7EAAhACaqtDB%7EglSHJwt7L0Od36FqRnpA%7EeHMNPLusAwlvA5tgSPBYtNMdzoJjcljpF3%7E%7EteJMlK0%7EcEUAJRLCA15Bw9wfFWEPlfAZaWSIJ7vBICNwDEkn-SX3JTD76TkkNpn8e1gpmKzi0b4-XBx1QkU-k-u0f-LFtQjcje1mEbVyHqYacMtz2VW7lMyfOVJYKGyLLiE7xlE%7Ej3nUFUCLdDRkwXAbUBNKZ60Qv7SXGydgorXGtSHLKZg__&Key-Pair-Id=KVTP0A1DKRTAX" alt="Hugging Face" style={{ width: '22px', height: '22px', marginTop: '1px' }} />
          </a>
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
