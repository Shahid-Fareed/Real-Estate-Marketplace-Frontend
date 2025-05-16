/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import SectionHeading from "../components/Headings/SectionHeading";

const Footer = () => {
  const navigate = useNavigate();

  const propertyNavigation = (a: string, s: string, k: string, c: String) => {
    navigate("/property", { state: { ta: a, ts: s, tk: k, tci: c } });
  };

  return (
    <>
      <footer className="footer section">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="footer-info-wrapper">
                <Link to="/">
                  <img
                    className="img-fluid pointer mb-3"
                    width={100}
                    height={247}
                    src="/assets/img/footerLogo.png"
                    alt=""
                  />
                </Link>
                <p>
                  Helping Pakistanis buy, sell or rent property faster without
                  any hassle or worries. Now you can easily make the right
                  choice with us by your side!
                </p>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="footer__contact">
                <div className="row">
                  <div className="col-md-7 mb-3 mb-md-0">
                    <h4>Quick Links</h4>
                    <ul className="list-unstyled footer__links mb-0">
                      <li>
                        <a
                          className="cursorPointer"
                          onClick={() =>
                            propertyNavigation("sell", "1", "15", ",Islamabad")
                          }
                        >
                          Houses for sale in Islamabad
                        </a>
                      </li>
                      <li>
                        <a
                          className="cursorPointer"
                          onClick={() =>
                            propertyNavigation("sell", "2", "", ",Islamabad")
                          }
                        >
                          {" "}
                          Plots for sale in Islamabad{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          className="cursorPointer"
                          onClick={() =>
                            propertyNavigation("sell", "1", "16", ",Gujranwala")
                          }
                        >
                          {" "}
                          Flats for sale in Gujranwala{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          className="cursorPointer"
                          onClick={() =>
                            propertyNavigation("sell", "1", "16", ",Faisalabad")
                          }
                        >
                          {" "}
                          Flats for sale in Faisalabad{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          className="cursorPointer"
                          onClick={() =>
                            propertyNavigation("sell", "1", "15", ",Lahore")
                          }
                        >
                          {" "}
                          Houses for sale in Lahore{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          className="cursorPointer"
                          onClick={() =>
                            propertyNavigation("sell", "1", "15", ",Gujranwala")
                          }
                        >
                          {" "}
                          Houses for sale in Gujranwala{" "}
                        </a>
                      </li>
                    </ul>

                    <h4 className="pt-3 pt-lg-5 pt-xl-5">About</h4>
                    <ul className="list-unstyled footer__links mb-0">
                      <li>
                        <Link to="/about" className="cursorPointer">
                          Our Story
                        </Link>
                      </li>
                      {/* <li>
                        <Link to="/" className="cursorPointer">
                          Testimonials
                        </Link>
                      </li>  */}
                      {/* <li>
                        <Link to="/careers" className="cursorPointer">
                          Careers
                        </Link>
                      </li> */}
                      <li>
                        <Link to="/blog" className="cursorPointer">
                          Blog
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="col-md-5">
                    <div className="pb-2 pb-md-0 mb-0 mb-lg-4">
                      <SectionHeading f="Get in Touch" />
                    </div>
                    <p>
                      <address className="mb-0">
                      Office #1 Ground Floor Nawaz Arcade, Main boulevard New Metro City
                        <br />
                         Sarai Alamgir, Pakistan
                      </address>
                    </p>
                    <p className="mb-0">
                      <Link to="tel:+923041116466">Tel: +923041116466</Link>
                      <Link to="mailto:contact@inrealtors.pk">
                        Email: contact@inrealtors.pk
                      </Link>
                    </p>

                    <h4 className="pt-3 pt-sm-3 pt-md-4 pt-lg-5 pt-xl-5 mb-2">
                      Get Social
                    </h4>
                    <ul className="list-inline mb-0">
                      <li className="list-inline-item pointer">
                        <a
                          href="https://www.facebook.com/people/IN-Realtors/100092305672030/"
                          target="_blank"
                        >
                          <img
                            className="img-fluid"
                            src="/assets/img/footerFacebook.png"
                            width={30}
                            height={52}
                            alt=""
                          />
                        </a>
                      </li>
                      <li className="list-inline-item pointer">
                        <a
                          href="https://www.instagram.com/inrealtors/"
                          target="_blank"
                        >
                          <img
                            className="img-fluid"
                            src="/assets/img/footerInsta.png"
                            width={30}
                            height={52}
                            alt=""
                          />
                        </a>
                      </li>
                      {/* <li className="list-inline-item pointer">
                        <img
                          className="img-fluid"
                          src="/assets/img/footerLinkdin.png"
                          width={30}
                          height={52}
                          alt=""
                        />
                      </li>
                      <li className="list-inline-item  pointer">
                        <img
                          className="img-fluid"
                          src="/assets/img/footerTwitter.png"
                          width={30}
                          height={52}
                          alt=""
                        />
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
