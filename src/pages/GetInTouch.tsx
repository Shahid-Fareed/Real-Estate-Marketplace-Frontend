import React, { useState, ChangeEvent } from "react";
import { toast } from "react-toastify";
import AgencyService from "../services/home/agencyService";

const GetInTouch = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const handleRadioChange = (value: string) => {
    setSelectedOption(value);
  };

  const postInquire = (e: any) => {
    e.preventDefault();
    const close = document.getElementById("closeGetInModal");
    let body = {
      user_id: 1,
      name: name,
      contact_number: phoneNumber,
      email: email,
      message: message,
      type: "admin",
      i_am: selectedOption,
    };
    AgencyService.sendAgencyInquiryForm(body)
      .then((res) => {
        toast.info("Query Sent Successfully!", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setName("");
        setEmail("");
        setPhoneNumber("");
        setMessage("");
        setSelectedOption("");
        close?.click();
      })
      .catch((err) => {
        console.log("Error: ", err);
        toast.warn("Something went wrong", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setName("");
        setEmail("");
        setPhoneNumber("");
        setMessage("");
        setSelectedOption("");
        close?.click();
      });
  };

  const handlePhoneNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value.replace(/\D/g, "").slice(0, 11);
    setPhoneNumber(newValue);
  };

  return (
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header border-bottom-0 pb-0">
          <button
            type="button"
            className="btn-close"
            id="closeGetInModal"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <form
          onSubmit={(e) => postInquire(e)}
          className="d-flex justify-content-center flex-column align-items-center px-5"
        >
          <h2
            className="modal-title text-black mt-0 fw-bold"
            id="getInTouchModalLabel"
          >
            Get in Touch
          </h2>
          <small className="fw-bold">
            Let’s make your deal 10X more reliable!
          </small>
          <small className="mb-4">
            A commission of 1% would be charged by IN Realtors
          </small>

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="form-control py-2 rounded-0 border border-dark mb-3"
            id="exampleFormControlInput1"
            placeholder="Name"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-control py-2 rounded-0 border border-dark mb-4"
            id="exampleFormControlInput1"
            placeholder="Email"
          />
          <input
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            type="number"
            className="form-control py-2 rounded-0 border border-dark mb-4"
            id="exampleFormControlInput1"
            placeholder="Contact Number"
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="form-control py-2 rounded-0 border border-dark mb-3"
            id="exampleFormControlInput1"
            placeholder="Message"
          ></textarea>
          <div className="text-start d-flex flex-row justify-content-between">
            <p className="text-start">I am a:</p>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="formChecsk-1"
                name="userType"
                checked={selectedOption === "buyer"}
                onChange={() => handleRadioChange("buyer")}
              />
              <label className="form-check-label" htmlFor="formChecsk-1">
                Buyer/Tenant
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="formChecsk-2"
                name="userType"
                checked={selectedOption === "agent"}
                onChange={() => handleRadioChange("agent")}
              />
              <label className="form-check-label" htmlFor="formChecsk-2">
                Agent
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="formChecsk-3"
                name="userType"
                checked={selectedOption === "other"}
                onChange={() => handleRadioChange("other")}
              />
              <label className="form-check-label" htmlFor="formChecsk-3">
                Other
              </label>
            </div>
          </div>
          <button
            type="submit"
            disabled={
              !name || !email || !message || !phoneNumber || !selectedOption
            }
            className="btn btn-outline-dark rounded-0 px-5 py-2 text-black fw-bold mb-4 w-100"
            style={{ background: "rgba(254, 223, 131, 1)" }}
          >
            <img
              className="me-xxl-2"
              src="/assets/img/email.png"
              width={28}
              height={26}
              alt=""
            />
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default GetInTouch;
