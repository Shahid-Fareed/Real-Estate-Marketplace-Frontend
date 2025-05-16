import React, { useState } from "react";
import MyHelmet from "../../components/MyHelmet";
import PageTitle from "../../components/dashboard/PageTitle";
import Sidebar from "../../components/dashboard/Sidebar";
import Footer from "../../components/dashboard/Footer";
import AddAmenity from "./Modal";
import ReactGoogleAutocomplete from "react-google-autocomplete";
import ImageUpload from "../../components/imageUploaders/ImageUpload";

const AddProperties = () => {



  const [isRent, setIsRent] = useState(true);
  const [activeTab, setActiveTab] = useState('tab-1');
  const [selectedValue, setSelectedValue] = useState('');
  const [images, setImages] = useState<any[]>([]);


  const handleTabChange = (tabId: any) => {
    setActiveTab(tabId);
    setSelectedValue('');
  };

  const handleButtonClick = (value: any) => {
    setSelectedValue(value);
  };


  return (
    <>
      <MyHelmet title="Add Properties" />
      <Sidebar />

      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <PageTitle pagename="Add Properties" />
              <div className="col-12">
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
                              className={isRent ? "btn rounded-0 PurpseButtonOne" : "btn rounded-0 PurpseButtonSecond"}
                              type="button"
                              onClick={() => setIsRent(!isRent)}
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
                              className={isRent ? "btn rounded-0 ms-xxl-3 ms-xl-4 PurpseButtonSecond" : "btn rounded-0 ms-xxl-3 ms-xl-4 PurpseButtonOne"}
                              type="button"
                              onClick={() => setIsRent(!isRent)}
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
                        <div className="col-12">
                          <div>
                            <ul
                              id="propertytabs"
                              className="nav nav-tabs"
                              role="tablist"
                            >
                              <li className="nav-item" role="presentation">
                                <a
                                  className={`nav-link ${activeTab === 'tab-1' ? 'active' : ''}`}
                                  role="tab"
                                  data-bs-toggle="tab"
                                  href="#tab-1"
                                  style={{ fontFamily: "Inter, sans-serif" }}
                                  aria-selected={activeTab === 'tab-1'}
                                  onClick={() => handleTabChange('tab-1')}
                                >
                                  Residential
                                </a>
                              </li>
                              <li className="nav-item" role="presentation">
                                <a
                                  className={`nav-link ${activeTab === 'tab-2' ? 'active' : ''}`}

                                  role="tab"
                                  data-bs-toggle="tab"
                                  href="#tab-2"
                                  aria-selected={activeTab === 'tab-2'}
                                  onClick={() => handleTabChange('tab-2')}
                                >
                                  Plot
                                </a>
                              </li>
                              <li className="nav-item" role="presentation">
                                <a
                                  className={`nav-link ${activeTab === 'tab-3' ? 'active' : ''}`}
                                  role="tab"
                                  data-bs-toggle="tab"
                                  href="#tab-3"
                                  ria-selected={activeTab === 'tab-3'}
                                  onClick={() => handleTabChange('tab-3')}
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
                                <div className="d-flex  flex-wrap">
                                  <button
                                    className={`btn rounded-0 btnBorders ${selectedValue === 'House' ? 'selectedPropertyType' : ''}`}
                                    type="button"
                                    onClick={() => handleButtonClick('House')}
                                    style={{}}
                                  >
                                    <img
                                      src="/assets/img/homeSimple.png"
                                      width={26}
                                      height={25}
                                      alt=""
                                    />
                                    House
                                  </button>
                                  <button
                                    className={`btn rounded-0 btnBorders ${selectedValue === 'Flat' ? 'selectedPropertyType' : ''}`}
                                    type="button"
                                    onClick={() => handleButtonClick('Flat')}
                                  >
                                    <img
                                      src="/assets/img/residentialIcon.png"
                                      width={26}
                                      height={25}
                                      alt=""
                                    />
                                    Flat
                                  </button>
                                  <button
                                    className={`btn rounded-0 btnBorders ${selectedValue === 'Farm_House' ? 'selectedPropertyType' : ''}`}
                                    type="button"
                                    onClick={() => handleButtonClick('Farm_House')}
                                  >
                                    <img
                                      src="/assets/img/AgritucalIcon.png"
                                      width={26}
                                      height={25}
                                      alt=""
                                    />
                                    Farm House
                                  </button>
                                  <button
                                    className={`btn rounded-0 btnBorders ${selectedValue === 'Guest_House' ? 'selectedPropertyType' : ''}`}
                                    type="button"
                                    onClick={() => handleButtonClick('Guest_House')}
                                  >
                                    <img
                                      src="/assets/img/industrialIcon.png"
                                      width={26}
                                      height={25}
                                      alt=""
                                    />
                                    Guest House
                                  </button>
                                </div>
                              </div>
                              <div
                                className="tab-pane pt-xl-4"
                                role="tabpanel"
                                id="tab-2"
                              >
                                <div className="d-flex flex-wrap">
                                  <button
                                    className={`btn rounded-0 btnBorders ${selectedValue === 'Residential_Plot' ? 'selectedPropertyType' : ''}`}
                                    type="button"
                                    onClick={() => handleButtonClick('Residential_Plot')}
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
                                  <button
                                    className={`btn rounded-0 btnBorders ${selectedValue === 'Commercial_Plot' ? 'selectedPropertyType' : ''}`}
                                    type="button"
                                    onClick={() => handleButtonClick('Commercial_Plot')}
                                  >
                                    <img
                                      src="/assets/img/residentialIcon.png"
                                      width={26}
                                      height={25}
                                      alt=""
                                    />
                                    Commercial Plot
                                  </button>
                                  <button
                                    className={`btn rounded-0 btnBorders ${selectedValue === 'Agricultural_Land' ? 'selectedPropertyType' : ''}`}
                                    type="button"
                                    onClick={() => handleButtonClick('Agricultural_Land')}

                                  >
                                    <img
                                      src="/assets/img/AgritucalIcon.png"
                                      width={26}
                                      height={25}
                                      alt=""
                                    />
                                    Agricultural Land
                                  </button>
                                  <button
                                    className={`btn rounded-0 btnBorders ${selectedValue === 'Industrial_Land' ? 'selectedPropertyType' : ''}`}
                                    type="button"
                                    onClick={() => handleButtonClick('Industrial_Land')}
                                  >
                                    <img
                                      src="/assets/img/industrialIcon.png"
                                      width={26}
                                      height={25}
                                      alt=""
                                    />
                                    Industrial Land
                                  </button>
                                  <button
                                    className={`btn rounded-0 btnBorders ${selectedValue === 'Plot_File' ? 'selectedPropertyType' : ''}`}
                                    type="button"
                                    onClick={() => handleButtonClick('Plot_File')}
                                  >
                                    <img
                                      src="/assets/img/industrialIcon.png"
                                      width={26}
                                      height={25}
                                      alt=""
                                    />
                                    Plot File
                                  </button>
                                  <button
                                    className={`btn rounded-0 btnBorders ${selectedValue === 'Farmhouse_File' ? 'selectedPropertyType' : ''}`}
                                    type="button"
                                    onClick={() => handleButtonClick('Farmhouse_File')}
                                  >
                                    <img
                                      src="/assets/img/industrialIcon.png"
                                      width={26}
                                      height={25}
                                      alt=""
                                    />
                                    Farmhouse Plot
                                  </button>
                                </div>
                              </div>
                              <div
                                className="tab-pane pt-xl-4"
                                role="tabpanel"
                                id="tab-3"
                              >
                                <div className="d-flex flex-wrap">
                                  <button
                                    className={`btn rounded-0 btnBorders ${selectedValue === 'Office' ? 'selectedPropertyType' : ''}`}
                                    type="button"
                                    style={{}}
                                    onClick={() => handleButtonClick('Office')}
                                  >
                                    <img
                                      src="/assets/img/homeSimple.png"
                                      width={26}
                                      height={25}
                                      alt=""
                                    />
                                    Office
                                  </button>
                                  <button
                                    className={`btn rounded-0 btnBorders ${selectedValue === 'Shop' ? 'selectedPropertyType' : ''}`}
                                    type="button"
                                    onClick={() => handleButtonClick('Shop')}
                                  >
                                    <img
                                      src="/assets/img/residentialIcon.png"
                                      width={26}
                                      height={25}
                                      alt=""
                                    />
                                    Shop
                                  </button>
                                  <button
                                    className={`btn rounded-0 btnBorders ${selectedValue === 'Warehouse' ? 'selectedPropertyType' : ''}`}
                                    type="button"
                                    onClick={() => handleButtonClick('Warehouse')}

                                  >
                                    <img
                                      src="/assets/img/AgritucalIcon.png"
                                      width={26}
                                      height={25}
                                      alt=""
                                    />
                                    Warehouse
                                  </button>
                                  <button
                                    className={`btn rounded-0 btnBorders ${selectedValue === 'Building' ? 'selectedPropertyType' : ''}`}
                                    type="button"
                                    onClick={() => handleButtonClick('Building')}
                                  >
                                    <img
                                      src="/assets/img/industrialIcon.png"
                                      width={26}
                                      height={25}
                                      alt=""
                                    />
                                    Building
                                  </button>
                                  <button
                                    className={`btn rounded-0 btnBorders ${selectedValue === 'Plaza' ? 'selectedPropertyType' : ''}`}
                                    type="button"
                                    onClick={() => handleButtonClick('Plaza')}
                                  >
                                    <img
                                      src="/assets/img/industrialIcon.png"
                                      width={26}
                                      height={25}
                                      alt=""
                                    />
                                    Plaza
                                  </button>

                                </div>
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
                            <div className="col-xl-12">
                              <div>
                                <h4>Select the city</h4>
                              </div>
                              <ReactGoogleAutocomplete
                                className="form-control pt-xl-2 ps-xl-2 pb-xl-2 pe-xl-2"
                                apiKey="AIzaSyB_X_leqFCrEXS06iTPXBW_DY3MPHM6RLQ"
                                style={{ width: "75%" }}
                                onPlaceSelected={(place) => {
                                  console.log(place);
                                }}
                                options={{
                                  types: ["(cities)"],
                                  componentRestrictions: { country: "pk" },
                                }}
                              // defaultValue="Choose city"
                              />

                            </div>
                            <div className="col-xl-12 pt-xl-5">
                              <div>
                                <h4>Select the area</h4>
                              </div>
                              <select
                                className="form-control pt-xl-2 ps-xl-2 pb-xl-2 pe-xl-2"
                                style={{ width: "75%" }}
                              >
                                <option value={12}>
                                  Address, block, phase, etc.
                                </option>
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
                        <h6
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModalAmenti"
                        >
                          Property Features & Info
                        </h6>
                      </div>
                      <div className="col-md-6 col-xl-8  col-xxl-8">
                        <div className="container">
                          <div className="row">
                            <div className="col-xl-12">
                              <div>
                                <h4>Select the size of the property</h4>
                              </div>
                              <select
                                className="form-select pt-xl-2 ps-xl-2 pb-xl-2 pe-xl-2"
                                style={{ width: "75%" }}
                              >
                                <option value={12}>Choose size</option>
                                <option value={13}>This is item 2</option>
                                <option value={14}>This is item 3</option>
                              </select>
                            </div>
                            <div className="col-xl-12 pt-xl-5">
                              <div>
                                <h4>What is the asking price?</h4>
                              </div>
                              <input
                                type="text" style={{ width: "75%" }}
                                className="form-control pt-xl-2 ps-xl-2 pb-xl-2 pe-xl-2"
                              />
                            </div>
                            <div className="col-xl-12 pt-xl-5">
                              <div>
                                <h4>Name your property</h4>
                              </div>
                              <input
                                type="text" style={{ width: "75%" }}
                                className="form-control pt-xl-2 ps-xl-2 pb-xl-2 pe-xl-2"
                              />
                            </div>
                            <div className="col-xl-12 pt-xl-5">
                              <div>
                                <AddAmenity />
                              </div>
                            </div>
                            <div className="col-xl-12 pt-xl-5">
                              <div>
                                <h4>What do you love about the place?</h4>
                              </div>
                              <textarea
                                style={{ width: "75%" }}
                                className="form-control pt-xl-2 ps-xl-2 pb-xl-2 pe-xl-2"
                              />
                            </div>
                            <div className="col-xl-12 pt-xl-5">
                              <div>
                                <h4>Upload images of your property</h4>
                              </div>
                              <ImageUpload fileList={images} setFileList={setImages} />
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
                            <div className="col-xl-12 pt-xl-5">
                              <div>
                                <h4>Add your contact number</h4>
                              </div>
                              <input
                                type="text" style={{ width: "75%" }}
                                className="form-control pt-xl-2 ps-xl-2 pb-xl-2 pe-xl-2"
                              />
                            </div>
                            <div className="col-xl-12 pt-xl-5">
                              <div>
                                <h4>Enter your name</h4>
                              </div>
                              <input
                                type="text" style={{ width: "75%" }}
                                className=" form-control pt-xl-2 ps-xl-2 pb-xl-2 pe-xl-2"
                              />
                            </div>

                            <div className="col-xl-12 pt-xl-5">
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AddProperties;
