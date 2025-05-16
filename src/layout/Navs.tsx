/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

const Navs = () => {
  return (
    <nav className="navbar background-black-1 navbar-expand-lg navbar-dark p-md-3">
      <div className="container">
        <Link className="navbar-brand" to="#">
          <img src="assets/img/headerLogo2.png" alt="" height={70} />
        </Link>
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
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item me-3 ms-3">
              <a
                className="nav-link active"
                aria-current="page"
                type="button"
                id="dropdownMenu1"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="true"
                href="#"
              >
                BUY
              </a>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                <li>
                  <Link to="#">Buy a Residential Property</Link>
                </li>
                <li>
                  <Link to="#">Buy a Commercial Property</Link>
                </li>
                <li>
                  <Link to="#">Buy a Residential PLot</Link>
                </li>
                <li>
                  <Link to="#">Buy a Commercial Plot</Link>
                </li>
              </ul>
            </li>
            <li className="nav-item me-3 ms-3">
              <a
                className="nav-link active"
                aria-current="page"
                type="button"
                id="dropdownMenu1"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="true"
                href="#"
              >
                SELL
              </a>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                <li>
                  <Link to="#">Sell a Residential Property</Link>
                </li>
                <li>
                  <Link to="#">Sell a Commercial Property</Link>
                </li>
                <li>
                  <Link to="#">Sell a Residential PLot</Link>
                </li>
                <li>
                  <Link to="#">Sell a Commercial Plot</Link>
                </li>
              </ul>
            </li>
            <li className="nav-item me-3 ms-3">
              <a
                className="nav-link active"
                aria-current="page"
                type="button"
                id="dropdownMenu1"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="true"
                href="#"
              >
                RENT
              </a>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                <li>
                  <Link to="#">Looking for a Residential Property on Rent</Link>
                </li>
                <li>
                  <Link to="#">Looking for a Commercial Property on Rent</Link>
                </li>
                <li>
                  <Link to="#">Want to List my Home for Rent</Link>
                </li>
                <li>
                  <Link to="#">List my Commercial Property for Rent</Link>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="navbar-nav align-items-center">
            <li className="nav-item me-3 ms-3">
              <button className="addPropertyHeader">+ ADD PROPERTY</button>
            </li>
            <li className="nav-item me-3 ms-3">
              <img src="assets/img/loginIcon.png" alt="" height={40} />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navs;
