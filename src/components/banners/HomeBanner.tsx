import React, { useEffect, useState } from "react";
import Autocomplete from "react-google-autocomplete";
import AutocompleteSearch from "../AutocompleteSearch";

const HomeBanner = () => {
  const [buyCheck, setBuyCheck] = useState(true);
  const [renctCheck, setRenctCheck] = useState(false);

  const [search, setSearh] = useState("");

  const handelChange = () => {
    setBuyCheck(!buyCheck);
    setRenctCheck(!renctCheck);
  };

  useEffect(() => {}, []);

  return (
    <>
      <div className="hero banner-image p70-0">
        <div className="container h-100 position-sticky">
          <div className="row h-100 align-items-end">
            <div className="col-lg-8 col-md-10">
              <div className="hero__content">
                <h1 className="font65 text-white">
                  The best place is&nbsp;
                  <span className="d-sm-block">
                    right <span className="hero__italic">here</span>
                  </span>
                </h1>

                <div className="d-sm-flex flex-wrap hero__actions">
                  <div className="mb-2">
                    <button
                      onClick={handelChange}
                      className={
                        buyCheck
                          ? "text-dark bg-white me-sm-3 pset d-block d-sm-inine-block"
                          : "text-white me-sm-3 pset d-block d-sm-inine-block"
                      }
                    >
                      BUY
                    </button>
                  </div>

                  <div>
                    <button
                      onClick={handelChange}
                      className={
                        renctCheck
                          ? "text-dark bg-white pset d-block d-sm-inine-block"
                          : "text-white pset d-block d-sm-inine-block"
                      }
                    >
                      RENT
                    </button>
                  </div>
                </div>

                <AutocompleteSearch />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBanner;
