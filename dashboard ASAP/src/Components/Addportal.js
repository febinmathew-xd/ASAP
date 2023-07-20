import Sidebar from "./Sidebar";
import Navbar from "./Nav bar";
import { useEffect, useState } from "react";
import { Post } from "../Service/Api";
import { useNavigate } from "react-router-dom";
function Addportal() {
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
    };

    Post("saveuser", param).then((data) => {
      navigate("/CorporateView");
    });
  };
  return (
    <div className="container-fluid position-relative d-flex p-0">
      <div className="content">
        <Sidebar />
        <Navbar />

        <div
          className="col-sm-12 col-xl-11"
          style={{ marginLeft: "30px", marginTop: "20px" }}
        >
          <div className="bg-secondary rounded h-100 p-4">
            <h6 className="mb-4">ADD JOB DETAILS</h6>
            <div className="form-floating mb-3">
              <input
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput"> Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                onChange={(e) => setAddress(e.target.value)}
              />
              <label for="floatingInput">Address</label>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={(e) => setContact(e.target.value)}
                type="number"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Contact</label>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label for="floatingPassword">Password</label>
            </div>
            <div className="form-floating">
              <textarea
                onChange={(e) => setDescription(e.target.value)}
                className="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea"
                style={{ height: "150px" }}
              ></textarea>
              <label for="floatingTextarea">Description</label>
            </div>
            <br></br>
            <button onClick={() => save()} className="btn btn-success">
              {" "}
              Save{" "}
            </button>{" "}
            &nbsp; &nbsp;
          </div>
        </div>
        {/* <Footer2/> */}
      </div>
    </div>
  );
}
export default Addportal;
