import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MyHelmet from "../../components/MyHelmet";
import Sidebar from "../../components/dashboard/Sidebar";
import PageTitle from "../../components/dashboard/PageTitle";

import PermissionService from "../../services/dashboard/permissionSerice";

interface Permission {
  id: string;
  name: string;
}


const EditRole: React.FC = () => {
  const navigate = useNavigate();
  const params = useParams();
  const paramId = parseInt(params?.id || "");
  const [roleName, setRoleName] = useState("");
  const [allPermissions, setAllPermissions] = useState<Permission[]>([]);
  const [readPermssion, setReadPermissions] = useState<Permission[]>([]);
  const [writePermissions, setWritePermissions] = useState<Permission[]>([]);
  const [editPermissions, setEditPermissions] = useState<Permission[]>([]);
  const [deletePermissions, setDeletePermissions] = useState<Permission[]>([]);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);


  let userType = "";
  const authUser = localStorage.getItem("authUser");
  if (authUser) {
    const parsedAuthUser = JSON.parse(authUser);
    if (Array.isArray(parsedAuthUser) && parsedAuthUser.length > 0) {
      userType = parsedAuthUser[0].user_type;
    }
  }

  const getPermissions = () => {
    let body = null;
    PermissionService.allPermission(body, userType)
      .then((res) => {
        const data = res.data;
        setAllPermissions(data);
        setReadPermissions(data.Read);
        setWritePermissions(data.Write);
        setEditPermissions(data.Edit);
        setDeletePermissions(data.Delete);
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  };

  const getUserDetails = () => {
    let body = null;
    PermissionService.getDetailRole(body, paramId).then((res) => {
      const data = res.data;
      setRoleName(data.title);
      setSelectedIds(data.permission);
    }).catch((err) => { console.log("Error on the fetcing role details") })
  }

  useEffect(() => {
    getUserDetails();
    getPermissions();
  }, []);

  const handleSelection = (id: string) => {
    setSelectedIds((prevIds) => {
      if (prevIds.includes(id)) {
        return prevIds.filter((prevId) => prevId !== id);
      } else {
        return [...prevIds, id];
      }
    });
  };

  const handelSubmit = (e: any) => {
  
    e.preventDefault();
    let body = {
      "title": roleName,
      "permission": selectedIds,
      "type": userType
    }
    PermissionService.editRole(body,paramId).then((res) => {
      navigate('/roles');
    }).catch((err) => {
      console.log("errorn on createing roles")
    })
  }

  const handelReset = (e: any) => {
    e.preventDefault();
    setSelectedIds([]);
    setRoleName("");
  }

  return (
    <>
      <MyHelmet title="Edit Role" body="" />
      <Sidebar />
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <PageTitle pagename="Edit Role" />
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-body">
                    <div className="mb-3">
                      <div className="row">
                        <div className="col-6">
                          <label className="form-label" htmlFor="role">
                            Role
                          </label>
                          <input
                            value={roleName}
                            onChange={(e) => setRoleName(e.target.value)}
                            type="text"
                            className="form-control"
                            id="role"
                            placeholder="Role"
                          />
                        </div>
                      </div>
                      <div className="col-12 mt-3 mb-3">
                        <div className="table-responsive">
                          <table className="table mb-0 table-striped">
                            <thead>
                              <tr className="btn-primary">
                                <th>Read</th>
                                <th>Write</th>
                                <th>Edit</th>
                                <th>Delete</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="tableset">
                                  {readPermssion.map((read) => (
                                    <div
                                      className="form-check mb-3"
                                      key={read.id}
                                    >
                                      <input
                                        className="form-check-input"
                                        type="radio"
                                        id={read.id}
                                        name={read.name}
                                        value={read.id}
                                        checked={selectedIds.includes(read.id)}
                                        onChange={() =>
                                          handleSelection(read.id)
                                        }
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor={read.name}
                                        data-value={read.id}
                                      >
                                        {read.name}
                                      </label>
                                    </div>
                                  ))}
                                </td>
                                <td className="tableset">
                                  {writePermissions.map((write) => (
                                    <div
                                      className="form-check mb-3"
                                      key={write.id}
                                    >
                                      <input
                                        className="form-check-input"
                                        type="radio"
                                        id={write.id}
                                        name={write.name}
                                        value={write.id}
                                        checked={selectedIds.includes(
                                          write.id
                                        )}
                                        onChange={() =>
                                          handleSelection(write.id)
                                        }
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor={write.name}
                                        data-value={write.id}
                                      >
                                        {write.name}
                                      </label>
                                    </div>
                                  ))}
                                </td>
                                <td className="tableset">
                                  {editPermissions.map((edit) => (
                                    <div
                                      className="form-check mb-3"
                                      key={edit.id}
                                    >
                                      <input
                                        className="form-check-input"
                                        type="radio"
                                        id={edit.id}
                                        name={edit.name}
                                        value={edit.id}
                                        checked={selectedIds.includes(edit.id)}
                                        onChange={() =>
                                          handleSelection(edit.id)
                                        }
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor={edit.name}
                                        data-value={edit.id}
                                      >
                                        {edit.name}
                                      </label>
                                    </div>
                                  ))}
                                </td>
                                <td className="tableset">
                                  {deletePermissions.map((del) => (
                                    <div
                                      className="form-check mb-3"
                                      key={del.id}
                                    >
                                      <input
                                        className="form-check-input"
                                        type="radio"
                                        id={del.id}
                                        name={del.name}
                                        value={del.id}
                                        checked={selectedIds.includes(del.id)}
                                        onChange={() =>
                                          handleSelection(del.id)
                                        }
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor={del.name}
                                        data-value={del.id}
                                      >
                                        {del.name}
                                      </label>
                                    </div>
                                  ))}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="col-12 d-flex flex-sm-row flex-column justify-content-end">
                      
                        <button onClick={(e) => handelSubmit(e)} className="btn btn-primary glow ">
                          Update changes
                        </button>
                      </div>
                    </div>
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

export default EditRole;
