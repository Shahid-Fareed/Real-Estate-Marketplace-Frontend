import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import AgencyBanner from "../components/banners/AgencyBanner";
import AboutAgency from "./includes/Agency/AboutAgency";
import AgencyStaff from "./includes/Agency/AgencyStaff";
import Footer from "../layout/Footer";
import RecentProperties from "./includes/Agency/RecentProperties";
import BreadCrumns from "../components/BreadCrumns";
import FooterCredit from "../layout/FooterCredit";
import HomeHeader from "../layout/HomeHeader";

import AgencyService from "../services/home/agencyService";

const Agency = () => {
  const location = useLocation();

  const [agencyId, setAgencyId] = useState();
  const [agencyDetails, setAgencyDetails] = useState([]);
  const [agencyProperties, setAgencyProperties] = useState([]);
  const [agentProperyCount, setAgentProperiesCount] = useState(0);

  const breadcrumbData = [
    { title: "Home", link: "/" },
    { title: "Agency Profile", link: "#" },
  ];

  const GetAgencyDetails = (id: number) => {
    let body = null;
    AgencyService.getAgencyDetail(body, id).then((res) => {
      const data = res.data[0];
      setAgencyDetails(data);
    });
  };

  const GetAgencyProperties = (id: number) => {
    let body = null;
    AgencyService.getAgencyRecentProperty(body, id).then((res) => {
      const data = res.data;
      setAgencyProperties(data);
    });
  };

  const GetAgencyPropertiesCount = (id: number) => {
    let body = null;
    AgencyService.getAgencyPropertyCount(body, id).then((res) => {
      const data = res.data;
      setAgentProperiesCount(data);
    });
  };

  useEffect(() => {
    const states = location.state;
    const statesId = states.id;
    setAgencyId(statesId);

    GetAgencyDetails(statesId);
    GetAgencyProperties(statesId);
    GetAgencyPropertiesCount(statesId);
  }, []);

  return (
    <>
      <HomeHeader />
      <BreadCrumns breadcrumbData={breadcrumbData} />
      <AgencyBanner
        agencyDetails={agencyDetails}
        agentProperyCount={agentProperyCount}
      />
      <AboutAgency agencyDetails={agencyDetails} agencyId={agencyId} />
      <AgencyStaff agencyDetails={agencyDetails} />
      <RecentProperties
        agencyDetails={agencyDetails}
        agencyProperties={agencyProperties}
      />
      <Footer />
      <FooterCredit />
    </>
  );
};

export default Agency;
