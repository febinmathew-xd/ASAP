import { useEffect, useState } from "react";
import Footer from "./footer";
import Header from "./header";
import { Post, fileurl } from "../Api";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CoursePayment() {
  const [coursePrice, setCoursePrice] = useState();
  const [accountno, setAccountno] = useState();
  const [accountName, setAccountName] = useState();
  const [cvv, setCvv] = useState();
  const [expdate, setExpdate] = useState();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    let param = {
      id: location.state.id,
      tablename: "courses",
    };

    Post("getbyid", param).then((data) => {
      setCoursePrice(data.price);
    });
  }, []);

  const save = () => {
    const userdata = JSON.parse(localStorage.getItem("userdata"));
    let param = {
      account_no: accountno,
      account_name: accountName,
      cvv: cvv,
      expiry: expdate,
      userid: userdata.loginid,
      courseid: location.state.id,
    };

    Post("coursepayment", param).then((data) => {
      toast.success(
        "Payment Successful, You Will Recieve Your Certificate Shortly"
      );

      setTimeout(() => {
        navigate("/");
      }, 1000);
    });
  };
  return (
    <>
      <Header />
      <ToastContainer />
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
              <input
                type="text"
                className="form-control bg-white m-5 p-3 h-50"
                placeholder="Account Holder Name"
                onChange={(e) => setAccountName(e.target.value)}
              />
            </div>
            <div className="col-6">
              <input
                type="text"
                className="form-control bg-white m-5 p-3 h-50"
                placeholder="Account Number"
                onChange={(e) => setAccountno(e.target.value)}
              />
            </div>
            <div className="col-6">
              <input
                type="text"
                className="form-control bg-white m-5 p-3 h-50"
                placeholder="CVV"
                onChange={(e) => setCvv(e.target.value)}
              />
            </div>
            <div className="col-6">
              <input
                type="date"
                className="form-control bg-white m-5 p-3 h-50"
                placeholder="Expiry Date"
                onChange={(e) => setExpdate(e.target.value)}
              />
            </div>
            <div className="col-6">
              <input
                type="text"
                className="form-control bg-white m-5 p-3 h-50"
                placeholder="Price"
                value={coursePrice + " ₹"}
                disabled={true}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <button
                onClick={() => save()}
                className="form-control bg-danger text-white m-5 h-50"
              >
                Pay Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default CoursePayment;
