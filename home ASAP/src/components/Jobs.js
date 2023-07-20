import { useEffect, useState } from "react";
import Footer from "./footer";
import Header from "./header";
import { Link } from "react-router-dom";
import { Post } from "../Api";

function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    Post("getall", { tablename: "vaccancies" }).then((data) => {
      setJobs(data);
    });
  }, []);

  return (
    <>
      <Header />
      <div class="categories-area section-padding30">
        <div class="container">
          <div class="row">
            {jobs.map((item) => {
              return (
                <div class="col-lg-4 col-md-6 col-sm-6">
                  <div class="single-cat mb-50">
                    <div class="cat-cap">
                      <h5>
                        <a href="#">{item.title}</a>
                      </h5>
                      <p>{item.jobdescription.slice(0, 200)}...</p>

                      <div class="container-login100-form-btn">
                        &nbsp;
                        <Link to="/jobdetail" state={{ id: item.id }}>
                          <button class="btn btn-success">Apply</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Jobs;
