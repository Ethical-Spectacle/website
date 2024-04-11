import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './HthonCertificate.css';
import logo from '../../assets/dark_logo_no_bg.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const HthonCertificate = () => {
  const [certificate, setCertificate] = useState(null);
  const [error, setError] = useState('');

  const { certificateId } = useParams();

  useEffect(() => {
    fetch(`http://127.0.0.1:5000/hackathon_certificate/${certificateId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setCertificate(data);
      })
      .catch(error => {
        setError('Failed to fetch certificate');
        console.error('There was a problem with your fetch operation:', error);
      });
  }, [certificateId]); // Dependency array, re-run the effect if certificateId changes

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!certificate) {
    return <div>Loading...</div>;
  }

  return (
    <div className="certificate-container" style={{ fontFamily: 'Arial' }}>
      <img className="logo" src={logo} alt="Logo" />
      <h1>Certificate of Completion</h1>
      <h2>{certificate.hackathon_name}</h2>
      <p>Awarded to: <strong>{certificate.fname} {certificate.lname}</strong></p>
      <p>Team: {certificate.team_name}</p>
      <p>Award: {certificate.award}</p>
      <p>Dates: {certificate.start_date} to {certificate.end_date}</p>
      {certificate.claimed === 0 && <p style={{ color: 'red' }}>This certificate is unclaimed. Go to your account page to claim it.</p>}
      <div>
        {certificate.repo_link && <p>Repo: <a href={certificate.repo_link}>{certificate.repo_link}</a></p>}
        {/* I want to make these icons not links */}
        {certificate.website && <p>Personal Website: <a href={certificate.website}>{certificate.website}</a></p>}
        {certificate.github && <p>GitHub: <a href={certificate.github}>{certificate.github}</a></p>}
        {certificate.linkedin && <p>LinkedIn: <a href={certificate.linkedin}>{certificate.linkedin}</a></p>}
      </div>
    </div>
  );
};

export default HthonCertificate;
