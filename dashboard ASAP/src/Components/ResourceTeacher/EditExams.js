import Navbar from "../Nav bar";
import Sidebar from "../Sidebar";
import { useEffect, useState } from "react";
import { Post, handlefileupload } from "../../Service/Api";
import { useLocation, useNavigate } from "react-router-dom";

function AddExams() {
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [courses, setCourses] = useState([]);
  const [venues, setVenues] = useState([]);
  const [courseid, setCourseid] = useState();
  const [venueid, setVenueid] = useState();
  const [passmarks, setPassmarks] = useState();
  const [totalmarks, setTotalmarks] = useState();

  const location = useLocation();
  const navigate = useNavigate();

  const save = () => {
    const userdata = JSON.parse(localStorage.getItem("userdata"));

    let param = {
      tablename: "exams",
      courseid: courseid,
      venueid: venueid,
      date: date,
      time: time,
      title: title,
      description: description,
      id: location.state.id,
      total_marks: totalmarks,
      passing_marks: passmarks,
    };

    Post("update", param).then((data) => {
      navigate("/examsview");
    });
  };

  useEffect(() => {
    Post("getall", { tablename: "courses" }).then((data) => {
      setCourses(data);
    });
    Post("getall", { tablename: "venue" }).then((data) => {
      setVenues(data);
    });
    Post("getbyid", { tablename: "exams", id: location.state.id }).then(
      (data) => {
        setCourseid(data.courseid);
        setVenueid(data.venueid);
        setDate(data.date);
        setTime(data.time);
        setTitle(data.title);
        setDescription(data.description);
        setTotalmarks(data.total_marks);
        setPassmarks(data.passing_marks);
      }
    );
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
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="form-control"
                id="floatingInput"
                placeholder="Title"
              />
              <label for="floatingInput">Title</label>
            </div>
            <div className="form-floating mb-3">
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="form-control"
                id="floatingInput"
                placeholder="Description"
              />
              <label for="floatingInput">Description</label>
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
                value={venueid}
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
                value={date}
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
                value={time}
                className="form-control"
                id="floatingInput"
                onChange={(e) => setTime(e.target.value)}
                placeholder="Time"
              />
              <label for="floatingInput">Time</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="number"
                className="form-control"
                id="floatingInput"
                value={totalmarks}
                onChange={(e) => setTotalmarks(e.target.value)}
                placeholder="Time"
              />
              <label for="floatingInput">Total Marks</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="number"
                className="form-control"
                id="floatingInput"
                value={passmarks}
                onChange={(e) => setPassmarks(e.target.value)}
                placeholder="Time"
              />
              <label for="floatingInput"> Passing Marks </label>
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
export default AddExams;
