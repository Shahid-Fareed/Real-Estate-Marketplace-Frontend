import React, { useState } from "react";
import Slider from "react-slick";
import SectionHeading from "../../../components/Headings/SectionHeading";
import { useNavigate } from "react-router-dom";

type AgencyTypes = {
  agencyDetails: any;
  agencyProperties: any;
};

function addCommasToNumber(number: any) {
  return number?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const RecentProperties = ({ agencyDetails, agencyProperties }: AgencyTypes) => {
  const navigate = useNavigate();
  const [isDragging, setIsDragging] = useState(false);
  const handelPropertyDetails = (id: number, slug:any) => {
    navigate(`/property-detail/${slug}`, { state: { id: id } });
  };
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    centerMode: false,
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
          centerMode: false,
          infinite: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          centerMode: false,
          infinite: true,
        },
      },
    ],
  };

  return (
    <section className="residence residence-heading-center">
      <div className="container">
        <h3>Recent properties by {agencyDetails.agency_name}</h3>
      </div>

      <div className="residence-carsouel pb-5">
        <div className="container-fluid fixed">
          <div className="row residen" id="agency-recent-properties">
            <Slider {...settings}>
              {agencyProperties.map((property: any) => (
                <div key={property._id} className="overflow-hidden pointer">
                  <div className="card border-0 rounded-0 bg-transparent">
                    <div className="card-body p-0">
                      <div className="residen-item">
                        <div className="residen-thumbnail">
                          <img
                            className="img-fluid slick-thumbnail"
                            width="150"
                            height="150"
                            src={`${
                              process.env.REACT_APP_BASE_PROPERTY_IMAGE_URL +
                              property.property_images[0]?.image_name
                            }`}
                            alt=""
                          />
                          <div className="super-hot">
                            {property?.is_verified === 1 ? (
                              <div>
                                <div className="status-label verified">
                                  Verified
                                </div>
                              </div>
                            ) : null}
                            {property?.is_hot_listing === 1 ? (
                              <div>
                                <div className="status-label hot-listing">
                                  Hot Listing
                                </div>
                              </div>
                            ) : null}
                            {property?.is_super_hot_listing === 1 ? (
                              <div>
                                <div className="status-label super-hot-listing">
                                  Super Hot Listing
                                </div>
                              </div>
                            ) : null}
                          </div>
                        </div>

                        <div
                          className="residen-content pt-3"
                          onClick={() => handelPropertyDetails(property.id, property.slug)}
                        >
                          <h4>
                            <span className="currency">Pkr</span>
                            {addCommasToNumber(property.price)}
                          </h4>
                          <h5 className="caption mb-0">
                            {property.location},{property.city}
                          </h5>
                          <h5 className="caption caption-title">
                            {property.name}
                          </h5>

                          <ul className="residen-info list-unstyled d-flex align-items-center mb-0">
                            {property.bedroom === "" ? null : (
                              <li>
                                <img
                                  className="img-fluid"
                                  src="assets/img/bedIcon.png"
                                  width={26}
                                  height={31}
                                  alt=""
                                />
                                <span>{property.bedroom}</span>
                              </li>
                            )}

                            {property.bathroom === "" ? null : (
                              <li>
                                <img
                                  className="img-fluid"
                                  src="assets/img/BathIcon.png"
                                  width={26}
                                  height={31}
                                  alt=""
                                />
                                <span>{property.bathroom}</span>
                              </li>
                            )}

                            {property.garage_space === "" ? null : (
                              <li>
                                <img
                                  className="img-fluid"
                                  src="assets/img/GarageIcon.png"
                                  width={20}
                                  height={20}
                                  alt=""
                                />
                                <span>{property.garage_space}</span>
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

export default RecentProperties;
