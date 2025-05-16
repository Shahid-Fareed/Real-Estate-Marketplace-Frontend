import React, { useState, useEffect,useLayoutEffect } from "react";
import { BsCart, BsWallet, BsPeople, BsBell } from "react-icons/bs";
import MyHelmet from "../../components/MyHelmet";
import PageTitle from "../../components/dashboard/PageTitle";
import Sidebar from "../../components/dashboard/Sidebar";
import Footer from "../../components/dashboard/Footer";
import dashboardApiServices from "../../services/dashboard/dashboardApiServices";
import LineChart from "../../components/charts/LineChart";
import Auth from "../../services/dashboard/authDashService";

interface CountData {
  total: number;
  sell: number;
  rent: number;
  agency: number;
  latestTenPropereties: [];
  topFiveAreas: [];
  monthlyAddedProperties: [];
}

interface Property {
  _id: string;
  id: string;
  seller_name: string;
  location: string;
  createdAt: string;
  status: string;
}

interface Area {
  _id: string;
  propertiesCount: number;
}

const Dash = () => {
  let userType = "";
  const authData = localStorage.getItem("authUser");
  if (authData) {
    const parsedUser = JSON.parse(authData);
    userType = parsedUser[0]?.user_type || null;
  }

  let userId: any = null;
  const authUser = localStorage.getItem("authUser");
  if (authUser) {
    const parsedAuthUser = JSON.parse(authUser);
    if (Array.isArray(parsedAuthUser) && parsedAuthUser.length > 0) {
      userId = parsedAuthUser[0].id;
    }
  }

  const getAuthData = (authData: string) => {
    Auth.getUserDataByAuth(null, authData).then((res) => {
      localStorage.setItem("authUser", JSON.stringify(res.data));
    }).catch((err) => {
      console.log("error on api geting auth user")
    })
  }

  const [countData, setCountData] = useState<CountData>({
    total: 0,
    sell: 0,
    rent: 0,
    agency: 0,
    latestTenPropereties: [],
    topFiveAreas: [],
    monthlyAddedProperties: [],
  });

  const getAdminData = () => {
    let body = null;
    dashboardApiServices
      .dashApi(body)
      .then((res) => {
        setCountData(res);
      })
      .catch((error) => {
        console.log("error on admin count api");
      });
  };

  const getAgencyData = () => {
    let body = null;
    dashboardApiServices
      .dashAgencyApi(body, userId)
      .then((res) => {
        setCountData(res);
      })
      .catch((error) => {
        console.log("error on admin count api");
      });
  };

  const getUserData = () => {
    let body = null;
    dashboardApiServices
      .dashUserApi(body, userId)
      .then((res) => {
        setCountData(res);
      })
      .catch((error) => {
        console.log("error on admin count api");
      });
  };
  useLayoutEffect(() => {
    const authToken = localStorage.getItem('authToken');
    if (authToken !== null) {
      getAuthData(authToken);
    } else {
      // Handle the case when 'authToken' is null
      console.error('authToken is null');
    }
  }, [])
  useEffect(() => {
    
    if (userType === "admin") {
      getAdminData();
    }
    if (userType === "agency") {
      getAgencyData();
    }
    if (userType === "user") {
      getUserData();
    }
  }, []);
  return (
    <>
      <MyHelmet title="Dashboard" />
      <Sidebar />
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <PageTitle pagename="Dashboard" />
              <div className="col-12">
                <div className="row">
                  <div className="col-md-3">
                    <div className="card smallCard">
                      <div className="card-body">
                        <div className="cardicon float-end mt-2">
                          <BsWallet />
                        </div>
                        <div>
                          <h4 className="tracking-in-expand mb-1 mt-1">
                            <span data-plugin="counterup">
                              {countData.total}
                            </span>
                          </h4>
                          <p className="tracking-in-expand text-muted mb-0">
                            Total Properties
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="card smallCard">
                      <div className="card-body">
                        <div className="cardicon float-end mt-2">
                          <BsPeople />
                        </div>
                        <div>
                          <h4 className="tracking-in-expand mb-1 mt-1">
                            <span data-plugin="counterup">
                              {countData.sell}
                            </span>
                          </h4>
                          <p className="tracking-in-expand text-muted mb-0">
                            Total on sell
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="card smallCard">
                      <div className="card-body">
                        <div className="cardicon float-end mt-2">
                          <BsBell />
                        </div>
                        <div>
                          <h4 className="tracking-in-expand mb-1 mt-1">
                            <span data-plugin="counterup">
                              {countData.rent}
                            </span>
                          </h4>
                          <p className="tracking-in-expand text-muted mb-0">
                            Total on rent
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="card smallCard">
                      <div className="card-body">
                        <div className="cardicon float-end mt-2">
                          <BsCart />
                        </div>
                        <div>
                          <h4 className="tracking-in-expand mb-1 mt-1">
                            <span data-plugin="counterup">
                              {countData.agency}
                            </span>
                          </h4>
                          <p className="tracking-in-expand text-muted mb-0">
                            Total Agencies
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-xl-8">
                    <div className="card">
                      <div className="card-body">
                        <LineChart arryData={countData.monthlyAddedProperties} />
                      </div>{" "}
                      {/* end card-body*/}
                    </div>{" "}
                    {/* end card*/}
                  </div>{" "}
                  {/* end col*/}
                  <div className="col-xl-4">
                    <div className="card bg-primary">
                      <div className="card-body">
                        <div className="row align-items-center">
                          <div className="col-sm-8">
                            <p className="text-white font-size-18">
                              Enhance your <b>Campaign</b> for better outreach{" "}
                              <i className="mdi mdi-arrow-right" />
                            </p>
                            <div className="mt-4">
                              <a
                                href="javascript: void(0);"
                                className="btn btn-success waves-effect waves-light"
                              >
                                Upgrade Account!
                              </a>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="mt-4 mt-sm-0">
                              <img
                                src="assets/images/setup-analytics-amico.svg"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>{" "}
                      {/* end card-body*/}
                    </div>{" "}
                    {/* end card*/}
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title mb-4">
                          Top 5 Area's of properties
                        </h4>
                        {countData.topFiveAreas.map((area: Area) => (
                          <div
                            key={area._id}
                            className="row align-items-center g-0 mt-3"
                          >
                            <div className="col-sm-3">
                              <p className="text-truncate mt-1 mb-0">
                                <i className="mdi mdi-circle-medium text-primary me-2" />{" "}
                                {area._id}
                              </p>
                            </div>
                            <div className="col-sm-9">
                              <div
                                className="progress mt-1"
                                style={{ height: 6 }}
                              >
                                <div
                                  className="progress-bar progress-bar bg-primary"
                                  role="progressbar"
                                  style={{ width: `${(area.propertiesCount / countData.topFiveAreas.length) * 100}%` }}
                                  aria-valuenow={(area.propertiesCount / countData.topFiveAreas.length) * 100}
                                  aria-valuemin={0}
                                  aria-valuemax={52}
                                ></div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title mb-4">
                          Top 10 Recent Properties
                        </h4>
                        <div className="table-responsive">
                          <table className="table table-centered table-nowrap mb-0">
                            <thead className="table-light">
                              <tr>
                                <th>ID</th>
                                <th>Seller Name</th>
                                <th>Location</th>
                                <th>Posted Date</th>
                                <th>Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              {countData.latestTenPropereties.map(
                                (prop: Property) => (
                                  <tr key={prop._id}>
                                    <td className="text-body fw-bold">
                                      <span
                                        style={{
                                          cursor: "pointer",
                                          textDecoration: "underline",
                                        }}
                                      >
                                        {prop.id}
                                      </span>
                                    </td>
                                    <td>
                                      <span
                                        style={{
                                          cursor: "pointer",
                                          textDecoration: "underline",
                                        }}
                                      >
                                        {prop.seller_name}
                                      </span>
                                    </td>
                                    <td>{prop.location}</td>
                                    <td>{prop.createdAt}</td>
                                    <td>{prop.status}</td>
                                    {/* <td>
                                  <span className="btn btn-primary btn-sm btn-rounded waves-effect waves-light">
                                    View Details
                                  </span>
                                </td> */}
                                  </tr>
                                )
                              )}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dash;
