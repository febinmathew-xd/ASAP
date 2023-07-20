import Navbar from "../Nav bar";
import Sidebar from "../Sidebar";
import Footer2 from "../Footer2";
import { Link } from "react-router-dom";
import { Get, Post, fileurl } from "../../Service/Api";
import { useEffect, useState } from "react";
import { convertTo12HourFormat } from "../../Service/Util";
function ExamsView() {
  const [exams, setExams] = useState([]);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    Get("getallexams").then((data) => {
      setExams(data);
    });
  }, [refresh]);

  const deleteTimetable = (id) => {
    let param = {
      tablename: "exams",
      id: id,
    };

    Post("delete", param).then((data) => {
      setRefresh((prev) => prev + 1);
    });
  };

  return (
    <div className="container-fluid position-relative d-flex p-0">
      <div className="content">
        <Sidebar />
        <Navbar />

        <div className="container-fluid pt-4 px-4">
          <div className="bg-secondary text-center rounded p-4">
            <div className="d-flex align-items-center justify-content-between mb-4">
              <h6 className="mb-0"> Exams</h6>
              <Link to="/addexams">Add Exams</Link>
            </div>
            <div className="table-responsive">
              <table className="table text-start align-middle table-bordered table-hover mb-0">
                <thead>
                  <tr className="text-white">
                    <th scope="col">Title</th>
                    <th scope="col">Course</th>
                    <th scope="col">Venue</th>
                    <th scope="col">Date</th>
                    <th scope="col">Time</th>
                    <th scope="col">Total Marks</th>
                    <th scope="col">Passing Marks</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {exams.map((value) => {
                    return (
                      <tr>
                        <td>{value.examtitle} </td>
                        <td> {value.title}</td>
                        <td> {value.venuename}</td>
                        <td> {value.date}</td>
                        <td>{convertTo12HourFormat(value.time)}</td>
                        <td> {value.total_marks}</td>
                        <td> {value.passing_marks}</td>
                        <td>
                          <Link
                            to="/editexams"
                            className="btn btn-success"
                            style={{ marginRight: 12 }}
                            state={{ id: value.examid }}
                          >
                            Edit
                          </Link>
                          <button
                            className="btn btn-danger"
                            onClick={(e) => {
                              deleteTimetable(value.examid);
                            }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <Footer2 />
      </div>
    </div>
  );
}

export default ExamsView;
