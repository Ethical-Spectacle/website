import React, { useState } from 'react';
import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Homepage from './components/Homepage/Homepage';
import Hackathons from './components/Hackathons/Hackathons';
import About from './components/About/About';
import Account from './components/Account/Account';
import Leaderboard from './components/Leaderboard/Leaderboard';
import HthonCertificate from './components/HthonCertificate/HthonCertificate';

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
          <Route path="/account" element={<Account />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/hackathon-certificate/:certificateId" element={<HthonCertificate />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
