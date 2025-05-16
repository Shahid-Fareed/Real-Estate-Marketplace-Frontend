import React, { useState, useEffect, useCallback } from 'react'
import MyHelmet from '../../components/MyHelmet'
import Sidebar from '../../components/dashboard/Sidebar'
import PageTitle from '../../components/dashboard/PageTitle'
import UsersApi from "../../services/dashboard/users"
import { useNavigate } from 'react-router-dom'
import PermissionService from '../../services/dashboard/permissionSerice'
type Role = {
  title: string;
  id: number;
}
const AddMember = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [selectedRole, setSelectedRole] = useState("");

  const [roles, setRoles] = useState([]);


  let userType = "";
  const authUser = localStorage.getItem("authUser");
  if (authUser) {
    const parsedAuthUser = JSON.parse(authUser);
    if (Array.isArray(parsedAuthUser) && parsedAuthUser.length > 0) {
      userType = parsedAuthUser[0].user_type;
    }
  }

  let userId: any = null;
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
        const data = res.data;
        setRoles(data);
      }).catch((err) => {
        console.log("error on get roles")
      })
    }
    if (userType === "agency") {
      PermissionService.getRoleAgency(body, userType, userId || 0).then((res) => {
        const data = res.data;
        setRoles(data);

      }).catch((err) => {
        console.log("error on get roles")
      })
    }

  }, []);


  useEffect(() => {
    getRoles();
  }, [])

  const handelSubmit = (e: any) => {
    e.preventDefault();
    var formdata = new FormData();
    formdata.append("full_name", fullname);
    formdata.append("email", email);
    formdata.append("password", password);
    formdata.append("mobile_number", phone);
    formdata.append("user_type", userType);
    formdata.append("parent_id", userId);
    formdata.append("role_id", selectedRole);
    UsersApi.createUser(formdata).then((res) => {
      console.log("res of creating user: ", res);
      navigate('/manage-members')
    }).catch((err) => { console.log("Error on the creating member") })
  }


  return (
    <>
      <MyHelmet title="Add Member" body="" />
      <Sidebar />
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            {/* <!-- start page title --> */}
            <div className="row">
              <PageTitle pagename="Add Member" />
            </div>

            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label" htmlFor="formrow-fullname-input">
                          Full Name
                        </label>
                        <input
                          value={fullname}
                          onChange={(e) => setFullname(e.target.value)}
                          type="text"
                          className="form-control"
                          id="formrow-fullname-input"
                          placeholder="Full Name"

                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label" htmlFor="formrow-email-input">
                          Email
                        </label>
                        <input
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          type="email"
                          className="form-control"
                          id="formrow-eil-input"
                          placeholder="Email"

                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label" htmlFor="formrow-phone-input">
                          Phone Number
                        </label>
                        <input
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          type="phone"
                          maxLength={11}
                          className="form-control"
                          id="formrow-phone-input"
                          placeholder="Phone Number"

                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label" htmlFor="formrow-pass-input">
                          Password
                        </label>
                        <input
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          type="password"
                          className="form-control"
                          id="formrow-pass-input"
                          placeholder="Password"

                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label" htmlFor="formrow-phone-input">
                          Select Role
                        </label>
                        <select value={selectedRole} onChange={(e) => setSelectedRole(e.target.value)} className="form-select">
                          <option value="">Please Select</option>
                          {
                            roles.map((role: Role) => <option value={role.id}>{role.title}</option>)
                          }
                        </select>

                      </div>
                    </div>

                  </div>
                  <div className="col-12 d-flex flex-sm-row flex-column justify-content-end">

                    <button onClick={(e) => handelSubmit(e)} className="btn btn-primary glow ">
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddMember