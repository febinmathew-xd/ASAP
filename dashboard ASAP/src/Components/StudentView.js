import Sidebar from "./Sidebar";
import Navbar from "./Nav bar";
import Footer2 from "./Footer2";
import { Link } from "react-router-dom";
import { Get, Post } from "../Service/Api";
import { useEffect, useState } from "react";
function StudentView() {
  const [students, setStudents] = useState([]);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    Post("getstudents", { tablename: "teacher" }).then((data) => {
      setStudents(data);
    });
  }, [refresh]);

  const deleteTeacher = (id) => {
    Post("deleteuser", { tablename: "student", id: id }).then((data) => {
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
              <h6 className="mb-0"> Student Details</h6>
              <Link to="/Addstudent">Add new</Link>
            </div>
            <div className="table-responsive">
              <table className="table text-start align-middle table-bordered table-hover mb-0">
                <thead>
                  <tr className="text-white">
                    <th scope="col">Student name</th>
                    <th scope="col">Course</th>
                    <th scope="col">Contact</th>
                    <th scope="col">Qualification</th>
                    <th scope="col">Age</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((value) => {
                    return (
                      <tr>
                        <td>{value.username} </td>
                        <td>{value.title} </td>
                        <td> {value.contact}</td>
                        <td> {value.qualification}</td>
                        <td> {value.age}</td>
                        <td>
                          {" "}
                          {value.isapproved == 0 ? "Not Approved" : "Approved"}
                        </td>
                        <td>
                          <Link
                            className="btn btn-warning btn-primary"
                            to="/ViewStudent"
                            state={{ id: value.loginid }}
                          >
                            View
                          </Link>
                        </td>
                        <td>
                          <button
                            className="btn btn-danger btn-primary"
                            onClick={() => deleteTeacher(value.loginid)}
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

export default StudentView;
