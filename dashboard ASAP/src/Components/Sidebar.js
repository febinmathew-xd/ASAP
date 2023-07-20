import { useContext, useEffect, useState } from "react";
import { Link, useLocation, NavLink } from "react-router-dom";
import { AuthenticationContext } from "./AuthenticationContext";

function Sidebar() {
  // const location = useLocation();
  const [path, setPath] = useState();
  const { pathname } = useLocation();

  const { isAuthenticated } = useContext(AuthenticationContext);

  return (
    <div className="sidebar pe-4 pb-3">
      <nav className="navbar bg-secondary navbar-dark">
        <a href="index.html" className="navbar-brand mx-4 mb-3">
          <h3 className="text primary">
            <i className="fa fa-user-edit me-2"></i>ASAP
          </h3>
        </a>
        <div className="d-flex align-items-center ms-4 mb-4">
          <div className="position-relative">
            <img
              className="rounded-circle"
              src="img/user.jpg"
              alt=""
              style={{ width: "40px", height: "40px" }}
            />
            <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
          </div>
          <div className="ms-3">
            <h6 className="mb-0">NOUFINA U</h6>
            <span>Admin</span>
          </div>
        </div>
        {isAuthenticated == "admin" ? (
          <div className="navbar-nav w-100">
            <NavLink
              activeclassname="active"
              to="/"
              alternatepaths={["/", "/addteacher"]}
              className="nav-item nav-link"
            >
              <i className="fa fa-tachometer-alt me-2"></i>Teachers
            </NavLink>
            <NavLink
              activeclassname="active"
              to="/cordinatorview"
              className="nav-item nav-link  "
            >
              <i className="fa fa-tachometer-alt me-2"></i>Resource Teacher
            </NavLink>
            <NavLink
              activeclassname="active"
              to="/StudentView"
              className="nav-item nav-link  "
            >
              <i className="fa fa-tachometer-alt me-2"></i>Students
            </NavLink>

            <NavLink
              activeclassname="active"
              to="/CourseView"
              className="nav-item nav-link  "
            >
              <i className="fa fa-tachometer-alt me-2"></i>Courses
            </NavLink>
            {/* <NavLink
              activeclassname="active"
              to="/ExamView"
              className="nav-item nav-link  "
            >
              <i className="fa fa-tachometer-alt me-2"></i>Exams
            </NavLink> */}
            {/* <NavLink
              activeclassname="active"
              to="/TutorView"
              className="nav-item nav-link  "
            >
              <i className="fa fa-tachometer-alt me-2"></i>Tutors
            </NavLink> */}
            <NavLink
              activeclassname="active"
              to="/CorporateView"
              className="nav-item nav-link "
            >
              <i className="fa fa-tachometer-alt me-2"></i>Corporate Job Portal
            </NavLink>
            <NavLink
              activeclassname="active"
              to="/jobadminview"
              className="nav-item nav-link  "
            >
              <i className="fa fa-tachometer-alt me-2"></i>Job Admin
            </NavLink>
            <NavLink
              activeclassname="active"
              to="/payments"
              className="nav-item nav-link  "
            >
              <i className="fa fa-tachometer-alt me-2"></i>Payments
            </NavLink>
            {/* <NavLink
              activeclassname="active"
              to="/CampusView"
              className="nav-item nav-link  "
            >
              <i className="fa fa-tachometer-alt me-2"></i>Campus
            </NavLink> */}
            {/* <NavLink
              activeclassname="active"
              to="/PlacementView"
              className="nav-item nav-link  "
            >
              <i className="fa fa-tachometer-alt me-2"></i>Placements
            </NavLink> */}
          </div>
        ) : isAuthenticated == "teacher" ? (
          <div className="navbar-nav w-100">
            <NavLink
              activeclassname="active"
              to="/"
              className="nav-item nav-link"
            >
              <i className="fa fa-tachometer-alt me-2"></i>Students
            </NavLink>
            <NavLink
              activeclassname="active"
              to="/tutorialsview"
              className="nav-item nav-link"
            >
              <i className="fa fa-tachometer-alt me-2"></i>Tutorials
            </NavLink>
            <NavLink
              activeclassname="active"
              to="/doubtsview"
              className="nav-item nav-link"
            >
              <i className="fa fa-tachometer-alt me-2"></i>Doubts
            </NavLink>
            <NavLink
              activeclassname="active"
              to="/examresultsview"
              className="nav-item nav-link"
            >
              <i className="fa fa-tachometer-alt me-2"></i>Student Results
            </NavLink>
            <NavLink
              activeclassname="active"
              to="/messages"
              className="nav-item nav-link"
            >
              <i className="fa fa-tachometer-alt me-2"></i>Messages
            </NavLink>
          </div>
        ) : isAuthenticated == "jobadmin" ? (
          <div className="navbar-nav w-100">
            <NavLink
              activeclassname="active"
              to="/StudentView"
              className="nav-item nav-link  "
            >
              <i className="fa fa-tachometer-alt me-2"></i>Students
            </NavLink>

            <NavLink
              activeclassname="active"
              to="/CorporateView"
              className="nav-item nav-link "
            >
              <i className="fa fa-tachometer-alt me-2"></i>Corporate Job Portal
            </NavLink>
            <NavLink
              activeclassname="active"
              to="/viewvaccancies"
              className="nav-item nav-link "
            >
              <i className="fa fa-tachometer-alt me-2"></i>Vaccancies
            </NavLink>
            <NavLink
              activeclassname="active"
              to="/viewapplicants"
              className="nav-item nav-link "
            >
              <i className="fa fa-tachometer-alt me-2"></i>Applicants
            </NavLink>
          </div>
        ) : isAuthenticated == "resourceteacher" ? (
          <div className="navbar-nav w-100">
            <NavLink
              activeclassname="active"
              to="/"
              alternatepaths={["/", "/addteacher"]}
              className="nav-item nav-link"
            >
              <i className="fa fa-tachometer-alt me-2"></i>Teachers
            </NavLink>

            <NavLink
              activeclassname="active"
              to="/StudentView"
              className="nav-item nav-link  "
            >
              <i className="fa fa-tachometer-alt me-2"></i>Students
            </NavLink>

            <NavLink
              activeclassname="active"
              to="/CourseView"
              className="nav-item nav-link  "
            >
              <i className="fa fa-tachometer-alt me-2"></i>Courses
            </NavLink>
            <NavLink
              activeclassname="active"
              to="/timetableview"
              className="nav-item nav-link  "
            >
              <i className="fa fa-tachometer-alt me-2"></i>Time Table
            </NavLink>
            <NavLink
              activeclassname="active"
              to="/viewvenue"
              className="nav-item nav-link  "
            >
              <i className="fa fa-tachometer-alt me-2"></i>Venue
            </NavLink>
            <NavLink
              activeclassname="active"
              to="/examsview"
              className="nav-item nav-link  "
            >
              <i className="fa fa-tachometer-alt me-2"></i>Exams
            </NavLink>
            <NavLink
              activeclassname="active"
              to="/practicalview"
              className="nav-item nav-link  "
            >
              <i className="fa fa-tachometer-alt me-2"></i>Practical Sessions
            </NavLink>
            <NavLink
              activeclassname="active"
              to="/queryview"
              className="nav-item nav-link  "
            >
              <i className="fa fa-tachometer-alt me-2"></i>Queries
            </NavLink>
          </div>
        ) : (
          ""
        )}
      </nav>
    </div>
  );
}
export default Sidebar;
