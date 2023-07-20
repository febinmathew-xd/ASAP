import Navbar from "../Nav bar";
import Sidebar from "../Sidebar";
import { useEffect, useState } from "react";
import { Post, handlefileupload } from "../../Service/Api";
import { useLocation, useNavigate } from "react-router-dom";

function EditTimetable() {
  const [date, setDate] = useState([]);
  const [time, setTime] = useState();
  const [courses, setCourses] = useState([]);
  const [courseid, setCourseid] = useState();

  const location = useLocation();
  const navigate = useNavigate();

  const save = () => {
    const userdata = JSON.parse(localStorage.getItem("userdata"));

    let param = {
      tablename: "timetable",
      id: location.state.id,
      courseid: courseid,
      date: date,
      time: time,
    };

    Post("update", param).then((data) => {
      navigate("/timetableview");
    });
  };

  useEffect(() => {
    let param = {
      id: location.state.id,
      tablename: "timetable",
    };
    Post("getbyid", param).then((data) => {
      setCourseid(data.courseid);
      setDate(data.date);
      setTime(data.time);
    });
    Post("getall", { tablename: "courses" }).then((data) => {
      setCourses(data);
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
            <h6 className="mb-4">Add Teacher</h6>
            <div className="form-floating mb-3">
              <input
                type="date"
                onChange={(e) => setDate(e.target.value)}
                className="form-control"
                id="floatingInput"
                placeholder="Date"
                value={date}
              />
              <label for="floatingInput">Date</label>
            </div>
            <div className="form-floating mb-3">
              <input
                value={time}
                type="time"
                className="form-control"
                id="floatingInput"
                onChange={(e) => setTime(e.target.value)}
                placeholder="Time"
              />
              <label for="floatingInput">Time</label>
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
export default EditTimetable;
