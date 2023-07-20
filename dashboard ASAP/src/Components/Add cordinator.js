import Sidebar from "./Sidebar";
import Navbar from "./Nav bar";
import { useEffect, useState } from "react";
import { Post } from "../Service/Api";
import { useNavigate } from "react-router-dom";
function Addcordinator() {
  const [username, setUsername] = useState();
  const [contact, setContact] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [courseid, setCourseid] = useState();
  const [qualification, setQualification] = useState();
  const navigate = useNavigate();
  const save = () => {
    let param = {
      tablename: "resource_teacher",
      username: username,
      usertype: 3,
      contact: contact,
      email: email,
      password: password,
      courseid: courseid,
      qualification: qualification,
    };

    Post("saveuser", param).then((data) => {
      navigate("/cordinatorview");
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
            <h6 className="mb-4">Add cordinator</h6>
            <div className="form-floating mb-3">
              <input
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Username</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="number"
                onChange={(e) => setContact(e.target.value)}
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
            <div className="form-floating mb-3">
              <select
                onChange={(e) => setQualification(e.target.value)}
                className="form-select"
                id="floatingSelect"
              >
                <option selected>Qualification</option>
                <option value="PhD">PhD</option>
                <option value="PG">Post Graduate</option>
                <option value="UG">Under Graduate</option>
                <option value="Plus Two">Plus Two</option>
                <option value="Diploma">Diploma</option>
              </select>
              <label for="floatingSelect">Select Qualification</label>
            </div>
            <button onClick={() => save()} className="btn btn-success">
              {" "}
              Save{" "}
            </button>{" "}
            &nbsp; &nbsp; &nbsp;
          </div>
        </div>
        {/* <Footer2/> */}
      </div>
    </div>
  );
}
export default Addcordinator;
