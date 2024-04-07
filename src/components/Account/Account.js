import React, { useState, useEffect } from 'react';
import './Account.css';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import MyAccount from './MyAccount/MyAccount';
import Admin from './Admin/Admin';
import EmailVerification from './EmailVerification/EmailVerification';

const Account = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [isLoadingEmailVerification, setIsLoadingEmailVerification] = useState(false);

  useEffect(() => {
    console.log('Initializing state from localStorage');
    const storedUserEmail = localStorage.getItem('userEmail');
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn') === 'true'; 
    const storedIsEmailVerified = localStorage.getItem('isEmailVerified') === 'true';
    const isAdmin = storedUserEmail === 'admin@ethicalspectacle.com';
  
    setUserEmail(storedUserEmail);
    setIsLoggedIn(storedIsLoggedIn);
    setIsAdmin(isAdmin);
    setIsEmailVerified(storedIsEmailVerified);
  
    if (storedUserEmail && storedIsLoggedIn && !storedIsEmailVerified) {
      setIsLoadingEmailVerification(true);
      checkEmailVerification(storedUserEmail);
    }
  }, []);  

  const checkEmailVerification = async (email) => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/check_email_verification?email=${email}`);
      const data = await response.json();

      setIsEmailVerified(data.is_verified);
      localStorage.setItem('isEmailVerified', data.is_verified);
    } catch (error) {
      console.error('Error checking email verification:', error);
    } finally {
      setIsLoadingEmailVerification(false);
    }
  };

  const handleAuthentication = (email, emailVerified) => {
    setUserEmail(email);
    setIsLoggedIn(true);
    setIsAdmin(email === 'admin@ethicalspectacle.com');
    setIsEmailVerified(emailVerified);

    localStorage.setItem('userEmail', email);
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('isEmailVerified', emailVerified);
  };

  const handleLogout = () => {
    setUserEmail(null);
    setIsLoggedIn(false);
    setIsAdmin(false);
    setIsEmailVerified(false);

    localStorage.removeItem('userEmail');
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('isEmailVerified');
  };

  const toggleForm = () => setShowLogin(prev => !prev);

  return (
    <div className="AccountPage">
      {isLoggedIn ? (
        isLoadingEmailVerification ? (
          <p>Loading...</p>
        ) : !isEmailVerified ? (
          <EmailVerification userEmail={userEmail} logout={handleLogout} />
        ) : isAdmin ? (
          <>
            <Admin />
            <button className='logout-button' onClick={handleLogout}>Log Out</button>
          </>
        ) : (
          <>
            <MyAccount userEmail={userEmail} />
            <button className='logout-button' onClick={handleLogout}>Log Out</button>
          </>
        )
      ) : (
        <>
          {showLogin ? (
            <>
              <Login handleAuthentication={handleAuthentication} />
              <button className='toggle-button' onClick={toggleForm}>Switch to Signup</button>
            </>
          ) : (
            <>
              <Signup handleAuthentication={handleAuthentication} />
              <button className='toggle-button' onClick={toggleForm}>Switch to Login</button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Account;
