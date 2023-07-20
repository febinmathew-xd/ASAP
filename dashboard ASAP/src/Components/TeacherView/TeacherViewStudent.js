import Navbar from "../Nav bar";
import Sidebar from "../Sidebar";
import Footer2 from "../Footer2";
import { Link } from "react-router-dom";
import { Get, Post } from "../../Service/Api";
import { useEffect, useState } from "react";
function TeacherStudentView() {
  const [students, setStudents] = useState([]);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    let info = JSON.parse(localStorage.getItem("userdata"));

    let param = {
      courseid: info.courseid,
    };

    Post("teacherviewstudents", param).then((data) => {
      setStudents(data);
    });
  }, [refresh]);

  return (
    <div className="container-fluid position-relative d-flex p-0">
      <div className="content">
        <Sidebar />
        <Navbar />

        <div className="container-fluid pt-4 px-4">
          <div className="bg-secondary text-center rounded p-4">
            <div className="d-flex align-items-center justify-content-between mb-4">
              <h6 className="mb-0"> Student Details</h6>
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

export default TeacherStudentView;
