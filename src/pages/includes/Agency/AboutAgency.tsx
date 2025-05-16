import React, { useState } from "react";
import { toast } from "react-toastify";
import AgencyService from "../../../services/home/agencyService";
import {
  PhoneFilled,
  RedEnvelopeFilled,
  WhatsAppOutlined,
} from "@ant-design/icons";

type AgencyTypes = {
  agencyDetails: any;
  agencyId: any;
};

const AboutAgency = ({ agencyDetails, agencyId }: AgencyTypes) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const handleRadioChange = (value: string) => {
    setSelectedOption(value);
  };

  const isAnyStateEmpty = () => {
    return email === "" || phoneNumber === "" || message === "" || name === "";
  };

  const postInquire = (e: any) => {
    e.preventDefault();
    let body = {
      user_id: agencyId,
      name: name,
      contact_number: phoneNumber,
      email: email,
      message: message,
      type: "agency",
      i_am: selectedOption,
    };
    AgencyService.sendAgencyInquiryForm(body).then((res) => {
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
    });
  };

  return (
    <section className="about-agency p70-0">
      <div className="container">
        <div className="row align-item-center">
          <div className="col-lg-6 col-xxl-7 align-self-center mb-2 mb-lg-0">
            <div className="mb-3 mb-lg-5">
              <h3 className="mb-3">
                About{" "}
                <span className="text-capitalize">
                  {agencyDetails?.agency_name}
                </span>
              </h3>
              <p>{agencyDetails?.about_agency}</p>
            </div>

            <div>
              <h3 className="mb-3">CEO’s Message </h3>
              <p>{agencyDetails?.ceo_message}</p>
            </div>
          </div>

          <div className="agency-form col-lg-6 col-xxl-5 justify-content-end">
            <form>
              <div
                style={{ border: "1px solid rgba(0, 0, 0, 0.3)" }}
                className="pt-3 pe-3 pe-md-4 pb-4 ms-0 ps-3 ps-md-4"
              >
                <div className="d-flex flex-wrap flex-sm-nowrap agency-form__actions">
                  <a
                    href={`tel:${agencyDetails?.mobile_number}`}
                    className="btn btn-primary y-btn me-lg-3 me-sm-2 rounded-0 mb-2 mb-sm-0"
                    style={{
                      background: "rgb(254, 223, 131)",
                      color: "rgba(0, 0, 0, 0.8)",
                      width: "100%",
                      border: "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      paddingTop: "9px",
                      paddingBottom: "9px",
                    }}
                  >
                    {" "}
                    <a
                      className="customAtag"
                      href={`tel:${agencyDetails?.mobile_number}`}
                    >
                      {/* <img
                        className="me-2"
                        src="/assets/img/call.png"
                        width={28}
                        height={28}
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
                      <span>Call</span>
                    </a>
                  </a>

                  <a
                    href={`tel:${agencyDetails?.mobile_number}`}
                    className="btn btn-primary g-btn rounded-0"
                    style={{
                      background: "rgb(37, 211, 102)",
                      color: "rgba(0, 0, 0, 0.8)",
                      width: "100%",
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
                      href={`https://wa.me/${agencyDetails?.mobile_number}`}
                    >
                      {/* <img
                        className="me-2"
                        src="/assets/img/whatsapp.png"
                        width={28}
                        height={28}
                        alt=""
                      /> */}
                      <WhatsAppOutlined
                        className="me-2"
                        style={{ color: "#000", verticalAlign: "middle" }}
                      />
                      <span>WhatsApp</span>
                    </a>
                  </a>
                </div>

                <div>
                  <form>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="form-control mt-xxl-3 mt-lg-3 mt-md-3 mt-sm-2 mt-2 mb-xxl-3 mb-xl-3 mb-lg-3 mb-md-3 mb-sm-3 mb-3 pt-xxl-3 pt-xl-3 pt-lg-3 pt-md-2 pt-sm-3 pt-3 pb-xxl-3 pb-xl-3 pb-lg-3 pb-md-2 pb-sm-3 pb-3 rounded-0"
                      type="text"
                      placeholder="Name"
                      required
                    />
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control mt-xxl-3 mt-lg-3 mt-md-3 mt-sm-2 mt-2 mb-xxl-3 mb-xl-3 mb-lg-3 mb-md-3 mb-sm-3 mb-3 pt-xxl-3 pt-xl-3 pt-lg-3 pt-md-2 pt-sm-3 pt-3 pb-xxl-3 pb-xl-3 pb-lg-3 pb-md-2 pb-sm-3 pb-3 rounded-0"
                      type="email"
                      placeholder="Email"
                      required
                    />
                    <input
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="form-control mt-xxl-3 mt-lg-3 mt-md-3 mt-sm-2 mt-2 mb-xxl-3 mb-xl-3 mb-lg-3 mb-md-3 mb-sm-3 mb-3 pt-xxl-3 pt-xl-3 pt-lg-3 pt-md-2 pt-sm-3 pt-3 pb-xxl-3 pb-xl-3 pb-lg-3 pb-md-2 pb-sm-3 pb-3 rounded-0"
                      type="tel"
                      placeholder="Contact Number"
                      required
                    />
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="form-control mt-xxl-3 mt-lg-3 mt-md-3 mt-sm-2 mt-2 mb-xxl-3 mb-xl-3 mb-lg-3 mb-md-3 mb-sm-3 mb-3 pt-xxl-3 pt-xl-3 pt-lg-3 pt-md-2 pt-sm-3 pt-3 pb-xxl-3 pb-xl-3 pb-lg-3 pb-md-2 pb-sm-3 pb-3 rounded-0"
                      placeholder="Message"
                      required
                    />
                  </form>

                  <div className="text-start d-sm-flex flex-wrap flex-row justify-content-between align-items-center mb-3">
                    <div>
                      <p className="text-start mb-sm-0">I am a:</p>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        id="formCheck-1"
                        name="userType"
                        checked={selectedOption === "buyer"}
                        onChange={() => handleRadioChange("buyer")}
                      />
                      <label className="form-check-label" htmlFor="formCheck-1">
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
                      <label className="form-check-label" htmlFor="formCheck-2">
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
                      <label className="form-check-label" htmlFor="formCheck-3">
                        Other
                      </label>
                    </div>
                  </div>

                  <div>
                    <button
                      disabled={isAnyStateEmpty()}
                      onClick={(e) => {
                        postInquire(e);
                      }}
                      className="btn btn-primary y-btn pt-xxl-3 pb-xxl-3 rounded-0"
                      type="submit"
                      style={{
                        background: "rgba(254, 223, 131, 1)",
                        color: "rgba(0, 0, 0, 0.8)",
                        width: "100%",
                        border: "none",
                      }}
                    >
                      {/* <img
                        className="me-2"
                        src="/assets/img/email.png"
                        width={26}
                        height={26}
                        alt=""
                      /> */}
                      <RedEnvelopeFilled
                        className="me-2"
                        style={{ color: "#000", verticalAlign: "middle" }}
                      />
                      Inquire
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAgency;
