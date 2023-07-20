import Navbar from "../Nav bar";
import Sidebar from "../Sidebar";
import Footer2 from "../Footer2";
import { Link } from "react-router-dom";
import { Get, Post, fileurl } from "../../Service/Api";
import { useEffect, useState } from "react";
import { convertTo12HourFormat } from "../../Service/Util";
function PracticalView() {
  const [exams, setExams] = useState([]);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    Get("getallpracticalsession").then((data) => {
      setExams(data);
    });
  }, [refresh]);

  const deleteTimetable = (id) => {
    let param = {
      tablename: "practical_sessions",
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
              <h6 className="mb-0"> Practical Sessions</h6>
              <Link to="/addpractical">Add Practical Sessions</Link>
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
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {exams.map((value) => {
                    return (
                      <tr>
                        <td>{value.practical_sessiontitle} </td>
                        <td> {value.title}</td>
                        <td> {value.venuename}</td>
                        <td> {value.date}</td>
                        <td>{convertTo12HourFormat(value.time)}</td>
                        <td>
                          <Link
                            to="/editpractical"
                            className="btn btn-success"
                            style={{ marginRight: 12 }}
                            state={{ id: value.practical_sessionid }}
                          >
                            Edit
                          </Link>
                          <button
                            className="btn btn-danger"
                            onClick={(e) => {
                              deleteTimetable(value.practical_sessionid);
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

export default PracticalView;
