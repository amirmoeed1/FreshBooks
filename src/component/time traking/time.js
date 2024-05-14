import './time.css'
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export function Time(){
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
  const [activeQuestion, setActiveQuestion] = useState(null);

  const faqData = [
    {
      id: 1,
      question: "How Can I Accept Credit Card Payments Online?",
      answer:
        "To create an account, visit our website and click on the 'Sign Up' button. Follow the prompts to complete the registration process.",
    },
    {
      id: 2,
      question: "How Do Online Payments Work?",
      answer:
        "Just like in-person purchases, online payments allow your client to conveniently pay invoices using their credit card. The payment is processed for a small fee and then deposited into your bank account. The entire process should take about 2 business days, and, if you use FreshBooks Payments, all transaction fees are automatically tracked in your account as Expenses.",
    },
    {
      id: 3,
      question: "Can FreshBooks Accommodate My Recurring Billing?",
      answer:
        "Indeed it can. Simply create a Recurring Profile in your account and let FreshBooks remember to send out invoices on your behalf.",
    },
    {
      id: 4,
      question: "What Online Payment Options Does FreshBooks Offer?",
      answer:
        "You can accept online payments, including major credit cards, and Apple Pay, through FreshBooks Payments or Stripe. FreshBooks also allows payment processing through Bank Transfer(s) (ACH).",
    },
    {
      id: 5,
      question: "How Secure Are Online Payments?",
      answer:
        "FreshBooks employs industry-best online payment security practices through PCI (Payment Card Industry) compliance. This is the security standard for organizations that handle credit card transactions. The PCI Standard is mandated by credit card companies and administered by the Payment Card Industry Security Standards Council. Both of our payments processors (WePay/Chase and Stripe) employ strict PCI compliance.",
    },
  ];

  const toggleAnswer = (id) => {
    setActiveQuestion(activeQuestion === id ? null : id);
  };
        return (
          <div>
          <div className="container-fluid">
            <div className=" img-bg2 row m-0 py-4 pb-0 py-lg-5 ">
              <div className="col-md-8 fnt-01 col-lg-8 col-xl-6 m-5   col-sm-6 px-5">
                <h1 className="col-sm-10 col-xl-12 mb-sm-4">
                Maximize Your Productivity With FreshBooks Time Tracking Software

                </h1>
                <p className="text-shadow d-sm-none d-md-block d-none my-3">
                Every second counts. Start tracking your time in FreshBooks and see exactly how much time you’re spending on clients and projects. And when the work’s done, easily generate an invoice with just a click.
                </p>
                <button className="buton my-sm-1 my-3">Try It Free</button>
                <p className="text-center max-width">
                  No credit card required. Cancel anytime.
                </p>
              </div>
            </div>
          </div>
          {isMobile ? (<div className="flex-center">
        <select className="mobile-dropdown mt-4" onChange={handleMobileMenuChange}>
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
              <a href="#" className="p-4 text-decoration-none" onClick={toggleMoreFeatures}>
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
          <b>Excellent</b> <img className="ml-4 " src="./timetarcking/yellow1.svg" alt="Star" />{" "}
          <span>
            (Based on <a href="/">4,380 GetApp reviews</a>)
          </span>{" "}
        </p>
      </div>

      <div className="container mt-5 ">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-lg-6 oder-2 text-md-center md-fs-5 col-sm-12 pt-4 mt-4">
            <h1 className="mt-4  small-font-size:.875em col-sm-11">
              <b>
              Sleep Peacefully <br/>
               Knowing How <br/>
                Productive You Are
              </b>
            </h1>
            <p className="fontweight-para mt-4 ">
              FreshBooks Payments lets your customers pay  
              directly through invoices and automatically 
              records each payment in your account. It’s fast, 
              easy, secure and perfectly integrated.
            </p>
            <button className="btn-33 fw-bold mt-3 mb-5 ">Try It Free</button>
          </div>
          <div className="oder-1 col-md-12 col-sm-12 col-lg-6">
            <img src="./timetarcking/img3rd.webp" className="w-100" alt="Second Image" />
          </div>
        </div>
      </div>
      <div className="container mt-5 ">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-lg-6 oder-1 ">
            <img src="./timetarcking/Time-Tracking-Page-Revised-Jan2018-2@2x.webp " className="w-100 " alt="Checkout Links"></img>
          </div>
          <div className="col-md-12 col-sm-12 col-lg-5 oder-2 ms-5 ps-5 pt-5 mt-5 ">
            <h1 className="mb-4">
              <b>
              Focus on Your Work, 
              <br /> Not on the Clock
              </b>
            </h1>
            <p className="para4th fs-5">
            Say goodbye to remembering how long you and <br/>
             your team spent working on a client project. Just <br/>
              start a timer and get down to business – when <br/>
               you’re done, you’ll have an accurate time log <br/> ready to pop onto an invoice.
            </p>
           
            <button className="btn btn-color  mt-3 mb-4">Try It free</button>
          </div>
        </div>
      </div>
      <div className="container mt-5 ">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-lg-6 oder-2 text-md-center md-fs-5 col-sm-12 pt-4 mt-4">
            <h1 className="mt-4">
              <b>
              Easily Track Time <br/>
               From Wherever You <br/>
                Are
              </b>
            </h1>
            <p className=" mt-3  fs-4">
            Whether on the go with the mobile app or <br/>
             browsing the web with the FreshBooks Chrome <br/>
              Timer, FreshBooks ensures you bank every <br/>
               billable hour. Plus, you can track time directly <br/>
                from the apps you already know and love – <br/>
                 Asana, Basecamp, Trello and Teamwork.
            </p>
            <button className="btn-33 fw-bold btn-color text-white fs-2 mt-3 mb-5 ">Try It Free</button>
          </div>
          <div className="col-md-12 col-sm-12 oder-1 col-lg-6">
            <img src="./timetarcking/Time-Tracking-Page-Revised-Jan2018-3@2x.webp" className="mt-5 w-100" alt="Second Image" />
          </div>
        </div>
      </div>
      <div className="container mt-5 ">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-lg-6 oder-1 ">
            <img src="./timetarcking/Time-Tracking-Page-Revised-Jan2018-4@2x.webp " className="w-100 " alt="Checkout Links"></img>
          </div>
          <div className="col-md-12 col-sm-12 col-lg-5 ms-5 ps-5 oder-2 ">
            <h1 className="mb-4">
              <b>
              Easily Keep Your Team on
              <br/> Track
              </b>
            </h1>
            <p className="para4th fs-5">
            Know at-a-glance how your entire team is <br/>
             spending their time. You’ll be able to quickly <br/>
              understand what work has been completed and <br/>
               spot any issues before they become problems.
            </p>
           
            <button className="btn btn-color fw-bold text-white fs-2   mt-3 ">Try It free</button>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row pt-5'>
          <div className='col-sm-12 col-md-6 oder-2'>
            <h1><b>A Few Other Ways FreshBooks Makes
             Time Tracking a Snap</b></h1>
            <ul className=' fs-4  '>
              <li>Time keeping for your entire team</li>
              <li>Record time against a specific client</li>
              <li>Add detailed time entry notes</li>
              <li>Automatically bill for tracked hours</li>
              <li>Weekly and monthly views of your tracked time</li>
              <li>Track and manage time for a specific project</li>
              <li>Daily breakdowns of your tracked work hours</li>
              <li>Built in, easy to use timer on desktop and mobile</li>
              <p>
                <a href='https://www.freshbooks.com/features'>See all the benefits of accepting payments in FreshBooks</a>
              </p>
            </ul>
          </div>
          <div className='col-sm-12 text-center col-md-6 oder-1'>
            <img className='pt-4  rounded ' src='./timetarcking/time-tracking-dyk_opt.webp' alt="Did You Know"></img>
            <div className='border  m-2'>
              <h1 className='mt-4 color-22'>Did You Know…</h1>
              <p className='color-22'>97% of customers highly recommend <br/>
              <span>
                 FreshBooks…
                </span>
</p>
              <button className="btn mt-3 mb-4 col-lg-7  btn-color">Try It Free</button>
              <p className='text-styling'>No credit card required. Cancel anytime.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container fluid-2">
      <h1 className="text-center mt-5">Frequently Asked Questions</h1>
      <div className="mt-5">
        <hr />
        {faqData.map((item) => (
          <div className="accordion-item" key={item.id}>
            <div
              className="accordion-header"
              onClick={() => toggleAnswer(item.id)}
            >
              <h6 className="accordion-title m-4 backgound-img">
                {item.question}
                <svg
                  className="text"
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.09402 0.984375L5.65369 4.97461L2.21336 0.984375C2.10221 0.867187 1.97844 0.773438 1.84204 0.703125C1.70564 0.632812 1.55661 0.597656 1.39495 0.597656C1.07163 0.597656 0.796304 0.729491 0.568968 0.993164C0.341633 1.25684 0.227966 1.57617 0.227966 1.95117C0.227966 2.13867 0.258277 2.31152 0.3189 2.46973C0.379523 2.62793 0.460352 2.77148 0.56139 2.90039L4.42608 7.38281C4.58774 7.55859 4.77213 7.69922 4.97926 7.80469C5.18639 7.91016 5.41119 7.96289 5.65369 7.96289C5.89618 7.96289 6.12098 7.91016 6.32811 7.80469C6.53524 7.69922 6.71963 7.55859 6.88129 7.38281L10.746 2.90039C10.847 2.77148 10.9278 2.62793 10.9885 2.46973C11.0491 2.31152 11.0794 2.13867 11.0794 1.95117C11.0794 1.57617 10.9657 1.25684 10.7384 0.993164C10.5111 0.729491 10.2357 0.597656 9.91242 0.597656C9.75076 0.597656 9.60173 0.632812 9.46533 0.703125C9.32893 0.773438 9.20516 0.867187 9.09402 0.984375Z"
                    fill="#005DAB"
                  ></path>
                </svg>
              </h6>
              <div
                className={`arrow ${
                  activeQuestion === item.id ? "open" : ""
                }`}
              ></div>
            </div>
            {activeQuestion === item.id && (
              <div className="accordion-content m-4">
                <p>{item.answer}</p>
              </div>
            )}
            <hr />
          </div>
        ))}
      </div>
    </div>
    <div className="main-div">
      <div
        id="block_en-us_605090ff23d4d-p"
        className="fp-block new-cta-bar wp-block wp-block-fpbk-new-cta-bar wide-block my-0 row trackingSection-new-cta-bar-bottom"
        data-block="fpbk/new-cta-bar"
      >
        <div
          className="new-cta-bar__container position-relative w-100"
        >
          <div className="container-fluid">
            <div className="row w-100 mx-auto">
              <div className="new-cta-bar__content position-relative w-100 d-flex flex-column align-items-center justify-content-center">
                <div
                  id="stats-block_bd7f6f8fdb9e0a87916a2fb60e39a17d"
                  data-block="acf/stats"
                  className="fp-block stats  row px-2 p-md-x-0 my-0 mx-auto stats--all-white stats--layout-big"
                >
                  <p className="stats__stats-description colorss w-100 font-weight-medium text-center">
                    WHY BUSINESS OWNERS LOVE FRESHBOOKS
                  </p>
                  <div className="stats__stats-container d-flex flex-column flex-md-row m-auto">
                    <div className="stats__stat-item px-3">
                      <div className="stats__stat-item-value text-center text-nowrap">
                        <span className="stats__stat-item-value--content colo font-size-xxl">
                          553
                        </span>
                        <span className="stats__stat-item-value--unit colo font-additional h3 font-size-xxl">
                          HRS
                        </span>
                      </div>
                      <p className="stats__stat-item-label colorss text-center font-size-smaller ">
                        SAVE UP TO 553 HOURS EACH YEAR BY USING FRESHBOOKS
                      </p>
                    </div>
                    <div className="stats__stat-item px-3">
                      <div className="stats__stat-item-value text-center text-nowrap">
                        <span className="stats__stat-item-value--unit colo font-additional h3 font-size-xxl">
                          $
                        </span>
                        <span className="stats__stat-item-value--content colo font-size-xxl">
                          7000
                        </span>
                      </div>
                      <p className="stats__stat-item-label text-center colorss font-size-smaller ">
                        SAVE UP TO $7000 IN BILLABLE HOURS EVERY YEAR
                      </p>
                    </div>
                    <div className="stats__stat-item px-3">
                      <div className="stats__stat-item-value text-center text-nowrap">
                        <span className="stats__stat-item-value--content colo font-size-xxl">
                          160+
                        </span>
                        <span className="stats__stat-item-value--unit font-additional h3 font-size-xxl" />
                      </div>
                      <p className="stats__stat-item-label text-center colorss font-size-smaller ">
                        BUSINESSES IN OVER 160 COUNTRIES HAVE USED FRESHBOOKS
                      </p>
                    </div>
                  </div>
                </div>
                <div className="reversed-corner reversed-corner_down reversed-corner_white d-none d-md-block" />
                <p />
                <button className="mt-5 btts">Try It Free</button>

                <div className="new-cta-bar__after-cta-button text-white position-relative text-center">
                  Try it free for 30 Days. No credit card required. Cancel
                  anytime.
                </div>
              </div>
            </div>
          </div>
          <div className="new-cta-bar__image-wrapper overflow-hidden position-absolute">
            <img
              loading="lazy"
              decoding="async"
              width={628}
              height={629}
              src="./timetarcking/product-tour-logo.svg"
              className="new-cta-bar__image imgss fp-animate fp-animate--offscreen-reset position-absolute new-cta-bar__image-left fp-animate__slide_in_left"
              alt=""
            />
            <img
              loading="lazy"
              decoding="async"
              width={628}
              height={629}
              src="./timetarcking/product-tour-logo.svg"
              className="new-cta-bar__image imgs1 fp-animate fp-animate--offscreen-reset position-absolute new-cta-bar__image-top-right fp-animate__slide_in_right fp-animate--order-3"
              alt=""
            />
            <img
              loading="lazy"
              decoding="async"
              width={628}
              height={629}
              src="./timetarcking/product-tour-logo.svg"
              className="new-cta-bar__image imgs2 fp-animate fp-animate--offscreen-reset position-absolute new-cta-bar__image-bottom-right fp-animate__slide_in_right fp-animate--order-3"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
          </div>
          
    )
}