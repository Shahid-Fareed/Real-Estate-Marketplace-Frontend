import React, { useState, useCallback, useEffect } from "react";
import MyHelmet from "../../components/MyHelmet";
import Sidebar from "../../components/dashboard/Sidebar";
import PageTitle from "../../components/dashboard/PageTitle";
import { useNavigate } from "react-router-dom";
import Table from "../../components/Table/Table";
import PackageServices from "../../services/dashboard/packageServices";
import moment from "moment";
import useUserPermissions from "../../hooks/useUserPermissions";

type Package = {
  name: string;
  price: number;
  super_hot_listing: number;
  verified: number;
  id: number;
  hot_listing: number;
  type: string;
  createdAt: Date;
};

const AllPackages = () => {
  const navigate = useNavigate();
  const userPermission = useUserPermissions();
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [data, setData] = useState<any[]>([]);

  const columns = [
    "#",
    "Package Name",
    "Price",
    "Super Hot Listing",
    "Hot Listing",
    "Type",
    "Verified Listing",
    "Date Created",
  ];

  const getData = useCallback((): void => {
    let body: null = null;

    PackageServices.getAllPackage(body)
      .then((res: { data: Package[] }) => {
        let newData: any[] = [];
        const resData = res?.data;
        for (let i = 0; i < resData?.length; i++) {
          const element: Package = resData[i];
          let obj = {
            "#": i + 1,
            "Package Name": element?.name,
            Price: element?.price,
            "Super Hot Listing": element?.super_hot_listing,
            "Hot Listing": element?.hot_listing,
            "Verified Listing": element?.verified,
            Type: element?.type,
            id: element?.id,
            "Date Created": moment(element?.createdAt).format("DD MMM,YYYY"),
          };
          newData.push(obj);
        }
        setData(newData);
      })
      .catch((error: Error) => console.log(error.message));
  }, []);

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = (id: number) => {
    let body = null;
    PackageServices.deletePackage(body, id)
      .then((res) => {
        getData();
      })
      .catch((err) => {
        console.log("error on delete package");
      });
  };
  const handleEdit = (id: number) => {
    navigate(`/packages/${id}`);
  };

  return (
    <>
      <MyHelmet title="Packages" body="" />
      <Sidebar />
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <PageTitle pagename="Packages" />
              {userPermission?.includes("Add Packages") ? (
                <div
                  className="col-6"
                  style={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <button
                    type="button"
                    className="btn btn-primary btn-sm waves-effect waves-light"
                    style={{ height: "30px" }}
                    onClick={() => navigate("/add-package")}
                  >
                    <i
                      className="mdi mdi-plus"
                      style={{ marginRight: "5px" }}
                    />
                    Add Package
                  </button>
                </div>
              ) : null}

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
                      permEdit={'Edit Packages'}
                      permDel={'Delete Packages'}
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

export default AllPackages;
