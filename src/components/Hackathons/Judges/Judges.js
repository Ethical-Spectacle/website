import React from 'react';
import './Judges.css';
import euvinNaidoo from './assets/euvin-naidoo.png';
import anthonySoohoo from './assets/anthony-soohoo.png';
import ashokSanthanam from './assets/ashok-santhanam.png';
import hitendraChaturvedi from './assets/hitendra-chaturvedi.png';

const Judges = () => {
  return (
    <div className="Judges">
      <div className="judges-intro">
        <h1>Meet the Judges</h1>
        <p>Our esteemed panel of judges for our first hackathon comes from diverse backgrounds in sustainability, technology, and entrepreneurship. They bring a wealth of experience and insight to the table, ready to evaluate the innovative solutions our participants have to offer.</p>
      </div>

      <div className="judges-list">
        {/* Euvin Naidoo */}
        <div className="judge">
          <img src={euvinNaidoo} alt="Euvin Naidoo" className="judge-photo" />
          <a href="https://www.linkedin.com/in/euvinnaidoo/" target="_blank" rel="noopener noreferrer">
            <h2>Euvin Naidoo</h2>
          </a>
          <h4>Distinguished Professor, World Economic Forum Global Future Council</h4>
          <p>Euvin Naidoo, selected by Forbes.com as one of the African continent's Top 10 most ‘Powerful and Influential Men’, distinguished for his opening TED Global Conference talk on the ‘African Growth Story,’ Harvard Senior Fellow, and a leader in financial services innovation and sustainability, brings a wealth of experience in digital transformation and financial inclusion as our esteemed judge.</p>
        </div>

        {/* Anthony Soohoo */}
        <div className="judge">
          <img src={anthonySoohoo} alt="Anthony Soohoo" className="judge-photo" />
          <a href="https://www.linkedin.com/in/anthonysoohoo/" target="_blank" rel="noopener noreferrer">
            <h2>Anthony Soohoo</h2>
          </a>
          <h4>CEO and Fortune 100 Executive, LinkedIn Top AI Voice</h4>
          <p>Anthony Soohoo, celebrated for his leadership at Walmart where he executed one of the largest digital transformations in the home division, significantly driving growth, also made pivotal contributions to CBS's digital media expansion and founded impactful startups like Dotspotter and Dot & Bo, showcasing his versatile expertise in steering Fortune 100 companies and pioneering startups alike.</p>
        </div>

        {/* Ashok Santhanam */}
        <div className="judge">
          <img src={ashokSanthanam} alt="Ashok Santhanam" className="judge-photo" />
          <a href="https://www.linkedin.com/in/ashoksanthanam/" target="_blank" rel="noopener noreferrer">
            <h2>Ashok Santhanam</h2>
          </a>
          <h4>Venture Partner at AZ-VC</h4>
          <p>Ashok Santhanam, notable for his role as President of TIME Sites, where he led a revolutionary customer engagement platform post-Brandcast acquisition, and his transformative leadership as CEO of Bristlecone, now excels as a Venture Partner at AZ-VC, Arizona's largest VC firm, drawing on his extensive expertise in enterprise software, strategic growth, and innovation.</p>
        </div>

        {/* Hitendra Chaturvedi */}
        <div className="judge">
          <img src={hitendraChaturvedi} alt="Hitendra Chaturvedi" className="judge-photo" />
          <a href="https://www.linkedin.com/in/hitendra-chaturvedi-364288/" target="_blank" rel="noopener noreferrer">
            <h2>Hitendra Chaturvedi</h2>
          </a>
          <h4>Distinguished Professor of Practice at Arizona State University</h4>
          <p>Hitendra Chaturvedi is renowned for his leadership as a Senior Director at Microsoft and his visionary entrepreneurship, including founding Reverse Logistics Corporation, a trailblazer in the e-commerce and supply chain realms, demonstrating his profound impact on technology, business strategy, and innovation.</p>
        </div>
      </div>
      
      <div className="judges-note">
        <p>Stay tuned for more updates and be ready to impress our judges with your innovative solutions to sustainability challenges!</p>
      </div>
    </div>
  );
};

export default Judges;
