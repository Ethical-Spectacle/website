import React from 'react';
import './About.css'; // Assume you have a similar CSS file for styling

const About = () => {
  return (
    <div className="about-us">
      <div className="about-us-intro">
        <h1>Who Are We</h1>
        <p>Ethical Spectacle Research serves two purposes: Building a knowledgable tech community, and publishing research that establishes ethical precedents in software.</p>
        <p>We launched recently, so we're doing a big push of events. The first is our sustainability themed hackathon. We'll be hosting monthly hackathons, networking events, and competitions, so join our Meetup Group to stay up to date.</p>
      </div>

      <div className="mission-statement">
        <h2>Our Mission</h2>
        <p>To empower developers, innovators, and thinkers to break new ground on technologies that address our world’s most pressing ethical challenges.</p>
      </div>

      <div className="our-values">
        <h2>Our Values</h2>
          <p><strong>Responsible Innovation:</strong> We believe the cutting edge of tech holds solutions to age-old ethical challenges.</p>
          <p><strong>Community:</strong> Building an inclusive community and platform that brings attention to developers is at the heart of what we do.</p>
          <p><strong>Moving Fast:</strong> While we take safety, security, and ethics seriously, we fight against the narrative that these things mean slower innovation.</p>
      </div>

      <div className="get-involved">
        <h2>Get Involved</h2>
        <p>We're always looking for new developers to bring into research projects and to take on roles at all experience levels. If you're inline with our mission, we'd love to hear from you. Join our meetup group to get updates about all of our events.</p>
        <a href="https://www.meetup.com/ethical-spectacle-research" target="_blank" rel="noopener noreferrer" className="join-us-link">Join Our Community</a>
      </div>

    </div>
  );
};

export default About;
