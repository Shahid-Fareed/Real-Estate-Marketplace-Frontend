/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link, useNavigate } from "react-router-dom";

type AgencyTypes = {
  agencyDetails: any;
  agentProperyCount: number;
};

const AgencyBanner = ({ agencyDetails, agentProperyCount }: AgencyTypes) => {
  const navigate = useNavigate();

  const propertyNavigation = (a: string) => {
    navigate("/property", { state: { tl: a, ta: "" } });
  };
  return (
    <section className="agencyBanner text-white position-relative">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-3 mb-3 mb-sm-0">
            <div className="agencyBanner-thumbnail">
              {agencyDetails?.user_image === "" ? (
                <img
                  src="/assets/img/agency.png"
                  // width={250}
                  // height={250}
                  alt=""
                  className=""
                />
              ) : (
                <img
                  src={`${
                    process.env.REACT_APP_BASE_USERS_IMAGE_URL +
                    agencyDetails?.user_image
                  }`}
                  width={250}
                  height={250}
                  alt=""
                  className=""
                />
              )}
            </div>
          </div>

          <div className="col-sm-9">
            <h2 className="agencyBanner__title text-capitalize">
              {agencyDetails?.agency_name}
              <span className="d-inline-block">
                <Link
                  to="#"
                  type="button"
                  className="btn bg-white customer-category  rounded-0 d-flex align-items-center text-uppercase"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="26"
                    viewBox="0 0 28 26"
                    fill="none"
                  >
                    <path
                      d="M14 0L17.1432 9.67376H27.3148L19.0858 15.6525L22.229 25.3262L14 19.3475L5.77101 25.3262L8.9142 15.6525L0.685208 9.67376H10.8568L14 0Z"
                      fill="#FEDF83"
                    />
                  </svg>
                  {agencyDetails?.user_tag}
                </Link>
              </span>
            </h2>

            <div className="d-flex align-items-center">
              <img
                src="assets/img/Location Icon.png"
                width={15}
                height={25}
                alt=""
              />
              <p
                className="mb-0 ms-3"
                style={{ color: "rgba(255, 255, 255, 1)" }}
              >
                {agencyDetails?.city}
              </p>
            </div>

            <div className="row mt-3 mt-lg-5 align-items-center">
              <div className="col-lg-8 mb-3 mb-lg-0">
                <p className="mb-0">
                  <a
                    className="pointer"
                    onClick={() => propertyNavigation(agencyDetails.id)}
                    style={{
                      color: "rgba(255, 255, 255, 1)",
                      textDecoration: "underline",
                      fontFamily: '"Inter"',
                      fontSize: 19,
                    }}
                  >
                    View All {agentProperyCount} Properties
                  </a>
                </p>
              </div>

              <div className="col-lg-4">
                <ul className="d-flex flex-wrap justify-content-lg-end list-unstyled mb-0">
                  <li>
                    <a href={agencyDetails?.twitter_url} target="_blank">
                      <img
                        className="me-2"
                        src="assets/img/twitter.png"
                        width={40}
                        height={38}
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a href={agencyDetails?.facebook_url} target="_blank">
                      <img
                        className="me-2"
                        src="assets/img/facebook.png"
                        width={40}
                        height={38}
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a href={agencyDetails?.instagram_url} target="_blank">
                      <img
                        className="me-2"
                        src="assets/img/instagram.png"
                        width={40}
                        height={38}
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a href={agencyDetails?.linkedin_url} target="_blank">
                      <img
                        className="me-2"
                        src="assets/img/linkdin.png"
                        width={40}
                        height={38}
                        alt=""
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgencyBanner;
