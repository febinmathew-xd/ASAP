import { useEffect, useState } from "react";
import Footer from "./footer";
import Header from "./header";
import { Post, fileurl } from "../Api";
import { Link } from "react-router-dom";

function Mycourse() {
  const [course, setCourse] = useState();
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    const userdata = JSON.parse(localStorage.getItem("userdata"));

    let param = {
      id: userdata.courseid,
      tablename: "courses",
    };
    Post("getbydata", param).then((data) => {
      console.log(data);
      setCourse(data[0]);
      setIsloading(false);
    });
  }, []);

  return (
    <>
      <Header />
      {!isloading && (
        <div class="popular-course mt-5">
          <div class="container">
            <div class="row justify-content-sm-center">
              <div class="cl-xl-7 col-lg-8 col-md-10">
                <div class="section-tittle text-center mb-70">
                  <h3>My Courses</h3>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-xl-4 col-lg-4 col-md-6">
                <div class="single-course mb-40">
                  <div class="course-img">
                    <img src={fileurl + course.image} alt="" />
                  </div>
                  <div class="course-caption">
                    <div class="course-cap-top">
                      <h4>
                        <a href="#" style={{ color: "white" }}>
                          {course.title}
                        </a>
                      </h4>
                    </div>

                    <div class="course-cap-bottom d-flex justify-content-between">
                      <p>{course.details}</p>
                    </div>
                    <Link
                      to="/courseview"
                      state={{ id: course.id }}
                      className="btn btn-info"
                    >
                      Start
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}
export default Mycourse;
