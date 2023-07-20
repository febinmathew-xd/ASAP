import Sidebar from "./Sidebar";
import Navbar from "./Nav bar";
import Sales from "./Sales";
import Saleschart from "./Saleschart";
import Recentsale from "./Recentsale";
import Widget from "./Widget";
import Footer2 from "./Footer2";
import { Link } from "react-router-dom";
import { Post } from "../Service/Api";
import { useEffect, useState } from "react";

function CourseView() {
  const [courses, setCourses] = useState([]);
  const [refresh, setRefresh] = useState(0);
  useEffect(() => {
    Post("getall", { tablename: "courses" }).then((data) => {
      setCourses(data);
    });
  }, [refresh]);

  const deleteItem = (id) => {
    let param = {
      id: id,
      tablename: "courses",
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
              <h6 className="mb-0">Course Details</h6>
              <Link to="/Addnewcourse">Add new</Link>
            </div>
            <div className="table-responsive">
              <table className="table text-start align-middle table-bordered table-hover mb-0">
                <thead>
                  <tr className="text-white">
                    <th scope="col">Course name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Price</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {courses.map((value) => {
                    return (
                      <tr>
                        <td>{value.title} </td>
                        <td>{value.details} </td>
                        <td>{value.price} ₹</td>
                        <td>
                          <Link
                            className="btn btn-warning btn-primary"
                            to="/Viewcourse"
                            state={{ id: value.id }}
                          >
                            View{" "}
                          </Link>{" "}
                          &nbsp; &nbsp; &nbsp;
                          <button
                            onClick={() => deleteItem(value.id)}
                            className="btn btn-danger btn-primary"
                            to="../Viewcourse"
                          >
                            Delete
                          </button>{" "}
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

export default CourseView;
