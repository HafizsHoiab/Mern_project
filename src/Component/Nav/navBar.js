import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../Assets/logo1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faSearch} from '@fortawesome/free-solid-svg-icons'
import './Nav.css';

const navBar = () => {
  return (
    <Navbar  expand="lg">
    <Container>
      <Navbar.Brand>
        <img src={logo} alt=''/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link className='active'>Home</Nav.Link>
          <NavDropdown title="Pages" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">About Us</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Our Team</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Booking</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">LogIn or Register</NavDropdown.Item>
           
           
          </NavDropdown>
          <NavDropdown title="Services" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Service</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Service Detail</NavDropdown.Item>
            
          </NavDropdown>
          <NavDropdown title="Blog" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Blogs</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Blog Detail</NavDropdown.Item>
           
          </NavDropdown>
          <Nav.Link >Contact Us</Nav.Link>
          <FontAwesomeIcon icon={faSearch}/>
          <Nav.Link href="#home">Search</Nav.Link>
         
          <Nav.Link >
          <FontAwesomeIcon icon={faPhone}/>
             (+9)2300123123</Nav.Link>
          <Nav.Link >
            <button>Contact Us <span> > </span></button>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default navBar