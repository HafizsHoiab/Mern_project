import React from 'react'
import AbtUs from "../Sections/about";
import Services2 from '../Sections/services2';
// import NavBars from "../Component/Nav/navBar";
// import Footer from "../Footer/Footer";
import { FiHome } from "react-icons/fi";
import { Link } from "react-router-dom";
import './AboutUs.css'

function AboutUs() {
   
  return (
      <div>
        {/* <NavBars /> */}
        <div className="banner-wraper">
          <div className="page-banner">
            <div className="container">
              <div className="page-banner-entry text-center">
                <h1>About Us</h1>
                <nav aria-label="breadcrumb" className="breadcrumb-row">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to={"/home"}>
                        <FiHome />
                        Home
                      </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      About Us
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <AbtUs />
        <Services2/>
        {/* <Footer /> */}
      </div>
    );
  }
  

export default AboutUs