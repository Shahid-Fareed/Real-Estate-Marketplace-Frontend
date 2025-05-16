import React, { useState, useEffect } from "react";
import PageTitle from "../../components/dashboard/PageTitle";
import MyHelmet from "../../components/MyHelmet";
import Sidebar from "../../components/dashboard/Sidebar";

import UsersApi from "../../services/dashboard/users"
import { useNavigate } from "react-router-dom";

const EditAgencyProfile = () => {
  const navigate = useNavigate();
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


  const onSubmit = (e: any) => {
    setIsSubmitting(true);
    e.preventDefault();
    var formdata = new FormData();
    formdata.append("full_name", name);
    formdata.append("city", city);
    formdata.append("country", country);
    formdata.append("address", address);
    formdata.append("ceo_message", ceoMessage);
    formdata.append("about_agency", aboutAgency);
    formdata.append("facebook_url", facebookLink);
    formdata.append("instagram_url", instagramLink);
    formdata.append("twitter_url", twitterLink);
    formdata.append("linkedin_url", linkdinLink);

    UsersApi.updateUserProfileDetail(formdata, userId).then((res) => {
      setIsSubmitting(false);
      navigate('/agency-profile');
    }).catch((err) => {
      console.log("error on the api updates")
    })
  }


  let userId: any = null;
  const authUser = localStorage.getItem("authUser");
  if (authUser) {
    const parsedAuthUser = JSON.parse(authUser);
    if (Array.isArray(parsedAuthUser) && parsedAuthUser.length > 0) {
      userId = parsedAuthUser[0].id;
    }
  }

  const getData = () => {
    let body = null;
    UsersApi.getUserProfileDetail(body, userId).then((res) => {
      setName(res.full_name);
      setCity(res.city);
      setCountry(res.country);
      setAddress(res.address);
      setCeoMessage(res.ceo_message);
      setAboutAgency(res.about_agency);
      setFacebookLink(res.facebook_url);
      setInstagramLink(res.instagram_url);
      setLinkdinLink(res.linkedin_url);
      setTwitterLink(res.twitter_url);
    }).catch((err) => { console.log("error on the getDetails of user api") })
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <>
      <MyHelmet title="Agency Profile" body="" />
      <Sidebar />
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            {/* <!-- start page title --> */}
            <div className="row">
              <PageTitle pagename="Edit Agency Profile" />
            </div>

            <div className="col-lg-12">
              <div className="card">
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
                      <button disabled={isSubmitting} onClick={(e) => onSubmit(e)} className="btn btn-primary btn-sm waves-effect waves-light">Submit</button>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditAgencyProfile;
