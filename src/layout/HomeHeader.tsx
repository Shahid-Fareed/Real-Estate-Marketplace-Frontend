/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuthCheck from "../hooks/useAuthCheck";

const HomeHeader = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isAuthenticated: boolean = useAuthCheck();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const propertyNavigation = (a: string, s: string, k: string, c: String) => {
    navigate("/property", { state: { ta: a, ts: s, tk: k, tc: c } });
  };

  const handleButtonClick = () => {
    // navigate(`${process.env.REACT_APP_BASE_SUBDOMAIN}/dashboard`);
  };

  const handelLogout = (e: any) => {
    e.preventDefault();
    localStorage.clear();
  };
  return (
    <>
      <nav
        className={
          location.pathname !== "/"
            ? "navbar navbar-default-inner background-black-1 navbar-expand-md navbar-dark"
            : "navbar navbar-default fixed-top navbar-expand-md navbar-dark"
        }
      >
        <div className="container">
          <div className="navbar-log-wrapper d-flex d-lg-md justify-content-between align-items-center">
            <div>
              <Link className="navbar-brand" to="/">
                <img
                  src="/assets/img/logo.png"
                  alt=""
                />
              </Link>
            </div>
            
            <div className="d-md-none">
              <ul className="d-flex align-items-center list-unstyled mb-0">
                <li
                  className="nav-item ms-0 me-3 mx-sm-3 pointer"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <img src="/assets/img/loginIcon.png" alt="" height={20} />
                </li>
                <li>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon" />
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item me-3 ms-3 dropdown">
                <Link
                  className="nav-link  active"
                  aria-current="page"
                  type="button"
                  to="#"
                >
                  BUY
                </Link>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                  <li className="bg-hover-menu">
                    <a
                      className="cursorPointer"
                      onClick={() => propertyNavigation("sell", "1", "", "")}
                    >
                      Buy a residential property
                    </a>
                  </li>
                  <li className="bg-hover-menu">
                    <a
                      className="cursorPointer"
                      onClick={() => propertyNavigation("sell", "3", "", "")}
                    >
                      Buy a commercial property
                    </a>
                  </li>
                  <li className="bg-hover-menu">
                    <a
                      className="cursorPointer"
                      onClick={() => propertyNavigation("sell", "2", "9", "")}
                    >
                      Buy a residential plot
                    </a>
                  </li>
                  <li className="bg-hover-menu">
                    <a
                      className="cursorPointer"
                      onClick={() => propertyNavigation("sell", "2", "10", "")}
                    >
                      Buy a commercial plot
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item me-3 ms-3 dropdown">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  type="button"
                  to="#"
                >
                  SELL
                </Link>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                  <li className="bg-hover-menu">
                    <a className="cursorPointer"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModaladd"
                    >Sell a residential property</a>
                  </li>
                  <li className="bg-hover-menu">
                    <a className="cursorPointer" data-bs-toggle="modal"
                      data-bs-target="#exampleModaladd">Sell a commercial property</a>
                  </li>
                  <li className="bg-hover-menu">
                    <a className="cursorPointer" data-bs-toggle="modal"
                      data-bs-target="#exampleModaladd">Sell a residential plot</a>
                  </li>
                  <li>
                    <a className="cursorPointer" data-bs-toggle="modal"
                      data-bs-target="#exampleModaladd">Sell a commercial Plot</a>
                  </li>
                </ul>
              </li>
              <li className="nav-item me-3 ms-3 dropdown">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  type="button"
                  to="#"
                >
                  RENT
                </Link>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                  <li className="bg-hover-menu">
                    <a
                      className="cursorPointer"
                      onClick={() => propertyNavigation("rent", "1", "", "")}
                    >
                      Looking for a residential property on rent
                    </a>
                  </li>
                  <li className="bg-hover-menu">
                    <a
                      className="cursorPointer"
                      onClick={() => propertyNavigation("rent", "3", "", "")}
                    >
                      Looking for a commercial property on rent
                    </a>
                  </li>
                  <li className="bg-hover-menu">
                    <a className="cursorPointer" data-bs-toggle="modal"
                      data-bs-target="#exampleModaladd">
                      Want to list my home for rent
                    </a>
                  </li>
                  <li className="bg-hover-menu">
                    <a className="cursorPointer" data-bs-toggle="modal"
                      data-bs-target="#exampleModaladd">
                      List my commercial property for rent
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="navbar-nav align-items-center navbar-nav-action">
              <li className="nav-item me-3 ms-3 pointer">
                  <button
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModaladd"
                    className="addPropertyHeader"
                  >
                    + ADD PROPERTY
                  </button>
                </li>

              <li
                className="nav-item ms-0 me-2 mx-sm-3 pointer d-none d-md-block"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <img src="/assets/img/loginIcon.png" alt="" height={0} />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default HomeHeader;
