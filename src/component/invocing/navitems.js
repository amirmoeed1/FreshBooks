import React, { useState, useEffect } from "react";
import "./naveitems.css";
import { Link } from "react-router-dom";


const NavItems = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showMoreFeatures, setShowMoreFeatures] = useState(false); // State to control visibility of more features dropdown

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024); // Adjust breakpoint as needed
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMobileMenuChange = (event) => {
    const selectedPage = event.target.value;
    window.location.href = selectedPage; // Navigate to the selected page
  };

  const toggleMoreFeatures = () => {
    setShowMoreFeatures(!showMoreFeatures);
  };

  return (
    <>
      {isMobile ? (
        <div className="flex-center">
          <select
            className="mobile-dropdown mt-4"
            onChange={handleMobileMenuChange}
          >
           <option value="http://localhost:3000/invoice">Invoicing</option>
          <option value="http://localhost:3000/expenses-and-receipts-tracking">Expenses</option>
          <option value="http://localhost:3000/timesheets-and-time-tracking">Time Tracking</option>
          <option value="http://localhost:3000/bookkeeping">Bookkeeping</option>
          <option value="http://localhost:3000/">Estimates</option>
          <option value="http://localhost:3000/payments">Payments</option>
          <option value="http://localhost:3000/accounting">Accounting</option>
          <option value="" onClick={toggleMoreFeatures}>More Features</option>
        </select>
        </div>
      ) : (
        <div className=" ">
          <ul className="d-flex py-3 pb-4 bg-light text-11 list-unstyled  border-box">
            <li>
              <Link  to={'http://localhost:3000/invoice'} className="p-3 text-decoration-none">
                Invoicing
              </Link>
            </li>
            <li>
              <Link to={'http://localhost:3000/expenses-and-receipts-tracking'} className="p-4 text-decoration-none">
                Expenses
              </Link>
            </li>
            <li>
              <Link to={'/http://localhost:3000/timesheets-and-time-tracking'} className="p-4 text-decoration-none">
                Time Tracking
              </Link>
            </li>
            <li>
              <Link to="http://localhost:3000/bookkeeping" className="p-4 text-decoration-none">
                Bookkeeping
              </Link>
            </li>
            {/* <li>
              <a href="https://www.freshbooks.com/estimating-software" className="p-4 text-decoration-none">
                Estimates
              </a>
            </li> */}
            <li>
              <Link to="http://localhost:3000/payments" className="p-4 text-decoration-none">
                Payments
              </Link>
            </li>
            <li>
              <Link to="http://localhost:3000/accounting" className="p-4 text-decoration-none">
                Accounting
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="p-4 text-decoration-none"
                onClick={toggleMoreFeatures}
              >
                More Features
              </a>
              {showMoreFeatures && (
                <ul className="dropdown-menu">
                  {/* Add additional features here */}
                  <li>
                    <a href="/">Feature 1</a>
                  </li>
                  <li>
                    <a href="/">Feature 2</a>
                  </li>
                  <li>
                    <a href="/">Feature 3</a>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      )}

      <div>
        <p className="text-center pt-4 mt-4 ">
          <b>Excellent</b> <img className="ml-4 " src="star.svg" alt="Star" />{" "}
          <span>
            (Based on <a href="/">4,386 GetApp reviews</a>)
          </span>{" "}
        </p>
      </div>

      <div className="container">
        <div className="row">
          <div className="  col-md-1"></div>
          <div className="col-md-11 text-center md-fs-5 col-sm-9 pt-4 mt-4">
            <h3 className="mt-4 mx-auto col-lg-7  fs-2 col-sm-11">
              <b>Create Professional Looking Invoices in Seconds</b>
            </h3>
            <p className="  mt-4 mx-auto col-lg-7 ">
              You’re the real deal, be sure you look it. FreshBooks makes
              creating professional-looking invoices for your business
              ridiculously easy. With our invoice generator, it’s simple to
              create and customize your invoice, add your logo, and personalize
              your thank you email. Your clients will be wowed.
            </p>
            <button className="btn-33 fw-bold mt-3 mb-5 ">Try It Free</button>
          </div>
          <div className="col-md-3"></div>
          <div className="col-md-6 col-sm-12  ">
            <img src="../invocing/main2nd.png" className="w-100" alt="Second Image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavItems;
