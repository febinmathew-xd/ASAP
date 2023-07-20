import Sidebar from "./Sidebar";
import Navbar from "./Nav bar";
import Footer2 from "./Footer2";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Post, handlefileupload } from "../Service/Api";

function Viewcourse() {
  const [title, setTitle] = useState();
  const [details, setDetails] = useState();
  const [filename, setFile] = useState();
  const [price, setPrice] = useState();

  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    let param = {
      id: location.state.id,
      tablename: "courses",
    };
    Post("getbyid", param).then((data) => {
      setTitle(data.title);
      setDetails(data.details);
      setPrice(data.price);
    });
  }, []);

  const save = () => {
    let param = {
      tablename: "courses",
      image: filename,
      title: title,
      details: details,
      price: price,
      id: location.state.id,
    };
    Post("update", param).then((data) => {
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
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <label for="floatingInput"> Course Title </label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="number"
                className="form-control"
                value={price}
                id="floatingInput"
                placeholder="Course Price"
                onChange={(e) => setPrice(e.target.value)}
              />
              <label for="floatingInput"> Course Price </label>
            </div>
            <div className="form-floating">
              <textarea
                value={details}
                className="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea"
                onChange={(e) => setDetails(e.target.value)}
                style={{ height: "150px" }}
              ></textarea>
              <label for="floatingTextarea">Course Details</label>
            </div>
            <div className="form-floating">
              <input
                type="file"
                className="form-control"
                onChange={(e) => fileupload(e.target.files[0])}
              ></input>
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
        <Footer2 />
      </div>
    </div>
  );
}

export default Viewcourse;
