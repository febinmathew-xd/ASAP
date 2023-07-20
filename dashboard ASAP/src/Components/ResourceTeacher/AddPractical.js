import Navbar from "../Nav bar";
import Sidebar from "../Sidebar";
import { useEffect, useState } from "react";
import { Post, handlefileupload } from "../../Service/Api";
import { useLocation, useNavigate } from "react-router-dom";

function AddPractical() {
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [courses, setCourses] = useState([]);
  const [venues, setVenues] = useState([]);
  const [courseid, setCourseid] = useState();
  const [venueid, setVenueid] = useState();

  const navigate = useNavigate();

  const save = () => {
    const userdata = JSON.parse(localStorage.getItem("userdata"));

    let param = {
      tablename: "practical_sessions",
      courseid: courseid,
      venueid: venueid,
      date: date,
      time: time,
      title: title,
      description: description,
    };

    Post("save", param).then((data) => {
      navigate("/practicalview");
    });
  };

  useEffect(() => {
    Post("getall", { tablename: "courses" }).then((data) => {
      setCourses(data);
    });
    Post("getall", { tablename: "venue" }).then((data) => {
      setVenues(data);
    });
  }, []);

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
            <h6 className="mb-4">Add Exams</h6>
            <div className="form-floating mb-3">
              <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                className="form-control"
                id="floatingInput"
                placeholder="Title"
              />
              <label for="floatingInput">Title</label>
            </div>
            <div className="form-floating mb-3">
              <textarea
                onChange={(e) => setDescription(e.target.value)}
                className="form-control"
                id="floatingInput"
                placeholder="Description"
              />
              <label for="floatingInput">Description</label>
            </div>
            <div className="form-floating mb-3">
              <select
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
                onChange={(e) => setVenueid(e.target.value)}
                className="form-select"
                id="floatingSelect"
              >
                <option>Select Venue</option>
                {venues.map((value) => {
                  return <option value={value.id}>{value.venuename}</option>;
                })}
              </select>
              <label for="floatingSelect">Select Venue</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="date"
                onChange={(e) => setDate(e.target.value)}
                className="form-control"
                id="floatingInput"
                placeholder="Date"
              />
              <label for="floatingInput">Date</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="time"
                className="form-control"
                id="floatingInput"
                onChange={(e) => setTime(e.target.value)}
                placeholder="Time"
              />
              <label for="floatingInput">Time</label>
            </div>
            <button
              className="btn btn-success"
              onClick={(e) => {
                save();
              }}
            >
              Save
            </button>
            &nbsp; &nbsp;
          </div>
        </div>
        {/* <Footer2/> */}
      </div>
    </div>
  );
}
export default AddPractical;
