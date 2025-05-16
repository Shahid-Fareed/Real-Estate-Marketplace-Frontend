import { ClockCircleOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BlogService from "../../services/home/blogServices";
import HomeHeader from "../../layout/HomeHeader";
import Footer from "../../layout/Footer";
import FooterCredit from "../../layout/FooterCredit";

const Careers = () => {
  const navigate = useNavigate();

  return (
    <>
      <HomeHeader />
      <section className="blogs p70-0">
        <div className="container">
          <div className="job-card-two shadow">
            <div className="row align-items-center">
              <div className="col-md-3 col-lg-2">
                <Link to="#" className="company-logo shadow ms-0 ms-md-auto me-auto mb-3">
                  <img src="assets/img/logo.png" alt="logo" />
                </Link>
              </div>

              <div className="col-md-9 col-lg-7 ps-md-0">
                <div className="job-info">
                  <h4>
                    <Link to="#">
                      Web Designer, Graphic Designer, UI/UX Designer{" "}
                    </Link>
                  </h4>
                  <ul>
                    <li>
                      <i className="bx bx-briefcase" />
                      Graphics Designer
                    </li>
                    <li>
                      <i className="bx bx-briefcase" />
                      $35000-$38000
                    </li>
                    <li>
                      <i className="bx bx-location-plus" />
                      Wellesley Rd, London
                    </li>
                    <li>
                      <i className="bx bx-stopwatch" />9 days ago
                    </li>
                  </ul>
                  <span className="job-status">Full Time</span>
                </div>
              </div>

              <div className="col-md-9 col-lg-3 ms-auto ps-md-0">
                <div className="theme-btn text-lg-end">
                  <a href="#" className="default-btn">
                    Browse Job
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <FooterCredit />
    </>
  );
};

export default Careers;
