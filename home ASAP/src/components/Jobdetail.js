import { useLocation, useNavigate } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";
import { useEffect, useState } from "react";
import { Post, handlefileupload } from "../Api";
function Jobdetail() {
  const [details, setDetails] = useState([]);
  const[file, setFile] = useState();
  

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    Post("getbyid", { tablename: "vaccancies", id: location.state.id }).then(
      (data) => {
        setDetails(data);
      }
    );
  }, []);


  const savefile = (file) => {
    
    handlefileupload(file).then((data)=> {
      setFile(data);
    })
  };
  const save = () => { 
    const userdata = JSON.parse(localStorage.getItem('userdata'))
      let param={
        tablename: 'applications',
        resume:file,
        studentid: userdata.loginid,
        vacancyid: location.state.id
      };


      Post('save', param).then((data)=> {
        navigate('/jobs');
      })
  };

  return (
    <>
      <Header />

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                New message
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label for="recipient-name" className="col-form-label">
                    Add Your Resume:
                  </label>
                  <input onChange={(event)=> {savefile(event.target.files[0])}}
                    type="file"
                    className="form-control"
                    id="recipient-name"
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button onClick={save} type="button" className="btn btn-success">
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-5 production_section">
        <div className="row" style={{ marginTop: "80px" }}>
          <div className="col-sm-12 col-lg-12">
            <div className="card">
              <div
                className="card-header text-white"
                style={{ backgroundColor: "#3d348b" }}
              >
                {details.title}
              </div>

              <div className="card-body">
                <p
                  className="card-text font-size-20"
                  style={{ color: "Black", fontSize: "20px" }}
                >
                  Description{" "}
                  <p style={{ color: "Black", fontSize: "20px" }}></p>
                  {details.jobdescription} <br></br>
                </p>

                <button
                  className="btn btn-success"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  Apply now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Jobdetail;
