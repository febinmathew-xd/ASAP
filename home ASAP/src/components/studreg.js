import React, { useEffect, useState } from "react";
import Select from "react-select";
import { Link, useNavigate } from "react-router-dom";
import { Post } from "../Api";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

function Studreg() {
  const [courses, setCourses] = useState([]);
  const [username, setUsername] = useState();
  const [contact, setContact] = useState();
  const [age, setAge] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [courseid, setCourseid] = useState();
  const [qualification, setQualification] = useState();
  const navigate = useNavigate();

  const qualificationlist = [
    { label: "SSLC", value: "SSLC" },
    { label: "Diploma", value: "Diploma" },
    { label: "Plus Two", value: "Plus Two" },
    { label: "Under Graduate", value: "Under Graduate" },
    { label: "Post Graduate", value: "Post Graduate" },
  ];

  useEffect(() => {
    Post("getall", { tablename: "courses" }).then((data) => {
      setCourses(data);
    });
  }, []);

  const save = () => {
    let param = {
      tablename: "student",
      username: username,
      usertype: 1,
      contact: contact,
      email: email,
      age: age,
      password: password,
      courseid: courseid,
      qualification: qualification,
      isapproved: 0,
    };

    Post("saveuser", param).then((data) => {
      navigate("/");
      toast.success("Registration Successful, Wait for Admin Approval");
    });
  };

  return (
    <>
      <link rel="stylesheet" type="text/css" href="css/util.css" />
      <link rel="stylesheet" type="text/css" href="css/main.css" />
      <div class="limiter">
        <ToastContainer />
        <div
          class="container-login100"
          style={{ backgroundImage: "url('images/bg-01.jpg')" }}
        >
          <div class="wrap-login100">
            <span class="login100-form-title p-b-34 p-t-27">
              Student Register
            </span>

            <div
              class="wrap-input100 validate-input"
              data-validate="Enter name"
            >
              <input
                onChange={(e) => setUsername(e.target.value)}
                class="input100"
                type="text"
                name="username"
                placeholder="Name"
              />
              <span class="focus-input100" data-placeholder="&#xf207;"></span>
            </div>

            <div
              class="wrap-input100 validate-input"
              data-validate="Enter email"
            >
              <input
                onChange={(e) => setEmail(e.target.value)}
                class="input100"
                type="email"
                name="email"
                placeholder="Email"
              />
              <span class="focus-input100" data-placeholder="&#xf207;"></span>
            </div>
            <div
              class="wrap-input100 validate-input"
              data-validate="Enter mobileno"
            >
              <input
                onChange={(e) => setContact(e.target.value)}
                class="input100"
                type="number"
                name="mobileno"
                placeholder="MobileNo"
              />
              <span class="focus-input100" data-placeholder="&#xf207;"></span>
            </div>
            <div
              class="wrap-input100 validate-input"
              data-validate="Enter mobileno"
            >
              <input
                onChange={(e) => setAge(e.target.value)}
                class="input100"
                type="number"
                name="mobileno"
                placeholder="Age"
              />
              <span class="focus-input100" data-placeholder="&#xf207;"></span>
            </div>

            <div>
              <div className="container">
                <div className="row">
                  <div className="col-md-4"></div>

                  <select
                    className="form-control"
                    onChange={(e) => setQualification(e.target.value)}
                  >
                    <option>Select Qualification</option>
                    {qualificationlist.map((elem) => {
                      return <option value={elem.value}>{elem.label}</option>;
                    })}
                  </select>
                </div>
              </div>
            </div>
            <div>
              <div className="container mt-4 mb-4">
                <div className="row">
                  <div className="col-md-4"></div>

                  <select
                    onChange={(e) => setCourseid(e.target.value)}
                    className="form-control"
                  >
                    <option>Select Course</option>
                    {courses.map((elem) => {
                      return <option value={elem.id}>{elem.title}</option>;
                    })}
                  </select>
                </div>
              </div>
            </div>
            <div
              class="wrap-input100 validate-input"
              data-validate="Enter password"
            >
              <input
                onChange={(e) => setPassword(e.target.value)}
                class="input100"
                type="password"
                name="pass"
                placeholder="Password"
              />
              <span class="focus-input100" data-placeholder="&#xf191;"></span>
            </div>
            {/* <div
              class="wrap-input100 validate-input"
              data-validate="Enter password"
            >
              <input
               
                class="input100"
                type="password"
                name="pass"
                placeholder="ConfirmPassword"
              />
              <span class="focus-input100" data-placeholder="&#xf191;"></span>
            </div> */}

            <div class="container-login100-form-btn">
              <button
                onClick={(e) => {
                  save();
                }}
                class="login100-form-btn"
              >
                Register
              </button>
            </div>
            <br></br>
            <div class="container-login100-form-btn">
              <Link to="/Corporatereg">
                <button class="login100-form-btn">Register Corporate </button>{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div id="dropDownSelect1"></div>
    </>
  );
}

export default Studreg;
