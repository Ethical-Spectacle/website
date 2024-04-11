import React, { useState, useEffect } from 'react';

const CertificatesList = ({ userEmail }) => {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCertificates = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('http://127.0.0.1:5000/get_certificates', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 'email': userEmail }), // Use 'userEmail' here
      });
      if (!response.ok) throw new Error('Failed to fetch certificates');
      const data = await response.json();
      setCertificates(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCertificates();
  }, [userEmail]); // Corrected to 'userEmail'

  const claimCertificate = async (id) => {
    try {
      const response = await fetch('http://127.0.0.1:5000/claim_hackathon_certificate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ certificate_id: id, email: userEmail }) // Use 'userEmail' here
      });
      const data = await response.json();
      if (data.success) {
        fetchCertificates(); // This can now correctly call fetchCertificates
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error('Error claiming certificate:', error);
      alert('Error occurred while claiming the certificate.');
    }
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="certificates-list">
      {certificates.map(cert => (
        <div key={cert.id} className="certificate-card">
          <h2>{cert.hackathon_name} - {cert.team_name}</h2>
          <p>Dates: {cert.start_date} to {cert.end_date}</p>
          {cert.claimed ? (
            <a href={`/#/hackathon-certificate/${cert.id}`} className="view-link">View Certificate</a>
          ) : (
            <button onClick={() => claimCertificate(cert.id)} className="claim-btn">Claim</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default CertificatesList;

