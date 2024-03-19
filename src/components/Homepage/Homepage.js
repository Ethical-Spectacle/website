import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';

const Homepage = () => {
  return (
    <div className="Home">
      {/* Content specific to the home page */}
      <header className="Home-header">
        <h1>Ethical Spectacle Research</h1>
        <p>A melting pot of ethical leaders and techies that write *clean* code...</p>
        <Link to="/hackathons" className="cta">Join Our Hackathon</Link>
      </header>

      <section id="about" className="About-section">
        <h1>With Great Power Comes Great Responsibility</h1>
        <p>The future lies in the hands of developers. Us devs have a responsibility to be careful, without stifling progress. Our mission is to build impactful tech, with the forethought to protect users.</p>
      </section>

      <section id="contact" className="Contact-section">
        <h1>Contact Us</h1>
        <p>Interested in joining our mission or have questions? Contact our president Maximus Powers at maximuspowersdev@gmail.com</p>
      </section>
    </div>
  );
};

export default Homepage;
