import React from "react";
import "./invocing.css";

const Invoicing = () => {
  return (
    <div className="container-fluid">
      <div className=" img-bg2 row m-0 py-4 pb-0 py-lg-5 ">
        <div className="col-md-8  fnt-01 col-lg-8 col-xl-6 m-5   col-sm-6 px-5">
          <h1 className="col-sm-10 col-xl-12 mb-sm-4">
          Invoice Software That Saves You Time
          </h1>
          <p className="text-shadow d-sm-none d-md-block d-none my-3">
          FreshBooks makes small business invoicing and billing so simple, you’ll be amazed at the time you have to focus on doing what you love and how much faster you get paid.


          </p>
          <button className="buton my-sm-1 my-3">Try It Free</button>
          <p className="text-center max-width">
          Try it free for 30 days. No credit card required. Cancel anytime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Invoicing;
