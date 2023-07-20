import { useEffect } from "react";
import Header from "./header";
import { useState } from "react";
import { Post, fileurl } from "../Api";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ExamResults() {
  const [exams, setExams] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    const userdata = JSON.parse(localStorage.getItem("userdata"));
    let param = {
      studentid: userdata.loginid,
    };
    Post("getexamresults", param).then((data) => {
      setExams(data);
    });
  }, []);

  const checkCertificate = (id) => {
    const userdata = JSON.parse(localStorage.getItem("userdata"));
    let param = {
      courseid: id,
      userid: userdata.loginid,
      tablename: "bank",
    };

    Post("getbydata", param).then((data) => {
      if (data?.length == 0) {
        navigate("/coursepayment", { state: { id: id } });
        return;
      }

      if (data[0].is_approved == 0) {
        toast.info("Please Wait Until Admin Issue The Certificate 😊");
      } else if (data[0].is_approved == 1) {
        window.open(`${fileurl + data[0].certificate}`);
      }
    });
  };
  return (
    <body style={{ backgroundColor: "white", height: "100vh" }}>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.css"
        integrity="sha256-NAxhqDvtY0l4xn+YVa6WjAcmd94NNfttjNsDmNatFVc="
        crossorigin="anonymous"
      />
      <Header />
      <ToastContainer />
      <div className="container  px-2 ">
        <div className="row">
          <div className="col-lg-12">
            <div className="box shadow-sm rounded bg-white mb-3">
              <div className="box-title border-bottom p-3">
                <h6 className="m-0">Earlier</h6>
              </div>
              <div className="box-body p-0">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Exam Name</th>
                      <th scope="col">Date</th>
                      <th scope="col">Mark Obtained</th>
                      <th scope="col">Pass Mark</th>
                      <th scope="col">Status</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {exams.map((exam) => {
                      return (
                        <tr>
                          <td>{exam.examtitle}</td>
                          <td>{exam.date}</td>
                          <td>{exam.marks + "/" + exam.total_marks}</td>
                          <td>{exam.passing_marks}</td>
                          <td>
                            {exam.marks >= exam.passing_marks
                              ? "Passed"
                              : "Failed"}
                          </td>
                          <td>
                            {exam.marks >= exam.passing_marks ? (
                              <button
                                className="btn btn-primary"
                                onClick={() => checkCertificate(exam.courseid)}
                              >
                                Certificate
                              </button>
                            ) : (
                              ""
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}
export default ExamResults;
