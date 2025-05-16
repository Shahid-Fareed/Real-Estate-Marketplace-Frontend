import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import MyHelmet from "../../components/MyHelmet";
import PageTitle from "../../components/dashboard/PageTitle";
import Table from "../../components/Table/Table";
import Sidebar from "../../components/dashboard/Sidebar";
import UsersApi from "../../services/dashboard/users"
import useUserPermissions from "../../hooks/useUserPermissions";

type User = {
  full_name: string;
  mobile_number: string;
  email: string;
  city: string;
  id: number;
  status: number;
  createdAt: Date;
}

const ManageMembers = () => {
  const navigate = useNavigate();
  const userPermission = useUserPermissions();
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [data, setData] = useState<any[]>([]);

  const columns = [
    "#",
    "Full Name",
    "Email",
    "Phone",
    "Status",
  ];


  const getMemeber = useCallback((): void => {
    let body: null = null;
    let authUser = localStorage.getItem("authUser");
    let userID = JSON.parse(localStorage.getItem("authUser") || "");

    UsersApi.subUsers(body, userID[0]?.id)
      .then((res: { data: User[] }) => {
        let newData: any[] = [];
        const resData = res?.data;
        for (let i = 0; i < resData?.length; i++) {
          const element: User = resData[i];

          let obj = {
            "#": i + 1,
            "Full Name": element?.full_name,
            Phone: element?.mobile_number,
            Email: element?.email,
            id: element?.id,
            Status: element?.status === 1 ? (
              <button
                type="button"
                className="btn btn-rounded waves-effect waves-light"
                style={{ backgroundColor: "#34c38f", color: "#fff" }}
                onClick={() => changeStatus(element.id)}
              >
                Active
              </button>
            ) : (
              <button
                type="button"
                className="btn  btn-rounded waves-effect waves-light"
                style={{ backgroundColor: "#f46a6a", color: "#fff" }}
                onClick={() => changeStatus(element.id)}
              >
                In Active
              </button>
            ),
            "Date Created": moment(element?.createdAt).format("DD MMM,YYYY"),
          };
          newData.push(obj);
        }
        setData(newData);
      })
      .catch((error: Error) => console.log(error.message));
  }, []);

  const changeStatus = (id: number) => {
    let body = null;
    UsersApi.subUsersStatusChange(body, id)
      .then((res) => {
        getMemeber();
        //notifySuccess(res.message);
      })
      .catch((error) => console.log(error.message));
  };

  useEffect(() => {
    getMemeber();
  }, []);

  const handleDelete = (id: number) => {
    let body = null;
    UsersApi.deleteUser(body, id).then((res) => {
      getMemeber();
    }).catch((err) => {
      console.log("Errpr on the delete user api")
    })
  };
  const handleEdit = (id: number) => {
    navigate(`/manage-members/${id}`);
  };
  return (
    <>
      <MyHelmet title="Manage Members" body="" />
      <Sidebar />
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            {/* start page title  */}
            <div className="row">
              <PageTitle pagename="Manage Members" />
              {
                userPermission?.includes('Add User') ? <div
                  className="col-6"
                  style={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <button
                    type="button"
                    className="btn btn-primary btn-sm waves-effect waves-light"
                    style={{ height: "30px" }}
                    onClick={() => navigate("/add-members")}
                  >
                    <i className="mdi mdi-plus" style={{ marginRight: "5px" }} />
                    Add Members
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
                      isAction={true}
                      permEdit={'Edit User'}
                      permDel={'Delete User'}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageMembers;
