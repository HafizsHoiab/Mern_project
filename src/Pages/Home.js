import React from 'react'
// import Headerimg from '../../src/Assets/doctor.png';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSquare} from '@fortawesome/free-solid-svg-icons';
import AboTus from '../Sections/about';
import Banner from '../Sections/banner';
// import Services from '../Sections/services';
import './Home.css';

const Home = () => {
  return (
    <div>
    <Banner/>
    <AboTus/>
  {/* <Services/> */}
    </div>
      
  )
}

export default Home