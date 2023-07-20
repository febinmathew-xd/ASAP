import Sidebar from "./Sidebar";
import Navbar from "./Nav bar";
import Footer2 from "./Footer2";
import { useEffect, useState } from "react";
import { Post } from "../Service/Api";
import { useLocation, useNavigate } from "react-router-dom";

function EditTeacher() {
  const [courses, setCourses] = useState([]);
  const [username, setUsername] = useState();
  const [contact, setContact] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [courseid, setCourseid] = useState();
  const [qualification, setQualification] = useState();
  const [userdata, setUserdata] = useState();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    Post("getall", { tablename: "courses" }).then((data) => {
      setCourses(data);
    });

    let param = {
      tablename: "teacher",
      loginid: location.state.id,
    };

    Post("getuserbyid", param).then((data) => {
      setUsername(data.username);
      setContact(data.contact);
      setEmail(data.email);
      setCourseid(data.courseid);
      setQualification(data.qualification);
    });
  }, []);
  const save = () => {
    let param = {
      tablename: "teacher",
      username: username,
      contact: contact,
      email: email,
      courseid: courseid,
      qualification: qualification,
      id: location.state.id,
    };

    Post("updateuser", param).then((data) => {
      navigate("/");
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
                value={username}
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
                value={contact}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <select
                value={courseid}
                onChange={(e) => setCourseid(e.target.value)}
                className="form-select"
                id="floatingSelect"
              >
                <option>Select Course</option>
                {courses.map((value) => {
                  return <option value={value.id}>{value.title}</option>;
                })}
              </select>
              <label for="floatingSelect">Select Course</label>
            </div>
            <div className="form-floating mb-3">
              <select
                value={qualification}
                onChange={(e) => setQualification(e.target.value)}
                className="form-select"
                id="floatingSelect"
              >
                <option selected>Qualification</option>
                <option value="PG">Post Graduate</option>
                <option value="UG">Under Graduate</option>
                <option value="Plus Two">PlusTwo</option>
                <option value="Diploma">Diploma</option>
              </select>
              <label for="floatingSelect">Select Qualification</label>
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

export default EditTeacher;
