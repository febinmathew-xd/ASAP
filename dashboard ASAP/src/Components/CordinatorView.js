import Sidebar from "./Sidebar";
import Navbar from "./Nav bar";
import Sales from "./Sales";
import Saleschart from "./Saleschart";
import Recentsale from "./Recentsale";
import Widget from "./Widget";
import Footer2 from "./Footer2";
import { Link } from "react-router-dom";
import { Get, Post } from "../Service/Api";
import { useEffect, useState } from "react";
function CordinatorView() {
  const [teachers, setTeachers] = useState([]);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    Post("getall", { tablename: "resource_teacher" }).then((data) => {
      setTeachers(data);
    });
  }, [refresh]);

  const deleteTeacher = (id) => {
    Post("deleteuser", { tablename: "resource_teacher", id: id }).then(
      (data) => {
        setRefresh((prev) => prev + 1);
      }
    );
  };
  return (
    <div className="container-fluid position-relative d-flex p-0">
      <div className="content">
        <Sidebar />
        <Navbar />

        <div className="container-fluid pt-4 px-4">
          <div className="bg-secondary text-center rounded p-4">
            <div className="d-flex align-items-center justify-content-between mb-4">
              <h6 className="mb-0">Cordinator Details</h6>
              <Link to="/addcordinator">Add new</Link>
            </div>
            <div className="table-responsive">
              <table className="table text-start align-middle table-bordered table-hover mb-0">
                <thead>
                  <tr className="text-white">
                    <th scope="col">Name</th>
                    <th scope="col">Contact</th>
                    <th scope="col">Qualification</th>

                    <th scope="col">Action</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {teachers.map((value) => {
                    return (
                      <tr>
                        <td>{value.username}</td>
                        <td>{value.contact}</td>
                        <td>{value.qualification}</td>

                        <td>
                          <Link
                            className="btn btn-sm btn-success"
                            to="/editcordinator"
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

export default CordinatorView;
