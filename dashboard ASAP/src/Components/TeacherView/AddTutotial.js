import Navbar from "../Nav bar";
import Sidebar from "../Sidebar";
import { useEffect, useState } from "react";
import { Post, handlefileupload } from "../../Service/Api";
import { useLocation, useNavigate } from "react-router-dom";

function AddTutorial() {
  const [title, setTitle] = useState([]);
  const [description, setDescription] = useState();
  const [file, setFile] = useState();
  const [fileuploaded, setFileUploaded] = useState(true);
  const navigate = useNavigate();

  const save = () => {
    const userdata = JSON.parse(localStorage.getItem("userdata"));

    let param = {
      tablename: "tutorial",
      title: title,
      description: description,
      file: file,
      courseid: userdata.courseid,
      teacherid: userdata.loginid,
    };

    Post("save", param).then((data) => {
      navigate("/tutorialsview");
    });
  };

  const fileupload = (file) => {
    setFileUploaded(false);
    handlefileupload(file).then((data) => {
      setFile(data);
      setFileUploaded(true);
    });
  };
  return (
    <div className="container-fluid position-relative d-flex p-0">
      <div className="content">
        <Sidebar />
        <Navbar />

        <div
          className="col-sm-12 col-xl-11"
          style={{ marginLeft: "30px", marginTop: "20px" }}
        >
          <div className="bg-secondary rounded h-100 p-4">
            <h6 className="mb-4">Add Teacher</h6>
            <div className="form-floating mb-3">
              <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                className="form-control"
                id="floatingInput"
                placeholder="Title"
              />
              <label for="floatingInput">Title</label>
            </div>
            <div className="form-floating mb-3">
              <textarea
                className="form-control"
                id="floatingInput"
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
              />
              <label for="floatingInput">Description</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="file"
                className="form-control"
                id="floatingInput"
                placeholder="Upload File"
                onChange={(e) => fileupload(e.target.files[0])}
              />
              <label for="floatingInput">Upload File</label>
            </div>
            <button
              className="btn btn-success"
              onClick={(e) => {
                save();
              }}
              disabled={!fileuploaded}
            >
              {fileuploaded ? "Save" : "Uploading"}
            </button>
            &nbsp; &nbsp;
          </div>
        </div>
        {/* <Footer2/> */}
      </div>
    </div>
  );
}
export default AddTutorial;
