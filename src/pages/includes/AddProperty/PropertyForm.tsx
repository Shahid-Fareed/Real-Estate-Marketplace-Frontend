import React from "react";

const PropertyForm = () => {
  return (
    <section className="mt-xxl-5 mt-xl-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-xl-1 col-xxl-2 invisible" />
          <div className="col-md-6 col-xl-8  col-xxl-8">
            <div>
              <h4
                style={{
                  fontFamily: "Inter, sans-serif",
                  color: "rgba(0, 0, 0, 0.9)",
                }}
              >
                Select your purpose
              </h4>
              <div>
                <button
                  className="btn rounded-0"
                  type="button"
                  style={{
                    background: "white",
                    border: "1px solid rgba(0, 0, 0, 0.8)",
                    width: 100,
                  }}
                >
                  <img
                    className="me-xl-2"
                    src="/assets/img/homeTag.png"
                    width={30}
                    height={27}
                    alt=""
                  />
                  Sell
                </button>
                <button
                  className="btn rounded-0 ms-xxl-3 ms-xl-4"
                  type="button"
                  style={{
                    background: "rgba(0, 0, 0, 0.8)",
                    color: "white",
                    width: 100,
                  }}
                >
                  <img
                    className="me-xl-2"
                    src="/assets/img/homeRent.png"
                    width={30}
                    height={27}
                    alt=""
                  />
                  Rent
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-xl-1 col-xxl-2 invisible" />
          <div className="col-md-6 col-xl-8  col-xxl-8 mt-xl-5">
            <div>
              <h4 style={{ fontFamily: "Inter, sans-serif" }}>
                Select your property type
              </h4>
            </div>
            <div>
              <div>
                <ul id="tabs" className="nav nav-tabs" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link active"
                      role="tab"
                      data-bs-toggle="tab"
                      href="#tab-1"
                      style={{ fontFamily: "Inter, sans-serif" }}
                      aria-selected="true"
                    >
                      Residential
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link"
                      role="tab"
                      data-bs-toggle="tab"
                      href="#tab-2"
                      aria-selected="false"
                      tabIndex={-1}
                    >
                      Plot
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link"
                      role="tab"
                      data-bs-toggle="tab"
                      href="#tab-3"
                      aria-selected="false"
                      tabIndex={-1}
                    >
                      Commercial
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div
                    className="tab-pane active pt-xl-4"
                    role="tabpanel"
                    id="tab-1"
                  >
                    <div className="d-flex">
                      <button
                        className="btn rounded-0 btnBorders me-xl-3"
                        type="button"
                        style={{}}
                      >
                        <img
                          src="/assets/img/homeSimple.png"
                          width={26}
                          height={25}
                          alt=""
                        />
                        Residential Plot
                      </button>
                      <button className="btn btnBorders rounded-0 me-xl-3" type="button">
                        <img
                          src="/assets/img/residentialIcon.png"
                          width={26}
                          height={25}
                          alt=""
                        />
                        Commercial Plot
                      </button>
                      <button
                        className="btn btnBorders rounded-0 me-xl-3"
                        type="button"
                        style={{
                          background: "rgba(0, 0, 0, 0.8)",
                          color: "white",
                        }}
                      >
                        <img
                          src="/assets/img/AgritucalIcon.png"
                          width={26}
                          height={25}
                          alt=""
                        />
                        Agricultural Land
                      </button>
                      <button className="btn btnBorders rounded-0 me-xl-3" type="button">
                        <img
                          src="/assets/img/industrialIcon.png"
                          width={26}
                          height={25}
                          alt=""
                        />
                        Industrial Land
                      </button>
                    </div>
                  </div>
                  <div className="tab-pane" role="tabpanel" id="tab-2">
                    <p>Content for tab 2.</p>
                  </div>
                  <div className="tab-pane" role="tabpanel" id="tab-3">
                    <p>Content for tab 3.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row pt-xl-3" style={{ paddingTop: 10 }}>
          <div className="col-md-6 col-xl-1 col-xxl-2">
            <h6 style={{ fontFamily: "Inter, sans-serif" }}>
              Location &amp; Purpose
            </h6>
          </div>
          <div className="col-md-6 col-xl-8  col-xxl-8">
            <button className="btn btnBorders rounded-0 me-xl-3" type="button" style={{}}>
              <img
                src="/assets/img/plotFile.png"
                width={26}
                height={25}
                alt=""
              />
              Plot File
            </button>
            <button className="btn btnBorders rounded-0 me-xl-3" type="button">
              <img
                src="/assets/img/farmhouseIcon.png"
                width={26}
                height={25}
                alt=""
              />
              Farmhouse Plot
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div
            style={{ placeSelf: "center" }}
            className="col-md-6 col-xl-1 col-xxl-2"
          >
            <div />
            <h6>Property Price &amp; Area</h6>
          </div>
          <div className="col-md-6 col-xl-8  col-xxl-8 mt-xl-5">
            <div className="container">
              <div className="row">
                <div className="col-xl-7">
                  <div>
                    <h4>Select the size of your property</h4>
                  </div>
                  <select
                    className="form-select pt-xl-2 ps-xl-2 pb-xl-2 pe-xl-2"
                    style={{ width: "75%" }}
                  >
                    <option value={12}>Choose city</option>
                    <option value={13}>This is item 2</option>
                    <option value={14}>This is item 3</option>
                  </select>
                </div>
                <div className="col-xl-7 pt-xl-5">
                  <div>
                    <h4>What is the asking price?</h4>
                  </div>
                  <select
                    className=" form-select pt-xl-2 ps-xl-2 pb-xl-2 pe-xl-2"
                    style={{ width: "75%" }}
                  >
                    <option value={12}>Address, block, phase, etc.</option>
                    <option value={13}>This is item 2</option>
                    <option value={14}>This is item 3</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container pt-xl-5">
        <div className="row">
          <div
            style={{ placeSelf: "center" }}
            className="col-md-6 col-xl-1 col-xxl-2"
          >
            <div />
            <h6>Property Features & Info</h6>
          </div>
          <div className="col-md-6 col-xl-8  col-xxl-8">
            <div className="container">
              <div className="row">
                <div className="col-xl-7">
                  <div>
                    <h4>Name your property</h4>
                  </div>
                  <select
                    className="form-select pt-xl-2 ps-xl-2 pb-xl-2 pe-xl-2"
                    style={{ width: "75%" }}
                  >
                    <option value={12}>Choose city</option>
                    <option value={13}>This is item 2</option>
                    <option value={14}>This is item 3</option>
                  </select>
                </div>
                <div className="col-xl-7 pt-xl-5">
                  <div>
                    <h4>What is the asking price?</h4>
                  </div>
                  <input
                    type="text"
                    className="pt-xl-2 ps-xl-2 pb-xl-2 pe-xl-2"
                  />
                </div>
                <div className="col-xl-7 pt-xl-5">
                  <div>
                    <h4>What do you love about the place?</h4>
                  </div>
                  <input
                    type="text"
                    className="pt-xl-2 ps-xl-2 pb-xl-2 pe-xl-2"
                  />
                </div>
                <div className="col-xl-7 pt-xl-5">
                  <div>
                    <h4>Upload images of your property</h4>
                  </div>
                  <input
                    type="text"
                    className="pt-xl-2 ps-xl-2 pb-xl-2 pe-xl-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container pt-xl-5">
        <div className="row">
          <div
            style={{ placeSelf: "center" }}
            className="col-md-6 col-xl-1 col-xxl-2"
          >
            <div />
            <h6>Contact Information</h6>
          </div>
          <div className="col-md-6 col-xl-8  col-xxl-8">
            <div className="container">
              <div className="row">
                <div className="col-xl-7 pt-xl-5">
                  <div>
                    <h4>Add your contact number</h4>
                  </div>
                  <input
                    type="text"
                    className="pt-xl-2 ps-xl-2 pb-xl-2 pe-xl-2"
                  />
                </div>
                <div className="col-xl-7 pt-xl-5">
                  <div>
                    <h4>Enter your name</h4>
                  </div>
                  <input
                    type="text"
                    className="pt-xl-2 ps-xl-2 pb-xl-2 pe-xl-2"
                  />
                </div>
                <div className="col-xl-7 pt-xl-5">
                  <button
                    className="btn"
                    style={{ background: "rgba(246, 211, 121, 1)" }}
                  >
                    SUBMIT AD
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyForm;
