import Select from "react-select";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";
import { useState } from "react";
import { Post } from "../Api";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
function Vaccancies() {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [date, setDate] = useState();
  const [place, setPlace] = useState();
  const [qualification, setQualification] = useState();
  const [experience, setExperience] = useState();
  const navigate = useNavigate();

  const save = () => {
    console.log(localStorage.getItem("userid"));
    let param = {
      tablename: "vaccancies",
      title: title,
      jobdescription: description,
      lastdate: date,
      location: place,
      qualification: qualification,
      experience_needed: experience,
      corporateid: parseInt(localStorage.getItem("userid")),
    };

    Post("save", param).then((data) => {
      toast.success("Vaccancy Added");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    });
  };
  return (
    <>
      <Header />
      <ToastContainer />
      <link rel="stylesheet" type="text/css" href="css/util.css" />
      <link rel="stylesheet" type="text/css" href="css/main.css" />
      <div class="limiter">
        <div
          class="container-login100"
          style={{ backgroundImage: "url('images/bg-01.jpg')" }}
        >
          <div class="wrap-login100">
            <span class="login100-form-title p-b-34 p-t-27">Vaccancies</span>

            <div className="form-floating mb-3">
              <input
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                style={{
                  backgroundColor: "transparent",
                  borderBlockColor: "white",
                  color: "black",
                }}
              />
              <label style={{ color: "white" }}> Title</label>
            </div>

            <div className="form-floating mb-3">
              <textarea
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                style={{
                  backgroundColor: "transparent",
                  borderBlockColor: "white",
                  height: "150px",
                  color: "black",
                }}
              />
              <label style={{ color: "white" }}> Job description</label>
            </div>

            <div className="form-floating mb-3">
              <input
                onChange={(e) => {
                  setDate(e.target.value);
                }}
                type="date"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                style={{
                  backgroundColor: "transparent",
                  borderBlockColor: "white",
                  color: "black",
                }}
              />
              <label style={{ color: "white" }}> Date</label>
            </div>

            <div className="form-floating mb-3">
              <input
                onChange={(e) => {
                  setPlace(e.target.value);
                }}
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                style={{
                  backgroundColor: "transparent",
                  borderBlockColor: "white",
                  color: "black",
                }}
              />
              <label style={{ color: "white" }}> Location</label>
            </div>
            <div className="form-floating mb-3">
              <label style={{ color: "white" }}> Qualification</label>
              <br></br>
              <br></br>
              <select
                onChange={(e) => {
                  setQualification(e.target.value);
                }}
                id="form-floating mb-3"
                name="dropdown"
                style={{
                  backgroundColor: "transparent",
                  borderBlockColor: "white",
                  color: "black",
                  height: "30px",
                  width: "390px",
                  borderRadius: "10px",
                }}
              >
                <option value="0">Select Qualification</option>
                <option value="SSLC">SSLC</option>
                <option value="PLUSTWO">PLUSTWO</option>
                <option value="UNDER GRADUATE">UNDER GRADUATE</option>
                <option value="POST GRADUATE">POST GRADUATE</option>
                <option value="DIPLOMA">DIPLOMA</option>
                <option value="PHD">PHD</option>
              </select>
            </div>

            <div className="form-floating mb-3">
              <b style={{ color: "white" }}>
                Experience Needed : &nbsp;&nbsp;&nbsp;&nbsp;{" "}
              </b>
              <input
                onChange={(e) => {
                  setExperience(1);
                }}
                type="radio"
                id="floatingInput"
                value="yes"
                name="gender"
                style={{
                  backgroundColor: "transparent",
                  borderBlockColor: "white",
                }}
              />{" "}
              &nbsp;
              <b style={{ color: "white" }}>YES</b>
              &nbsp;&nbsp;
              <input
                onChange={(e) => {
                  setTitle(0);
                }}
                type="radio"
                id="floatingInput"
                value="no"
                name="gender"
                style={{
                  backgroundColor: "transparent",
                  borderBlockColor: "white",
                }}
              />{" "}
              &nbsp;
              <b style={{ color: "white" }}>NO</b>
            </div>

            <div class="container-login100-form-btn">
              <button
                onClick={() => {
                  save();
                }}
                class="login100-form-btn"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
export default Vaccancies;
