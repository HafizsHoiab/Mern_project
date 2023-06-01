import React from 'react'
import {Link } from 'react-router-dom';
import Logo from '../../Assets/logo1.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import Nav from 'react-bootstrap/Nav';
const index = ({ isLoggedIn, handleLogout }) => {
  return (
    <div>
 <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/home" className="navbar-brand">
          <img src={Logo} alt='logo'/>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
          
            <li className="nav-item dropdown">
            <NavDropdown title="Pages" id="basic-nav-dropdown">
            
            <Link to="/aboutUs" className="nav-link">About Us</Link>
              <Link to="/ourteam" className="dropdown-item">Our Team</Link>
              <Link to="/booking" className='dropdown-item'>Booking</Link>
              <Link to="/login" className="dropdown-item">Log In</Link>
              <Link to="/signup" className="dropdown-item">Sign Up</Link>
            </NavDropdown>
           
          </li>
          <li>
          <NavDropdown title="Services" id="basic-nav-dropdown">
              <Link to="/service" className="dropdown-item">Service</Link>
              <Link to="/aboutUs" className="dropdown-item">Contact Us</Link>
              <Link to="/booking" className='dropdown-item'>Booking</Link>

            </NavDropdown>
          </li>
          
          
          </ul>
        </div>
      </nav>
        {/* <Link to="/about">About Us</Link>,
        <Link to ="/home">Home</Link>,
        <Link to ="/register">Register</Link> */}


    </div>
    
  )
}

export default index