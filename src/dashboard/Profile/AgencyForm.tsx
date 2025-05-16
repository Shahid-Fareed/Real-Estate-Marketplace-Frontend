import React, { useState } from "react";

const AgencyForm = () => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [ceoMessage, setCeoMessage] = useState("");
  const [aboutAgency, setAboutAgency] = useState("");
  const [facebookLink, setFacebookLink] = useState("");
  const [instagramLink, setInstagramLink] = useState("");
  const [twitterLink, setTwitterLink] = useState("");
  const [linkdinLink, setLinkdinLink] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = (e:any) =>{
    e.preventDefault();
    
  }

  return (
    <>
      <div className="card-body">
        <div className="row">
          <div className="mb-3">
            <label className="form-label" htmlFor="formrow-email-input">
              Agency Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="form-control"
              id="formrow-email-input"
              placeholder="Enter your Agency Name"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label" htmlFor="formrow-email-input">
                City
              </label>
              <input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                type="text"
                className="form-control"
                id="formrow-email-input"
                placeholder="Enter your city"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label" htmlFor="formrow-password-input">
                Country
              </label>
              <input
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                type="text"
                className="form-control"
                id="formrow-password-input"
                placeholder="Enter the country"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="mb-3">
            <label className="form-label" htmlFor="formrow-email-input">
              Address
            </label>
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              type="text"
              className="form-control"
              id="formrow-email-input"
              placeholder="Enter your agency address"
            />
          </div>
        </div>
        <div className="row">
          <div className="mb-3">
            <label className="form-label" htmlFor="formrow-email-input">
              About Agency
            </label>
            <textarea
              value={aboutAgency}
              onChange={(e) => setAboutAgency(e.target.value)}
              rows={5}
              cols={40}
              className="form-control"
              id="formrow-email-input"
              placeholder="Enter your agency details"
              defaultValue={""}
            />
          </div>
        </div>
        <div className="row">
          <div className="mb-3">
            <label className="form-label" htmlFor="formrow-email-input">
              CEO Message
            </label>
            <textarea
              value={ceoMessage}
              onChange={(e) => setCeoMessage(e.target.value)}
              rows={5}
              cols={40}
              className="form-control"
              id="formrow-email-input"
              placeholder="Enter the CEO Message"
              defaultValue={""}
            />
          </div>
        </div>
        <div className="row">
          <div className="mb-3">
            <label className="form-label" htmlFor="formrow-email-input">
              Social Links
            </label>
            <div>
              <div className="col-md-12 mb-3">
                <input
                  value={facebookLink}
                  onChange={(e) => setFacebookLink(e.target.value)}
                  type="url"
                  className="form-control"
                  id="formrow-password-input"
                  placeholder="Enter the facebook link"
                />
              </div>
              <div className="col-md-12 mb-3">
                <input
                  value={instagramLink}
                  onChange={(e) => setInstagramLink(e.target.value)}
                  type="url"
                  className="form-control"
                  id="formrow-password-input"
                  placeholder="Enter the instagram link"
                />
              </div>
              <div className="col-md-12 mb-3">
                <input
                  value={twitterLink}
                  onChange={(e) => setTwitterLink(e.target.value)}
                  type="url"
                  className="form-control"
                  id="formrow-password-input"
                  placeholder="Enter the twitter link"
                />
              </div>
              <div className="col-md-12 mb-3">
                <input
                  value={linkdinLink}
                  onChange={(e) => setLinkdinLink(e.target.value)}
                  type="url"
                  className="form-control"
                  id="formrow-password-input"
                  placeholder="Enter the linkdin link"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
            <div className="col-5">
            <button disabled={isSubmitting} onClick={(e)=>onSubmit(e)} className="btn btn-primary btn-sm waves-effect waves-light">Submit</button>
            </div>
          
        </div>
      </div>
    </>
  );
};

export default AgencyForm;
