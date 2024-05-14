import React from "react";
import "./body.css";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";


const Body = () => {
  return (
    <>
      
     
    

      {/* sulman */}
      <div className="main1 pt-5   ">
        {/* <img className="img" src="../asserts/home-hero-q1-s2-2024-scaled.webp" alt="" /> */}
        <div className="mid1 ">
          <h1 className="span1">
            Accounting Software Built for Business Owners and <p>Accountants</p>
          </h1>
          <p className="text-center">
            <p className="text-white ppf my-5 fw-4 fs-6 ">
              Excellent
              <img
                className="text-white"
                src="../asserts/star-fill.svg"
                alt=""
              />
              <img
                className="text-white"
                src="../asserts/star-fill.svg"
                alt=""
              />
              <img
                className="text-white"
                src="../asserts/star-fill.svg"
                alt=""
              />
              <img
                className="text-white"
                src="../asserts/star-fill.svg"
                alt=""
              />
              <img
                className="text-white"
                src="../asserts/star-half.svg"
                alt=""
              />
              ( based on
              <Link className="text-light" to={"/someone"}>
                4,377GetApp reviews
              </Link>
              )
            </p>
            <img
              className="mx-auto text-center center -my-5  "
              src="../asserts/tag-special-time-offer.svg"
              alt=""
            />
            <p className="text-light fs-1 fw-bolds fw-bold text-center mx-auto my-4 ">
              Get 70% Off for 4 Months
            </p>
            <button className="btn btn12 btn-success my-4 mx-auto d-block px-3 py-2">
              Buy Now & Save
            </button>

            <Link className="text-light fs16 fs-6" to={"/someone"}>
              📣 Risk Free. 30-Day Money Back Guarantee
            </Link>
          </p>
        </div>
      </div>
      <div className="mt-5 pt-5">
        <h2 className="wp-block-heading mt-5 pt-5 text-center w-100 w-lg-75 px-3 px-md-5 mx-auto my-xl-6">
          Invoicing and Accounting Tools Built for Any Sized
          <br />
          Business
        </h2>
      </div>
      <div className="cards mt-2">
        <div className="card rounded" style={{ width: "80rem" }}>
          <img src="./mainpage/card1.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title text-center pt-3">For Freelancers</h5>
            <p className="card-text pt-5">
              Keep your books in check, your clients happy, and deliver the work
              you love doing.
            </p>
            <button className="btn anc bg-e">
              <a href="#" className="ancs  ">
                Learn More
              </a>
            </button>
          </div>
        </div>
        <div className="card rounded" style={{ width: "80rem" }}>
          <img src="./mainpage/card2.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title text-center pt-3">
              For Self-Employed Professionals
            </h5>
            <p className="card-text pt-4">
              Get more time for your business and clients, and even a little
              extra to plan for the future.
            </p>
            <button className="btn anc bg-e">
              <a href="#" className="ancs  ">
                Learn More
              </a>
            </button>
          </div>
        </div>
        <div className="card rounded" style={{ width: "80rem" }}>
          <img src="./mainpage/card3.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title text-center pt-3">
              For Businesses With Contractors
            </h5>
            <p className="card-text pt-3">
              Work better with your partners by staying organized and always
              knowing where you stand.
            </p>
            <button className="btn anc bg-e">
              <a href="#" className="ancs  ">
                Learn More
              </a>
            </button>
          </div>
        </div>
        <div className="card rounded" style={{ width: "80rem" }}>
          <img src="./mainpage/card4.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title text-center pt-3">
              For Businesses With Employees
            </h5>
            <p className="card-text pt-3">
              Empower your staff to help grow your business and build lasting
              client relationships.
            </p>
            <button className="btn anc bg-e">
              <a href="#" className="ancs  ">
                Learn More
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="cardss">
        <button className="btn carts oder-1">
          <a className="cards-1" href="">
            {" "}
            For Freelancer
          </a>
        </button>
        <button className="btn carts">
          <a className="cards-1" href="">
            For Self-Employed Professionals
          </a>
        </button>
        <button className="btn carts oder-1">
          <a className="cards-1" href="">
            {" "}
            For Businesses With Contractors
          </a>
        </button>
        <button className="btn carts">
          <a className="cards-1" href="">
            {" "}
            For Businesses With Employees
          </a>
        </button>
      </div>
      <h1 className="text-center pt-5">
        Why 30+ Million People Have Used FreshBooks
      </h1>
      {/* <div className=" end-main mt-5 row pt-4 justify-content-around">
        <div className="card col-md-3 col-sm-2 car   " style={{ width: "16rem" }}>
          <img
            src="./mainpage/card5.jpg"
            className="card-img-top imss-1 text-center"
            alt="..."
          />
          <div className="card-body">
            <p className="card-text text-center fst-italic">
              “FreshBooks has really helped me to be more efficient throughout
              the year so that tax time…it’s less stressful”
            </p>
            <div className="lli mt-5"></div>
            <div className="text-center mt-5 pt-3 ">
              DAMONA HOFFMAN
              <br />
              OWNER, DEAR MRS D, INC.
              <br />
              <Link className="ll">LOS ANGELES, USA</Link>
            </div>
          </div>
        </div>

        <div className="card   car col-md-3 col-sm-3" style={{ width: "16rem" }}>
          <img
            src="./mainpage/card6.jpg"
            className="card-img-top imss-1 text-center"
            alt="..."
          />
          <div className="card-body">
            <p className="card-text text-center fst-italic">
              “Accounting’s not that scary. It can be easy or easy-ish.
              FreshBooks definitely makes it easier for us ‘non-numbers’ people”
            </p>
            <div className="lli mt-5"></div>
            <div className="text-center mt-5 pt-3 ">
              CAROLINA RAMIREZ HERRERA CHR COLLECTIVE
              <Link className="ll">MIAMI, USA</Link>
            </div>
          </div>
        </div>

        <div className="card car col-md-3 col-sm-3" style={{ width: "16rem" }}>
          <img
            src="./mainpage/card7.jpg"
            className="card-img-top imss-1 text-center"
            alt="..."
          />
          <div className="card-body">
            <p className="card-text text-center fst-italic">
              “We’re basically saving $2000 a month. And that doesn’t include
              all the things that we were able to do in place of all that
              admin.”
            </p>
            <div className="lli mt-5"></div>
            <div className="text-center mt-5 pt-3 ">
              ZACHARY MARTZ
              <br />
              OWNER, ZMARTZ MARKETING,
              <br />
              <Link className="ll">KING OF PRUSSIA, USA</Link>
            </div>
          </div>
        </div>
      </div> */}
      {/* amir star */}
      <div>
        <div className="container text-center ">
          <hr className="hr-margin1   " />
          <div className="row">
            <div className="col-xl-3 ">
              <h5>
                4.5 Excellent <img src="./mainpage/star.svg"></img>
              </h5>
              <p className="col-lg-10 ms-4">
                “FreshBooks offers a well-rounded, intuitive, and attractive
                double-entry accounting experience. It anticipates the needs of
                freelancers and small businesses well—better than competitors in
                this className.
              </p>
              <img className="w-50" src="./mainpage/star1.png"></img>
            </div>
            <div className="col-xl-3 ">
              <h5>
                4.5 Excellent <img src="./mainpage/star.svg"></img>
              </h5>
              <p className="col-lg-10 ms-4">
                “FreshBooks automates daily accounting activities namely invoice
                creation, payment acceptance, expenses tracking, billable time
                tracking, and financial reporting.”
              </p>
              <img className="w-50 mt-5" src="./mainpage/star2.png"></img>
            </div>
            <div className="col-xl-3 ">
              <h5>
                4.5 Excellent <img src="./mainpage/star.svg"></img>
              </h5>
              <p className="col-lg-10 ms-4">
                “FreshBooks is an online accounting and invoicing service that
                saves you time and makes you look professional – Fortune 500
                professional.”
              </p>
              <img className="w-10 mt-4 pt-2" src="./mainpage/star3.png"></img>
            </div>
            <div className="col-xl-3 ">
              <h5>
                4.7 Excellent <img src="./mainpage/star.svg"></img>
              </h5>
              <p className="col-lg-10 ms-4">
                “FreshBooks makes it easy to stay organized, keep track of
                payments owed and expenses made, send invoices and accept
                payments.”
              </p>
              <img
                className="w-50 mt-5  mb-5 pt-3"
                src="./mainpage/star4.png"
              ></img>
            </div>
          </div>

          <hr className="hr1-margin1" />
          <button className="buton-1 my-sm-1  mb-3">Try It Free</button>
          <p className="col-md-12 mt-4 mb-5 col-lg-12 text-center col-sm-12  ">
            Try it free for 30 Days. No credit card required.
            <br />
            Cancel anytime.
          </p>
        </div>
      </div>
      {/* amir */}
      <div className="container-fluid mt-5 color-back-1 position-relative    ">
        <div className="row ">
          {/* <div className=""></div> */}

          <img className="img-left-1" src="../mainpage/leftxl.png"></img>

          <img className="img-right-1" src="../mainpage/rightxl.png"></img>
          <img className="img-right-2" src="../mainpage/rightmd.webp"></img>
          <img className="img-small-1" src="../mainpage/leftsm.png"></img>

          <div className="col-md-8 col-lg-5  pt-5 mt-5 margin-1   ">
            <h2>An AppStore for All of Your Business Needs</h2>
            <p className="mb-4 mt-4 col-md-11 col-sm-10">
              FreshBooks integrates with <a href="">over 100 great apps </a>to
              streamline work for business owners, keep teams and clients
              connected, and better understand your business.
            </p>
            <button className="buton-1 my-sm-1  mb-3">Try It Free</button>
            <p className="col-md-12 mt-4 mb-5 col-lg-8 text-center col-sm-12  ">
              Try it free for 30 Days. No credit card required.
              <br />
              Cancel anytime.
            </p>
            <img className="img-back-4" src="../mainpage/rightmd.png"></img>
          </div>

          <div className="col-md-6  "> </div>
        </div>
      </div>
      {/* Asim code */}
      <div id="main">
        <div className="container-fluid bg-primary ">
          <div className="row  ">
            <div className=" col-lg-7 col-md-6 col-sm-12 order-sm-2 order-lg-1 order-md-1 ">
              <img
                className="w-75 margin-top-2 h-50 m-5 mb-5 px-4 px-md-5 px-lg-5"
                src="/mainpage/asimwork.png"
              />
            </div>

            <div className=" text-white col-lg-5 col-md-6 col-sm-12 order-sm-1">
              <h5 className=" fs-1 margin-top-1">
                Add Value and Grow Your Business, Become a Partner
              </h5>
              <p className=" col-md-10 mt-4 ">
                Build an integration, use our API, or grow your business with
                our Accounting Program. Or reap the rewards of our Affiliate and
                Referral programs – look no further for your next growth
                opportunity.
              </p>
              <button className="main-btn mt-4 mb-5">Become a Partner</button>
            </div>
          </div>
        </div>

        {/* -------------------------second-section */}
        <div className="bg-primary background ">
          <div className="container-fluid main-c position-relative">
            <div className="row justify-content-center align-items-center">
              <div className="main2 col-lg-5 m-auto col-md-6 col-sm-12">
                <ul>
                  <h5 className="mt-5 fs-1">
                    The Support You Need, When You Need It
                  </h5>
                  <li className="mt-4 max-auto ">
                    <strong>Help From Start to Finis:</strong>Our Support team
                    is highly knowledgeable and never transfers you to another
                    department.
                  </li>

                  <li className="mt-4 max-auto ">
                    <strong>4.8/5.0 Star Reviews</strong>Yup, that’s our Support
                    team approval rating across 120,000+ reviews.
                  </li>
                  <li className="mt-4 max-auto ">
                    <strong>Global Support:</strong>We’ve got over 100 Support
                    staff working across North America and Europe
                  </li>
                </ul>
                <div className="button-container mx-3 mt-5">
                  <button className="main-btn2">Contact Us</button>
                  <button className="main-btn2">Help Center</button>
                </div>
              </div>
              <div className="container col-lg-6 col-md-6 col-sm-12">
                <img
                  className="w-100  mt-5 mb-5 px-4 px-md-5 px-lg-5"
                  src="/mainpage/asim2.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer/> */}
    </>
  );
};

export default Body;
