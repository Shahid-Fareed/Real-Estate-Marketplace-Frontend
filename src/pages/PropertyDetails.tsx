import React, { useState, useEffect, ChangeEvent } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import PropertyApi from "../services/home/propertyService";
import AgencyService from "../services/home/agencyService";
import BreadCrumns from "../components/BreadCrumns";
import Footer from "../layout/Footer";
import FooterCredit from "../layout/FooterCredit";
import HomeHeader from "../layout/HomeHeader";
import Slider from "react-slick";
import GoogleMapReact from "google-map-react";
import {
  PhoneFilled,
  RedEnvelopeFilled,
  WhatsAppOutlined,
} from "@ant-design/icons";
import Loaders from "../components/Loaders";

type propertyDetailsType = {
  name: string;
  area_size: number;
  area_unit: String;
  location: String;
  city: String;
  price: number;
  bedroom: any;
  bathroom: any;
  garage_space: string;
  description: string;
  seller_name: string;
  seller_mobile_no: string;
  user_id: number;
  property_images: any;
  latitude: any;
  longitude: any;
  typ: any;
};

type agencyDetailsType = {
  id: number;
  user_image: string;
  full_name: string;
};

interface Amenity {
  [key: string]: any;
}

const PropertyDetails = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [propertyUserId, setPropertyUserId] = useState("");
  const [defaultProps, setDefaultProps] = useState<{
    center: { lat: number; lng: number };
    zoom: number;
  }>({
    center: { lat: 0, lng: 0 },
    zoom: 11,
  });

  const [propertyAmenties, setPropertyAmenties] = useState<
    { [key: string]: any }[]
  >([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const [agencyDetails, setAgencyDetails] = useState<agencyDetailsType>({
    user_image: "",
    full_name: "",
    id: 0,
  });

  function addCommasToNumber(number: any) {
    return number?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const handelNavigate = (e: any, id: number) => {
    e.preventDefault();
    navigate("/agency", { state: { id: id } });
  };

  const [propertyDetailss, setPropertyDetailss] = useState<propertyDetailsType>(
    {
      name: "",
      area_size: 0,
      area_unit: "",
      city: "",
      price: 0,
      bedroom: 0,
      bathroom: 0,
      garage_space: "",
      description: "",
      seller_name: "",
      seller_mobile_no: "",
      location: "",
      user_id: 0,
      property_images: [],
      latitude: 0,
      longitude: 0,
      typ: "",
    }
  );

  const getProperyDetails = (slug: any) => {
    setIsLoading(true);
    let body = null;
    PropertyApi.getPropertyDetailsBySlug(body, slug).then((res) => {
      const data = res.data[0];
      setDefaultProps({
        center: { lat: data.latitude, lng: data.longitude },
        zoom: 11,
      });
      const amentiesdata = res.data[0].ameneties;
      setPropertyDetailss(data);
      setAgencyDetails(res.agencyDetails[0]);

      const filteredResults: { [key: string]: any }[] = [];

      for (const category in amentiesdata) {
        for (const feature in amentiesdata[category]) {
          if (
            amentiesdata[category][feature] !== null &&
            amentiesdata[category][feature] !== 0 &&
            amentiesdata[category][feature] !== ""
          ) {
            filteredResults.push({
              [feature]: amentiesdata[category][feature],
            });
          }
        }
      }
      setPropertyAmenties(filteredResults);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    getProperyDetails(slug);
  }, []);

  const postInquire = (e: any) => {
    e.preventDefault();
    let body = {
      user_id: propertyDetailss.user_id,
      name: name,
      contact_number: phoneNumber,
      email: email,
      message: message,
      type: "property",
      i_am: selectedOption,
    };
    AgencyService.sendAgencyInquiryForm(body)
      .then((res) => {
        setName("");
        setEmail("");
        setPhoneNumber("");
        setMessage("");
        setSelectedOption("");
        toast.info("Query Sent Successfully!", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((err) => {
        toast.warn("Something went wrong", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  const handleRadioChange = (value: string) => {
    setSelectedOption(value);
  };

  const handlePhoneNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value.replace(/\D/g, "").slice(0, 11);
    setPhoneNumber(newValue);
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const breadcrumbData = [
    { title: "Home", link: "/" },
    { title: "Property Detail", link: "#" },
  ];
  return (
    <>
      <HomeHeader />
      <BreadCrumns breadcrumbData={breadcrumbData} />
      {isLoading ? (
        <>
          <Loaders />
        </>
      ) : (
        <>
          <section className="property-detail p70-0">
            <div className="container">
              <div className="row align-items-center mb-4 mb-lg-4">
                <div className="col-lg-7 col-xxl-8 mx-auto mb-5 mb-lg-0">
                  <Slider {...settings}>
                    {propertyDetailss.property_images.map((pimage: any) => (
                      <div className="equal">
                        <div className="position-relative">
                          <img
                            src={`
                          ${
                            process.env.REACT_APP_BASE_PROPERTY_IMAGE_URL +
                            pimage?.image_name
                          }`}
                            className="rounded"
                            alt=""
                            width="855"
                            height="646"
                          />
                          <div className="super-hot">
                            {pimage?.is_verified === 1 ? (
                              <div>
                                <div className="status-label verified">
                                  Verified
                                </div>
                              </div>
                            ) : null}
                            {pimage?.is_hot_listing === 1 ? (
                              <div>
                                <div className="status-label hot-listing">
                                  Hot Listing
                                </div>
                              </div>
                            ) : null}
                            {pimage?.is_super_hot_listing === 1 ? (
                              <div>
                                <div className="status-label super-hot-listing">
                                  Super Hot Listing
                                </div>
                              </div>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>

                <div className="col-lg-5 col-xxl-4 agency-form">
                  <div
                    className="pt-3 pe-3 pe-md-4 pb-4 ms-0 ps-3 ps-md-4"
                    style={{ border: "1px solid rgba(0, 0, 0, 0.3)" }}
                  >
                    <div className="d-flex flex-wrap flex-sm-nowrap agency-form__actions">
                      <a
                        href={`tel:${propertyDetailss?.seller_mobile_no}`}
                        className="btn btn-primary y-btn me-lg-3 me-sm-2 rounded-0 mb-2 mb-sm-0"
                        style={{
                          background: "rgb(254, 223, 131)",
                          color: "rgba(0, 0, 0, 0.8)",
                          width: "100%",
                          border: "none",
                          paddingTop: "8px",
                          paddingBottom: "8px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <a
                          className="customAtag"
                          href={`tel:${propertyDetailss?.seller_mobile_no}`}
                          style={{ fontSize: "18px" }}
                        >
                          {/* <img
                        className="me-2"
                        src="/assets/img/call-2.png"
                        width={17}
                        height={17}
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
                          Call
                        </a>
                      </a>
                      <a
                        href={`tel:${propertyDetailss?.seller_mobile_no}`}
                        className="btn btn-primary g-btn rounded-0"
                        style={{
                          background: "rgb(37, 211, 102)",
                          color: "rgba(0, 0, 0, 0.8)",
                          width: "100%",
                          border: "none",
                          paddingTop: "8px",
                          paddingBottom: "8px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <a
                          className="customAtag"
                          target="_blank"
                          href={`https://wa.me/${propertyDetailss?.seller_mobile_no}`}
                          style={{ fontSize: "18px" }}
                        >
                          {/* <img
                        className="me-2"
                        src="/assets/img/whatsapp.png"
                        width={24}
                        height={24}
                        alt=""
                      /> */}
                          <WhatsAppOutlined
                            className="me-2"
                            style={{ color: "#000", verticalAlign: "middle" }}
                          />
                          WhatsApp
                        </a>
                      </a>
                    </div>

                    {/* <div className="d-flex">
                  <button
                    className="btn btn-primary y-btn me-xl-3 me-lg-3 me-md-2 me-sm-2 me-2 rounded-0"
                    type="button"
                    style={{
                      background: "rgb(254, 223, 131)",
                      color: "rgba(0, 0, 0, 0.8)",
                      width: "100%",
                      border: "none",
                    }}
                  >
                    <a className="customAtag" href={`tel:${propertyDetailss.seller_mobile_no}`}>
                      <img
                        className="me-2"
                        src="/assets/img/call.png"
                        width={32}
                        height={30}
                        alt=""
                      />
                      Call
                    </a>
                  </button>
                  <button
                    className="btn btn-primary g-btn me-xl-3 me-lg-3 me-md-2 me-sm-2 me-2 rounded-0"
                    type="button"
                    style={{
                      background: "rgb(37, 211, 102)",
                      color: "rgba(0, 0, 0, 0.8)",
                      width: "100%",
                      border: "none",
                    }}
                  >
                    <a className="customAtag" href={`tel:${propertyDetailss.seller_mobile_no}`}>
                      <img
                        className="me-2"
                        src="/assets/img/whatsapp.png"
                        width={32}
                        height={30}
                        alt=""
                      />
                      WhatsApp
                    </a>
                  </button>
                </div> */}
                    <div>
                      <form
                        className="login-box"
                        onSubmit={(e) => postInquire(e)}
                      >
                        {/* <div className="user-box">
                      <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="form-control mt-xxl-3 mt-lg-3 mt-md-3 mt-sm-2 mt-2 mb-xxl-3 mb-xl-3 mb-lg-3 mb-md-3 mb-sm-3 mb-3 pt-xxl-3 pt-xl-3 pt-lg-3 pt-md-2 pt-sm-3 pt-3 pb-xxl-3 pb-xl-3 pb-lg-3 pb-md-2 pb-sm-3 pb-3 rounded-0"
                        type="text"
                        placeholder=""
                        style={{
                          color: "rgba(0, 0, 0, 0.3)",
                          fontFamily: "Inter",
                          border: "1px solid rgba(0, 0, 0, 0.3)",
                        }}
                      />
                      <label>Name</label>
                    </div> */}

                        <input
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="form-control mt-xxl-3 mt-lg-3 mt-md-3 mt-sm-2 mt-2 mb-xxl-3 mb-xl-3 mb-lg-3 mb-md-3 mb-sm-3 mb-3 pt-xxl-3 pt-xl-3 pt-lg-3 pt-md-2 pt-sm-3 pt-3 pb-xxl-3 pb-xl-3 pb-lg-3 pb-md-2 pb-sm-3 pb-3 rounded-0"
                          type="text"
                          placeholder="Name"
                        />

                        <input
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="form-control mt-xxl-3 mt-lg-3 mt-md-3 mt-sm-2 mt-2 mb-xxl-3 mb-xl-3 mb-lg-3 mb-md-3 mb-sm-3 mb-3 pt-xxl-3 pt-xl-3 pt-lg-3 pt-md-2 pt-sm-3 pt-3 pb-xxl-3 pb-xl-3 pb-lg-3 pb-md-2 pb-sm-3 pb-3 rounded-0"
                          type="email"
                          placeholder="Email"
                        />
                        <input
                          maxLength={11}
                          value={phoneNumber}
                          onChange={handlePhoneNumberChange}
                          className="form-control mt-xxl-3 mt-lg-3 mt-md-3 mt-sm-2 mt-2 mb-xxl-3 mb-xl-3 mb-lg-3 mb-md-3 mb-sm-3 mb-3 pt-xxl-3 pt-xl-3 pt-lg-3 pt-md-2 pt-sm-3 pt-3 pb-xxl-3 pb-xl-3 pb-lg-3 pb-md-2 pb-sm-3 pb-3 rounded-0"
                          type="number"
                          placeholder="Contact Number"
                        />
                        <textarea
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          className="form-control mt-xxl-3 mt-lg-3 mt-md-3 mt-sm-2 mt-2 mb-xxl-3 mb-xl-3 mb-lg-3 mb-md-3 mb-sm-3 mb-3 pt-xxl-3 pt-xl-3 pt-lg-3 pt-md-2 pt-sm-3 pt-3 pb-xxl-3 pb-xl-3 pb-lg-3 pb-md-2 pb-sm-3 pb-3 rounded-0"
                          placeholder="Message"
                          defaultValue={""}
                        />

                        <div className="text-start d-xl-flex flex-wrap flex-row justify-content-between align-items-center mb-3">
                          <p className="text-start mb-xl-0">I am a:</p>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              id="formCheck-1"
                              name="userType"
                              checked={selectedOption === "buyer"}
                              onChange={() => handleRadioChange("buyer")}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="formCheck-1"
                            >
                              Buyer/Tenant
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              id="formCheck-2"
                              name="userType"
                              checked={selectedOption === "agent"}
                              onChange={() => handleRadioChange("agent")}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="formCheck-2"
                            >
                              Agent
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              id="formCheck-3"
                              name="userType"
                              checked={selectedOption === "other"}
                              onChange={() => handleRadioChange("other")}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="formCheck-3"
                            >
                              Other
                            </label>
                          </div>
                        </div>
                        <div>
                          <button
                            disabled={
                              !name ||
                              !email ||
                              !message ||
                              !phoneNumber ||
                              !selectedOption
                            }
                            className="btn btn-primary py-3 y-btn"
                            type="submit"
                            style={{
                              background: "rgb(254, 223, 131)",
                              color: "rgba(0, 0, 0, 0.8)",
                              fontFamily: "Inter",
                              width: "100%",
                              border: "none",
                            }}
                          >
                            {/* <img
                          className="me-xxl-2"
                          src="/assets/img/email.png"
                          width={26}
                          height={26}
                          alt=""
                        /> */}
                            <RedEnvelopeFilled
                              className="me-2"
                              style={{ color: "#000", verticalAlign: "middle" }}
                            />
                            Contact Seller
                          </button>
                          <p className="divider">
                            <span>OR</span>
                          </p>

                          <button
                            data-bs-toggle="modal"
                            data-bs-target="#getInTouchModal"
                            className="btn btn-dark py-3"
                            type="button"
                            style={{
                              fontFamily: "Inter",
                              width: "100%",
                              border: "none",
                            }}
                          >
                            {/* <img
                          className="me-xxl-2"
                          src="/assets/img/email.png"
                          width={26}
                          height={26}
                          alt=""
                        /> */}
                            <RedEnvelopeFilled
                              className="me-2"
                              style={{ color: "#fff", verticalAlign: "middle" }}
                            />
                            Engage IN Realtors
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              <h4 className="mb-3 mt-lg-5 pt-lg-3">
                {propertyDetailss?.area_size} {propertyDetailss?.area_unit},{" "}
                {propertyDetailss?.location}, {propertyDetailss?.name},{" "}
                {propertyDetailss?.city}
              </h4>

              <div className="my-3">
                <span className="me-2 fs-5">PKR</span>
                <h2 className="d-inline-block">
                  {" "}
                  {addCommasToNumber(propertyDetailss?.price)}
                </h2>
              </div>

              <ul className="residen-info list-unstyled d-flex align-items-center border-bottom pb-4 mb-4">
                {propertyDetailss?.bedroom === "" ? null : (
                  <li>
                    <img
                      className="img-fluid"
                      src="assets/img/bedIcon.png"
                      width={26}
                      height={31}
                      alt=""
                    />
                    <span>{propertyDetailss?.bedroom}</span>
                  </li>
                )}
                {propertyDetailss?.bathroom === "" ? null : (
                  <li>
                    <img
                      className="img-fluid"
                      src="assets/img/BathIcon.png"
                      width={26}
                      height={31}
                      alt=""
                    />
                    <span>{propertyDetailss?.bathroom}</span>
                  </li>
                )}
                {propertyDetailss?.garage_space === "" ? null : (
                  <li>
                    <img
                      className="img-fluid"
                      src="assets/img/GarageIcon.png"
                      width={20}
                      height={20}
                      alt=""
                    />
                    <span>{propertyDetailss?.garage_space}</span>
                  </li>
                )}
              </ul>

              <div className="border-bottom pb-4">
                <h5 className="">Description</h5>
                <p className="mb-4">{propertyDetailss?.description}</p>
              </div>
              <>
                <nav className="pt-4">
                  <div
                    className="nav nav-tabs justify-content-sm-start"
                    id="nav-tabsss"
                    role="tablist"
                    style={{ borderBottom: 0 }}
                  >
                    <button
                      className="me-2 mb-2 pdetail-padding"
                      style={{
                        border: "1px solid black",
                        background: "transparent",
                      }}
                      id="nav-overview-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-overview"
                      type="button"
                      role="tab"
                      aria-controls="nav-overview"
                      aria-selected="true"
                    >
                      Overview
                    </button>
                    <button
                      className="me-2 mb-2 pdetail-padding"
                      style={{
                        border: "1px solid black",
                        background: "transparent",
                      }}
                      id="nav-feature-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-feature"
                      type="button"
                      role="tab"
                      aria-controls="nav-feature"
                      aria-selected="false"
                    >
                      Features
                    </button>

                    <button
                      className="me-2 mb-2 pdetail-padding"
                      style={{
                        border: "1px solid black",
                        background: "transparent",
                      }}
                      id="nav-pricing-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-pricing"
                      type="button"
                      role="tab"
                      aria-controls="nav-pricing"
                      aria-selected="false"
                    >
                      Pricing Details
                    </button>
                    <button
                      className="me-2 mb-2 pdetail-padding"
                      style={{
                        border: "1px solid black",
                        background: "transparent",
                      }}
                      id="nav-details-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-details"
                      type="button"
                      role="tab"
                      aria-controls="nav-details"
                      aria-selected="false"
                    >
                      Agent/Owner Details
                    </button>
                    <button
                      className="me-2 mb-2 pdetail-padding"
                      style={{
                        border: "1px solid black",
                        background: "transparent",
                      }}
                      id="nav-location-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-location"
                      type="button"
                      role="tab"
                      aria-controls="nav-location"
                      aria-selected="false"
                    >
                      Location Details
                    </button>
                  </div>
                </nav>

                <div
                  className="tab-content my-3 my-md-4 my-lg-5"
                  id="nav-tabContent"
                >
                  <div
                    className="tab-pane fade show active"
                    id="nav-overview"
                    role="tabpanel"
                    aria-labelledby="nav-overview-tab"
                    tabIndex={0}
                  >
                    <div className="ps-0 d-flex">
                      <div className="border-end pe-5">
                        <p className="mb-1">Name:</p>
                        <p className="mb-1">Contact Number:</p>
                        <p className="mb-1">Role</p>
                        <p className="mb-1">Purpose</p>
                      </div>
                      <div className="ps-4">
                        <p className="mb-1">{propertyDetailss?.seller_name}</p>
                        <p className="mb-1">
                          {propertyDetailss?.seller_mobile_no}
                        </p>
                        <p className="mb-1">Owner</p>
                        <p
                          style={{ textTransform: "capitalize" }}
                          className="mb-1"
                        >
                          {propertyDetailss?.typ}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-feature"
                    role="tabpanel"
                    aria-labelledby="nav-feature-tab"
                    tabIndex={0}
                  >
                    <div className="ps-0 d-flex">
                      <div className="pe-5 w-100">
                        <div className="mb-0 p-0">
                          {propertyAmenties?.map((result, index) => (
                            <React.Fragment key={index}>
                              <div className="d-flex w-100">
                                {Object.keys(result)?.map((key) => (
                                  <>
                                    <div
                                      className="border-end pe-5"
                                      style={{
                                        width: "100%",
                                        maxWidth: "178px",
                                      }}
                                    >
                                      <p
                                        key={key}
                                        className="mb-1 text-capitalize"
                                      >
                                        {key?.replace(/_/g, " ")}
                                      </p>
                                    </div>
                                    <div className="ps-4">
                                      <p className="mb-1  text-capitalize">
                                        {result[key]}
                                      </p>
                                    </div>
                                  </>
                                ))}
                              </div>
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-pricing"
                    role="tabpanel"
                    aria-labelledby="nav-pricing-tab"
                    tabIndex={0}
                  >
                    <div className="ps-0 d-flex">
                      <div className="border-end pe-5">
                        <p className="mb-1">Price:</p>
                      </div>
                      <div className="ps-4">
                        <p className="mb-1">
                          Pkr {addCommasToNumber(propertyDetailss?.price)}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-details"
                    role="tabpanel"
                    aria-labelledby="nav-details-tab"
                    tabIndex={0}
                  >
                    <div className="ps-0 d-flex">
                      <div className="border-end pe-5">
                        <p className="mb-1">Name:</p>
                        <p className="mb-1">Contact Number:</p>
                        <p className="mb-1">Role</p>
                        <p className="mb-1">Purpose</p>
                        {agencyDetails ? <p className="mb-1">Agency:</p> : ""}
                      </div>
                      <div className="ps-4">
                        <p className="mb-1">{propertyDetailss?.seller_name}</p>
                        <p className="mb-1">
                          {propertyDetailss?.seller_mobile_no}
                        </p>
                        <p className="mb-1">Owner</p>
                        <p
                          style={{ textTransform: "capitalize" }}
                          className="mb-1"
                        >
                          {propertyDetailss?.typ}
                        </p>
                        {agencyDetails ? (
                          <>
                            <p className="mb-1">
                              {agencyDetails?.user_image === "" ? (
                                <img
                                  onClick={(e) =>
                                    handelNavigate(e, agencyDetails.id)
                                  }
                                  className="img-fluid rounded-circle"
                                  src="/assets/img/agency.png"
                                  width={100}
                                  height={100}
                                  alt={agencyDetails?.full_name}
                                  style={{
                                    paddingTop: 0,
                                    width: "100px",
                                    height: "100px",
                                  }}
                                />
                              ) : (
                                <img
                                  onClick={(e) =>
                                    handelNavigate(e, agencyDetails.id)
                                  }
                                  className="img-fluid rounded-circle"
                                  src={`${
                                    process.env.REACT_APP_BASE_USERS_IMAGE_URL +
                                    agencyDetails?.user_image
                                  }`}
                                  width={100}
                                  height={100}
                                  alt={agencyDetails?.full_name}
                                  style={{
                                    paddingTop: 0,
                                    width: "100px",
                                    height: "100px",
                                  }}
                                />
                              )}
                            </p>
                          </>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="nav-location"
                    role="tabpanel"
                    aria-labelledby="nav-location-tab"
                    tabIndex={0}
                  >
                    <div style={{ height: "70vh", width: "100%" }}>
                      <GoogleMapReact
                        bootstrapURLKeys={{
                          key: "AIzaSyB_X_leqFCrEXS06iTPXBW_DY3MPHM6RLQ1",
                        }}
                        center={{
                          lat: parseFloat(propertyDetailss?.latitude),
                          lng: parseFloat(propertyDetailss?.longitude),
                        }}
                        // defaultCenter={defaultProps.center}
                        // defaultZoom={defaultProps.zoom}
                        zoom={19}
                      />
                    </div>
                  </div>
                </div>
              </>

              <div className="d-flex flex-wrap flex-sm-nowrap property-call-to-action">
                <a
                  href={`tel:${propertyDetailss?.seller_mobile_no}`}
                  className="btn btn-primary mb-2 mb-sm-0 me-sm-3"
                  style={{
                    background: "rgb(254, 223, 131)",
                    color: "rgba(0, 0, 0, 0.8)",
                    width: 200,
                    border: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingTop: "9px",
                    paddingBottom: "9px",
                  }}
                >
                  <a
                    className="customAtag"
                    href={`tel:${propertyDetailss?.seller_mobile_no}`}
                  >
                    {/* <img
                  className="me-2"
                  src="/assets/img/call.png"
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
                    Call
                  </a>
                </a>
                <a
                  href={`tel:${propertyDetailss?.seller_mobile_no}`}
                  className="btn btn-primary g-btn"
                  style={{
                    background: "rgb(37, 211, 102)",
                    color: "rgba(0, 0, 0, 0.8)",
                    width: 200,
                    border: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingTop: "9px",
                    paddingBottom: "9px",
                  }}
                >
                  <a
                    className="customAtag"
                    target="_blank"
                    href={`https://wa.me/${propertyDetailss?.seller_mobile_no}`}
                  >
                    {/* <img
                  className="me-2"
                  src="/assets/img/whatsapp.png"
                  width={32}
                  height={30}
                  alt=""
                /> */}
                    <WhatsAppOutlined
                      className="me-2"
                      style={{ color: "#000", verticalAlign: "middle" }}
                    />
                    WhatsApp
                  </a>
                </a>
              </div>
            </div>
          </section>
        </>
      )}

      <Footer />
      <FooterCredit />
    </>
  );
};

export default PropertyDetails;
