import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/AboutUs'
import  NavBar  from '../Component/Nav/navBar';
import Footer from '../Footer/Footer';
import Service from '../Pages/service';
import OurTeam from '../Pages/ourteam';
import Booking from '../Pages/booking';
import SignUp from '../Pages/SignUp';
import Login from '../Pages/LogIn';


const index = () => {
  return (
<BrowserRouter>
<NavBar/>
<Routes>

     <Route path='/' Component={Home}></Route>
     <Route path='home' Component={Home}></Route>
     <Route path="/aboutUs" Component={About}></Route>
     <Route path='/service' Component={Service}></Route>
     <Route path='/ourteam' Component={OurTeam}></Route>
     <Route path='/booking' Component={Booking}></Route>
     <Route path='/signup' Component={SignUp}></Route>
     <Route path='/login'  Component={Login}></Route>
     <Route path='/booking' Component={Booking}></Route>
       
        {/* <Route path='/register' Component={Register}></Route>  */}

</Routes>
<Footer/>
</BrowserRouter>
  )
}

export default index