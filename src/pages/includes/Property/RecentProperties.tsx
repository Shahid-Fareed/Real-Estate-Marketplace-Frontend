import React, { useState } from "react";
type recentProt = {
  id: number;
  img: string;
  Address: string;
  price: string;
  bed: string;
  bath: string;
  garage: string;
};

const RecentProperties = () => {
  const [properties, setProperties] = useState<recentProt[]>([]);
  return (
    <>
      <section
        style={{ background: "#f5f5f5" }}
        className="mt-xl-0 pt-xl-5 pt-lg-5 pt-md-4 pt-sm-4 pt-3 filter-pro"
      >
        <div className="container">
          <div className="row pb-xl-4 pb-lg-4 pb-md-4 pb-sm-4 pb-4">
            <div className="col-md-6 col-xl-6 align-self-center">
              <h1
                className="d-xl-flex justify-content-xl-start"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 30,
                  textAlign: "left",
                }}
              >
                Residential Properties for Rent in Bahria Town, Karachi
              </h1>
            </div>
            <div className="col-md-6 col-lg-3 col-xl-3 align-self-center">
              <p
                className="text-start"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                (1000 properties available)
              </p>
            </div>
            <div className="col-md-6 col-lg-3 col-xl-3 align-self-center text-end">
              <select
                className="form-select"
                style={{
                  borderRadius: 5,
                  padding: 14,
                  fontFamily: "Inter, sans-serif",
                }}
              >
                <option value="low-high">Price - Low to High</option>
                <option value="high-low">Price - High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "#f5f5f5" }} className="pt-xl-4">
        <div className="container">
          <div className="row">
            {properties.map((a) => (
              <div key={a.id} className="col-md-3">
                <div className="text-center">
                  <img className="img-fluid" src={`${a.img}`} alt="" />
                  <div className="pt-2">
                    <div className="d-flex">
                      <p
                        className="text-start mb-xl-0 color-1"
                        style={{
                          fontFamily: '"Familjen Grotesk", sans-serif',
                          fontWeight: 700,
                        }}
                      >
                        Pkr
                      </p>
                      <p
                        className="text-start mb-xl-0 color-1"
                        style={{ fontWeight: 700, paddingLeft: 3 }}
                      >
                        {a.price}
                      </p>
                    </div>
                    <p className="mb-xl-0" style={{ textAlign: "left" }}>
                      <span
                        style={{ color: "rgba(0, 0, 0, 0.9)", fontWeight: 700 }}
                      >
                        {a.Address}
                      </span>
                      <br />
                    </p>
                    <ul className="list-inline text-start mt-xl-0 pt-xl-0">
                      <li className="list-inline-item pe-xl-1 me-xl-3">
                        <img
                          className="img-fluid"
                          src="assets/img/bedIcon.png"
                          width={26}
                          height={31}
                          alt=""
                        />
                        {a.bed}
                      </li>
                      <li className="list-inline-item pe-xl-1 me-xl-4">
                        <img
                          className="img-fluid"
                          src="assets/img/BathIcon.png"
                          width={26}
                          height={31}
                          alt=""
                        />
                        {a.bath}
                      </li>
                      <li className="list-inline-item me-xl-0 pe-xl-1">
                        <img
                          className="img-fluid"
                          src="assets/img/GarageIcon.png"
                          width={20}
                          height={20}
                          alt=""
                        />
                        {a.garage}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default RecentProperties;
