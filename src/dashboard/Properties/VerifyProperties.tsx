import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import MyHelmet from "../../components/MyHelmet";
import PageTitle from "../../components/dashboard/PageTitle";
import Table from "../../components/Table/Table";
import Sidebar from "../../components/dashboard/Sidebar";
import Footer from "../../components/dashboard/Footer";
import propertiesDashService from "../../services/dashboard/propertiesDashService";


type UserQu = {
    verfied_listing: number,
    hot_listing: number,
    super_hot_listing: number,
}


const VerifyProperties = () => {
    const navigate = useNavigate();


    const [itemsPerPage, setItemsPerPage] = useState(10);


    const [data, setData] = useState<any[]>([]);


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

    const onChangePropertyverify = (e: any, pid: number) => {
        propertiesDashService.updatePropertyVerify(null, pid, e.target.value).then((res) => {
            getProperties();
        }).catch((err) => {
            console.log("Error on api verifiong")
        })
    }

    const getProperties = () => {
        let body = null;
        propertiesDashService.allPendingVerifiedProperties(body).then((res) => {
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
                    Status: <>
                        <select
                            disabled={element?.Status === "verfied"}
                            style={{ borderRadius: 20 }}
                            className="form-select"
                            value={element.status}
                            onChange={(e) =>
                                onChangePropertyverify(e, element.id)
                            }
                        >
                            <option value="pending">Pending</option>
                            <option value="verfied">verfied</option>
                            <option value="rejected">Rejected</option>
                        </select>
                    </>

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

export default VerifyProperties;
