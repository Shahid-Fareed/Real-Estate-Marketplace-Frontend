/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import SectionHeading from "../../../components/Headings/SectionHeading";

const PopularCities = () => {
  const navigate = useNavigate();

  const propertyNavigation = (a: string, s: string, k: string, c: String) => {
    navigate("/property", { state: { ta: a, ts: s, tk: k, tci: c } });
  };

  return (
    <section
      className="looking-properties section p70-0"
      id="looking-properties"
    >
      <div className="container">
        <div className="text-center">
          <SectionHeading f="Looking for properties in popular cities?" />
        </div>

        <div className="pc-h">
          <h4 className="pt-3 pt-lg-4">Houses</h4>
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <ul className="list-unstyled mb-0">
                <li>
                  <a
                    className="cursorPointer"
                    onClick={() =>
                      propertyNavigation("sell", "1", "15", ",Islamabad")
                    }
                  >
                    Houses for sale in Islamabad
                  </a>
                </li>
                <li>
                  <a
                    className="cursorPointer"
                    onClick={() =>
                      propertyNavigation("sell", "1", "15", ",Rawalpindi")
                    }
                  >
                    {" "}
                    Houses for sale in Rawalpindi{" "}
                  </a>
                </li>
                <li>
                  <a
                    className="cursorPointer"
                    onClick={() =>
                      propertyNavigation("sell", "1", "15", ",Lahore")
                    }
                  >
                    {" "}
                    Houses for sale in Lahore{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-sm-6">
              <ul className="list-unstyled mb-0">
                <li>
                  <a
                    className="cursorPointer"
                    onClick={() =>
                      propertyNavigation("sell", "1", "15", ",Karachi")
                    }
                  >
                    {" "}
                    Houses for sale in Karachi{" "}
                  </a>
                </li>
                <li>
                  <a
                    className="cursorPointer"
                    onClick={() =>
                      propertyNavigation("sell", "1", "15", ",Peshawar")
                    }
                  >
                    {" "}
                    Houses for sale in Peshawar{" "}
                  </a>
                </li>
                <li>
                  <a
                    className="cursorPointer"
                    onClick={() =>
                      propertyNavigation("sell", "1", "15", ",Faisalabad")
                    }
                  >
                    {" "}
                    Houses for sale in Faisalabad{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-sm-6">
              <ul className="list-unstyled mb-0">
                <li>
                  <a
                    className="cursorPointer"
                    onClick={() =>
                      propertyNavigation("sell", "1", "15", ",Gujranwala")
                    }
                  >
                    {" "}
                    Houses for sale in Gujranwala{" "}
                  </a>
                </li>
                <li>
                  <a
                    className="cursorPointer"
                    onClick={() =>
                      propertyNavigation("sell", "1", "15", ",Multan")
                    }
                  >
                    {" "}
                    Houses for sale in Multan{" "}
                  </a>
                </li>
                <li>
                  <a
                    className="cursorPointer"
                    onClick={() =>
                      propertyNavigation("sell", "1", "15", ",Hyderabad")
                    }
                  >
                    {" "}
                    Houses for sale in Hyderabad{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-sm-6">
              <ul className="list-unstyled mb-0">
                <li>
                  <a
                    className="cursorPointer"
                    onClick={() =>
                      propertyNavigation("sell", "1", "15", ",Sargodha")
                    }
                  >
                    {" "}
                    Houses for sale in Sargodha{" "}
                  </a>
                </li>
                <li>
                  <a
                    className="cursorPointer"
                    onClick={() =>
                      propertyNavigation("sell", "1", "15", ",Gujrat")
                    }
                  >
                    {" "}
                    Houses for sale in Gujrat{" "}
                  </a>
                </li>
                <li>
                  <a
                    className="cursorPointer"
                    onClick={() =>
                      propertyNavigation("sell", "1", "15", ",Okara")
                    }
                  >
                    {" "}
                    Houses for sale in Okara{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <h4 className="pt-3 pt-lg-4">Plots</h4>
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <ul className="list-unstyled mb-0">
                <li>
                  <a
                    className="cursorPointer"
                    onClick={() =>
                      propertyNavigation("sell", "2", "", ",Islamabad")
                    }
                  >
                    {" "}
                    Plots for sale in Islamabad{" "}
                  </a>
                </li>
                <li>
                  <a
                    className="cursorPointer"
                    onClick={() =>
                      propertyNavigation("sell", "2", "", ",Rawalpindi")
                    }
                  >
                    {" "}
                    Plots for sale in Rawalpindi{" "}
                  </a>
                </li>
                <li>
                  <a
                    className="cursorPointer"
                    onClick={() =>
                      propertyNavigation("sell", "2", "", ",Lahore")
                    }
                  >
                    {" "}
                    Plots for sale in Lahore{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-sm-6">
              <ul className="list-unstyled mb-0">
                <li>
                  <a
                    className="cursorPointer"
                    onClick={() =>
                      propertyNavigation("sell", "2", "", ",Karachi")
                    }
                  >
                    {" "}
                    Plots for sale in Karachi{" "}
                  </a>
                </li>
                <li>
                  <a
                    className="cursorPointer"
                    onClick={() =>
                      propertyNavigation("sell", "2", "", ",Peshawar")
                    }
                  >
                    {" "}
                    Plots for sale in Peshawar{" "}
                  </a>
                </li>
                <li>
                  <a
                    className="cursorPointer"
                    onClick={() =>
                      propertyNavigation("sell", "2", "", ",Faisalabad")
                    }
                  >
                    {" "}
                    Plots for sale in Faisalabad{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-sm-6">
              <ul className="list-unstyled mb-0">
                <li>
                  <a
                    className="cursorPointer"
                    onClick={() =>
                      propertyNavigation("sell", "2", "", ",Gujranwala")
                    }
                  >
                    {" "}
                    Plots for sale in Gujranwala{" "}
                  </a>
                </li>
                <li>
                  <a
                    className="cursorPointer"
                    onClick={() =>
                      propertyNavigation("sell", "2", "", ",Multan")
                    }
                  >
                    {" "}
                    Plots for sale in Multan{" "}
                  </a>
                </li>
                <li>
                  <a
                    className="cursorPointer"
                    onClick={() =>
                      propertyNavigation("sell", "2", "", ",Hyderabad")
                    }
                  >
                    {" "}
                    Plots for sale in Hyderabad{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-sm-6">
              <ul className="list-unstyled mb-0">
                <li>
                  <a
                    className="cursorPointer"
                    onClick={() =>
                      propertyNavigation("sell", "2", "", ",Sargodha")
                    }
                  >
                    {" "}
                    Plots for sale in Sargodha{" "}
                  </a>
                </li>
                <li>
                  <a
                    className="cursorPointer"
                    onClick={() =>
                      propertyNavigation("sell", "2", "", ",Gujrat")
                    }
                  >
                    {" "}
                    Plots for sale in Gujrat{" "}
                  </a>
                </li>
                <li>
                  <a
                    className="cursorPointer"
                    onClick={() =>
                      propertyNavigation("sell", "2", "", ",Okara")
                    }
                  >
                    {" "}
                    Plots for sale in Okara{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <h4 className="pt-3 pt-lg-4">Flats & Apartments</h4>
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <ul className="list-unstyled mb-0">
                <li>
                  <a
                    className="cursorPointer"
                    onClick={() =>
                      propertyNavigation("sell", "1", "16", ",Isalabad")
                    }
                  >
                    {" "}
                    Flats for sale in Islamabad{" "}
                  </a>
                </li>
                <li>
                  <a
                    className="cursorPointer"
                    onClick={() =>
                      propertyNavigation("sell", "1", "16", ",Rawalpindi")
                    }
                  >
                    {" "}
                    Flats for sale in Rawalpindi{" "}
                  </a>
                </li>
                <li>
                  <a
                    className="cursorPointer"
                    onClick={() =>
                      propertyNavigation("sell", "1", "16", ",Lahore")
                    }
                  >
                    {" "}
                    Flats for sale in Lahore{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-sm-6">
              <ul className="list-unstyled mb-0">
                <li>
                  <a
                    className="cursorPointer"
                    onClick={() =>
                      propertyNavigation("sell", "1", "16", ",Karachi")
                    }
                  >
                    {" "}
                    Flats for sale in Karachi{" "}
                  </a>
                </li>
                <li>
                  <a
                    className="cursorPointer"
                    onClick={() =>
                      propertyNavigation("sell", "1", "16", ",Peshawar")
                    }
                  >
                    {" "}
                    Flats for sale in Peshawar{" "}
                  </a>
                </li>
                <li>
                  <a
                    className="cursorPointer"
                    onClick={() =>
                      propertyNavigation("sell", "1", "16", ",Faisalabad")
                    }
                  >
                    {" "}
                    Flats for sale in Faisalabad{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-sm-6">
              <ul className="list-unstyled mb-0">
                <li>
                  <a
                    className="cursorPointer"
                    onClick={() =>
                      propertyNavigation("sell", "1", "16", ",Gujranwala")
                    }
                  >
                    {" "}
                    Flats for sale in Gujranwala{" "}
                  </a>
                </li>
                <li>
                  <a
                    className="cursorPointer"
                    onClick={() =>
                      propertyNavigation("sell", "1", "16", ",Multan")
                    }
                  >
                    {" "}
                    Flats for sale in Multan{" "}
                  </a>
                </li>
                <li>
                  <a
                    className="cursorPointer"
                    onClick={() =>
                      propertyNavigation("sell", "1", "16", ",Hyderabad")
                    }
                  >
                    {" "}
                    Flats for sale in Hyderabad{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-sm-6">
              <ul className="list-unstyled mb-0">
                <li>
                  <a
                    className="cursorPointer"
                    onClick={() =>
                      propertyNavigation("sell", "1", "16", ",Sargodha")
                    }
                  >
                    {" "}
                    Flats for sale in Sargodha{" "}
                  </a>
                </li>
                <li>
                  <a
                    className="cursorPointer"
                    onClick={() =>
                      propertyNavigation("sell", "1", "16", ",Gujrat")
                    }
                  >
                    {" "}
                    Flats for sale in Gujrat{" "}
                  </a>
                </li>
                <li>
                  <a
                    className="cursorPointer"
                    onClick={() =>
                      propertyNavigation("sell", "1", "16", ",Okara")
                    }
                  >
                    {" "}
                    Flats for sale in Okara{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularCities;
