import React, { useState } from "react";
const API_URL_PROD =
  "https://ethical-spectacle-backend-e4d474b5c453.herokuapp.com";

const Admin = () => {
  const [email, setEmail] = useState("");
  const [badgeName, setBadgeName] = useState("");
  const [pointsToAdd, setPointsToAdd] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_URL_PROD}/add_points`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          badge_name: badgeName,
          points_to_add: pointsToAdd,
        }),
      });

      if (response.ok) {
        setMessage("Points successfully added!");
        setEmail("");
        setBadgeName("");
        setPointsToAdd("");
      } else {
        setMessage("Failed to add points.");
      }
    } catch (error) {
      setMessage("Error: " + error.message);
    }
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            placeholder="User Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <select
            value={badgeName}
            onChange={(e) => setBadgeName(e.target.value)}
          >
            <option value="">Select a Badge</option>
            <option value="director">Director</option>
            <option value="event host">Event Host</option>
            <option value="researcher">Researcher</option>
            <option value="developer">Developer</option>
            <option value="entrepreneur">Entrepreneur</option>
            <option value="volunteer">Volunteer</option>
            <option value="mentor">Mentor</option>
            <option value="judge">Judge</option>
            <option value="speaker">Speaker</option>
            <option value="sponsor">Sponsor</option>
            <option value="attendee">Attendee</option>
            <option value="winner">Winner</option>
          </select>
        </div>

        <div>
          <input
            type="number"
            placeholder="Points to add"
            value={pointsToAdd}
            onChange={(e) => setPointsToAdd(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Points</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Admin;
