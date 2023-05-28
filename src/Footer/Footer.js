import React from 'react'
import '../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone} from '@fortawesome/free-solid-svg-icons'
import FooterLogo from '../Assets/footer-logo.png';
import Face from '../Assets/face.png';
import Insta from '../Assets/insta.png';
// import LinkdIn from '../Assets/linkin.png';
import Tweet from '../Assets/tweet.png';

const Footer = () => {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-3 col-sm-6'>
               <img src={FooterLogo} alt='' className='footerlogo'/>
               <p>Lorem ipsum is dolor sit amet, csectetur adipiscing elit, 
                dolore smod tempor incididunt ut labore et.
               </p>
               <div className='footer-contact'>
                <div className='footer-icon'>
                <FontAwesomeIcon icon={faPhone}/>
                </div>
                <div className='footer-text'>
                    <h6>Contact Us</h6>
                    <h4>(+92) 3088123132</h4>
                </div>
               </div>
            </div>
            <div className='col-md-3 col-sm-6'>
                <h2>Quick Links</h2>
                <ul>
                    <li><a href='home'>Home</a></li>
                    <li><a href='about'>About Us</a></li>
                    <li><a href='booking'>Booking</a></li>
                    <li><a href='services'>services</a></li>
                    <li><a href='our-team'>Our Team</a></li>
                </ul>
                
                </div>
                <div className='col-md-3 col-sm-6'>
                <h2>Our Services</h2>
                <ul>
                    <li><a href='dental'>Dental Care</a></li>
                    <li><a href='cardiac'>Cardiac Clinic</a></li>
                    <li><a href='therapy'>Massage Therapy</a></li>
                    <li><a href='diagnosis'>Precise Diagnosis</a></li>
                    <li><a href='ambulance'>Abmbulance Services</a></li>
                </ul>
                
                </div>
                <div className='col-md-3 col-sm-6'>
                    <h2>Subscribe</h2>
                    <form>
                        <input type='email'/>
                        <button type='submit'>Subscribe Now</button>
                    </form>
                    <ul className='social'>
                        <li><a href='fb'><img src={Face} alt='face'/></a></li>
                        <li><a href='ig'><img src={Insta} alt='ig'/></a></li>
                        {/* <li><a href='lki'><img src={LinkdIn} alt='lki'/></a></li> */}
                        <li><a href='tw'><img src={Tweet} alt='tw'/></a></li>
                    </ul>
                </div>
        </div>
    </div>
  )
}

export default Footer