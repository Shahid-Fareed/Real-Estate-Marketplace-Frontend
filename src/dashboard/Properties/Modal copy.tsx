import React, { useState } from "react";
interface Data {
  PrimaryFeatures: {
    Build_Year: string | null;
    Tv_Lounge: string;
    Store_Room: number;
    Laundry_Room: number;
    Kitchen: number;
    Central_heating: string | null;
    Central_cooling: string | null;
    Elevator_Lift: string | null;
    Public_parking: string | null;
    CCTV_camera: string | null;
    Accessing_boulevard: string | null;
  };
  Utilities: {
    Sewerage: string | null;
    Electricity: string | null;
    Water_Supply: string | null;
    Gas: string | null;
    Security: string | null;
  };
  Communication: {
    Internet_access: string | null;
    Satellite_or_cable_TV: string | null;
  };
  Public_Facilities_Nearby: {
    Park: string | null;
    Schools: string | null;
    Hospitals: string | null;
    Mosque: string | null;
    Restaurants: string | null;
  };
  Secondary_Features: {
    Backup_generator: string | null;
    Maintenance: string | null;
    Number_of_Floors: number;
    Which_Floor_is_your_unit_on: number;
  };
}



const Modal = () => {
  const search = {
    backgroundImage: "url(/assets/img/search.png)",
    backgroundRepeat: "no-repeat",
    textIndent: "25px",
    backgroundSize: "contain",
    backgroundPosition: "left center",
    backgroundOrigin: "content-box",
  };
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModalAmenti"
      >
        Add Amenties
      </button>
      <div
        className="modal fade"
        id="exampleModalAmenti"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          style={{ maxWidth: "700px" }}
          className="modal-dialog modal-dialog-centered"
        >
          <div style={{ borderRadius: "10px" }} className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fw-bold" id="exampleModalLabel">
                Features and Amenities
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {/* <input
                style={{ backgroundColor: "transparent", ...search }}
                // type="search"
                id="form1"
                onChange={(e) => console.log(e)}
                autoComplete="off"
                placeholder="Search by city or area"
                className={`form-control py-2 border global-search ps-4 text-dark rounded mt-3 mb-5`}
              /> */}
              <div id="accordion">
                <div className="card my-2">
                  <div
                    className="card-header d-flex align-items-center justify-content-between rounded border-0 bg-light"
                    id="headingOne"
                  >
                    <h6 className="modal-title fw-bold" id="exampleModalLabel">
                      Primary Features
                    </h6>
                    <p
                      style={{ cursor: "pointer" }}
                      className="mb-0"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      Drop
                    </p>
                  </div>

                  <div id="collapseExample" className="collapse">
                    <div className="card-body">
                      <div className="card-header d-flex align-items-center justify-content-between rounded border-0 bg-light mb-2">
                        <h6 className="modal-title fw-bold">Build Year</h6>
                        <p style={{ cursor: "pointer" }} className="mb-0">
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-light dropdown-toggle dropdown-toggle-split waves-effect"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              {/* <i className="mdi mdi-chevron-down" /> */}
                            </button>
                            <div
                              className="dropdown-menu"
                              style={{ maxHeight: 200, overflowY: "scroll" }}
                            >
                              <a className="dropdown-item" href="#">
                                2024
                              </a>
                              <a className="dropdown-item" href="#">
                                2023
                              </a>
                              <a className="dropdown-item" href="#">
                                2022
                              </a>
                              <a className="dropdown-item" href="#">
                                2021
                              </a>
                              <a className="dropdown-item" href="#">
                                2020
                              </a>
                              <a className="dropdown-item" href="#">
                                2019
                              </a>
                              <a className="dropdown-item" href="#">
                                2017
                              </a>
                              <a className="dropdown-item" href="#">
                                2016
                              </a>
                              <a className="dropdown-item" href="#">
                                2015
                              </a>
                              <a className="dropdown-item" href="#">
                                2014
                              </a>
                            </div>
                          </div>
                        </p>
                      </div>
                      <div className="card-header d-flex align-items-center justify-content-between rounded border-0 bg-light mb-2">
                        <h6 className="modal-title fw-bold">Tv Lounge</h6>
                        <p style={{ cursor: "pointer" }} className="mb-0">
                          <div className="input-group w-auto justify-content-end align-items-center">
                            <input
                              type="button"
                              defaultValue="-"
                              className="button-minus border rounded-circle  icon-shape icon-sm mx-1 "
                              data-field="quantity"
                            />
                            0
                            <input
                              type="button"
                              defaultValue="+"
                              className="button-plus border rounded-circle icon-shape icon-sm "
                              data-field="quantity"
                            />
                          </div>
                        </p>
                      </div>
                      <div className="card-header d-flex align-items-center justify-content-between rounded border-0 bg-light mb-2">
                        <h6 className="modal-title fw-bold">Store Room</h6>
                        <p style={{ cursor: "pointer" }} className="mb-0">
                          <div className="input-group w-auto justify-content-end align-items-center">
                            <input
                              type="button"
                              defaultValue="-"
                              className="button-minus border rounded-circle  icon-shape icon-sm mx-1 "
                              data-field="quantity"
                            />
                            0
                            <input
                              type="button"
                              defaultValue="+"
                              className="button-plus border rounded-circle icon-shape icon-sm "
                              data-field="quantity"
                            />
                          </div>
                        </p>
                      </div>
                      <div className="card-header d-flex align-items-center justify-content-between rounded border-0 bg-light mb-2">
                        <h6 className="modal-title fw-bold">Laundry Room</h6>
                        <p style={{ cursor: "pointer" }} className="mb-0">
                          <div className="input-group w-auto justify-content-end align-items-center">
                            <input
                              type="button"
                              defaultValue="-"
                              className="button-minus border rounded-circle  icon-shape icon-sm mx-1 "
                              data-field="quantity"
                            />
                            0
                            <input
                              type="button"
                              defaultValue="+"
                              className="button-plus border rounded-circle icon-shape icon-sm "
                              data-field="quantity"
                            />
                          </div>
                        </p>
                      </div>
                      <div className="card-header d-flex align-items-center justify-content-between rounded border-0 bg-light mb-2">
                        <h6 className="modal-title fw-bold">Kitchen</h6>
                        <p style={{ cursor: "pointer" }} className="mb-0">
                          <div className="input-group w-auto justify-content-end align-items-center">
                            <input
                              type="button"
                              defaultValue="-"
                              className="button-minus border rounded-circle  icon-shape icon-sm mx-1 "
                              data-field="quantity"
                            />
                            0
                            <input
                              type="button"
                              defaultValue="+"
                              className="button-plus border rounded-circle icon-shape icon-sm "
                              data-field="quantity"
                            />
                          </div>
                        </p>
                      </div>
                      <div className="card-header d-flex align-items-center justify-content-between rounded border-0 bg-light mb-2">
                        <h6 className="modal-title fw-bold">Central heating</h6>
                        <p style={{ cursor: "pointer" }} className="mb-0">
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-light dropdown-toggle dropdown-toggle-split waves-effect"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              {/* <i className="mdi mdi-chevron-down" /> */}
                            </button>
                            <div className="dropdown-menu" style={{}}>
                              <a className="dropdown-item" href="#">
                                yes
                              </a>
                              <a className="dropdown-item" href="#">
                                No
                              </a>
                            </div>
                          </div>
                        </p>
                      </div>
                      <div className="card-header d-flex align-items-center justify-content-between rounded border-0 bg-light mb-2">
                        <h6 className="modal-title fw-bold">Central cooling</h6>
                        <p style={{ cursor: "pointer" }} className="mb-0">
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-light dropdown-toggle dropdown-toggle-split waves-effect"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              {/* <i className="mdi mdi-chevron-down" /> */}
                            </button>
                            <div className="dropdown-menu" style={{}}>
                              <a className="dropdown-item" href="#">
                                yes
                              </a>
                              <a className="dropdown-item" href="#">
                                No
                              </a>
                            </div>
                          </div>
                        </p>
                      </div>
                      <div className="card-header d-flex align-items-center justify-content-between rounded border-0 bg-light mb-2">
                        <h6 className="modal-title fw-bold">Elevator/Lift</h6>
                        <p style={{ cursor: "pointer" }} className="mb-0">
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-light dropdown-toggle dropdown-toggle-split waves-effect"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              {/* <i className="mdi mdi-chevron-down" /> */}
                            </button>
                            <div className="dropdown-menu" style={{}}>
                              <a className="dropdown-item" href="#">
                                yes
                              </a>
                              <a className="dropdown-item" href="#">
                                No
                              </a>
                            </div>
                          </div>
                        </p>
                      </div>
                      <div className="card-header d-flex align-items-center justify-content-between rounded border-0 bg-light mb-2">
                        <h6 className="modal-title fw-bold">Public parking</h6>
                        <p style={{ cursor: "pointer" }} className="mb-0">
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-light dropdown-toggle dropdown-toggle-split waves-effect"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              {/* <i className="mdi mdi-chevron-down" /> */}
                            </button>
                            <div className="dropdown-menu" style={{}}>
                              <a className="dropdown-item" href="#">
                                yes
                              </a>
                              <a className="dropdown-item" href="#">
                                No
                              </a>
                            </div>
                          </div>
                        </p>
                      </div>
                      <div className="card-header d-flex align-items-center justify-content-between rounded border-0 bg-light mb-2">
                        <h6 className="modal-title fw-bold">CCTV camera</h6>
                        <p style={{ cursor: "pointer" }} className="mb-0">
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-light dropdown-toggle dropdown-toggle-split waves-effect"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              {/* <i className="mdi mdi-chevron-down" /> */}
                            </button>
                            <div className="dropdown-menu" style={{}}>
                              <a className="dropdown-item" href="#">
                                yes
                              </a>
                              <a className="dropdown-item" href="#">
                                No
                              </a>
                            </div>
                          </div>
                        </p>
                      </div>
                      <div className="card-header d-flex align-items-center justify-content-between rounded border-0 bg-light mb-2">
                        <h6 className="modal-title fw-bold">
                          Accessing boulevard
                        </h6>
                        <p style={{ cursor: "pointer" }} className="mb-0">
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-light dropdown-toggle dropdown-toggle-split waves-effect"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              {/* <i className="mdi mdi-chevron-down" /> */}
                            </button>
                            <div className="dropdown-menu" style={{}}>
                              <a className="dropdown-item" href="#">
                                yes
                              </a>
                              <a className="dropdown-item" href="#">
                                No
                              </a>
                            </div>
                          </div>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card my-2">
                  <div
                    className="card-header d-flex align-items-center justify-content-between rounded border-0 bg-light"
                    id="headingOne"
                  >
                    <h6 className="modal-title fw-bold" id="exampleModalLabel">
                      Utilities
                    </h6>
                    <p
                      style={{ cursor: "pointer" }}
                      className="mb-0"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample2"
                      aria-expanded="false"
                      aria-controls="collapseExample2"
                    >
                      Drop
                    </p>
                  </div>
                  <div id="collapseExample2" className="collapse">
                    <div className="card-body">
                      <div className="card-header d-flex align-items-center justify-content-between rounded border-0 bg-light mb-2">
                        <h6 className="modal-title fw-bold">Sewerage</h6>
                        <p style={{ cursor: "pointer" }} className="mb-0">
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-light dropdown-toggle dropdown-toggle-split waves-effect"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              {/* <i className="mdi mdi-chevron-down" /> */}
                            </button>
                            <div className="dropdown-menu" style={{}}>
                              <a className="dropdown-item" href="#">
                                yes
                              </a>
                              <a className="dropdown-item" href="#">
                                No
                              </a>
                            </div>
                          </div>
                        </p>
                      </div>
                      <div className="card-header d-flex align-items-center justify-content-between rounded border-0 bg-light mb-2">
                        <h6 className="modal-title fw-bold">Electricity</h6>
                        <p style={{ cursor: "pointer" }} className="mb-0">
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-light dropdown-toggle dropdown-toggle-split waves-effect"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              {/* <i className="mdi mdi-chevron-down" /> */}
                            </button>
                            <div className="dropdown-menu" style={{}}>
                              <a className="dropdown-item" href="#">
                                yes
                              </a>
                              <a className="dropdown-item" href="#">
                                No
                              </a>
                            </div>
                          </div>
                        </p>
                      </div>
                      <div className="card-header d-flex align-items-center justify-content-between rounded border-0 bg-light mb-2">
                        <h6 className="modal-title fw-bold">Water Supply</h6>
                        <p style={{ cursor: "pointer" }} className="mb-0">
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-light dropdown-toggle dropdown-toggle-split waves-effect"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              {/* <i className="mdi mdi-chevron-down" /> */}
                            </button>
                            <div className="dropdown-menu" style={{}}>
                              <a className="dropdown-item" href="#">
                                yes
                              </a>
                              <a className="dropdown-item" href="#">
                                No
                              </a>
                            </div>
                          </div>
                        </p>
                      </div>
                      <div className="card-header d-flex align-items-center justify-content-between rounded border-0 bg-light mb-2">
                        <h6 className="modal-title fw-bold">Gas</h6>
                        <p style={{ cursor: "pointer" }} className="mb-0">
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-light dropdown-toggle dropdown-toggle-split waves-effect"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              {/* <i className="mdi mdi-chevron-down" /> */}
                            </button>
                            <div className="dropdown-menu" style={{}}>
                              <a className="dropdown-item" href="#">
                                yes
                              </a>
                              <a className="dropdown-item" href="#">
                                No
                              </a>
                            </div>
                          </div>
                        </p>
                      </div>
                      <div className="card-header d-flex align-items-center justify-content-between rounded border-0 bg-light mb-2">
                        <h6 className="modal-title fw-bold">Security</h6>
                        <p style={{ cursor: "pointer" }} className="mb-0">
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-light dropdown-toggle dropdown-toggle-split waves-effect"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              {/* <i className="mdi mdi-chevron-down" /> */}
                            </button>
                            <div className="dropdown-menu" style={{}}>
                              <a className="dropdown-item" href="#">
                                yes
                              </a>
                              <a className="dropdown-item" href="#">
                                No
                              </a>
                            </div>
                          </div>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div
                    className="card-header d-flex align-items-center justify-content-between rounded border-0 bg-light"
                    id="headingOne"
                  >
                    <h6 className="modal-title fw-bold" id="exampleModalLabel">
                      Communication
                    </h6>
                    <p
                      style={{ cursor: "pointer" }}
                      className="mb-0"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample5"
                      aria-expanded="false"
                      aria-controls="collapseExample5"
                    >
                      Drop
                    </p>
                  </div>
                  <div id="collapseExample5" className="collapse">
                    <div className="card-body">
                      <div className="card-header d-flex align-items-center justify-content-between rounded border-0 bg-light mb-2">
                        <h6 className="modal-title fw-bold">Internet access</h6>
                        <p style={{ cursor: "pointer" }} className="mb-0">
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-light dropdown-toggle dropdown-toggle-split waves-effect"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              {/* <i className="mdi mdi-chevron-down" /> */}
                            </button>
                            <div className="dropdown-menu" style={{}}>
                              <a className="dropdown-item" href="#">
                                yes
                              </a>
                              <a className="dropdown-item" href="#">
                                No
                              </a>
                            </div>
                          </div>
                        </p>
                      </div>
                      <div className="card-header d-flex align-items-center justify-content-between rounded border-0 bg-light mb-2">
                        <h6 className="modal-title fw-bold">
                          Satellite or cable TV
                        </h6>
                        <p style={{ cursor: "pointer" }} className="mb-0">
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-light dropdown-toggle dropdown-toggle-split waves-effect"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              {/* <i className="mdi mdi-chevron-down" /> */}
                            </button>
                            <div className="dropdown-menu" style={{}}>
                              <a className="dropdown-item" href="#">
                                yes
                              </a>
                              <a className="dropdown-item" href="#">
                                No
                              </a>
                            </div>
                          </div>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div
                    className="card-header d-flex align-items-center justify-content-between rounded border-0 bg-light"
                    id="headingOne"
                  >
                    <h6 className="modal-title fw-bold" id="exampleModalLabel">
                      Public Facilities Nearby
                    </h6>
                    <p
                      style={{ cursor: "pointer" }}
                      className="mb-0"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample3"
                      aria-expanded="false"
                      aria-controls="collapseExample3"
                    >
                      Drop
                    </p>
                  </div>
                  <div id="collapseExample3" className="collapse">
                    <div className="card-body">
                      <div className="card-header d-flex align-items-center justify-content-between rounded border-0 bg-light mb-2">
                        <h6 className="modal-title fw-bold">Park</h6>
                        <p style={{ cursor: "pointer" }} className="mb-0">
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-light dropdown-toggle dropdown-toggle-split waves-effect"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              {/* <i className="mdi mdi-chevron-down" /> */}
                            </button>
                            <div className="dropdown-menu" style={{}}>
                              <a className="dropdown-item" href="#">
                                yes
                              </a>
                              <a className="dropdown-item" href="#">
                                No
                              </a>
                            </div>
                          </div>
                        </p>
                      </div>
                      <div className="card-header d-flex align-items-center justify-content-between rounded border-0 bg-light mb-2">
                        <h6 className="modal-title fw-bold">Schools</h6>
                        <p style={{ cursor: "pointer" }} className="mb-0">
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-light dropdown-toggle dropdown-toggle-split waves-effect"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              {/* <i className="mdi mdi-chevron-down" /> */}
                            </button>
                            <div className="dropdown-menu" style={{}}>
                              <a className="dropdown-item" href="#">
                                yes
                              </a>
                              <a className="dropdown-item" href="#">
                                No
                              </a>
                            </div>
                          </div>
                        </p>
                      </div>
                      <div className="card-header d-flex align-items-center justify-content-between rounded border-0 bg-light mb-2">
                        <h6 className="modal-title fw-bold">Hospitals</h6>
                        <p style={{ cursor: "pointer" }} className="mb-0">
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-light dropdown-toggle dropdown-toggle-split waves-effect"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              {/* <i className="mdi mdi-chevron-down" /> */}
                            </button>
                            <div className="dropdown-menu" style={{}}>
                              <a className="dropdown-item" href="#">
                                yes
                              </a>
                              <a className="dropdown-item" href="#">
                                No
                              </a>
                            </div>
                          </div>
                        </p>
                      </div>
                      <div className="card-header d-flex align-items-center justify-content-between rounded border-0 bg-light mb-2">
                        <h6 className="modal-title fw-bold">Mosque</h6>
                        <p style={{ cursor: "pointer" }} className="mb-0">
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-light dropdown-toggle dropdown-toggle-split waves-effect"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              {/* <i className="mdi mdi-chevron-down" /> */}
                            </button>
                            <div className="dropdown-menu" style={{}}>
                              <a className="dropdown-item" href="#">
                                yes
                              </a>
                              <a className="dropdown-item" href="#">
                                No
                              </a>
                            </div>
                          </div>
                        </p>
                      </div>
                      <div className="card-header d-flex align-items-center justify-content-between rounded border-0 bg-light mb-2">
                        <h6 className="modal-title fw-bold">Restaurants</h6>
                        <p style={{ cursor: "pointer" }} className="mb-0">
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-light dropdown-toggle dropdown-toggle-split waves-effect"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              {/* <i className="mdi mdi-chevron-down" /> */}
                            </button>
                            <div className="dropdown-menu" style={{}}>
                              <a className="dropdown-item" href="#">
                                yes
                              </a>
                              <a className="dropdown-item" href="#">
                                No
                              </a>
                            </div>
                          </div>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div
                    className="card-header d-flex align-items-center justify-content-between rounded border-0 bg-light"
                    id="headingOne"
                  >
                    <h6 className="modal-title fw-bold" id="exampleModalLabel">
                      Secondary Features
                    </h6>
                    <p
                      style={{ cursor: "pointer" }}
                      className="mb-0"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample4"
                      aria-expanded="false"
                      aria-controls="collapseExample4"
                    >
                      Drop
                    </p>
                  </div>
                  <div id="collapseExample4" className="collapse">
                    <div className="card-body">
                      <div className="card-header d-flex align-items-center justify-content-between rounded border-0 bg-light mb-2">
                        <h6 className="modal-title fw-bold">
                          Backup generator
                        </h6>
                        <p style={{ cursor: "pointer" }} className="mb-0">
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-light dropdown-toggle dropdown-toggle-split waves-effect"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              {/* <i className="mdi mdi-chevron-down" /> */}
                            </button>
                            <div className="dropdown-menu" style={{}}>
                              <a className="dropdown-item" href="#">
                                yes
                              </a>
                              <a className="dropdown-item" href="#">
                                No
                              </a>
                            </div>
                          </div>
                        </p>
                      </div>
                      <div className="card-header d-flex align-items-center justify-content-between rounded border-0 bg-light mb-2">
                        <h6 className="modal-title fw-bold">Maintenance</h6>
                        <p style={{ cursor: "pointer" }} className="mb-0">
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-light dropdown-toggle dropdown-toggle-split waves-effect"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              {/* <i className="mdi mdi-chevron-down" /> */}
                            </button>
                            <div className="dropdown-menu" style={{}}>
                              <a className="dropdown-item" href="#">
                                yes
                              </a>
                              <a className="dropdown-item" href="#">
                                No
                              </a>
                            </div>
                          </div>
                        </p>
                      </div>
                      <div className="card-header d-flex align-items-center justify-content-between rounded border-0 bg-light mb-2">
                        <h6 className="modal-title fw-bold">
                          Number of Floors
                        </h6>
                        <p style={{ cursor: "pointer" }} className="mb-0">
                          <div className="input-group w-auto justify-content-end align-items-center">
                            <input
                              type="button"
                              defaultValue="-"
                              className="button-minus border rounded-circle  icon-shape icon-sm mx-1 "
                              data-field="quantity"
                            />
                            0
                            <input
                              type="button"
                              defaultValue="+"
                              className="button-plus border rounded-circle icon-shape icon-sm "
                              data-field="quantity"
                            />
                          </div>
                        </p>
                      </div>
                      <div className="card-header d-flex align-items-center justify-content-between rounded border-0 bg-light mb-2">
                        <h6 className="modal-title fw-bold">
                          Which Floor is your unit on
                        </h6>
                        <p style={{ cursor: "pointer" }} className="mb-0">
                          <div className="input-group w-auto justify-content-end align-items-center">
                            <input
                              type="button"
                              defaultValue="-"
                              className="button-minus border rounded-circle  icon-shape icon-sm mx-1 "
                              data-field="quantity"
                            />
                            0
                            <input
                              type="button"
                              defaultValue="+"
                              className="button-plus border rounded-circle icon-shape icon-sm "
                              data-field="quantity"
                            />
                          </div>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-12 ms-auto text-end">
                  <div className="btn btn-light px-4">RESET</div>
                  <div className="btn btn-secondary px-md-5 px-4">CONFIRM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
