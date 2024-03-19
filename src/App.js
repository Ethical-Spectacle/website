import React, { useState } from 'react';
import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'; // Use HashRouter

import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Homepage from './components/Homepage/Homepage';
import Hackathons from './components/Hackathons/Hackathons';
import About from './components/About/About';

const App = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Router>
      <div className="App">
        <Nav isMobileMenuOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/hackathons" element={<Hackathons />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
