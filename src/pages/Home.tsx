import React, { useState, useEffect } from "react";
import HomeHeader from "../layout/HomeHeader";
import HomeBanner from "../components/banners/HomeBanner";
import FindBestUs from "./includes/Home/FindBestUs";
import Residential from "./includes/Home/Residential";
import RentHome from "./includes/Home/RentHome";
import TopAgents from "./includes/Home/TopAgents";
import TopSocities from "./includes/Home/TopSocities";
import PopularCities from "./includes/Home/PopularCities";
import NewUpdate from "./includes/Home/NewUpdate";
import Footer from "../layout/Footer";
import FooterCredit from "../layout/FooterCredit";
import CityServices from "../services/home/citiesServices";

const Home = () => {
  const [allCities, setAllCities] = useState([]);
  const [allRentCities, setRentAllCities] = useState([]);

  const getCities = () => {
    let body = null;
    CityServices.getCities(body, "1", "sell").then((response) => {
      setAllCities(response.data);
    });
  };
  const getRemtCities = () => {
    let body = null;
    CityServices.getCities(body, "1", "rent").then((response) => {
      setRentAllCities(response.data);
    });
  };

  useEffect(() => {
    getCities();
    getRemtCities();
  }, []);

  return (
    <>
      <HomeHeader />
      <HomeBanner />
      <FindBestUs />
      <Residential dataCity={allCities} />
      <RentHome dataCity={allRentCities} />
      <TopAgents />
      <TopSocities />
      <PopularCities />
      <NewUpdate />
      <Footer />
      <FooterCredit />
    </>
  );
};

export default Home;
