import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to your server to authenticate the user
      const response = await axios.get('http://localhost:5000/user', { email, password });

      const token = response.data;
        
      
      localStorage.setItem('token', token);


        navigate('/home');

     
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6 col-sm-8">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
