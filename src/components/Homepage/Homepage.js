import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Homepage.scss';
import LineDecorations from './LineDecorations';  
import AnimatedTitle from './animations/AnimatedTitle';
import FadeInParagraph from './animations/FadeInParagraph';
import AZVClogo from '../../assets/AZVC_Transparent.png';
import GCNlogo from '../../assets/global_career_network.png';

const Homepage = () => {
  return (
  <>
      <header className="hero-section boxed-container">
        <LineDecorations />
        <AnimatedTitle text="Ethical Spectacle <br/> Research" />
        <FadeInParagraph>
          A melting pot of ethical leaders and techies that write{' '}
          <span className="pink-highlight">clean</span> code.
        </FadeInParagraph>
        <Link to="/hackathons" className="primary-button">
          Join Our Hackathon
        </Link>
      </header>

    <section id="about" className="about-section">
      <div className="boxed-container centered-text">
        <h2>With <span className='white-highlight'>Great Power</span>
          <br /> Comes 
          <span className='pink-highlight'>Great Responsibility</span>
        </h2>
        <p>The future lies in the hands of developers. Us devs have a responsibility to be careful, without stifling progress. Our mission is to build impactful tech, with the forethought to protect users.</p>
      </div>
    </section>

    <section id="partners" className="Partners-section">
      <h2>Partners</h2>
      <a href="https://azvc.com/" target="_blank" rel="noopener noreferrer">
        <img className="AZVCLogo" src={AZVClogo} alt="Arizona Venture Capital" style={{ height: '80px'}} />
      </a> 
      <a href="https://www.linkedin.com/company/global-career-network/" target="_blank" rel="noopener noreferrer">
        <img className="GCNLogo" src={GCNlogo} alt="Global Career Network" style={{ height: '50px', marginBottom: '5px'}} />
      </a>
    </section>

    <section id="contact" className="Contact-section">
      <h2>Contact Us</h2>
      <p>Interested in joining our mission or have questions? Contact our president Maximus Powers at maximuspowersdev@gmail.com</p>
    </section>
  </>
  );
};

export default Homepage;
