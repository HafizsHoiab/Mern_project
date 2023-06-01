import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignOut = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Perform logout logic here
    // For demo purposes, we'll simply clear the session and navigate to the login page
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6 col-sm-8">
          <h2>Sign Out</h2>
          <p>Are you sure you want to sign out?</p>
          <button type="button" className="btn btn-primary" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignOut;
