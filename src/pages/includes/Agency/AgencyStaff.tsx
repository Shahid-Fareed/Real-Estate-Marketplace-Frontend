import { PhoneFilled, RedEnvelopeFilled } from "@ant-design/icons";
import React from "react";
import Slider from "react-slick";

type AgencyTypes = {
  agencyDetails: any;
};

const AgencyStaff = ({ agencyDetails }: AgencyTypes) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    variableWidth: false,
    slidesToScroll: 1,
    centerMode: false,
    center: false,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true,
          arrows: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <section className="top-socities about-agency">
      <div className="container">
        <h3 className="mb-3">Agency Staff</h3>

        <div className="residence-carsouel pt-0 pb-5">
          <div className="row residen text-center" id="agency-staff-slider">
            <Slider {...settings}>
              {agencyDetails?.agents?.map((agent: any) => (
                <div key={agent.id} className="col-md-4 col-xxl-3">
                  <div
                    className="card border-0 rounded-0"
                    style={{ background: "#f6f4ef" }}
                  >
                    <div className="card-body">
                      <div className="residen-rounded-img rounded-circle overflow-hidden">
                        {agent?.user_image !== "" ? (
                          <>
                            {" "}
                            <img
                              className="img-fluid"
                              src={`${
                                process.env.REACT_APP_BASE_USERS_IMAGE_URL +
                                agent?.user_image
                              }`}
                              width={150}
                              height={150}
                              style={{ paddingTop: 0 }}
                              alt=""
                            />
                          </>
                        ) : (
                          <>
                            {" "}
                            <img
                              className="img-fluid"
                              src="/assets/img/agency.png"
                              width={150}
                              height={150}
                              style={{ paddingTop: 0 }}
                              alt=""
                            />
                          </>
                        )}
                      </div>

                      <div className="residen-content">
                        <h4 style={{ minHeight: "auto" }}>{agent.full_name}</h4>
                        <p className="mb-0">{agent.role_title}</p>

                        <div className="d-lg-flex justify-content-center">
                          <a
                            href={`mailto:${agent.email}`}
                            className="btn btn-primary y-btn me-xl-3 py-2 px-4 rounded-0 mb-2 mb-lg-0"
                            style={{
                              fontFamily: '"Inter"',
                              color: "rgba(0, 0, 0, 0.8)",
                              background: "rgba(254, 223, 131, 1)",
                              border: "rgba(254, 223, 131, 1)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              paddingTop: "9px",
                              paddingBottom: "9px",
                            }}
                          >
                            <a
                              className="customAtag"
                              href={`mailto:${agent.email}`}
                            >
                              {/* <img
                                className="me-2"
                                src="assets/img/email.png"
                                width={35}
                                height={30}
                                alt=""
                              /> */}
                              <RedEnvelopeFilled
                                className="me-2"
                                style={{
                                  color: "#000",
                                  verticalAlign: "middle",
                                }}
                              />
                              Email
                            </a>
                          </a>
                          <a
                            href={`tel:${agent.mobile_number}`}
                            className="btn btn-primary g-btn py-2 px-4 rounded-0"
                            style={{
                              border: "rgba(37, 211, 102, 1)",
                              fontFamily: '"Inter"',
                              color: "rgba(0, 0, 0, 0.8)",
                              background: "rgba(37, 211, 102, 1)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              paddingTop: "9px",
                              paddingBottom: "9px",
                            }}
                          >
                            <a
                              className="customAtag"
                              href={`tel:${agent.mobile_number}`}
                            >
                              {/* <img
                                className="me-2"
                                src="assets/img/call.png"
                                width={32}
                                height={30}
                                alt=""
                              /> */}
                              <PhoneFilled
                                className="me-2"
                                style={{
                                  color: "#000",
                                  transform: "rotate(90deg)",
                                  verticalAlign: "middle",
                                }}
                              />
                              Calls
                            </a>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgencyStaff;
