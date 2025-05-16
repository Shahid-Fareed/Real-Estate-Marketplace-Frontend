import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import PropertyFileterApi from "../../../services/home/propertyListing";
import Loaders from "../../../components/Loaders";

type recentProt = {
  id: number;
  img: string;
  Address: string;
  price: string;
  bedroom: string;
  bathroom: string;
  garage_space: string;
  location: string;
  city: string;
  property_images: any;
  is_verified: any;
  is_hot_listing: any;
  is_super_hot_listing: any;
  name: any;
  slug: any;
};
interface Props {
  totalPages: number;
}

const PropertyFilter = ({ locationData }: any) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [totalCount, setTotalCount] = useState(0);
  const [properties, setProperties] = useState<recentProt[]>([]);
  const [showContent, setShowContent] = useState(false);
  const [pageNumbers, setPageNumbers] = useState<string[]>([]);
  const [categoryName, setCategoryName] = useState("");
  const [cityrResults, setCityResults] = useState("");
  const [agencyUser, setAgencyUser] = useState("");
  const [areas, setAreas] = useState("");
  const [areaUnit, setAreaUnit] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [bedroomRange, setBedroomRange] = useState("");
  const [townName, setTownName] = useState("");
  const [categoryType, setCategoryType] = useState("");
  const [sort, setSort] = useState("");
  const [totalPages, setTotalPage] = useState("");
  const [currentPage, setCurrentPage] = useState("");
  const [pagess, setPagess] = useState(null);
  //filtering states

  const [areaLocation, setAreaLocation] = useState("");
  const [cityLocation, setCityLocation] = useState("");

  const getProperyData = () => {
    let body: {
      typ: string;
      parent?: string;
      bedroom?: string;
      area_size?: string;
      area_unit?: string;
      minPrice?: string;
      maxPrice?: string;
      location?: string;
      sort?: string;
      city?: string;
      page?: string;
      agencyUser?: string;
      property_category_id?: string;
    } = {
      typ: `${categoryName}`,
    };
    if (areaLocation !== "") {
      body.location = areaLocation;
    }
    if (cityLocation !== "") {
      body.city = cityLocation;
    }
    if (categoryType !== "") {
      body.parent = categoryType;
    }

    if (propertyType !== "") {
      body.property_category_id = propertyType;
    }
    if (bedroomRange !== "") {
      body.bedroom = bedroomRange;
    }
    if (sort !== "") {
      body.sort = sort;
    }
    if (priceRange !== "") {
      body.minPrice = priceRange.split("-")[0];
      body.maxPrice = priceRange.split("-")[1];
    }
    if (areaUnit !== "") {
      body.area_size = areaUnit.split("-")[0];
      body.area_unit = areaUnit.split("-")[1];
    }
    if (currentPage !== "") {
      body.page = currentPage;
    }

    if (agencyUser !== "") {
      body.agencyUser = agencyUser;
    }

    PropertyFileterApi.getFilteredData(body).then((resp) => {
      setTotalPage(resp.totalPages);
      setCurrentPage(resp.page);
      setTotalCount(resp.totalDoc);
      const data = resp.data;
      setProperties(data);
      const pageNumbers = [];

      for (let i = 1; i <= resp.totalPages; i++) {
        pageNumbers.push(`${i}`);
      }
      setPageNumbers(pageNumbers);
    });
  };

  useEffect(() => {
    setIsLoading(true);
    const delay = 3000; // 3 seconds

    const timerId = setTimeout(() => {
      setShowContent(true);
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timerId); // Cleanup the timer if the component unmounts
  }, []);

  function addCommasToNumber(number: any) {
    return number?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  //const valuesArray = Array.from({ length: totalPages }, (_, index) => index + 1);

  const handelPropertyDetails = (id: number, slug: any) => {
    navigate(`/property-detail/${slug}`, { state: { id: id } });
  };

  useEffect(() => {
    const path = locationData.key;
    const states = locationData.state;
    if (states) {
      setCategoryName(states.ta);
      setCityResults(states.tci);
      setCategoryType(states.ts);
      setPropertyType(states.tk);
      setAgencyUser(states.tl);
      if (states.tci !== undefined) {
        const splitting = states?.tci?.split(",");
        setAreaLocation(splitting[0]);
        setCityLocation(splitting[1]);
      }
    }
  }, [locationData]);

  useEffect(() => {
    getProperyData();
  }, [
    categoryType,
    sort,
    bedroomRange,
    propertyType,
    totalPages,
    currentPage,
    priceRange,
    areaUnit,
    categoryName,
  ]);

  const clearAllFilter = () => {
    setCategoryName("");
    setAreas("");
    setAreaUnit("");
    setPropertyType("");
    setPriceRange("");
    setBedroomRange("");
    setTownName("");
    setAgencyUser("");
    setCityLocation("");
    setAreaLocation("");
    setCityResults("");
  };

  return (
    <>
      {isLoading ? (
        <Loaders />
      ) : (
        <>
          {showContent ? (
            <>
              <section className="filter-pro pt-3">
                <div className="container">
                  <div className="row">
                    <div className="col-sm-6 col-md-4 col-lg-3 col-xl-4">
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        value={cityrResults}
                        aria-describedby="emailHelp"
                        style={{
                          borderRadius: 5,
                          width: "100%",
                          padding: 13,
                          color: "rgb(161, 161, 161)",
                          marginBottom: 10,
                          background: "transparent",
                          border: "1px solid var(--black-8)",
                        }}
                      />
                    </div>

                    <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                      <select
                        value={categoryName}
                        onChange={(e) => setCategoryName(e.target.value)}
                        className="py-3 form-select"
                      >
                        <option value="">Select Purpose</option>
                        <option value="sell">Buy</option>
                        <option value="rent">Rent</option>
                      </select>
                    </div>

                    <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                      <select
                        value={categoryType}
                        onChange={(e) => setCategoryType(e.target.value)}
                        className="py-3 form-select"
                      >
                        <option value="">Select Type</option>
                        <option value="1">Residential</option>
                        <option value="3">Commercial</option>
                        {categoryName !== "rent" ? (
                          <option value="2">Plot</option>
                        ) : null}
                      </select>
                    </div>

                    <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                      <select
                        value={areaUnit}
                        onChange={(e) => setAreaUnit(e.target.value)}
                        className="py-3 form-select"
                      >
                        <option value="">Select Area</option>
                        <option value="5-Marla">5 Marla</option>
                        <option value="10-Marla">10 Marla</option>
                        <option value="12-Marla">12 Marla</option>
                        <option value="15-Marla">15 Marla</option>
                      </select>
                    </div>

                    {categoryType === "1" ? (
                      <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <select
                          value={propertyType}
                          onChange={(e) => setPropertyType(e.target.value)}
                          className="py-3 form-select"
                        >
                          <option value="">Select Type</option>
                          <option value="15">House</option>
                          <option value="16">Flat</option>
                          <option value="17">Farm House</option>
                          <option value="18">Guest House</option>
                        </select>
                      </div>
                    ) : null}
                    {categoryName !== "Rent" ? (
                      <>
                        {categoryType === "2" ? (
                          <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                            <select
                              value={propertyType}
                              onChange={(e) => setPropertyType(e.target.value)}
                              className="py-3 form-select"
                            >
                              <option value="">Select Type</option>
                              <option value="9">Residential Plot</option>
                              <option value="10">Commercial Plot</option>
                              <option value="13">Agriculture Land</option>
                              <option value="11">Farm House Plot</option>
                              <option value="12">Plot File</option>
                            </select>
                          </div>
                        ) : null}
                      </>
                    ) : null}

                    {categoryType === "3" ? (
                      <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <select
                          value={propertyType}
                          onChange={(e) => setPropertyType(e.target.value)}
                          className="py-3 form-select"
                        >
                          <option value="">Select Type</option>
                          <option value="4">Office</option>
                          <option value="5">Shop</option>
                          <option value="6">Warehouse</option>
                          <option value="7">Building</option>
                          <option value="8">Plaza</option>
                        </select>
                      </div>
                    ) : null}

                    <div className="col-sm-6 col-md-4 col-lg-3 col-xl-4">
                      <select
                        value={priceRange}
                        onChange={(e) => setPriceRange(e.target.value)}
                        className="py-3 form-select"
                        style={{ maxWidth: "100%" }}
                      >
                        <option value="">Select Price Range</option>
                        <option value="0-50000">0 - 50,000 PKR</option>
                        <option value="50000-80000">50,000 - 80,000 PKR</option>
                        <option value="80000-1800000">
                          80,000 - 1,800,000 PKR
                        </option>
                      </select>
                    </div>

                    {categoryType === "1" ? (
                      <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <select
                          value={bedroomRange}
                          onChange={(e) => setBedroomRange(e.target.value)}
                          className="py-3 form-select"
                        >
                          <option value="">Select Bedroom</option>
                          <option value="1">1 Bedroom</option>
                          <option value="2">2 Bedroom</option>
                          <option value="3">3 Bedroom</option>
                          <option value="4">4 Bedroom</option>
                          <option value="5">5 Bedroom</option>
                          <option value="6">6 Bedroom</option>
                          <option value="7">7 Bedroom</option>
                        </select>
                      </div>
                    ) : null}

                    <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex align-items-center">
                      <Link
                        to="#"
                        onClick={clearAllFilter}
                        className="viewmore"
                        style={{ color: "var(--dark)" }}
                      >
                        Clear All
                      </Link>
                    </div>
                  </div>
                </div>
              </section>

              <section className="filter-pro pt-4 pt-md-3">
                <div className="container">
                  <div className="row align-items-center pb-xl-4 pb-lg-4 pb-md-4 pb-sm-4 pb-4">
                    <div className="col-md-8 align-self-center">
                      <h1
                        className="d-xl-flex flex-wrap justify-content-xl-start algin-items-center"
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: 30,
                          textAlign: "left",
                        }}
                      >
                        {categoryType === "1"
                          ? "Residential"
                          : categoryType === "2"
                          ? "Plot"
                          : categoryType === "3"
                          ? "Commercial"
                          : ""}{" "}
                        Properties for{" "}
                        {categoryName === "sell" ? "Buy" : "Rent"}{" "}
                        {cityrResults !== "" && undefined
                          ? `in ${cityrResults}`
                          : ""}
                        <small
                          className="d-block d-xl-flex ps-xl-3 py-2 py-xl-0"
                          style={{
                            color: "var(--black-8)",
                            fontWeight: "400",
                            fontSize: "16px",
                            alignSelf: "center",
                          }}
                        >
                          ({totalCount} properties available)
                        </small>
                      </h1>
                    </div>

                    <div className="col-md-4 align-self-center text-end">
                      <select
                        value={sort}
                        onChange={(e) => setSort(e.target.value)}
                        className="form-select"
                        style={{
                          padding: 14,
                          maxWidth: "100%",
                        }}
                      >
                        <option value="1">Price - Low to High</option>
                        <option value="0">Price - High to Low</option>
                      </select>
                    </div>
                  </div>
                </div>
              </section>

              <section className=" residence pt-xl-4">
                <div className="container">
                  <div className="row residen">
                    {properties?.map((a) => (
                      <div
                        onClick={() => handelPropertyDetails(a.id, a.slug)}
                        key={a.id}
                        className="col-lg-3 col-md-6 pointer mb-3 mb-md-4"
                      >
                        <div className="card border-0 rounded-0 bg-transparent">
                          <div className="card-body p-0">
                            <div className="residen-item">
                              <div className="residen-thumbnai">
                                <img
                                  className="img-fluid slick-thumbnail"
                                  src={`${
                                    process.env
                                      .REACT_APP_BASE_PROPERTY_IMAGE_URL +
                                    a?.property_images[0]?.image_name
                                  }`}
                                  alt=""
                                  width="380"
                                  height="380"
                                />
                                <div className="super-hot">
                                  {a?.is_verified === 1 ? (
                                    <div>
                                      <div className="status-label verified">
                                        Verified
                                      </div>
                                    </div>
                                  ) : null}
                                  {a?.is_hot_listing === 1 ? (
                                    <div>
                                      <div className="status-label hot-listing">
                                        Hot Listing
                                      </div>
                                    </div>
                                  ) : null}
                                  {a?.is_super_hot_listing === 1 ? (
                                    <div>
                                      <div className="status-label super-hot-listing">
                                        Super Hot Listing
                                      </div>
                                    </div>
                                  ) : null}
                                </div>
                              </div>

                              <div className="residen-content pt-3">
                                <h4>
                                  <span className="currency">Pkr</span>
                                  {addCommasToNumber(a?.price)}
                                </h4>

                                <h5 className="caption mb-0">
                                  {a?.location},{a?.city}
                                </h5>
                                <h5 className="caption caption-title">
                                  {a?.name}
                                </h5>
                                <ul className="residen-info list-unstyled d-flex align-items-center mb-0">
                                  <li>
                                    <img
                                      className="img-fluid"
                                      src="assets/img/bedIcon.png"
                                      width={26}
                                      height={31}
                                      alt=""
                                    />
                                    <span>{a?.bedroom}</span>
                                  </li>
                                  <li>
                                    <img
                                      className="img-fluid"
                                      src="assets/img/BathIcon.png"
                                      width={26}
                                      height={31}
                                      alt=""
                                    />
                                    <span>{a?.bathroom}</span>
                                  </li>
                                  <li>
                                    <img
                                      className="img-fluid"
                                      src="assets/img/GarageIcon.png"
                                      width={20}
                                      height={20}
                                      alt=""
                                    />
                                    <span>{a?.garage_space}</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section className="pagination-wrapper p70-0 pb-0">
                <div className="container">
                  <div className="row">
                    <div className="col-6 col-lg-4 align-self-center color-065 mb-3 mb-lg-0 order-1 order-lg-1">
                      <p
                        className="mb-0"
                        style={{ color: "rgba(0, 0, 0, 0.6)" }}
                      >
                        Showing 1-10 of {properties?.length} properties
                      </p>
                    </div>
                    {properties?.length > 0 && (
                      <>
                        <div className="col-lg-4 align-self-center text-center order-3 order-lg-2">
                          <nav
                            className="font-monospace text-nowrap"
                            style={{ fontFamily: "Inter, sans-serif" }}
                          >
                            <ul
                              className="pagination rounded-3"
                              style={{
                                justifyContent: "center",
                                border: "0.5px solid rgba(0, 0, 0, 0.60)",
                                borderRadius: "5px",
                              }}
                            >
                              {pageNumbers?.map((page) => (
                                <li key={page} className="page-item">
                                  <Link
                                    className="page-link rounded-0"
                                    to="#"
                                    onClick={(e) => setCurrentPage(page)}
                                  >
                                    {page}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </nav>
                        </div>
                        <div className="col-6 col-lg-4 align-self-center text-end mb-3 mb-lg-0 order-2 order-lg-3">
                          <p
                            className="mb-0"
                            style={{ color: "rgba(0, 0, 0, 0.6)" }}
                          >
                            Page {currentPage} of {totalPages}
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </section>
            </>
          ) : null}
        </>
      )}
    </>
  );
};

export default PropertyFilter;
