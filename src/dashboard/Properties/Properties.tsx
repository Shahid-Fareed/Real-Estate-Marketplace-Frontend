import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import MyHelmet from "../../components/MyHelmet";
import PageTitle from "../../components/dashboard/PageTitle";
import Table from "../../components/Table/Table";
import Sidebar from "../../components/dashboard/Sidebar";
import Footer from "../../components/dashboard/Footer";
import propertiesDashService from "../../services/dashboard/propertiesDashService";
import OrderServices from "../../services/dashboard/orderServices";
import useUserPermissions from "../../hooks/useUserPermissions";


type UserQu = {
  verfied_listing: number,
  hot_listing: number,
  super_hot_listing: number,
}


const Properties = () => {
  const navigate = useNavigate();
  const userPermission = useUserPermissions();

  const [userQuota, setUserQutoa] = useState<UserQu>({
    verfied_listing: 0,
    hot_listing: 0,
    super_hot_listing: 0,
  });
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [propertId, setPropertId] = useState(0);

  const [data, setData] = useState<any[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const getUsersQotas = () => {
    OrderServices.getUserQuota(null, userId).then((res) => {
      const data = res.data[0];
      setUserQutoa(data);
    }).catch((err) => {
      console.log("error on the user quota api")
    })
  }

  const getUserProperties = () => {
    let body = null;
    propertiesDashService.allUserProperties(body, userId).then((res) => {
      const data = res.data;
      let newData: any[] = [];
      const resData = res?.data;
      for (let i = 0; i < resData?.length; i++) {
        const element = resData[i];

        let obj = {
          "#": element.id,
          "Seller Name": element?.seller_name,
          "Seller Mobile Number": element?.seller_mobile_no,
          City: element?.city,
          id: element?.id,
          Price: element?.price,
          "Posted Date": moment(element?.createdAt).format("DD MMM,YYYY"),
          Status: element?.status,
          "Actions": <><button
            type="button"
            disabled={element?.is_verified_status !== ""}
            onClick={() => setPropertId(element?.id)}
            data-bs-toggle="modal" data-bs-target="#VerifiesModal"
            className="btn btn-rounded waves-effect waves-light"
            style={{ backgroundColor: "#34c38f", color: "#fff" }}

          >
            Get Verifed
          </button> <button
            disabled={element?.is_boosted !== 0}
            onClick={() => setPropertId(element?.id)}
            type="button"
            data-bs-toggle="modal" data-bs-target="#BoostModal"
            className="btn  btn-rounded waves-effect waves-light"
            style={{ backgroundColor: "#34c38f", color: "#fff" }}
          >
              Boost Property
            </button></>

        };
        newData.push(obj);
      }
      setData(newData);
    }).catch((err) => { console.log("error is on the all prorperties") })
  }

  useEffect(() => {
    getUserProperties();
    getUsersQotas();
  }, []);

  const columns = [
    "#",
    "Seller Name",
    "Seller Mobile Number",
    "City",
    "Price",
    "Posted Date",
    "Status",
    "Actions"
  ];


  const onSubmitPropertyBoost = (e: any, type: string) => {
    e.preventDefault();
    setIsSubmitting(true);
    const boostLink = document.getElementById('BoostModalClose');
    const verifyLink = document.getElementById('VerifiesModal');
    propertiesDashService.boostProperty(null, userId, propertId, type).then((res) => {
      boostLink?.click();
      verifyLink?.click();
      getUsersQotas();
      setIsSubmitting(false);
    }).catch((err) => {
      console.log("Error on the boost propertu call")
    })
  }


  const handleDelete = (id: any) => {
    console.log("Delete");
  };
  const handleEdit = (id: any) => {
    console.log("Edit");
  };

  return (
    <>
      <MyHelmet title="Properties" />
      <Sidebar />
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            {/* start page title  */}
            <div className="row">
              <PageTitle pagename="Properties" />
              {
                userPermission?.includes('Add Property') ? <div
                  className="col-6"
                  style={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <button
                    type="button"
                    className="btn btn-primary btn-sm waves-effect waves-light"
                    style={{ height: "30px" }}
                    onClick={() => navigate("/properties/add")}
                  >
                    <i className="mdi mdi-plus" style={{ marginRight: "5px" }} />
                    Add Properties
                  </button>
                </div> : null
              }


              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <Table
                      columns={columns}
                      data={data}
                      itemsPerPage={itemsPerPage}
                      onDelete={handleDelete}
                      onEdit={handleEdit}
                      setItemsPerPage={setItemsPerPage}
                      permEdit={'Edit Property'}
                      permDel={'Delete Property'}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="BoostModal"
        tabIndex={-1}
        aria-labelledby="BoostModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="BoostModalLabel">
                Boost Your Property
              </h1>
              <button
                type="button"
                className="btn-close"
                id="BoostModalClose"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="row" onClick={(e) => { onSubmitPropertyBoost(e, "hot_listing") }}>
                <div className="col-12">
                  <div className="card smallCard">
                    <div className="card-body">
                      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                        <p className="tracking-in-expand text-muted mb-0">
                          Total Hot Listing Left : {userQuota?.hot_listing}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row" onClick={(e) => { onSubmitPropertyBoost(e, "super_hot_listing") }}>
                <div className="col-12">
                  <div className="card smallCard">
                    <div className="card-body">

                      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                        <p className="tracking-in-expand text-muted mb-0">
                          Total Super Hot Listing Left : {userQuota?.super_hot_listing}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Boost Now
              </button>
            </div> */}
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="VerifiesModal"
        tabIndex={-1}
        aria-labelledby="VerifiesModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="VerifiesModalLabel">
                Verify your property
              </h1>
              <button
                type="button"
                className="btn-close"
                id="VerifiesModalClose"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">  <div className="row" onClick={(e) => { onSubmitPropertyBoost(e, "verify_listing") }}>
              <div className="col-12">
                <div className="card smallCard">
                  <div className="card-body">
                    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                      <p className="tracking-in-expand text-muted mb-0">
                        Total Verified Listing Left : {userQuota?.verfied_listing}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div></div>
            {/* <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div> */}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Properties;
