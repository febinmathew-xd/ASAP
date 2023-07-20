import Navbar from "../Nav bar";
import Sidebar from "../Sidebar";
import Footer2 from "../Footer2";
import { Link } from "react-router-dom";
import { Get, Post, fileurl } from "../../Service/Api";
import { useEffect, useState } from "react";
import { convertTo12HourFormat } from "../../Service/Util";
function ViewVenue() {
  const [venues, setVenue] = useState([]);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    Post("getall", { tablename: "venue" }).then((data) => {
      setVenue(data);
    });
  }, [refresh]);

  const deleteTimetable = (id) => {
    let param = {
      tablename: "venue",
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
              <h6 className="mb-0"> Timetable</h6>
              <Link to="/addvenue">Add Venue</Link>
            </div>
            <div className="table-responsive">
              <table className="table text-start align-middle table-bordered table-hover mb-0">
                <thead>
                  <tr className="text-white">
                    <th scope="col">Name</th>
                    <th scope="col">Location</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {venues.map((value) => {
                    return (
                      <tr>
                        <td>{value.venuename} </td>
                        <td> {value.location}</td>
                        <td>
                          <Link
                            to="/editvenue"
                            className="btn btn-success"
                            style={{ marginRight: 12 }}
                            state={{ id: value.id }}
                          >
                            Edit
                          </Link>
                          <button
                            className="btn btn-danger"
                            onClick={(e) => {
                              deleteTimetable(value.id);
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

export default ViewVenue;
