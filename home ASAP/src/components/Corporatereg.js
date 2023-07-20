import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Post } from "../Api";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

function Corporatereg() {
  const [username, setUsername] = useState();
  const [contact, setContact] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [address, setAddress] = useState();
  const [description, setDescription] = useState();
  const navigate = useNavigate();
  const save = () => {
    let param = {
      tablename: "corporate",
      username: username,
      usertype: 4,
      contact: contact,
      email: email,
      password: password,
      address: address,
      description: description,
      isapproved: 0,
    };

    Post("saveuser", param).then((data) => {
      navigate("/");
      toast.success("Registration Successful, Wait for Admin Approval");
    });
  };
  return (
    <div class="limiter">
      <ToastContainer />
      <div
        class="container-login100"
        style={{ backgroundImage: "url('images/bg-01.jpg')" }}
      >
        <div class="wrap-login100">
          <span class="login100-form-title p-b-34 p-t-27">
            Corporate Register
          </span>

          <div class="wrap-input100 validate-input" data-validate="Enter name">
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
            data-validate="Enter address"
          >
            <textarea
              onChange={(e) => setAddress(e.target.value)}
              class="input100"
              name="address"
              placeholder="Address"
            ></textarea>
            <span class="focus-input100" data-placeholder="&#xf207;"></span>
          </div>
          <div
            class="wrap-input100 validate-input"
            data-validate="Enter address"
          >
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              class="input100"
              name="address"
              placeholder="Description"
            ></textarea>
            <span class="focus-input100" data-placeholder="&#xf207;"></span>
          </div>

          <div class="wrap-input100 validate-input" data-validate="Enter email">
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

          <div class="container-login100-form-btn">
            <button class="login100-form-btn" onClick={() => save()}>
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Corporatereg;
