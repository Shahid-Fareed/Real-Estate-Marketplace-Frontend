import React from "react";
import { useNavigate } from "react-router-dom";
import SectionHeading from "../../../components/Headings/SectionHeading";
import useAuthCheck from "../../../hooks/useAuthCheck";

const FindBestUs = () => {
  const navigate = useNavigate();
  const isAuthenticated: boolean = useAuthCheck();
  const propertyNavigation = (a: string, s: string, k:string, c:String) => {
    navigate("/property", { state: { ta: a, ts: s, tk:k, tc: c } });
  };
  return (
    <section className="find-best p70-0">
      <div className="container">
        <SectionHeading f="Find the best with us!" />

        <div className="row text-center">
          <div className="col-lg-4 col-sm-6 zoom d-flex mb-3 mb-lg-0">
            <div className="find-best-box">
              <img
                className=""
                src="assets/img/Home.png"
                width={100}
                height={93}
                alt=""
              />

              <h4>Buy a Property</h4>
              <p>Find your place with an immersive photo experience and the most listings.</p>

              <button onClick={() => propertyNavigation("sell", "", "", "")}
                className="btn buttonTpyeOne"
                type="button"
              >
                VIEW PROPERTIES
              </button>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6 zoom d-flex mb-3 mb-lg-0">
            <div className="find-best-box">
              <img
                className=""
                src="assets/img/HomeSold.png"
                width={100}
                height={93}
                alt=""
              />

              <h4>Sell a Property</h4>
              <p>Whether it’s your home, flat, or a plot, we can help you navigate a successful sale.</p>

              {
                isAuthenticated ?  <a
                style={{ textDecoration: "none" }}
                target="_blank"
                href={`${process.env.REACT_APP_BASE_SUBDOMAIN}/dashboard`}
                className="btn buttonTpyeOne"
              >
                + ADD PROPERTY
              </a> :  <button
               data-bs-toggle="modal"
               data-bs-target="#exampleModaladd"
                className="btn buttonTpyeOne"
                type="button"
              >
                ADD PROPERTY
              </button>
              }
            </div>
          </div>

          <div className="col-lg-4  zoom d-flex">
            <div className="find-best-box w-100">
              <img
                src="assets/img/HomeKey.png"
                width={93}
                alt=""
                height={333}
              />
              <h4>Rent a Property</h4>
              <p>Find the best properties available for rent in the most prime locations nationwide!</p>
              <button onClick={() => propertyNavigation("rent", "", "","")}
                className="btn buttonTpyeOne"
                type="button"
              >
                VIEW PROPERTIES
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindBestUs;
