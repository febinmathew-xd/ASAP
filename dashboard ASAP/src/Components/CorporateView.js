import Sidebar from "./Sidebar";
import Navbar from "./Nav bar";
import Sales from "./Sales";
import Saleschart from "./Saleschart";
import Recentsale from "./Recentsale";
import Widget from "./Widget";
import Footer2 from "./Footer2";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Post } from "../Service/Api";
import { useNavigate } from "react-router-dom";

function CorporateView() {
  const [corporate, setCorporate] = useState([]);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    Post("getall", { tablename: "corporate" }).then((data) => {
      setCorporate(data);
    });
  }, [refresh]);
  const deleteUser = (id) => {
    Post("deleteuser", { tablename: "corporate", id: id }).then((data) => {
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
              <h6 className="mb-0">CORPORATE JOB DETAILS</h6>
              <Link to="/Addportal">Add new</Link>
            </div>
            <div className="table-responsive">
              <table className="table text-start align-middle table-bordered table-hover mb-0">
                <thead>
                  <tr className="text-white">
                    <th scope="col">Name</th>
                    <th scope="col">Address </th>

                    <th scope="col">Contact </th>
                    <th scope="col">Description </th>
                    <th scope="col">Status </th>
                    <th scope="col">Action</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {corporate.map((value) => {
                    return (
                      <tr>
                        <td>{value.username}</td>
                        <td>{value.address}</td>
                        <td>{value.contact}</td>

                        <td>{value.description}</td>
                        <td>
                          {value.isapproved == 0 ? "Not Approved" : "Approved"}
                        </td>

                        <td>
                          <Link
                            className="btn btn-warning btn-primary"
                            to="/editcorporate"
                            state={{ id: value.loginid }}
                          >
                            View
                          </Link>
                        </td>
                        <td>
                          <button
                            className="btn btn-sm btn-primary"
                            onClick={() => deleteUser(value.loginid)}
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

export default CorporateView;
