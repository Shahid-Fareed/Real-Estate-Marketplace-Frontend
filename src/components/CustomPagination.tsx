import React from "react";
import { Link } from "react-router-dom";

const CustomPagination = () => {
  return (
    <section
      style={{ background: "#f5f5f5" }}
      className="pt-xl-3 pt-lg-3 pt-md-3 pt-sm-3 pt-3"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-4 align-self-center color-065">
            <p style={{ color: "rgba(0, 0, 0, 0.6)" }}>
              Showing 1-12 of 1000 properties
            </p>
          </div>
          <div className="col-md-4 align-self-center text-center">
            <nav
              className="font-monospace text-nowrap"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <ul className="pagination rounded-3" style={{ justifyContent: "center" }}>
                <li className="page-item">
                  <Link className="page-link noborder" aria-label="Previous" to="#">
                    <span aria-hidden="true">«</span>
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="#">
                    1
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="#">
                    2
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="#">
                    3
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="#">
                    4
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="#">
                    5
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" aria-label="Next" to="#">
                    <span aria-hidden="true">»</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-md-4 align-self-center text-end">
            <p style={{ color: "rgba(0, 0, 0, 0.6)" }}>Page 1 of 20</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomPagination;
