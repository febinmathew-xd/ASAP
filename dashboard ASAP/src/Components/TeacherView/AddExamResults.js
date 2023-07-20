import Navbar from "../Nav bar";
import Sidebar from "../Sidebar";
import { useEffect, useState } from "react";
import { Post, handlefileupload } from "../../Service/Api";
import { useLocation, useNavigate } from "react-router-dom";

function AddExamResults() {
  const [students, setStudents] = useState([]);
  const [studentId, setStudentID] = useState();
  const [marks, setMarks] = useState();
  const [exams, setExams] = useState([]);
  const [remarks, setRemarks] = useState();
  const [examId, setExamID] = useState();
  const navigate = useNavigate();

  const save = () => {
    const userdata = JSON.parse(localStorage.getItem("userdata"));

    let param = {
      tablename: "exam_results",
      studentid: studentId,
      examid: examId,
      teacherid: userdata.loginid,
      marks: marks,
      remarks: remarks,
    };

    Post("save", param).then((data) => {
      navigate("/examresultsview");
    });
  };

  useEffect(() => {
    const userdata = JSON.parse(localStorage.getItem("userdata"));

    let param = {
      courseid: userdata.courseid,
      tablename: "student",
    };

    Post("getbydata", param).then((data) => {
      setStudents(data);
    });
    Post("getall", { tablename: "exams" }).then((data) => {
      setExams(data);
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
            <h6 className="mb-4">Exam Results</h6>
            <div className="form-floating mb-3">
              <select
                onChange={(e) => setStudentID(e.target.value)}
                className="form-select"
                id="floatingSelect"
              >
                <option>Select Student</option>
                {students.map((value) => {
                  return (
                    <option value={value.loginid}>{value.username}</option>
                  );
                })}
              </select>
              <label for="floatingSelect">Select Student</label>
            </div>
            <div className="form-floating mb-3">
              <select
                onChange={(e) => setExamID(e.target.value)}
                className="form-select"
                id="floatingSelect"
              >
                <option>Select Exam</option>
                {exams.map((value) => {
                  return <option value={value.id}>{value.title}</option>;
                })}
              </select>
              <label for="floatingSelect">Select Student</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="number"
                className="form-control"
                id="floatingInput"
                onChange={(e) => setMarks(e.target.value)}
                placeholder="Marks"
              />
              <label for="floatingInput"> Marks Obtained </label>
            </div>
            <div className="form-floating mb-3">
              <textarea
                className="form-control"
                id="floatingInput"
                onChange={(e) => setRemarks(e.target.value)}
                placeholder="Remarks"
              />
              <label for="floatingInput">Remarks</label>
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
export default AddExamResults;
