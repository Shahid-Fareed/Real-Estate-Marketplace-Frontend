import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import TopAgentService from "../../../services/home/topAgentsServices";
import SectionHeading from "../../../components/Headings/SectionHeading";

type agentType = {
  _id: number;
  id: number;
  agency_name: string;
  about_agency: string;
  user_image: string;
};

const TopAgents = () => {
  const navigate = useNavigate();
  const [isDragging, setIsDragging] = useState(false);
  const [agents, setAgents] = useState([]);

  const getAllAgents = () => {
    let body = null;
    TopAgentService.getAgents(body)
      .then((res) => {
        setAgents(res.data);
      })
      .catch((err) => {
        console.log("Error on top agent api call");
      });
  };

  useEffect(() => {
    getAllAgents();
  }, []);

  const handelAgentDetails = (id: number) => {
    navigate("/agency", { state: { id: id } });
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    centerMode: false,
    slidesToScroll: 1,
    cssEase: "linear",
    beforeChange: () => {
      setIsDragging(true);
    },
    afterChange: () => {
      setIsDragging(false);
    },
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true,
          infinite: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          infinite: true,
        },
      },
    ],
  };

  return (
    <section
      className="residence residence-heading-center top-agents p70-0 pb-0 pb-lg-4"
      id="top-agents"
    >
      <div className="container">
        <SectionHeading f="Meet our top agents!" />
      </div>

      <div className="residence-carsouel pt-0 pt-lg-3">
        <div className="container text-center">
          <div className="row equal residen" id="residen4">
            <Slider {...settings}>
              {agents.map((agent: agentType) => (
                <div
                  key={agent._id}
                  className="col-md-4 pointer"
                  onClick={() => handelAgentDetails(agent.id)}
                >
                  <div
                    className="card border-0 rounded-0 mh-335"
                    style={{ background: "#f6f4ef" }}
                  >
                    <div className="card-body w-100 d-flex align-items-center justify-content-center">
                      <div>
                        <div className="residen-rounded-img rounded-circle overflow-hidden">
                          <img
                            className="img-fluid"
                            src={`
                              ${
                                process.env.REACT_APP_BASE_USERS_IMAGE_URL +
                                agent.user_image
                              }`}
                            width={150}
                            height={150}
                            alt={agent.agency_name}
                          />
                        </div>

                        <div className="residen-content p-lg-3 pb-0">
                          <h4>
                            {agent.agency_name != undefined &&
                              (agent.agency_name?.length <= 16
                                ? agent.agency_name
                                : agent.agency_name?.slice(0, 16) + "...")}
                          </h4>
                          <p className="mb-0">
                            {agent.about_agency != undefined &&
                              (agent.about_agency?.length <= 75
                                ? agent.about_agency
                                : agent.about_agency?.slice(0, 75) + "...")}
                          </p>
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

export default TopAgents;
