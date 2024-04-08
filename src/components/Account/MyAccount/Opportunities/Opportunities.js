import React from 'react';
import './Opportunities.css'; // Assuming this import brings in the necessary CSS

function Opportunities() {
  return (
    <div className="opportunities-container">
      <h2>Opportunities</h2>
      <p>Get involved and join our organization's leadership</p>
      <div className="opportunities-grid">
        <div className="opportunity-card">
          <h3>Apply to be a researcher</h3>
          <p>Join a research project or start one of your own</p>
          <a href="https://mailchi.mp/8587e8733e72/apply-to-be-a-researcher" target="_blank" rel="noopener noreferrer" className="event-link">Apply Now</a>
        </div>
        <div className="opportunity-card">
          <h3>Guest write for our blog</h3>
          <p>Contribute to our community's knowledge base</p>
          <a href="https://mailchi.mp/ffc8e71c05ca/guestwriter" target="_blank" rel="noopener noreferrer" className="event-link">Write for Us</a>
        </div>
        <div className="opportunity-card">
          <h3>Host an event</h3>
          <p>Organize an event that brings other passionate members together</p>
          <a href="/host-event" className="event-link">Host an Event</a>
        </div>
        <div className="opportunity-card">
          <h3>Volunteer at an event</h3>
          <p>Take a larger role in running our community</p>
          <a href="/volunteer-event" className="event-link">Volunteer</a>
        </div>
      </div>
    </div>
  );
}

export default Opportunities;
