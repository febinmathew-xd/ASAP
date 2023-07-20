import Sidebar from "./Sidebar";
import Navbar from "./Nav bar";
import { useEffect, useState } from "react";
import { Post } from "../Service/Api";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function EditCorporate() {
  const [username, setUsername] = useState();
  const [userid, setUserid] = useState();
  const [contact, setContact] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [description, setDescription] = useState();
  const navigate = useNavigate();
  const location = useLocation();
  const [isapproved, setisapproved] = useState();

  useEffect(() => {
    let param = {
      tablename: "corporate",
      loginid: location.state.id,
    };

    Post("getuserbyid", param).then((data) => {
      console.log(data);
      setUsername(data.username);
      setContact(data.contact);
      setEmail(data.email);
      setAddress(data.address);
      setDescription(data.description);
      setUserid(data.id);
      setisapproved(data.isapproved);
    });
  }, []);

  const save = () => {
    let param = {
      tablename: "corporate",
      username: username,
      contact: contact,
      email: email,
      address: address,
      id: location.state.id,
      description: description,
    };

    Post("updateuser", param).then((data) => {
      navigate("/CorporateView");
    });
  };
  const approve = (status) => {
    let param = {
      tablename: "corporate",
      isapproved: status,
      id: userid,
    };

    Post("update", param).then((data) => {
      // navigate("/StudentViewe");
      if (status == 1) {
        toast("Approved");
      } else {
        toast("Not Approved");
      }
      setTimeout(() => {
        navigate("/CorporateView");
      }, 1000);
    });
  };
  return (
    <div className="container-fluid position-relative d-flex p-0">
      <div className="content">
        <Sidebar />
        <Navbar />
        <ToastContainer />
        <div
          className="col-sm-12 col-xl-11"
          style={{ marginLeft: "30px", marginTop: "20px" }}
        >
          <div className="bg-secondary rounded h-100 p-4">
            <h6 className="mb-4">ADD JOB DETAILS</h6>
            <div className="form-floating mb-3">
              <input
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                value={username}
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput"> Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                value={address}
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                onChange={(e) => setAddress(e.target.value)}
              />
              <label for="floatingInput">Address</label>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={(e) => setContact(e.target.value)}
                type="number"
                value={contact}
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Contact</label>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="form-control"
                id="floatingInput"
                value={email}
                placeholder="name@example.com"
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <textarea
                onChange={(e) => setDescription(e.target.value)}
                className="form-control"
                value={description}
                placeholder="Leave a comment here"
                id="floatingTextarea"
                style={{ height: "150px" }}
              ></textarea>
              <label for="floatingTextarea">Description</label>
            </div>
            <br></br>
            {isapproved == 1 ? (
              <button
                className="btn btn-success"
                onClick={(e) => {
                  save();
                }}
              >
                {" "}
                Save
              </button>
            ) : (
              <>
                <button
                  className="btn btn-success"
                  onClick={(e) => {
                    approve(1);
                  }}
                >
                  Approve
                </button>
                <button
                  className="btn btn-danger"
                  style={{ marginLeft: 12 }}
                  onClick={(e) => {
                    approve(0);
                  }}
                >
                  Reject
                </button>
              </>
            )}
          </div>
        </div>
        {/* <Footer2/> */}
      </div>
    </div>
  );
}
export default EditCorporate;
