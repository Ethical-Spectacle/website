import React, { useState, useEffect } from 'react';
import { FaGlobe, FaGithub, FaLinkedin } from 'react-icons/fa';
import './Leaderboard.css';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // Import stylesheet
import './Leaderboard.css';

const Leaderboard = () => {
  const [rankings, setRankings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRankings = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/get_rankings');
        if (!response.ok) {
          throw new Error('Failed to fetch rankings');
        }
        const data = await response.json(); 
        const rankingsData = JSON.parse(data);
        setRankings(rankingsData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchRankings();
  }, []);
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const badgeDetails = {
    director: { emoji: "💼", description: "Director: One of our core team members!!!" },
    "event host": { emoji: "🎤", description: "Event Host: This member invested in all of you by hosting an event. Want to host? Suggest an event on your profile page." },
    researcher: { emoji: "🔬", description: "Researcher: Joined on of our research projects. Apply on your profile page." },
    developer: { emoji: "💻", description: "Developer"},
    entrepreneur: { emoji: "🚀", description: "Entrepreneur"},
    volunteer: { emoji: "🤝", description: "Volunteer: Badge given for each volunteer opportunity siezed."},
    mentor: { emoji: "🧠", description: "Mentor: Guided the next generation of geniuses at our first hackathon"},
    judge: { emoji: "⚖️", description: "Judge: Expert in their field, this leader leader evaluated the team demos at a hackathon." },
    speaker: { emoji: "🗣️", description: "Speaker: Shared knowledge at one of our events."},
    sponsor: { emoji: "🌟", description: "Sponsor: Helped support our events." },
    attendee: { emoji: "👥", description: "Attendee: Actively participating in our events." },
    winner: { emoji: "🏆", description: "Winner: Won a hackathon!!!" },
  };
  
  return (
    <div className="leaderboard">
      <h2>Leaderboard</h2>
      <div className="ranking-list">
        {rankings.map((ranking, index) => (
          <div className="ranking-entry" key={index}>
            <div className="rank">#{index + 1}</div>
            <div className="points">Score: {ranking.points}</div>
            <div className="name">{ranking.name}</div>
            <div className="link-container">
                {ranking.website && <a className="links" href={ranking.website} target="_blank" rel="noopener noreferrer"><FaGlobe/></a>}
                {ranking.github && <a className="links" href={ranking.github} target="_blank" rel="noopener noreferrer"><FaGithub/></a>}
                {ranking.linkedin && <a className="links" href={ranking.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>}
                <div className="badges">
                {ranking.badges.split(', ').map((badge) => {
                    const badgeInfo = badgeDetails[badge];
                    return badgeInfo ? (
                    <Tippy key={badge} content={badgeInfo.description}>
                        <span style={{ marginLeft: "5px" }}>{badgeInfo.emoji}</span>
                    </Tippy>
                    ) : (
                    <span key={badge}>{badge}</span>
                    );
                })}
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
