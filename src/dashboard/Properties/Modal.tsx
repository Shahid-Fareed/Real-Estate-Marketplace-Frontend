import React, { useState } from "react";
interface Data {
  PrimaryFeatures: {
    Build_Year: string | null;
    Tv_Lounge: number;
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
  const [data, setData] = useState<Data>({
    PrimaryFeatures: {
      Build_Year: null,
      Tv_Lounge: 0,
      Store_Room: 0,
      Laundry_Room: 0,
      Kitchen: 0,
      Central_heating: null,
      Central_cooling: null,
      Elevator_Lift: null,
      Public_parking: null,
      CCTV_camera: null,
      Accessing_boulevard: null,
    },
    Utilities: {
      Sewerage: null,
      Electricity: null,
      Water_Supply: null,
      Gas: null,
      Security: null,
    },
    Communication: {
      Internet_access: null,
      Satellite_or_cable_TV: null,
    },
    Public_Facilities_Nearby: {
      Park: null,
      Schools: null,
      Hospitals: null,
      Mosque: null,
      Restaurants: null,
    },
    Secondary_Features: {
      Backup_generator: null,
      Maintenance: null,
      Number_of_Floors: 0,
      Which_Floor_is_your_unit_on: 0,
    },
  });

  const handleChange = <S extends keyof Data, F extends keyof Data[S]>(
    section: S,
    field: F,
    value: Data[S][F]
  ) => {
    setData((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [field]: value,
      },
    }));
  };

  const getData = () => {
    console.log(data);
    // You can access the values like data.PrimaryFeatures.Build_Year, data.Utilities.Sewerage, etc.
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

                              {data.PrimaryFeatures.Build_Year}  {" "}
                            </button>
                            <div
                              className="dropdown-menu"
                              style={{ maxHeight: 200, overflowY: "scroll" }}
                            >
                              <a
                                className="dropdown-item"
                                href="#"
                                onClick={() =>
                                  handleChange('PrimaryFeatures', 'Build_Year', '2024' as string)
                                }
                              >
                                2024
                              </a>
                              <a className="dropdown-item" href="#" onClick={() =>
                                handleChange('PrimaryFeatures', 'Build_Year', '2023' as string)
                              }>
                                2023
                              </a>
                              <a className="dropdown-item" href="#" onClick={() =>
                                handleChange('PrimaryFeatures', 'Build_Year', '2022' as string)
                              }>
                                2022
                              </a>
                              <a className="dropdown-item" href="#" onClick={() =>
                                handleChange('PrimaryFeatures', 'Build_Year', '2021' as string)
                              }>
                                2021
                              </a>
                              <a className="dropdown-item" href="#" onClick={() =>
                                handleChange('PrimaryFeatures', 'Build_Year', '2020' as string)
                              }>
                                2020
                              </a>
                              <a className="dropdown-item" href="#" onClick={() =>
                                handleChange('PrimaryFeatures', 'Build_Year', '2019' as string)
                              }>
                                2019
                              </a>
                              <a className="dropdown-item" href="#" onClick={() =>
                                handleChange('PrimaryFeatures', 'Build_Year', '2017' as string)
                              }>
                                2017
                              </a>
                              <a className="dropdown-item" href="#" onClick={() =>
                                handleChange('PrimaryFeatures', 'Build_Year', '2016' as string)
                              }>
                                2016
                              </a>
                              <a className="dropdown-item" href="#" onClick={() =>
                                handleChange('PrimaryFeatures', 'Build_Year', '2015' as string)
                              }>
                                2015
                              </a>
                              <a className="dropdown-item" href="#" onClick={() =>
                                handleChange('PrimaryFeatures', 'Build_Year', '2014' as string)
                              }>
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
                              onClick={() =>
                                handleChange('PrimaryFeatures', 'Tv_Lounge', Math.max(0, data.PrimaryFeatures.Tv_Lounge - 1))
                              }
                              type="button"
                              defaultValue="-"
                              className="button-minus border rounded-circle  icon-shape icon-sm mx-1 "
                              data-field="quantity"
                            />
                            {data.PrimaryFeatures.Tv_Lounge}
                            <input
                              onClick={() =>
                                handleChange('PrimaryFeatures', 'Tv_Lounge', Math.max(0, data.PrimaryFeatures.Tv_Lounge + 1))
                              }
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
                              onClick={() =>
                                handleChange('PrimaryFeatures', 'Store_Room', Math.max(0, data.PrimaryFeatures.Store_Room - 1))
                              }
                              type="button"
                              defaultValue="-"
                              className="button-minus border rounded-circle  icon-shape icon-sm mx-1 "
                              data-field="quantity"
                            />
                            {data.PrimaryFeatures.Store_Room}
                            <input
                              onClick={() =>
                                handleChange('PrimaryFeatures', 'Store_Room', Math.max(0, data.PrimaryFeatures.Store_Room + 1))
                              }
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
                              onClick={() =>
                                handleChange('PrimaryFeatures', 'Laundry_Room', Math.max(0, data.PrimaryFeatures.Laundry_Room - 1))
                              }
                              type="button"
                              defaultValue="-"
                              className="button-minus border rounded-circle  icon-shape icon-sm mx-1 "
                              data-field="quantity"
                            />
                            {data.PrimaryFeatures.Laundry_Room}
                            <input
                              onClick={() =>
                                handleChange('PrimaryFeatures', 'Laundry_Room', Math.max(0, data.PrimaryFeatures.Laundry_Room + 1))
                              }
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
                              onClick={() =>
                                handleChange('PrimaryFeatures', 'Kitchen', Math.max(0, data.PrimaryFeatures.Kitchen - 1))
                              }
                              type="button"
                              defaultValue="-"
                              className="button-minus border rounded-circle  icon-shape icon-sm mx-1 "
                              data-field="quantity"
                            />
                            {data.PrimaryFeatures.Kitchen}
                            <input
                              onClick={() =>
                                handleChange('PrimaryFeatures', 'Kitchen', Math.max(0, data.PrimaryFeatures.Kitchen + 1))
                              }
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
                              {data.PrimaryFeatures.Central_heating}  {" "}
                              {/* <i className="mdi mdi-chevron-down" /> */}
                            </button>
                            <div className="dropdown-menu" style={{}}>
                              <a className="dropdown-item" href="#" onClick={() =>
                                handleChange('PrimaryFeatures', 'Central_heating', 'Yes' as string)
                              }>
                                Yes
                              </a>
                              <a className="dropdown-item" href="#" onClick={() =>
                                handleChange('PrimaryFeatures', 'Central_heating', 'No' as string)
                              }>
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
                              {data.PrimaryFeatures.Central_cooling}  {" "}
                              {/* <i className="mdi mdi-chevron-down" /> */}
                            </button>
                            <div className="dropdown-menu" style={{}}>
                              <a className="dropdown-item" href="#" onClick={() =>
                                handleChange('PrimaryFeatures', 'Central_cooling', 'Yes' as string)
                              }>
                                Yes
                              </a>
                              <a className="dropdown-item" href="#" onClick={() =>
                                handleChange('PrimaryFeatures', 'Central_cooling', 'No' as string)
                              }>
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
                              {data.PrimaryFeatures.Elevator_Lift}  {" "}
                              {/* <i className="mdi mdi-chevron-down" /> */}
                            </button>
                            <div className="dropdown-menu" style={{}}>
                              <a className="dropdown-item" href="#" onClick={() =>
                                handleChange('PrimaryFeatures', 'Elevator_Lift', 'Yes' as string)
                              }>
                                Yes
                              </a>
                              <a className="dropdown-item" href="#" onClick={() =>
                                handleChange('PrimaryFeatures', 'Elevator_Lift', 'No' as string)
                              }>
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
                              {data.PrimaryFeatures.Public_parking}  {" "}
                              {/* <i className="mdi mdi-chevron-down" /> */}
                            </button>
                            <div className="dropdown-menu" style={{}}>
                              <a className="dropdown-item" href="#" onClick={() =>
                                handleChange('PrimaryFeatures', 'Public_parking', 'Yes' as string)
                              }>
                                Yes
                              </a>
                              <a className="dropdown-item" href="#" onClick={() =>
                                handleChange('PrimaryFeatures', 'Public_parking', 'No' as string)
                              }>
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
                              {data.PrimaryFeatures.CCTV_camera}  {" "}
                              {/* <i className="mdi mdi-chevron-down" /> */}
                            </button>
                            <div className="dropdown-menu" style={{}}>
                              <a className="dropdown-item" href="#" onClick={() =>
                                handleChange('PrimaryFeatures', 'CCTV_camera', 'Yes' as string)
                              }>
                                Yes
                              </a>
                              <a className="dropdown-item" href="#" onClick={() =>
                                handleChange('PrimaryFeatures', 'CCTV_camera', 'No' as string)
                              }>
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
                              {data.PrimaryFeatures.Accessing_boulevard}  {" "}
                              {/* <i className="mdi mdi-chevron-down" /> */}
                            </button>
                            <div className="dropdown-menu" style={{}}>
                              <a className="dropdown-item" href="#" onClick={() =>
                                handleChange('PrimaryFeatures', 'Accessing_boulevard', 'Yes' as string)
                              }>
                                Yes
                              </a>
                              <a className="dropdown-item" href="#" onClick={() =>
                                handleChange('PrimaryFeatures', 'Accessing_boulevard', 'No' as string)
                              }>
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
                              {data.Utilities.Sewerage}  {" "}
                              {/* <i className="mdi mdi-chevron-down" /> */}
                            </button>
                            <div className="dropdown-menu" style={{}}>
                              <a className="dropdown-item" href="#" onClick={() =>
                                handleChange('Utilities', 'Sewerage', 'Yes' as string)
                              }>
                                Yes
                              </a>
                              <a className="dropdown-item" href="#" onClick={() =>
                                handleChange('Utilities', 'Sewerage', 'No' as string)
                              }>
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
                              {data.Utilities.Electricity}  {" "}
                              {/* <i className="mdi mdi-chevron-down" /> */}
                            </button>
                            <div className="dropdown-menu" style={{}}>
                              <a className="dropdown-item" href="#" onClick={() =>
                                handleChange('Utilities', 'Electricity', 'Yes' as string)
                              }>
                                Yes
                              </a>
                              <a className="dropdown-item" href="#" onClick={() =>
                                handleChange('Utilities', 'Electricity', 'No' as string)
                              }>
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
                              {data.Utilities.Water_Supply}  {" "}
                              {/* <i className="mdi mdi-chevron-down" /> */}
                            </button>
                            <div className="dropdown-menu" style={{}}>
                              <a className="dropdown-item" href="#" onClick={() =>
                                handleChange('Utilities', 'Water_Supply', 'Yes' as string)
                              }>
                                Yes
                              </a>
                              <a className="dropdown-item" href="#" onClick={() =>
                                handleChange('Utilities', 'Water_Supply', 'No' as string)
                              }>
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
                              {data.Utilities.Gas}  {" "}
                              {/* <i className="mdi mdi-chevron-down" /> */}
                            </button>
                            <div className="dropdown-menu" style={{}}>
                              <a className="dropdown-item" href="#" onClick={() =>
                                handleChange('Utilities', 'Gas', 'Yes' as string)
                              }>
                                Yes
                              </a>
                              <a className="dropdown-item" href="#" onClick={() =>
                                handleChange('Utilities', 'Gas', 'No' as string)
                              }>
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
                              {data.Utilities.Security}  {" "}
                              {/* <i className="mdi mdi-chevron-down" /> */}
                            </button>
                            <div className="dropdown-menu" style={{}}>
                              <a className="dropdown-item" href="#" onClick={() =>
                                handleChange('Utilities', 'Security', 'Yes' as string)
                              } >
                                Yes
                              </a>
                              <a className="dropdown-item" href="#" onClick={() =>
                                handleChange('Utilities', 'Security', 'No' as string)
                              }>
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
                              {data.Communication.Internet_access}  {" "}
                              {/* <i className="mdi mdi-chevron-down" /> */}
                            </button>
                            <div className="dropdown-menu" style={{}}>
                              <a className="dropdown-item" href="#" onClick={() =>
                                handleChange('Communication', 'Internet_access', 'Yes' as string)
                              }>
                                Yes
                              </a>
                              <a className="dropdown-item" href="#" onClick={() =>
                                handleChange('Communication', 'Internet_access', 'No' as string)
                              }>
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
                              {data.Communication.Satellite_or_cable_TV}  {" "}
                              {/* <i className="mdi mdi-chevron-down" /> */}
                            </button>
                            <div className="dropdown-menu" style={{}}>
                              <a className="dropdown-item" href="#" onClick={() =>
                                handleChange('Communication', 'Satellite_or_cable_TV', 'Yes' as string)
                              }>
                                Yes
                              </a>
                              <a className="dropdown-item" href="#" onClick={() =>
                                handleChange('Communication', 'Satellite_or_cable_TV', 'No' as string)
                              }>
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
                              {data.Public_Facilities_Nearby.Park}  {" "}
                              {/* <i className="mdi mdi-chevron-down" /> */}
                            </button>
                            <div className="dropdown-menu" style={{}}>
                              <a className="dropdown-item" href="#" onClick={() =>
                                handleChange('Public_Facilities_Nearby', 'Park', 'Yes' as string)
                              }>
                                Yes
                              </a>
                              <a className="dropdown-item" href="#" onClick={() =>
                                handleChange('Public_Facilities_Nearby', 'Park', 'No' as string)
                              }>
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
                              {data.Public_Facilities_Nearby.Schools}  {" "}
                              {/* <i className="mdi mdi-chevron-down" /> */}
                            </button>
                            <div className="dropdown-menu" style={{}}>
                              <a className="dropdown-item" href="#" onClick={() =>
                                handleChange('Public_Facilities_Nearby', 'Schools', 'Yes' as string)
                              }>
                                Yes
                              </a>
                              <a className="dropdown-item" href="#" onClick={() =>
                                handleChange('Public_Facilities_Nearby', 'Schools', 'No' as string)
                              }>
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
                              {data.Public_Facilities_Nearby.Hospitals}  {" "}
                              {/* <i className="mdi mdi-chevron-down" /> */}
                            </button>
                            <div className="dropdown-menu" style={{}}>
                              <a className="dropdown-item" href="#" onClick={() =>
                                handleChange('Public_Facilities_Nearby', 'Hospitals', 'Yes' as string)
                              }>
                                Yes
                              </a>
                              <a className="dropdown-item" href="#" onClick={() =>
                                handleChange('Public_Facilities_Nearby', 'Hospitals', 'No' as string)
                              }>
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
                              {data.Public_Facilities_Nearby.Mosque}  {" "}
                              {/* <i className="mdi mdi-chevron-down" /> */}
                            </button>
                            <div className="dropdown-menu" style={{}}>
                              <a className="dropdown-item" href="#" onClick={() =>
                                handleChange('Public_Facilities_Nearby', 'Mosque', 'Yes' as string)
                              }>
                                Yes
                              </a>
                              <a className="dropdown-item" href="#" onClick={() =>
                                handleChange('Public_Facilities_Nearby', 'Mosque', 'No' as string)
                              }>
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
                              {data.Public_Facilities_Nearby.Restaurants}  {" "}
                              {/* <i className="mdi mdi-chevron-down" /> */}
                            </button>
                            <div className="dropdown-menu" style={{}}>
                              <a className="dropdown-item" href="#" onClick={() =>
                                handleChange('Public_Facilities_Nearby', 'Restaurants', 'Yes' as string)
                              }>
                                yes
                              </a>
                              <a className="dropdown-item" href="#" onClick={() =>
                                handleChange('Public_Facilities_Nearby', 'Restaurants', 'Yes' as string)
                              }>
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
                              {data.Secondary_Features.Backup_generator}  {" "}
                              {/* <i className="mdi mdi-chevron-down" /> */}
                            </button>
                            <div className="dropdown-menu" style={{}}>
                              <a className="dropdown-item" href="#" onClick={() =>
                                handleChange('Secondary_Features', 'Backup_generator', 'Yes' as string)
                              }>
                                Yes
                              </a>
                              <a className="dropdown-item" href="#" onClick={() =>
                                handleChange('Secondary_Features', 'Backup_generator', 'No' as string)
                              }>
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
                              {data.Secondary_Features.Maintenance}  {" "}
                              {/* <i className="mdi mdi-chevron-down" /> */}
                            </button>
                            <div className="dropdown-menu" style={{}}>
                              <a className="dropdown-item" href="#" onClick={() =>
                                handleChange('Secondary_Features', 'Maintenance', 'Yes' as string)
                              }>
                                yes
                              </a>
                              <a className="dropdown-item" href="#" onClick={() =>
                                handleChange('Secondary_Features', 'Maintenance', 'Yes' as string)
                              }>
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
                              onClick={() =>
                                handleChange('Secondary_Features', 'Number_of_Floors', Math.max(0, data.Secondary_Features.Number_of_Floors - 1))
                              }
                              type="button"
                              defaultValue="-"
                              className="button-minus border rounded-circle  icon-shape icon-sm mx-1 "
                              data-field="quantity"
                            />
                            {data.Secondary_Features.Number_of_Floors}
                            <input
                              onClick={() =>
                                handleChange('Secondary_Features', 'Number_of_Floors', Math.max(0, data.Secondary_Features.Number_of_Floors + 1))
                              }
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
                            <button
                              type="button"
                              className="button-minus border rounded-circle icon-shape icon-sm mx-1"
                              onClick={() =>
                                handleChange(
                                  'Secondary_Features',
                                  'Which_Floor_is_your_unit_on',
                                  Math.max(0, data.Secondary_Features.Which_Floor_is_your_unit_on - 1)
                                )
                              }
                            >
                              -
                            </button>
                            {data.Secondary_Features.Which_Floor_is_your_unit_on}
                            <button
                              type="button"
                              className="button-plus border rounded-circle icon-shape icon-sm"
                              onClick={() =>
                                handleChange(
                                  'Secondary_Features',
                                  'Which_Floor_is_your_unit_on',
                                  data.Secondary_Features.Which_Floor_is_your_unit_on + 1
                                )
                              }
                            >
                              +
                            </button>
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
