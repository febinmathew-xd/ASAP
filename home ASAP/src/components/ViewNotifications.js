import { useEffect } from "react";
import Header from "./header";
import { useState } from "react";
import { Post } from "../Api";

function ViewNotifications() {
  const [exams, setExams] = useState([]);

  useEffect(() => {
    const userdata = JSON.parse(localStorage.getItem("userdata"));
    let param = {
      courseid: userdata.courseid,
      tablename: "exams",
    };
    Post("getexamdetails", param).then((data) => {
      setExams(data);
    });
  }, []);
  return (
    <body style={{ backgroundColor: "white", height: "100vh" }}>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.css"
        integrity="sha256-NAxhqDvtY0l4xn+YVa6WjAcmd94NNfttjNsDmNatFVc="
        crossorigin="anonymous"
      />
      <Header />
      <div className="container-fluid  px-2 ">
        <div className="row">
          <div className="col-lg-12">
            <div className="box shadow-sm rounded bg-white mb-3">
              <div className="box-title border-bottom p-3">
                <h6 className="m-0">Earlier</h6>
              </div>
              <div className="box-body p-0">
                {exams.map((exam) => {
                  return (
                    <div className="p-3 d-flex align-items-center border-bottom osahan-post-header">
                      <div class="font-weight-bold mr-3">
                        <div class="text-truncate">{exam.title}</div>
                        <div class="small">{exam.venuename}</div>
                      </div>
                      <span class="ml-auto mb-auto">
                        <div class="small">{exam.date}</div>
                        <div class="small">{exam.time}</div>
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}
export default ViewNotifications;
