import React from "react";

const AddPropertyBanner = () => {
  return (
    <section
      style={{
        background:
          "linear-gradient(90deg, #F1C66C 26.56%, rgba(254, 223, 131, 0.1) 100%)",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-xl-8 align-self-center">
            <h1 className="text-white">Add your property details</h1>
            <p className="text-white">
              Upload your property and get the best value in market now!
            </p>
          </div>
          <div className="col-md-6 col-xl-3 text-end">
            <img
              src="/assets/img/building.png"
              width={270}
              height={215}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddPropertyBanner;
