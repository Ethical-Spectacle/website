import React, { useState } from 'react';
import './Login.css'; // Import CSS file

const Login = ({ handleAuthentication }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:5000/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        handleAuthentication(formData.email, data.email_verified);
      } else {
        console.error('Authentication failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
        </div>
        <div className="input-group">
          <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
        </div>
        <div className="button-group">
          <button type="submit">Log In</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
