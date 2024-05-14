import React, { useState } from "react";
// import "./payments.css";

const Payments1 = () => {
  // State to manage active tab
  const [activeTab, setActiveTab] = useState("online");

  return (
    <div className="container mt-5">
      {/* <div className="col-md-10 col-lg-8 col-xl-6 m-auto text-center"> */}
      {/* <div className="row backgrondImg">
          <h1 className="font-weight-bold mt-5">
            Accept Payments Online and <br /> Get Paid 2x Faster
          </h1>
          <p className="para-01 mt-4">
            FreshBooks Payments make it easier for your clients to pay online,
            which<br/> means you get paid twice as fast. What better way to improve
            your <br />
            cashflow!
          </p> */}
      {/* <button className="btn-01 mt-3">Try It Free</button>
          <p className="para-02">
            No credit card required. Cancel <br />
            anytime.
          </p> */}

      {/* Tab buttons */}
      <div className="row">
        <div className="col">
          <div className="mt-5 col-lg-12 col-sm-12 bg-gradient-dark tabsborder">
            <button
              className={`tab-btn wd-tab1 ${
                activeTab === "online" ? "active" : ""
              }`}
              onClick={() => setActiveTab("online")}
            >
              <h6>FRESHBOOK PAYMENTS</h6>
            </button>
            <button
              className={`tab-btn  ${activeTab === "cards" ? "active" : ""}`}
              onClick={() => setActiveTab("cards")}
            >
              <h6> STRIPE </h6>
            </button>
            <button
              className={`tab-btn  ${activeTab === "ach" ? "active" : ""}`}
              onClick={() => setActiveTab("ach")}
            >
              <h6>PAYPAL </h6>
            </button>
          </div>

          {/* Tab content */}
          <div className="mt-2  border rounded-3 bg-color shadow p-3 mb-5 bg-white ">
            <div className="tabml-1st ">
              {activeTab === "online" && (
                <div>
                  <img className="mb-4" src="tabs1img.svg"></img>
                  <p>Simple pricing with no hidden fees on monthly costs:</p>
                  <h6>Credit: 2.9% + $0.30 per transaction</h6>
                  <img className="mt-4 mb-3" src="tabscredit.svg"></img>
                  <h6>
                    Bank Transfer (ACH): 1% bank transfer fees*{" "}
                    <img src="2ndbanklogo.svg"></img>
                  </h6>
                  <ul className="pt-3 ">
                    <li className="tikmark-img  margin-tab ">
                      {" "}
                      Secure for you and your clients
                    </li>
                    <li className="tikmark-img margin-tab">
                      Accept all major credit cards
                    </li>
                    <li className="tikmark-img  margin-tab">
                      ACH connects to most major banks in the U.S.
                    </li>
                    <li className="tikmark-img   margin-tab">No hidden fees</li>
                  </ul>
                  <p className="mt-4">*ACH Only Available for US Customers</p>
                </div>
              )}
            </div>
            <div className="tabml-1st ">
            {activeTab === "cards" && (
              <div>
              <img className="mb-4" src="stripeimage.svg"></img>
              <p>No setup, monthly or hidden fees:</p>
              <h6>2.9% + $0.30 per transaction on most cards</h6>
              <img className="mt-4 mb-3" src="2ndimage.svg"></img>
              <h6>
                Bank Transfer (ACH): 1% bank transfer fees*{" "}
                <img src="2ndbanklogo.svg"></img>
              </h6>
              <ul className="pt-3 ">
                <li className="tikmark-img  margin-tab ">
                  {" "}
                  Secure for you and your clients
                </li>
                <li className="tikmark-img margin-tab">
                  Accept all major credit cards
                </li>
                <li className="tikmark-img  margin-tab">
                  ACH connects to most major banks in the U.S.
                </li>
                <li className="tikmark-img   margin-tab">No hidden fees</li>
              </ul>
              <p className="mt-4">*ACH Only Available for US Customers</p>
            </div>
            )}
            </div>
            <div className="tabml-1st ">
            {activeTab === "ach" && (
              <div>
              <img className="mb-4" src="paypal.webp"></img>
              <p>Competitive pricing with no hidden fees:</p>
              <h6>2.9% + $0.30 per transaction</h6>
              <ul className="pt-3 ">
                <li className="tikmark-img  margin-tab ">
                  {" "}
                  Secure for you and your clients
                </li>
                <li className="tikmark-img margin-tab">
                  Accept all major credit cards
                </li>
                <li className="tikmark-img  margin-tab">
                  ACH connects to most major banks in the U.S.
                </li>
                <li className="tikmark-img   margin-tab">No hidden fees</li>
              </ul>
              <p className="mt-4">*ACH Only Available for US Customers</p>
            </div>
            )}</div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-">
          <div className="marg-2nd">

          <h2 className="mt-5 pt-5  ">
            <b>More Payment Options<br/> and No Hidden Fees</b>
          </h2>
          <p className="mt-4 font-sz">Providing your clients with multiple ways to pay means you get paid faster. You’ll always know exactly how much money you’re taking in<br/> because FreshBooks Payments, Stripe, and <br/>PayPal pricing is transparent.</p>
          <button className="btn-33 fw-bold mt-3">Try It Free</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments1;
