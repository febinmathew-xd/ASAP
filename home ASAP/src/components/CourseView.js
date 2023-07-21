import { useEffect, useState } from "react";
import Footer from "./footer";
import Header from "./header";
import { Post, fileurl } from "../Api";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MessageBox from "./MessageBox";
function CourseView() {
  const [course, setCourse] = useState();
  const [tutorials, setTutorials] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const [refresh, setRefresh] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
 
  const [messages, setMessages] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const id = location.state.id;
  
  useEffect(() => {
    let param = {
      id: location.state.id,
      tablename: "courses",
    };
    Post("getbydata", param).then((data) => {
      console.log(data);
      setCourse(data[0]);
      setIsloading(false);
    });
    let tutorialparam = {
      courseid: location.state.id,
      tablename: "tutorial",
    };

    Post("getbydata", tutorialparam).then((data) => {
      setTutorials(data);
    });





  }, [refresh]);

  const checkCertificate = () => {
    const userdata = JSON.parse(localStorage.getItem("userdata"));
    let param = {
      courseid: location.state.id,
      userid: userdata.loginid,
      tablename: "bank",
    };

    Post("getbydata", param).then((data) => {
      if (data?.length == 0) {
        navigate("/coursepayment", { state: { id: location.state.id } });
      }

      if (data[0].is_approved == 0) {
        toast.info("Please Wait Until Admin Issue The Certificate 😊");
      } else if (data[0].is_approved == 1) {
        window.open(`${fileurl + data[0].certificate}`);
      }
    });
  };

  const saveoMessage = () => { 
    const userdata = JSON.parse(localStorage.getItem("userdata"));

    

  Post('save').then((data)=> {
    setRefresh(refresh+1);
    

  });
  };

  return (
    <>
      <Header />
      <ToastContainer />
      {!isloading && (
        <div className="popular-course mt-5 mb-5 p-5">
          <div className="container">
            <div className="row justify-content-sm-center">
              <div className="cl-xl-7 col-lg-8 col-md-10">
                <div className="section-tittle text-center mb-70">
                  <h3>My Courses</h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <div class="single-course">
                  <div class="course-img">
                    <img src={fileurl + course.image} alt="" />
                  </div>
                  <div class="course-caption">
                    <div class="course-cap-top">
                      <h4>
                        <a href="#" style={{ color: "white" }}>
                          {course.title}
                        </a>
                      </h4>
                    </div>

                    <div class="course-cap-bottom d-flex justify-content-between">
                      <p>{course.details}</p>
                    </div>
                    <div class="course-cap-bottom d-flex justify-content-between">
                      {/* <Link to="/coursepayment" className="btn btn-success">
                        Get Certificate
                      </Link> */}

                      <button
                        className="btn btn-success"
                        onClick={() => checkCertificate()}
                      >
                        Get Certificate
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="accordion" id="accordionExample">
                  {tutorials.map((value, index) => {
                    return (
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={"#collapse" + index}
                            aria-expanded={index == 0}
                            aria-controls={"collapse" + index}
                          >
                            {value.title}
                          </button>
                        </h2>
                        <div
                          id={"collapse" + index}
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            {value.description}
                            <br />
                            <a
                              className="btn mt-2 btn-outline-success"
                              href={fileurl + value.file}
                              target="_blank"
                            >
                              Download This File
                            </a>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

          {/* DOUBTS HEADER */}

            <h5 onClick={()=>{setShowMessage(!showMessage)}} style={{backgroundColor:'white', color:'black', fontSize:'18px', width:'130px', textAlign:'center', padding:'5px 10px', marginTop:'20px', borderRadius:'7px', cursor:'pointer'}}>Ask Doubts</h5>

            {/* DOUBT CHAT CONTAINER */}

          {showMessage && 
            <MessageBox id={id} />
            }

          </div>
         
        </div>
      )}
      <Footer />
    </>
  );
}
export default CourseView;
