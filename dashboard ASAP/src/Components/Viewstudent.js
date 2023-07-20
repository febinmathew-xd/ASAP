import Sidebar from "./Sidebar";
import Navbar from "./Nav bar";
import Footer2 from "./Footer2";
import { useEffect, useState } from "react";
import { Post } from "../Service/Api";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function ViewStudent() {
  const [courses, setCourses] = useState([]);
  const [username, setUsername] = useState();
  const [contact, setContact] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();
  const [password, setPassword] = useState();
  const [courseid, setCourseid] = useState();
  const [qualification, setQualification] = useState();
  const [userdata, setUserdata] = useState();
  const [userid, setUserid] = useState();
  const [isapproved, setisapproved] = useState();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    Post("getall", { tablename: "courses" }).then((data) => {
      setCourses(data);
    });

    let param = {
      tablename: "student",
      loginid: location.state.id,
    };

    Post("getuserbyid", param).then((data) => {
      setUsername(data.username);
      setUserid(data.id);
      setContact(data.contact);
      setEmail(data.email);
      setCourseid(data.courseid);
      setQualification(data.qualification);
      setAge(data.age);
      setisapproved(data.isapproved);
    });
  }, []);
  const save = () => {
    let param = {
      tablename: "student",
      username: username,
      contact: contact,
      email: email,
      courseid: courseid,
      qualification: qualification,
      id: location.state.id,
    };

    Post("updateuser", param).then((data) => {
      navigate("/StudentView");
    });
  };

  const approve = (status) => {
    let param = {
      tablename: "student",
      isapproved: status,
      id: userid,
    };

    Post("update", param).then((data) => {
      // navigate("/StudentViewe");
      if (status == 1) {
        toast("Approved");
      } else {
        toast("Not Approved");
      }
      setTimeout(() => {
        navigate("/StudentView");
      }, 1000);
    });
  };
  return (
    <div className="container-fluid position-relative d-flex p-0">
      <div className="content">
        <Sidebar />
        <Navbar />
        <ToastContainer />
        <div
          className="col-sm-12 col-xl-11"
          style={{ marginLeft: "30px", marginTop: "20px" }}
        >
          <div className="bg-secondary rounded h-100 p-4">
            <h6 className="mb-4">Add Student</h6>
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
                type="number"
                className="form-control"
                id="floatingInput"
                value={contact}
                placeholder="Contact"
                onChange={(e) => setAge(e.target.value)}
              />
              <label for="floatingInput">Age</label>
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
                <option value="Post Graduate">Post Graduate</option>
                <option value="Under Graduate">Under Graduate</option>
                <option value="Plus Two">PlusTwo</option>
                <option value="Diploma">Diploma</option>
                <option value="SSLC">SSLC</option>
              </select>
              <label for="floatingSelect">Select Qualification</label>
            </div>
            {isapproved == 1 ? (
              <button
                className="btn btn-success"
                onClick={(e) => {
                  save();
                }}
              >
                {" "}
                Save
              </button>
            ) : (
              <>
                <button
                  className="btn btn-success"
                  onClick={(e) => {
                    approve(1);
                  }}
                >
                  Approve
                </button>
                <button
                  className="btn btn-danger"
                  style={{ marginLeft: 12 }}
                  onClick={(e) => {
                    approve(0);
                  }}
                >
                  Reject
                </button>
              </>
            )}
            &nbsp; &nbsp;
          </div>
        </div>
        <Footer2 />
      </div>
    </div>
  );
}

export default ViewStudent;
