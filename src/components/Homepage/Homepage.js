import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Homepage.scss';
import './styles/DottedLines.scss';
import AnimatedTitle from './components/AnimatedTitle';
import FadeInParagraph from './components/FadeInParagraph';
import AZVClogo from '../../assets/AZVC_Transparent.png';
import GCNlogo from '../../assets/global_career_network.png';
import chip from '../../assets/chip.png';
import conectorlines from '../../assets/conector-lines.png';

const Homepage = () => {
  return (
  <>
      <header className="hero-section inner-container">

        <span className='dotted-line-left-full'>
            <span className='overlay-left-full'></span>
        </span>


        <div className='fw vp'>
          <span className='dotted-line-top'>
            <span className='overlay-top'></span>
          </span>
          <AnimatedTitle text="Ethical Spectacle <br/> Research" />
        </div>

        <div className='fw vp centered-text'>
          <span className='dotted-line-top'>
            <span className='overlay-top'></span>
          </span>
          <FadeInParagraph>
            A melting pot of ethical leaders and techies that write{' '}
            <span className="pink-highlight">clean</span> code.
          </FadeInParagraph>
        </div>

        <div className='fw vp centered-text'>
          <span className='dotted-line-top'>
            <span className='overlay-top'></span>
          </span>
          <Link to="/hackathons" className="primary-button">
            Join Our Hackathon
          </Link>
          <span className='dotted-line-bottom'>
            <span className='overlay-bottom'></span>
          </span>
        </div>

        <span className='dotted-line-right-full'>
            <span className='overlay-right-full'></span>
        </span>

      </header>

    <section id="about" className="about-section">
      <div className="boxed-container centered-text">
        <h2>With <span className='pink-highlight'>Great Power</span>
          <br /> comes  <span className='dotted-white-highlight'>great responsibility</span>
        </h2>
        <p>The future lies in the hands of developers. Us devs have a responsibility to be careful, without stifling progress. Our mission is to build impactful tech, with the forethought to protect users.</p>
      </div>

    </section>

    <section id="partners" className="partners">
      <div className='chip-title'>
        <img src={conectorlines} alt='decorative-lines' className='deco-lines'></img>
        <img src={chip} alt="chip" className="chip"  />
        <h2>Partners</h2>
      </div>
      <div className='partners-logos'>
        <a href="https://azvc.com/" target="_blank" rel="noopener noreferrer">
          <img className="AZVCLogo" src={AZVClogo} alt="Arizona Venture Capital" />
        </a> 
        <a href="https://www.linkedin.com/company/global-career-network/" target="_blank" rel="noopener noreferrer">
          <img className="GCNLogo" src={GCNlogo} alt="Global Career Network" />
        </a>
      </div>
    </section>

    <section id="contact" className="Contact-section">
      <h2>Contact Us</h2>
      <p>Interested in joining our mission or have questions? Contact our president Maximus Powers at <a href="mailto:maximuspowersdev@gmail.com"> maximuspowersdev@gmail.com</a>
      </p>
    </section>
  </>
  );
};

export default Homepage;
