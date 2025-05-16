import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import PropertyFilterService from "../../../services/home/propertyByCity";
import SectionHeading from "../../../components/Headings/SectionHeading";

type cityTypes = {
  _id: string;
};

type propertyTypes = {
  _id: number;
  id: number;
  price: number;
  location: string;
  city: string;
  bedroom: any;
  garage_space: any;
  bathroom: any;
  property_images: any;
  is_verified: any;
  is_hot_listing: any;
  is_super_hot_listing: any;
  name: any;
  slug:any;
};

const RentHome = ({ dataCity }: any) => {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");
  const [properties, setProperties] = useState([]);

  const navigate = useNavigate();

  const propertyNavigation = (a: string, s: string, ci: string) => {
    navigate("/property", { state: { ta: a, ts: s, tci: ci } });
  };

  const handelPropertyDetails = (id: number, slug:any) => {
    navigate(`/property-detail/${slug}`, { state: { id: id } });
  };

  function addCommasToNumber(number: any) {
    return number?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const getProperties = () => {
    let body = { cities: selectedCity };
    PropertyFilterService.getRentalProperyFilter(body).then((response) => {
      setProperties(response.data);
    });
  };

  useEffect(() => {
    getProperties();
  }, [selectedCity]);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: "linear",
    centerMode: false,
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
          dots: false,
          arrows: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false,
          centerMode: false,
          infinite: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          centerMode: false,
          infinite: true,
        },
      },
    ],
  };

  return (
    <section className="residence section rent-home p70-0" id="rent-home">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-7">
            <SectionHeading f="Rent a place you can call home" />
            <button
              onClick={() =>
                propertyNavigation("rent", "1", `,${selectedCity}`)
              }
              className="viewmore hover-animate"
            >
              View More
            </button>
          </div>

          <div className="col-md-4 col-sm-5 align-self-center">
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="color-1 form-select"
              style={{
                border: "1px solid var(--dark)",
                margin: "0 0 0 auto",
                backgroundColor: "transparent",
              }}
            >
              <option value="">Select City</option>
              {dataCity.map((es: cityTypes) => (
                <option key={es._id} value={es._id}>
                  {es._id}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="residence-carsouel px-3 px-sm-0">
        <div className="container-fluid">
          <div className="row residen" id="residen2">
            <Slider {...settings}>
              {properties.map((prop: propertyTypes) => (
                <div key={prop._id} className="overflow-hidden pointer">
                  <div className="card border-0 rounded-0 bg-transparent">
                    <div className="card-body p-0">
                      <div className="residen-item">
                        <div className="residen-thumbnail">
                          <img
                            className="img-fluid slick-thumbnail"
                            src={`${
                              process.env.REACT_APP_BASE_PROPERTY_IMAGE_URL +
                              prop?.property_images[0]?.image_name
                            }`}
                            alt=""
                            width="380"
                            height="380"
                          />
                          <div className="super-hot">
                            {prop?.is_verified === 1 ? (
                              <div>
                                <div className="status-label verified">
                                  Verified
                                </div>
                              </div>
                            ) : null}
                            {prop?.is_hot_listing === 1 ? (
                              <div>
                                <div className="status-label hot-listing">
                                  Hot Listing
                                </div>
                              </div>
                            ) : null}
                            {prop?.is_super_hot_listing === 1 ? (
                              <div>
                                <div className="status-label super-hot-listing">
                                  Super Hot Listing
                                </div>
                              </div>
                            ) : null}
                          </div>
                        </div>

                        <div
                          onClick={() => handelPropertyDetails(prop.id, prop.slug)}
                          className="residen-content p-3 pb-0"
                        >
                          <h4>
                            <span className="currency">Pkr</span>
                            {addCommasToNumber(prop.price)}
                          </h4>

                          <h5 className="caption mb-0">
                            {prop.location},{prop.city}
                          </h5>
                          <h5 className="caption caption-title">{prop.name}</h5>

                          <ul className="residen-info list-unstyled d-flex align-items-center mb-0">
                            {prop.bedroom === "" ? null : (
                              <li>
                                <img
                                  className="img-fluid"
                                  src="assets/img/bedIcon.png"
                                  width={26}
                                  height={31}
                                  alt=""
                                />
                                <span>{prop.bedroom}</span>
                              </li>
                            )}
                            {prop.bathroom === "null" ? null : (
                              <li>
                                <img
                                  className="img-fluid"
                                  src="assets/img/BathIcon.png"
                                  width={26}
                                  height={31}
                                  alt=""
                                />
                                <span>{prop.bathroom}</span>
                              </li>
                            )}
                            {prop.garage_space === "" ? null : (
                              <li>
                                <img
                                  className="img-fluid"
                                  src="assets/img/GarageIcon.png"
                                  width={20}
                                  height={20}
                                  alt=""
                                />
                                <span>{prop.garage_space}</span>
                              </li>
                            )}
                          </ul>
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

export default RentHome;
