import { useEffect, useState } from "react";
import { Post } from "../Api";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function Signin() {
  const [username, setusername] = useState();
  const [password, setpassword] = useState();
  const [refresh, setrefresh] = useState(0);
  const navigate = useNavigate();

  const save = () => {
    let param = {
      email: username,
      password: password,
    };
    Post("login", param).then((data) => {
      if ((data.usertype == 1 || data.usertype == 4) && data?.isapproved == 1) {
        toast.success("Welcome Back");

        localStorage.setItem("userdata", JSON.stringify(data));

        localStorage.setItem("userid", data.loginid);
        localStorage.setItem("usertype", data.usertype);

        setTimeout(() => {
          window.location.href = "/";
        }, 100);
      } else {
        toast.error("oops!, Invalid User");
      }
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
            <span class="login100-form-logo">
              <i class="zmdi zmdi-landscape"></i>
            </span>

            <span class="login100-form-title p-b-34 p-t-27">Log in</span>

            <div
              class="wrap-input100 validate-input"
              data-validate="Enter username"
            >
              <input
                class="input100"
                type="text"
                onChange={(event) => setusername(event.target.value)}
                name="username"
                placeholder="Username"
              />
              <span class="focus-input100" data-placeholder="&#xf207;"></span>
            </div>

            <div
              class="wrap-input100 validate-input"
              data-validate="Enter password"
            >
              <input
                class="input100"
                type="password"
                onChange={(event) => setpassword(event.target.value)}
                name="pass"
                placeholder="Password"
              />
              <span class="focus-input100" data-placeholder="&#xf191;"></span>
            </div>

            <div class="contact100-form-checkbox">
              <input
                class="input-checkbox100"
                id="ckb1"
                type="checkbox"
                name="remember-me"
              />
              <label class="label-checkbox100" for="ckb1">
                Remember me
              </label>
            </div>

            <div class="container-login100-form-btn">
              <button
                class="login100-form-btn"
                onClick={() => {
                  save();
                }}
              >
                Login
              </button>
            </div>
            <div class="container-login100-form-btn mt-5">
              <button
                class="login100-form-btn"
                onClick={() => {
                  navigate("/studreg");
                }}
              >
                New User?
              </button>
            </div>

            <div class="text-center p-t-90">
              <a class="txt1" href="#">
                Forgot Password?
              </a>
            </div>
          </div>
        </div>
      </div>

      <div id="dropDownSelect1"></div>
    </>
  );
}
export default Signin;
