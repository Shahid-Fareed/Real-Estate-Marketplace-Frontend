import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import InquriesServices from '../../services/dashboard/InquriesServices';

interface DataItem {
  is_read: number;
}

const Header = ({ handleChange }: any) => {

  const navigate = useNavigate();

  const [countNotifications, setCountNotifications] = useState(0);
  const Logout = (e: any) => {
    e.preventDefault();
    navigate("/login");
    localStorage.clear();
  };

  let userType = "";
  const authData = localStorage.getItem("authUser");
  if (authData) {
    const parsedUser = JSON.parse(authData);
    userType = parsedUser[0]?.user_type || null;
  }


  let userName = "";
  const authDataUser = localStorage.getItem("authUser");
  if (authDataUser) {
    const parsedUser = JSON.parse(authDataUser);
    userName = parsedUser[0]?.full_name || null;
  }

  const getAdminInquries = () => {
    let body = null;
    InquriesServices.adminInquries(body).then((res) => {
      const data: DataItem[] = res.data;
      const count = data.filter((item: DataItem) => item.is_read === 0).length;
      setCountNotifications(count)
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
      const data: DataItem[] = res.data;
      const count = data.filter((item: DataItem) => item.is_read === 0).length;
      setCountNotifications(count)
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

  return (
    <>
      <header id="page-topbar">
        <div className="navbar-header">
          <div className="d-flex">
            {/* LOGO */}
            <div className="navbar-brand-box">
              <Link to="#" className="logo logo-dark">
                <span className="logo-sm">
                  <img src="/assets/images/logo1.png" alt="" height={22} />
                </span>
                <span className="logo-lg">
                  <img src="/assets/images/logo1.png" alt="" height={20} />
                </span>
              </Link>
              <Link to="#" className="logo logo-light">
                <span className="logo-sm">
                  <img src="/assets/images/logo1.png" alt="" height={22} />
                </span>
                <span className="logo-lg">
                  <img src="/assets/images/logo1.png" alt="" height={20} />
                </span>
              </Link>
            </div>
            <button
              type="button"
              className="btn btn-sm px-3 font-size-16 header-item waves-effect vertical-menu-btn"
              onClick={handleChange}
            >
              <i className="fa fa-fw fa-bars" />
            </button>
          </div>
          <div className="d-flex">
            <div className="dropdown d-inline-block">
              {/* Notification */}
              <button
                onClick={() => navigate("/inbox")}
                className="btn header-item noti-icon waves-effect"
              >
                <i className="uil-bell"></i>
                <span className="badge bg-danger rounded-pill">{countNotifications}</span>
              </button>
              {/* Notification */}
              <button
                type="button"
                className="btn header-item waves-effect"
                id="page-header-user-dropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  className="rounded-circle header-profile-user"
                  src="/assets/assets/images/users/placeholder.png"
                  alt="Zanaen"
                />
                <span className="d-none d-xl-inline-block ms-1 fw-medium font-size-15">
                  {userName}
                </span>
                <i className="uil-angle-down d-none d-xl-inline-block font-size-15" />
              </button>
              <div className="dropdown-menu dropdown-menu-end">
                <Link
                  className="dropdown-item"
                  to="#"
                  onClick={(e) => Logout(e)}
                >
                  <i className="uil uil-sign-out-alt font-size-18 align-middle me-1 text-muted" />
                  <span className="align-middle">Sign out</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header