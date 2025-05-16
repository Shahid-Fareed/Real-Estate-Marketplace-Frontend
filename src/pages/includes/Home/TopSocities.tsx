import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import TopSocityServices from "../../../services/home/topSocitiesService";
import SectionHeading from "../../../components/Headings/SectionHeading";
import { Link } from "react-router-dom";

type societType = {
  id: number;
  name: string;
  description: string;
  logo: string;
};

const TopSocities = () => {
  const [socities, setSocities] = useState([]);
  const [isDragging, setIsDragging] = useState(false);

  const getTopSocities = () => {
    let body = null;
    TopSocityServices.getSocities(body)
      .then((response) => {
        setSocities(response.data);
      })
      .catch((err) => {
        console.log("err on top socities call");
      });
  };

  useEffect(() => {
    getTopSocities();
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: false,
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
      className="residence residence-heading-center top-socities rent-home p70-0"
      id="top-socities"
    >
      <div className="container">
        <SectionHeading f="Explore top Societies" />
      </div>

      <div className="residence-carsouel pt-0 pt-lg-3">
        <div className="container text-center">
          <div className="row residen" id="residen3">
            <Slider {...settings}>
              {socities.map((news: societType) => (
                <div key={news.id} className="col-md-4">
                  <div
                    className="card border-0 rounded-0"
                    style={{ background: "#f6f4ef" }}
                  >
                    <div className="card-body">
                      <div className="residen-rounded-img rounded-circle overflow-hidden">
                        <img
                          className="img-fluid "
                          src={news.logo}
                          width={150}
                          height={150}
                          alt=""
                        />
                      </div>

                      <div className="residen-content p-lg-3 pb-0">
                        <h4>{news.name}</h4>
                        <p className="mb-0">
                          {news.description.length > 150 ? (
                            <>
                              <span>
                                {" "}
                                {news.description.slice(0, 150) + "..."}{" "}
                              </span>

                              <span
                                id={`collapse-${news.id}`}
                                className="collapse"
                              >
                                {news.description.slice(
                                  151,
                                  news.description.length
                                )}
                              </span>

                              <div className="d-block">
                                <button
                                  type="button"
                                  className="view-more text-dark read-more"
                                  data-bs-toggle="collapse"
                                  data-bs-target={`#collapse-${news.id}`}
                                >
                                  Read More
                                </button>
                              </div>
                            </>
                          ) : (
                            news.description
                          )}
                        </p>
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

export default TopSocities;
