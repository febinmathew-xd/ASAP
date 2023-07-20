import Navbar from "../Nav bar";
import Sidebar from "../Sidebar";
import Footer2 from "../Footer2";
import { Link } from "react-router-dom";
import { Post, fileurl } from "../../Service/Api";
import { useEffect, useState } from "react";
function TutorialsView() {
  const [tutorials, setTutorials] = useState([]);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    let info = JSON.parse(localStorage.getItem("userdata"));

    let param = {
      teacherid: info.loginid,
      tablename: "tutorial",
    };

    Post("getbydata", param).then((data) => {
      setTutorials(data);
    });
  }, [refresh]);

  const deleteTutorial = (id) => {
    let param = {
      tablename: "tutorial",
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
              <h6 className="mb-0"> Student Details</h6>
              <Link to="/addtutorial">Add Tutorial</Link>
            </div>
            <div className="table-responsive">
              <table className="table text-start align-middle table-bordered table-hover mb-0">
                <thead>
                  <tr className="text-white">
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">File</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {tutorials.map((value) => {
                    return (
                      <tr>
                        <td>{value.title} </td>
                        <td> {value.description}</td>
                        <td>
                          <a
                            href={fileurl + value.file}
                            download={value.file}
                            target="_blank"
                          >
                            {value.file}
                          </a>
                        </td>
                        <td>
                          <Link
                            to="/edittutorial"
                            className="btn btn-success"
                            style={{ marginRight: 12 }}
                            state={{ id: value.id }}
                          >
                            Edit
                          </Link>
                          <button
                            className="btn btn-danger"
                            onClick={(e) => {
                              deleteTutorial(value.id);
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

export default TutorialsView;
