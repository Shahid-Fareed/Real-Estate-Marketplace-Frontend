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


const PropertiesAdmin = () => {
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

  const getProperties = () => {
    let body = null;
    propertiesDashService.allProperties(body).then((res) => {
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

        };
        newData.push(obj);
      }
      setData(newData);
    }).catch((err) => { console.log("error is on the all prorperties") })
  }


  useEffect(() => {
    getProperties();
  }, []);

  const columns = [
    "#",
    "Seller Name",
    "Seller Mobile Number",
    "City",
    "Price",
    "Posted Date",
    "Status",
  ];




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



      <Footer />
    </>
  );
};

export default PropertiesAdmin;
