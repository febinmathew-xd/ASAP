import Sidebar from "./Sidebar";
import Navbar from "./Nav bar";
import Sales from "./Sales";
import Saleschart from "./Saleschart";
import Recentsale from "./Recentsale";
import Widget from "./Widget";
import Footer2 from "./Footer2";
import { useContext } from "react";
import { AuthenticationContext } from "./AuthenticationContext";

function TeacherView() {
  const { userid } = useContext(AuthenticationContext);
  return (
    <div className="container-fluid position-relative d-flex p-0">
      <div className="content">
        <Sidebar />
        <Navbar />
        <Recentsale />
        <Footer2 />
      </div>
    </div>
  );
}

export default TeacherView;
