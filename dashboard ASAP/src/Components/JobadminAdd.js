import Sidebar from "./Sidebar";
import Navbar from "./Nav bar";
import Footer2 from "./Footer2";
import { useEffect, useState } from "react";
import { Post } from "../Service/Api";
import { useNavigate } from "react-router-dom";

function JobadminAdd() {
  const [courses, setCourses] = useState([]);
  const [username, setUsername] = useState();
  const [contact, setContact] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [courseid, setCourseid] = useState();
  const [qualification, setQualification] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    Post("getall", { tablename: "courses" }).then((data) => {
      setCourses(data);
    });
  }, []);
  const save = () => {
    let param = {
      tablename: "jobadmin",
      username: username,
      username: username,
      usertype: 6,
      contact: contact,
      email: email,
      password: password,
    };

    Post("saveuser", param).then((data) => {
      navigate("/jobadminview");
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
            <h6 className="mb-4">Add Teacher</h6>
            <div className="form-floating mb-3">
              <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                className="form-control"
                id="floatingInput"
                placeholder="Username"
              />
              <label for="floatingInput">Username</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="number"
                className="form-control"
                id="floatingInput"
                placeholder="Contact"
                onChange={(e) => setContact(e.target.value)}
              />
              <label for="floatingInput">Contact</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                onChange={(e) => setEmail(e.target.value)}
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
            <button
              className="btn btn-success"
              onClick={(e) => {
                save();
              }}
            >
              {" "}
              Save{" "}
            </button>{" "}
            &nbsp; &nbsp;
          </div>
        </div>
        <Footer2 />
      </div>
    </div>
  );
}

export default JobadminAdd;
