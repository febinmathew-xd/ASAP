import Sidebar from "./Sidebar";
import Navbar from "./Nav bar";
import { useState } from "react";
import { Post, handlefileupload } from "../Service/Api";
import { useNavigate } from "react-router-dom";
function Addnewcourse() {
  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const [details, setDetails] = useState();
  const [filename, setFile] = useState();
  const navigate = useNavigate();
  const save = () => {
    let param = {
      tablename: "courses",
      title: title,
      details: details,
      image: filename,
      price: price,
    };
    Post("save", param).then((data) => {
      navigate("/CourseView");
    });
  };

  const fileupload = (e) => {
    handlefileupload(e).then((data) => {
      setFile(data);
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
            <h6 className="mb-4"> Add New Course </h6>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="course title"
                onChange={(e) => setTitle(e.target.value)}
              />
              <label for="floatingInput"> Course Title </label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="number"
                className="form-control"
                id="floatingInput"
                placeholder="Course Price"
                onChange={(e) => setPrice(e.target.value)}
              />
              <label for="floatingInput"> Course Price </label>
            </div>
            <div className="form-floating">
              <textarea
                className="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea"
                onChange={(e) => setDetails(e.target.value)}
                style={{ height: "150px" }}
              ></textarea>
              <label for="floatingTextarea">Course Details</label>
            </div>
            <div className="form-floating">
              <input type="file" className="form-control"></input>
              <label for="floatingTextarea">Image</label>
            </div>
            <br></br>
            <button onClick={() => save()} className="btn btn-success">
              {" "}
              Save{" "}
            </button>{" "}
            &nbsp; &nbsp;
          </div>
        </div>
        {/* <Footer2/> */}
      </div>
    </div>
  );
}
export default Addnewcourse;
