import React from "react";
import "./navbar.modules.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid color-1 ">
        <div className="row ">
          <div className="col-md-5  mt-5 ">
            <div className="dropdown  mx-auto   col-3  " id="dropdownWrapper">
              <button
                id="dropdownToggle"
                type="button"
                style={{ textAlign: "left" }}
                className=" btn m-5    dropdown-toggle "
              >
                Bookkeeping
              </button>
              <div
                className="dropdown-menu position-absolute   "
                aria-labelledby="dropdownToggle"
              >
                <div className="row ">
                  <div className="col-md-3">
                    <ul className="dropdown-item-list  ">
                      <li>
                        <Link to={'/accounting'} className="dropdown-item" href="#">
                          Accounting
                        </Link>
                      </li>
                      <li>
                        <Link to={'/bookkeeping'} className="dropdown-item" href="#">
                          Bookkeeping
                        </Link>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Estimates
                        </a>
                      </li>
                      <li>
                        <Link to={'/invoice'} className="dropdown-item" href="#">
                          Invoicing
                        </Link>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Mobile
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Projects{" "}
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          {" "}
                          Reporting
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-3">
                    <ul className="dropdown-item-list">
                      <li>
                        <a className="dropdown-item" href="#">
                          AppStore
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Clients
                        </a>
                      </li>
                      <li>
                        <Link to={'/expenses-and-receipts-tracking'} className="dropdown-item" href="#">
                          Expenses
                        </Link>
                      </li>
                      <li>
                        <Link to={'/mileage-tracking-app'} className="dropdown-item" href="#">
                          Mileage tracking
                        </Link>
                      </li>
                      <li>
                        <Link to={'/payments'} className="dropdown-item" href="#">
                          Paymants
                        </Link>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Proposals
                        </a>
                      </li>
                      <li>
                        <Link to={'/timesheets-and-time-tracking'} className="dropdown-item" href="#">
                          Time tracking
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-10  text-center ">
              <h1 className="ms-5  fw-bold ">
                Protect Your Profits and Your Time With Bookkeeping Services
              </h1>
            </div>
            <div>
              <p className="text-center pt-4 mt-4 ">
                <b>Excellent</b>{" "}
                <img className="ml-4 " src="/bookkeeping/yellow.svg" alt="Star" />{" "}
                <span>
                  (Based on <a href="/">4,380 GetApp reviews</a>)
                </span>{" "}
              </p>
            </div>

            <button className="btn-33 fw-bold mt-3 pt-3 d-grid gap-2 col-6 mx-auto    ">
              Try It Free
            </button>
            <p className="text-center mt-2  fs-6">
              Get 20% off Bench for your first 6 months
            </p>
          </div>
          <div className="col-xl-9 col-lg-11  mt-5 rounded mx-auto d-block ">
            <img className="w-100  " src="/bookkeeping/nave1stimg.png"></img>
          </div>
          {/* 1st part */}
          <div className="row">
            <div className="col-md-8 ">
              <img
                className="col-md-1 img-back-1 text-center "
                src="/bookkeeping/thumbimg.svg"
              ></img>
              <div className="img-back-1 col-md-8 col-sm-6 fs-5 ">
                <p>
                  Bench saves me at least two to four hours per month, which
                  translates to between $3,600 to $7,200 worth of my time back
                  to focus on building the business.
                  <p className="col-xl-9 fs-6 col-md-8 sm-mt-3 m-parasm">
                    KAHL ORR <br />
                    FOUNDER, RISE MARKETING AGENCY PHILADELPHIA, PA
                  </p>
                </p>
              </div>
            </div>
            <div className="col-md-3 m-3 media-screen ">
              <img className="w-100" src="/bookkeeping/rise.webp"></img>
            </div>
          </div>
        </div>
      </div>
      {/* 2nd part */}

      <div className="row m-0 text-center">
        <div className="col-lg-4 col-md-3 col-sm-3"></div>
        <div className="col-md-5 mt-4 pt-4   col-sm-8 ">
          <h1 className="col-md-10 fs-2 ms-3">Expert Bookkeeping Services and Tax Prep</h1>
          <p className="fs-6 col-md-12 mb-4 pb-2">
            Bench provides bookkeeping services and tax filing designed for
            small businesses. When combined with FreshBooks, you’ve got a
            time-saving financial solution your business can count on.
          </p>
          <button class="btn btn-cta-green px-5 py-3 font-weight-medium ">
            Talk to a Specialist
          </button>
        </div>
      </div>
      <div className="col-lg-3 col-md-3 col-sm-3"></div>
      {/* 3rd part */}
      <div className="container">
        <div className="row m-0 mt-5 pt-5">
          <div className="col-md-5">
            <h2>Workflows to Keep Finances Flowing</h2>
            <p className="fs-6">
              Bench online bookkeeping services connect you with real humans
              (your team of bookkeepers). These small business experts import
              bank statements, prepare monthly financial statements, and
              reconcile accounts.
            </p>
            <button class="btn btn-cta-green px-5 py-3 mb-ms-5  ">
              Talk to a Specialist
            </button>
          </div>
          <div className="col-md-6 mt-3   ">
            <img className="w-100" src="/bookkeeping/bodyimg.png"></img>
          </div>
        </div>
      </div>
      {/* 4th part */}
      <div className="row m-0 mt-5 mx-auto pt-5 color-3">
        <div className="col-md-5 col-sm-12 text-sm-center mt-5">
          <h2>Your Very Own Dedicated Bookkeeper</h2>
          <p className="fs-6 col-sm-8 col-md-11  text-size-1 ms-sm-5 ps-sm-5 mb-sm-5   ">
            Bench online bookkeeping services connect you with real humans (your
            team of bookkeepers). These small business experts import bank
            statements, prepare monthly financial statements, and reconcile
            accounts.
          </p>
          <button class="btn btn-cta-green px-5 py-3 font-weight-medium ">
            Talk to a Specialist
          </button>
        </div>
        <div className="col-md-6 mt-5  ">
          <img className="w-100" src="/bookkeeping/body2nd.png"></img>
        </div>
      </div>
      {/* 5th part */}
      <div className="container">
        <div className="row m-0 mt-5 pt-5  ">
          <div className="col-md-6   mt-5">
            <h1 className="col-md-11 col-sm-12 text-sm-center">
              Tax Season, Minus the Stress
            </h1>
            <p className="fs-6 mb-4 mt-3 ">
              FreshBooks tracks every dollar in, and Bench handles bookkeeping
              and tax prep…easy, right? Stress-free tax services and unlimited
              tax advisory keeps small businesses 100% compliant at tax time and
              year-round.
            </p>
            <button class="btn btn-cta-green  py-3 d-grid mx-auto mt-4 font-weight-medium ">
              Talk to a Specialist
            </button>
          </div>
          <div className="col-md-6 mt-5   ">
            <img className="w-100  " src="/bookkeeping/body3rd.webp"></img>
          </div>
        </div>
        </div>
        {/* 6th part */}
        <div className="row m-0 mt-5  pt-5 mx-auto color-3">
          <div className="col-md-6 text-center text-sm-left col-sm-12  mt-5">
            <h2>Know Your Business, Grow Your Business</h2>
            <p className="fs-6 col-sm- col-md-  ms-sm-5   mb-sm-5 text-size-1 ">
              FreshBooks accounting software and Bench virtual bookkeeping
              services ensure your books are up to date and give you a
              transparent view of your business’s health—making it easy to make
              smart financial decisions no matter what stage your business is
              at.
            </p>
            <button class="btn btn-cta-green px-5 py-3 font-weight-medium ">
              Talk to a Specialist
            </button>
          </div>
          <div className="col-md-6 mt-5 ms- ">
            <img className="w-100" src="/bookkeeping/4thimg.png"></img>
          </div>
        </div>
        {/* 7th part */}
        <div className="container">
          <div className="row m-0 mt-5 pt-5  ">
            <div className="col-md-6 ">
              <h1 className="col-md-11 col-sm-12 ">
                Are You an Accountant or Bookkeeper?
              </h1>
              <p className="fs-5 mb-4 mt-3 ">
                FreshBooks is built for small business owners, so (as an
                accountant, bookkeeper, or tax professional) you and your
                clients can work better together. <b>The FreshBooks Accounting
                Partner Program </b>lets you do just that.
              </p>
              <a href="">Learn More</a>
            </div>
            <div className="col-md-6 mt-5   ">
              <img
                className="w-100  "
                src="/bookkeeping/lastimg.png"
              ></img>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
