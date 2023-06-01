import React, { useState } from "react";
import { Form, Formik } from "formik";
import Logo from "../Assets/book1.png";
import { FiHome } from "react-icons/fi";
// import Home from "./Home"
import { Link } from "react-router-dom";
import axios from "axios";
export default function SignUp() {
    const [isSuccess, setIsSuccess] = useState(false);
    const [date, setDate] = useState('');
  const [time, setTime] = useState('');

    const handleDateChange = (event) => {
      setDate(event.target.value);
    };
  
    const handleTimeChange = (event) => {
      setTime(event.target.value);
    };
    const postData = (data) => {
      try {
        axios
          .post("http://localhost:5000/booking", {
              name: data.name,
              email: data.email,
              phone: data.phone,
            date: date,
            time:time,
          })
          .then((res) => {
            alert(JSON.stringify(res.data));
            setIsSuccess(true);
          });
      } catch (error) {
        console.error("error", error);
      }
    };
  return (
    <div>
      <div className="banner-wraper">
          <div className="page-banner">
            <div className="container">
              <div className="page-banner-entry text-center">
                <h1>Book Appointment</h1>
                <nav aria-label="breadcrumb" className="breadcrumb-row">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to={"/home"}>
                        <FiHome />
                        Home
                      </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Booking
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          date: "",
          time:"",
        }}
        onSubmit={(values) =>{
          postData(values)
         
        }
          
        } 
      >
        {({ values, handleChange }) => (
          <section class="vh-120" style={{ backgroundColor: "#48D1CC" }}>
            <div class="container h-60 pt-5">
              <div class="row d-flex justify-content-center align-items-center h-50">
                <div class="col-lg-12 col-xl-11">
                  <div
                    class="card text-black mb-5"
                    style={{ borderRadius: "25px" }}
                  >
                    <div class="card-body p-md-3">
                      <div class="row justify-content-center">
                        <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                          <p class="text-center h1 fw-bold mb-4 mx-1 mx-md-4 mt-1">
                            Booking
                          </p>

                          <Form>
                            <div class="d-flex flex-row align-items-center mb-2">
                              <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                              <div class="form-outline flex-fill mb-0">
                                <input
                                  type="text"
                                  name="name"
                                  id="form3Example1c"
                                  class="form-control"
                                  onChange={handleChange}
                                />
                                <label class="form-label" for="form3Example1c">
                                  Name
                                </label>
                              </div>
                            </div>

                            <div class="d-flex flex-row align-items-center mb-2">
                              <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                              <div class="form-outline flex-fill mb-0">
                                <input
                                  type="email"
                                  name="email"
                                  id="form3Example3c"
                                  class="form-control"
                                  onChange={handleChange}
                                />
                                <label class="form-label" for="form3Example3c">
                                  Email
                                </label>
                              </div>
                            </div>

                              
                            <div class="d-flex flex-row align-items-center mb-2">
                              <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                              <div class="form-outline flex-fill mb-0">
                                <input
                                  type="phone"
                                  name="phone"
                                  id="form3Example4c"
                                  class="form-control"
                                  onChange={handleChange}
                                />
                                <label class="form-label" for="form3Example4c">
                                  Phone
                                </label>
                              </div>
                            </div>

                            <div class="d-flex flex-row align-items-center mb-2">
                              <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                              <div class="form-outline flex-fill mb-0">
                            
                                 <label htmlFor="date">Date:</label>
                                <input
                                type="date"
                                name="date"
                                className="form-control"
                                 id="date"
                                  value={date}
                                     onChange={handleDateChange}
                                     required
                                />
                              </div>
                            </div>

                            <div class="d-flex flex-row align-items-center mb-2">
                              <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                              <div class="form-outline flex-fill mb-0">
                            <label htmlFor="time">Time:</label>
                                <input
                               type="time"
                               name="time"
                                className="form-control"
                                 id="time"
                               value={time}
                               onChange={handleTimeChange}
                                required
                               /> 
                            </div>
                            </div>

                        

                            <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-2 ">
                              <button
                                type="submit"
                                class="btn btn-primary btn-lg"
                                style={{
                                  backgroundColor: "#A52A2A",
                                  borderColor: "#FF2625",
                                }}
                              >        
                                Confirm Booking
                              </button>
                            </div>
                          </Form>
                        </div>
                        <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                          <img
                          src={Logo}
                            class="img-fluid align-items-center"
                            alt="Sample"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </Formik>
    </div>
  );
}