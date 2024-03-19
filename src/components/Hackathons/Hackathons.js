import React from 'react';
import './Hackathons.css';
import ESLogo from '../../assets/dark_logo_no_bg.png';
import AZVCLogo from '../../assets/AZVC_Transparent.png';
import { IoCloseSharp } from "react-icons/io5";

const Hackathons = () => {
  return (
    <div className="hackathons">
      <div className="next-hackathon">
        <h1>First Hackathon!</h1>

        <div className="logo-section">
          <img src={ESLogo} alt="Ethical Spectacle Logo" className="ESlogo" />
          <IoCloseSharp className='logo-separator'/>
          <img src={AZVCLogo} alt="AZVC Logo" className="AZVClogo" />
        </div>

        <div className="hackathon-title">
          <h2>"It's the sustainability for me"</h2>
          <p>April 5 (5:00pm) - April 7 (7:30pm), 2024</p>
          <p>Location: Tempe, AZ (In Person)</p>
        </div>
        
        <p>We're hosting our first hackathon!! The theme is... drumroll please... Sustainability!</p>
        <p>Support for this pilot event has been overwhelming, so we booked a fancy venue and got ya some prize money.</p>
        <p>1st Place: $1,500</p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfPH8o07n8I7QrBPTpGHTHAewfw6W64d4wDJVs6S0Gqs9i8Dw/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer" className="apply">Apply to Compete</a>

        <div className="how-it-works">
            <h2>How It Works:</h2>
            <p>On Friday, we'll kickoff the weekend by introducing the challenge (top secret 'til then).</p>
            <p>Teams will have 48 hours to ideate, build a demo, and pitch it to industry leader judges.</p>
            <p>Each team will have a mix of developers and entrepreneurs. Devs can focus on deving and entrepreneurs can focus on 'preneu-ing.</p>
            <p>Due to demand, we have to limit participants. A resume is required for the application.</p>
        </div>

        <div className="next-steps">
            <h2>How to Participate:</h2>
            <p>Note on teams: If you're applying as a team, each member should fill out an application, and include the team's name. If you're applying on your own, no worries, we'll place you. Teams are 4-6 people.</p>
            <p>1. Sign Up - Don't worry, it's a quick application.</p>
            <p>2. Watch your email - We'll contact you once we've vetted participants.</p>
            <p>3. Join our <a href="https://www.meetup.com/" target="_blank" rel="noopener noreferrer" className="meetupGroupLink">Meetup Group</a> - All public event information will go out through here.</p>
        </div>
      </div>

      <div className="hackathon-winners">
        <h1>Winners Will Be Honored Here</h1>
        <p>We're thinking about putting a leaderboard here after we've held a few hackathons. The top devs will be recruited by our partners.</p>
      </div>
    </div>
  );
};

export default Hackathons;
