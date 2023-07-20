import { useEffect, useState } from "react";
import { Post, fileurl } from "../Api";

function Main() {
  const [cources, setCources] = useState([]);

  useEffect(() => {
    Post("getall", { tablename: "courses" }).then((data) => {
      console.log(data);
      setCources(data);
    });
  }, []);
  return (
    <>
      <div class="slider-area ">
        <div class="slider-active">
          {/* <!-- Single Slider --> */}
          <div class="single-slider slider-height d-flex align-items-center">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-xl-6 col-lg-7 col-md-8">
                  <div class="hero__caption">
                    <span data-animation="fadeInLeft" data-delay=".2s">
                      Popular Online Courses
                    </span>
                    <h1 data-animation="fadeInLeft" data-delay=".4s">
                      The New Way To Learn Properly in With Us!
                    </h1>
                    {/* <!-- Hero-btn --> */}
                    <div class="hero__btn">
                      <a
                        href="industries.html"
                        class="btn hero-btn"
                        data-animation="fadeInLeft"
                        data-delay=".8s"
                      >
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-xl-6 col-lg-5">
                  <div
                    class="hero-man d-none d-lg-block f-right"
                    data-animation="jello"
                    data-delay=".4s"
                  >
                    <img src="assets/img/hero/heroman.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Single Slider --> */}
        </div>
      </div>

      <div class="popular-course mt-5">
        <div class="container">
          <div class="row justify-content-sm-center">
            <div class="cl-xl-7 col-lg-8 col-md-10">
              {/* <!-- Section Tittle --> */}
              <div class="section-tittle text-center mb-70">
                <span>Most Popular Course Of This Week</span>
                <h3>Our Popular Courses</h3>
              </div>
            </div>
          </div>
          <div class="row">
            {cources.map((elem) => {
              return (
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-course mb-40">
                    <div class="course-img">
                      <img src={fileurl + elem.image} alt="" />
                    </div>
                    <div class="course-caption">
                      <div class="course-cap-top">
                        <h4>
                          <a href="#" style={{ color: "white" }}>
                            {elem.title}
                          </a>
                        </h4>
                      </div>

                      <div class="course-cap-bottom d-flex justify-content-between">
                        <p>{elem.details}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* <!-- Section Button --> */}
        </div>
      </div>
      {/* <!-- Popular Course End -->




 
        <!--? About Law Start--> */}
      <div class="about-area section-padding2">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-12">
              <div class="about-caption mb-50">
                {/* <!-- Section Tittle --> */}
                <div class="section-tittle mb-35">
                  <span>More About Our Company</span>
                  <h2>Want to know more</h2>
                </div>
                <p>
                  There arge many variations ohf passages of sorem gpsum ilable,
                  but the majority have suffered alteration in some form, by
                  ected humour, or randomised words whi.
                </p>
                <ul>
                  <li>
                    <span class="flaticon-business"></span> Creative ideas base
                  </li>
                  <li>
                    <span class="flaticon-communications-1"></span> Assages of
                    sorem gpsum ilable
                  </li>
                  <li>
                    <span class="flaticon-graduated"></span> Have suffered
                    alteration in so
                  </li>
                  <li>
                    <span class="flaticon-tools-and-utensils"></span> Randomised
                    words whi
                  </li>
                </ul>
                <a href="about.html" class="btn">
                  More About Us
                </a>
              </div>
            </div>
            <div class="col-lg-6 col-md-12">
              {/* <!-- about-img --> */}
              <div class="about-img ">
                <div class="about-font-img d-none d-lg-block">
                  <img src="assets/img/gallery/about2.png" alt="" />
                </div>
                <div class="about-back-img ">
                  <img src="assets/img/gallery/about1.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About Law End-->
        <!--? Testimonial Start --> */}
    </>
  );
}
export default Main;
