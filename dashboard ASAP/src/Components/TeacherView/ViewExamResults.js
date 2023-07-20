import Navbar from "../Nav bar";
import Sidebar from "../Sidebar";
import Footer2 from "../Footer2";
import { Link } from "react-router-dom";
import { Post, fileurl } from "../../Service/Api";
import { useEffect, useState } from "react";
function ViewExamResults() {
  const [results, setResults] = useState([]);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    let info = JSON.parse(localStorage.getItem("userdata"));

    let param = {
      id: info.loginid,
    };

    Post("getstudentsresults", param).then((data) => {
      setResults(data);
    });
  }, [refresh]);

  const deleteResults = (id) => {
    let param = {
      tablename: "exam_results",
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
              <h6 className="mb-0"> Student Results</h6>
              <Link to="/addexamresults">Add Result</Link>
            </div>
            <div className="table-responsive">
              <table className="table text-start align-middle table-bordered table-hover mb-0">
                <thead>
                  <tr className="text-white">
                    <th scope="col">Student</th>
                    <th scope="col">Exam</th>
                    <th scope="col">Total Marks </th>
                    <th scope="col">Marks Needed To Pass</th>
                    <th scope="col">Marks Obtained</th>
                    <th scope="col">Remarks</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((value) => {
                    return (
                      <tr>
                        <td> {value.username} </td>
                        <td> {value.title} </td>
                        <td> {value.total_marks} </td>
                        <td> {value.passing_marks} </td>
                        <td> {value.marks} </td>
                        <td> {value.remarks} </td>

                        <td>
                          <Link
                            to="/editexamresults"
                            className="btn btn-success"
                            style={{ marginRight: 12 }}
                            state={{ id: value.resultid }}
                          >
                            Edit
                          </Link>
                          <button
                            className="btn btn-danger"
                            onClick={(e) => {
                              deleteResults(value.resultid);
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

export default ViewExamResults;
