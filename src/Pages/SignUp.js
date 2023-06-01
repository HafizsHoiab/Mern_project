import React, { useState } from "react";
import { Form, Formik } from "formik";
import Logo from "../Assets/doctor.png";
// import Home from "./Home"
import { Link } from "react-router-dom";
import axios from "axios";
export default function SignUp() {
    const [isSuccess, setIsSuccess] = useState(false);
    const postData = (data) => {
      try {
        axios
          .post("http://localhost:5000/user", {
              username: data.username,
              email: data.email,
              password: data.password,
            confirmPassword: data.confirmPassword
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
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={(values) =>{
          postData(values)
          if(!isSuccess){
            <Link to="/home"></Link>
          }else{
            alert("error!!!")
          }
        }
          
        } 
      >
        {({ values, handleChange }) => (
          <section class="vh-120" style={{ backgroundColor: "#ee82ee" }}>
            <div class="container h-60 pt-4">
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
                            Sign up
                          </p>

                          <Form>
                            <div class="d-flex flex-row align-items-center mb-2">
                              <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                              <div class="form-outline flex-fill mb-0">
                                <input
                                  type="text"
                                  name="username"
                                  id="form3Example1c"
                                  class="form-control"
                                  onChange={handleChange}
                                />
                                <label class="form-label" for="form3Example1c">
                                  Username
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
                                  Your Email
                                </label>
                              </div>
                            </div>

                            <div class="d-flex flex-row align-items-center mb-2">
                              <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                              <div class="form-outline flex-fill mb-0">
                                <input
                                  type="password"
                                  name="password"
                                  id="form3Example4c"
                                  class="form-control"
                                  onChange={handleChange}
                                />
                                <label class="form-label" for="form3Example4c">
                                  Password
                                </label>
                              </div>
                            </div>

                            <div class="d-flex flex-row align-items-center mb-2">
                              <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                              <div class="form-outline flex-fill mb-0">
                                <input
                                  type="password"
                                  name="confirmPassword"
                                  id="form3Example4cd"
                                  class="form-control"
                                  onChange={handleChange}
                                />
                                <label class="form-label" for="form3Example4cd">
                                  Repeat your password
                                </label>
                              </div>
                            </div>

                            <div class="form-check d-flex justify-content-center mb-3">
                              <input
                                class="form-check-input me-2"
                                type="checkbox"
                                value=""
                                id="form2Example3c"
                              />
                              <label
                                class="form-check-label"
                                for="form2Example3"
                              >
                                I agree all statements in{" "}
                                <a href="#!">Terms of service</a>
                              </label>
                            </div>

                            <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-2 ">
                              <button
                                type="submit"
                                class="btn btn-primary btn-lg"
                                style={{
                                  backgroundColor: "#FF2625",
                                  borderColor: "#FF2625",
                                }}
                              >        
                                Register
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