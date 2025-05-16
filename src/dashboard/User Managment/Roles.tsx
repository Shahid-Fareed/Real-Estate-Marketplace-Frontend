import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import MyHelmet from "../../components/MyHelmet";
import PageTitle from "../../components/dashboard/PageTitle";
import Table from "../../components/Table/Table";
import Sidebar from "../../components/dashboard/Sidebar";
import PermissionService from "../../services/dashboard/permissionSerice";
import useUserPermissions from "../../hooks/useUserPermissions";

type Role = {
    title: string;
    id: number;
    createdAt: any
}

const Roles = () => {
    const navigate = useNavigate();
    const userPermission = useUserPermissions();
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [data, setData] = useState<any[]>([]);

    const columns = [
        "#",
        "Title",
        "Date Created",
    ];


    let userType = "";
    const authUser = localStorage.getItem("authUser");
    if (authUser) {
        const parsedAuthUser = JSON.parse(authUser);
        if (Array.isArray(parsedAuthUser) && parsedAuthUser.length > 0) {
            userType = parsedAuthUser[0].user_type;
        }
    }

    let userId: number | null = null;
    if (authUser) {
        const parsedAuthUser = JSON.parse(authUser);
        if (Array.isArray(parsedAuthUser) && parsedAuthUser.length > 0) {
            userId = parsedAuthUser[0].id;
        }
    }


    const getRoles = useCallback((): void => {
        let body: null = null;
        if (userType !== "agency") {
            PermissionService.getRole(body, userType).then((res) => {
                let newData: any[] = [];
                const resData = res?.data;
                for (let i = 0; i < resData?.length; i++) {
                    const element: Role = resData[i];

                    let obj = {
                        "#": i + 1,
                        "Title": element?.title,
                        id: element?.id,
                        "Date Created": moment(element?.createdAt).format("DD MMM,YYYY"),
                    };
                    newData.push(obj);
                }
                setData(newData);
            }).catch((err) => {
                console.log("error on get roles")
            })
        }
        if (userType === "agency") {
            PermissionService.getRoleAgency(body, userType, userId || 0).then((res) => {
                let newData: any[] = [];
                const resData = res?.data;
                for (let i = 0; i < resData?.length; i++) {
                    const element: Role = resData[i];

                    let obj = {
                        "#": i + 1,
                        "Title": element?.title,
                        id: element?.id,
                        "Date Created": moment(element?.createdAt).format("DD MMM,YYYY"),
                    };
                    newData.push(obj);
                }
                setData(newData);
            }).catch((err) => {
                console.log("error on get roles")
            })
        }

    }, []);



    useEffect(() => {
        getRoles();
    }, []);

    const handleDelete = (id: number) => {
        let body = null;
        PermissionService.deleteRole(body, id).then((res) => {
            getRoles();
        }).catch((err) => { console.log("Error on deleteing roles") })
    };
    const handleEdit = (id: number) => {
        navigate(`/roles/${id}`);
    };
    return (
        <>
            <MyHelmet title="Roles" body="" />
            <Sidebar />
            <div className="main-content">
                <div className="page-content">
                    <div className="container-fluid">
                        {/* start page title  */}
                        <div className="row">
                            <PageTitle pagename="Roles" />
                            {
                                userPermission?.includes('Add Role') ? <div
                                    className="col-6"
                                    style={{ display: "flex", justifyContent: "flex-end" }}
                                >
                                    <button
                                        type="button"
                                        className="btn btn-primary btn-sm waves-effect waves-light"
                                        style={{ height: "30px" }}
                                        onClick={() => navigate("/add-user-role")}
                                    >
                                        <i className="mdi mdi-plus" style={{ marginRight: "5px" }} />
                                        Add Roles
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
                                            permEdit={'Edit Role'}
                                            permDel={'Delete Role'}
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

export default Roles;
