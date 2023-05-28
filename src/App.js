
import { Fragment } from 'react';
import './App.css';
import NavBar from './Component/Nav/navBar';
import Home from './Pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer/Footer';
import './App.css';

function App() {
  return (
    <Fragment>
      <NavBar/>
       <Home/>
       <Footer/>
    </Fragment>
 
  );
}

export default App;
