import Sidebar from "./Sidebar";
import Navbar from "./Nav bar";
import Sales from "./Sales";
import Saleschart from "./Saleschart";
import Recentsale from "./Recentsale";
import Widget from "./Widget";
import Footer2 from "./Footer2";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { Get, Post } from "../Service/Api";

function PaymentsView() {
  const [payments, setPayments] = useState([]);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    Get("getpayments").then((data) => {
      setPayments(data);
    });
  }, [refresh]);

  const approve = (id) => {
    let param = {
      is_approved: 1,
      tablename: "bank",
      id: id,
    };

    Post("update", param).then((data) => {
      setRefresh((prev) => prev + 1);
    });
  };
  return (
    <div className="container-fluid position-relative d-flex p-0">
      <div className="content">
        <Sidebar />
        <Navbar />

        <div className="container-fluid pt-4 px-4">
          <div className="bg-secondary text-center rounded p-4">
            <div className="d-flex align-items-center justify-content-between mb-4">
              <h6 className="mb-0">Course Payments</h6>
            </div>
            <div className="table-responsive">
              <table className="table text-start align-middle table-bordered table-hover mb-0">
                <thead>
                  <tr className="text-white">
                    <th scope="col">Student Name</th>
                    <th scope="col">Course</th>

                    <th scope="col">Amount</th>
                    <th scope="col">Account Number</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {payments.map((value) => {
                    return (
                      <tr>
                        <td>{value.username}</td>
                        <td>{value.title}</td>
                        <td>{value.price}</td>
                        <td>{value.account_no}</td>
                        <td>
                          {value.is_approved == 1 ? "Verified" : "Pending"}
                        </td>

                        <td>
                          {value.is_approved == 0 ? (
                            <button
                              className="btn btn-success"
                              onClick={() => approve(value.bankid)}
                            >
                              Approve
                            </button>
                          ) : (
                            ""
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <Footer2 />
      </div>
    </div>
  );
}

export default PaymentsView;
