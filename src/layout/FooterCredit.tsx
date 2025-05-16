import React from "react";

const FooterCredit = () => {
  return (
    <div
      style={{
        background: "var(--dark)",
        color: "var(--light)",
        padding: "7px 0px",
        fontSize: 14,
      }}
      className="pt-xl-2 mb-xl-0 pb-xl-1"
    >
      <div className="container">
        <p className="text-center mb-0">
          &copy; Copyright 2023. IN Realtors All Rights Reserved.
          {/* <span style={{float: "right" }}>Powered by <a style={{ color: "wheat", textDecorationLine: "underline"}} href="https://websouls.com/" target='_blank'>Websouls </a></span> */}
        </p>
      </div>
    </div>
  );
};

export default FooterCredit;
