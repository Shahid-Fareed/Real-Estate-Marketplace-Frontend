import React, { useState, useCallback, useEffect } from "react";
import MyHelmet from "../../components/MyHelmet";
import PageTitle from "../../components/dashboard/PageTitle";
import Table from "../../components/Table/Table";
import Sidebar from "../../components/dashboard/Sidebar";
import Footer from "../../components/dashboard/Footer";

import InquriesServices from "../../services/dashboard/InquriesServices";

type Inquires = {
  name: string;
  contact_number: string;
  email: string;
  message: string;
  id: number;
  status: number;
  createdAt: Date;
}

const Inbox = () => {
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [data, setData] = useState<any[]>([]);

  let userType = "";
  const authData = localStorage.getItem("authUser");
  if (authData) {
    const parsedUser = JSON.parse(authData);
    userType = parsedUser[0]?.user_type || null;
  }


  const getAdminInquries = () => {
    let body = null;
    InquriesServices.adminInquries(body).then((res) => {
      const data = res.data;
      let newData = [];
      for (let i = 0; i < data?.length; i++) {
        const element: Inquires =  data[i];
        let obj = {
          "#": i + 1,
          Name: element?.name,
          Phone: element?.contact_number,
          Email: element?.email,
          Message: element?.message,
          id: element?.id,
        }
        newData.push(obj);
      }
      setData(newData);
    }).catch((err) => { console.log("err: ", err) })
  }
  const agencyOrUserInquries = () => {
    let body = null;
    let userId = null;
    const authUser = localStorage.getItem("authUser");
    if (authUser) {
      const parsedAuthUser = JSON.parse(authUser);
      if (Array.isArray(parsedAuthUser) && parsedAuthUser.length > 0) {
        userId = parsedAuthUser[0].id;
      }
    }
    InquriesServices.agencyOrUserInquries(body, userId).then((res) => {
      const data = res.data;
      let newData = [];
      for (let i = 0; i < data?.length; i++) {
        const element: Inquires =  data[i];
        let obj = {
          "#": i + 1,
          Name: element?.name,
          Phone: element?.contact_number,
          Email: element?.email,
          Message: element?.message,
          id: element?.id,
        }
        newData.push(obj);
      }
      setData(newData);
    }).catch((err) => { console.log("err: ", err) })
  }


  useEffect(() => {
    if (userType === "admin") {
      getAdminInquries();
    }
    if (userType === "agency") {
      agencyOrUserInquries();
    }
    if (userType === "user") {
      agencyOrUserInquries();
    }
  }, []);

  const columns = [
    "#",
    "Name",
    "Phone",
    "Email",
    "Message",
  ];

  const handleDelete = (id: any) => {
    console.log("Delete");
  };
  const handleEdit = (id: any) => {
    console.log("Edit");
  };

  return (
    <>
      <MyHelmet title="Inbox" />
      <Sidebar />
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            {/* start page title  */}
            <div className="row">
              <PageTitle pagename="Inbox" />
            </div>

            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <Table
                      columns={columns}
                      data={data}
                      itemsPerPage={itemsPerPage}
                      onDelete={() => { }}
                      onEdit={() => { }}
                      setItemsPerPage={setItemsPerPage}
                      isAction={false}
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

export default Inbox;
