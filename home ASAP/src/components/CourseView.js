import { useEffect, useState } from "react";
import Footer from "./footer";
import Header from "./header";
import { Post, fileurl } from "../Api";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function CourseView() {
  const [course, setCourse] = useState();
  const [tutorials, setTutorials] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const [refresh, setRefresh] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  
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

  /* FETCHING MESSAGES */
  const user = JSON.parse(localStorage.getItem("userdata"));

  let messParam = {
    tablename:'messages',
    id:user.loginid
  }

  Post('getMessagesByUserId',messParam).then((data)=> {
    setMessages(data);
    console.log(data);
  })




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

  const saveMessage = () => {
    const userdata = JSON.parse(localStorage.getItem("userdata"));

    let param = {
      tablename:'messages',
      courseid: location.state.id,
      userid: userdata.loginid,
      message:inputMessage,
    }

  Post('save',param).then((data)=> {
    setRefresh(refresh+1);
    navigate('/')

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
            <div className="question-container" style={{width:'500px', height:'400px', backgroundColor:'whitesmoke', marginTop:'30px', borderRadius:'10px', paddingTop:'20px'}}>

              {/* MESSAGE CONTAINER */}

              <div className="message-container" style={{width:'100%', height:'100%', overflowY:"scroll" }}>
              
              <div style={{ backgroundColor:'#bae6fd', marginLeft:'18px',marginBottom:'10px', padding:'5px 10px', width:'400px', borderRadius:'10px'}}>
                <p style={{color:'black', fontWeight:'600', marginRight:'5px', opacity:'0.7'}}>You : </p>
                <p>I have doubt in second secession</p>
              </div>
              <div style={{ backgroundColor:'#bae6fd', marginLeft:'18px',marginBottom:'10px', padding:'5px 10px', width:'400px', borderRadius:'10px'}}>
                <p style={{color:'black', fontWeight:'600', marginRight:'5px', opacity:'0.7'}}>You : </p>
                <p>I have doubt in second secession</p>
              </div>

              <div style={{ backgroundColor:'#fecaca', marginLeft:'18px',marginBottom:'10px', padding:'5px 10px', width:'400px', borderRadius:'10px'}}>
                <p style={{color:'black', fontWeight:'600', marginRight:'5px', opacity:'0.7'}}>Tutor : </p>
                <p>I have doubt in second secession ndf fnfkd dlfnkldf dlfdklf dfklfdfndk dfd dkd dfknkldf fkl</p>
              </div>


              <div style={{ backgroundColor:'#fecaca', marginLeft:'18px',marginBottom:'10px', padding:'5px 10px', width:'400px', borderRadius:'10px'}}>
                <p style={{color:'black', fontWeight:'600', marginRight:'5px', opacity:'0.7'}}>Tutor : </p>
                <p>I have doubt in second secession ndf fnfkd dlfnkldf dlfdklf dfklfdfndk dfd dkd dfknkldf fkl</p>
              </div>


             

              </div>

              <div>

              <input onChange={(event) => {setInputMessage(event.target.value)}} type="text" placeholder="Ask Doubts" style={{color:'black', border:'1px solid black', marginLeft:'18px', width:'400px', borderRadius:'10px', height:'30px',marginBottom:'18px',marginTop:'10px', backgroundColor:'#dbeafe'}} />

              <input onClick={saveMessage}  type="button" value='sent' style={{backgroundColor:'white', padding:'4px 15px', marginLeft:'10px', borderRadius:'7px', fontSize:'14px', fontWeight:'600'}}/>

              </div>
              

          
            </div>
            }

          </div>
         
        </div>
      )}
      <Footer />
    </>
  );
}
export default CourseView;
