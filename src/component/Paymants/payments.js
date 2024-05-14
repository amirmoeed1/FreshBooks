import React from "react";
import "./payments.css";

const payments = () => {
  return (
    <div className="container-fluid">
      <div className=" img-bg1 row m-0 py-4 pb-0 py-lg-5 ">
        <div className="col-md-8 fnt-01 col-lg-8 col-xl-6 m-5   col-sm-6 px-5">
          <h1 className="col-sm-10 col-xl-12 mb-sm-4">
            Accept Payments Online and Get Paid 2x Faster
          </h1>
          <p className="text-shadow d-sm-none d-md-block d-none my-3">
            FreshBooks Payments make it easier for your clients to pay online,
            which means you get paid twice as fast. What better way to improve
            your cashflow!
          </p>
          <button className="buton my-sm-1 my-3">Try It Free</button>
          <p className="text-center max-width">
            No credit card required. Cancel anytime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default payments;
