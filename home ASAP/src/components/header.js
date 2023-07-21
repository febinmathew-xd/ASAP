import { NavLink } from "react-router-dom";

function Header() {
  const usertype = localStorage.getItem("usertype");

  return (
    <>
      {/* <!-- Header Start --> */}
      <div className="header-area">
        <div className="main-header ">
          <div className="header-top d-none d-lg-block">
            {/* <!-- Left Social --> */}
            <div className="header-left-social">
              <ul className="header-social">
                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/sai4ull">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="#">
                    <i className="fab fa-google-plus-g"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="container">
              <div className="col-xl-12">
                <div className="row align-items-center">
                  <div className="d-flex justify-content-end  header-info-left">
                    <ul>
                      <li>asap2023@gmail.com</li>
                      <li>+91 7845125788</li>
                    </ul>
                  </div>
                  <div className=" d-flex justify-content-end header-info-right">
                    <ul>
                      <li>
                        <a
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            localStorage.clear();
                            window.location.href = "/";
                          }}
                        >
                          Logout <i className="ti-new-window"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header-bottom header-sticky">
            {/* <!-- Logo --> */}
            <div className="logo d-none d-lg-block">
              <a href="index.html">
                <img src="assets/img/logo/logo.png" alt="" />
              </a>
            </div>
            <div className="container">
              <div className="menu-wrapper">
                {/* <!-- Logo --> */}
                <div className="logo logo2 d-block d-lg-none">
                  <a href="index.html">
                    <img src="assets/img/logo/logo.png" alt="" />
                  </a>
                </div>
                {/* <!-- Main-menu --> */}
                <div className="main-menu d-none d-lg-block">
                  <nav>
                    <ul id="navigation">
                      <li>
                        <NavLink className="active" to="/">
                          Home
                        </NavLink>
                      </li>
                      {usertype == 1 ? (
                        <>
                          <li>
                            <NavLink to="/mycourse">My Courses</NavLink>
                          </li>
                          <li>
                            <NavLink to="/jobs">Jobs</NavLink>
                          </li>
                          <li>
                            <NavLink to="/notifications">Notifications</NavLink>
                          </li>
                          <li>
                            <NavLink to="/results">Exams</NavLink>
                          </li>
                          <li>
                            <NavLink to="/enquiry">Enquiry</NavLink>
                          </li>
                        </>
                      ) : (
                        ""
                      )}

                      {usertype == 4 ? (
                        <li>
                          <NavLink to="/vaccancies">Vaccancies</NavLink>
                        </li>
                      ) : (
                        ""
                      )}
                    </ul>
                  </nav>
                </div>
                {/* <!-- Header-btn --> */}
                <div className="header-search d-none d-lg-block">
                  <form action="#" className="form-box f-right ">
                    <input
                      type="text"
                      name="Search"
                      placeholder="Search Courses"
                    />
                    <div className="search-icon">
                      <i className="fas fa-search special-tag"></i>
                    </div>
                  </form>
                </div>
              </div>
              {/* <!-- Mobile Menu --> */}
              <div className="col-12">
                <div className="mobile_menu d-block d-lg-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Header End --> */}
    </>
  );
}
export default Header;
