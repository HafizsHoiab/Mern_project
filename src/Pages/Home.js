import React from 'react'
import Headerimg from '../../src/Assets/doctor.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare} from '@fortawesome/free-solid-svg-icons'
import './Home.css';

const Home = () => {
  return (
    <header>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 col-lg-6'>
                 <h5>we provide all health care solution</h5>
                 <h2>Protect your health and take care too of your health</h2>
                 <button><a href='HOME'>READ MORE</a></button>
                 <span>+</span>
                </div>
                <div className='col-lg-6 col-md-6'>
                  <div className='header-box'>
                  <img src={Headerimg} alt='img'></img>
                  <FontAwesomeIcon icon={faSquare}/>
                  </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Home