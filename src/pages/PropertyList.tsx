import React from "react";
import { useLocation } from "react-router-dom";
import BreadCrumns from "../components/BreadCrumns";
import PropertyFilter from "./includes/Property/PropertyFilter";
import Footer from "../layout/Footer";
import FooterCredit from "../layout/FooterCredit";
import HomeHeader from "../layout/HomeHeader";

const PropertyList = () => {
  const location = useLocation();
  const breadcrumbData = [
    { title: "Home", link: "/" },
    { title: "Property List", link: "#" },
  ];
  return (
    <>
      <HomeHeader />
      <BreadCrumns breadcrumbData={breadcrumbData} />
      <PropertyFilter locationData={location} />
      <Footer />
      <FooterCredit />
    </>
  );
};

export default PropertyList;
