import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/dashboard/Sidebar";
import Footer from "../../components/dashboard/Footer";
const index = () => {
  return (
    <>
        <Sidebar />
        <Outlet />
        <Footer />
    </>
  )
}

export default index