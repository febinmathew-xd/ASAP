import { Link } from "react-router-dom";
import { Get, Post } from "../Service/Api";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Nav bar";
import Footer2 from "./Footer2";

function JobadminView() {
  const [teachers, setTeachers] = useState([]);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    Post("getall", { tablename: "jobadmin" }).then((data) => {
      setTeachers(data);
    });
  }, [refresh]);

  const deleteTeacher = (id) => {
    Post("deleteuser", { tablename: "jobadmin", id: id }).then((data) => {
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
              <h6 className="mb-0">Teacher Details</h6>
              <Link to="/jobadminadd">Add new</Link>
            </div>
            <div className="table-responsive">
              <table className="table text-start align-middle table-bordered table-hover mb-0">
                <thead>
                  <tr className="text-white">
                    <th scope="col">Name</th>
                    <th scope="col">Contact</th>
                    <th scope="col">Action</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {teachers.map((value, index) => {
                    return (
                      <tr key={index}>
                        <td>{value.username}</td>
                        <td>{value.contact}</td>

                        <td>
                          <Link
                            className="btn btn-sm btn-success"
                            to="/jobadminedit"
                            state={{ id: value.loginid }}
                          >
                            Edit
                          </Link>
                        </td>
                        <td>
                          <button
                            className="btn btn-sm btn-primary"
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

export default JobadminView;
