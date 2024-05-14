// import React from "react";
import React, { useState } from "react";
import "./bodypart2.css";

const Bodypart2 = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const faqData = [
    {
      id: 1,
      question:
        "What’s the difference between an accountant and an online bookkeeping service?",
      answer:
        " This is a tricky question unless you’re an accountant or bookkeeper.These professions are very similar: Bookkeepers and accountants both work with financial data and help you manage your finances. There’s also a blurring of roles, with some accountants providing bookkeeping services and some bookkeepers giving strategic business advice. Plus, today, most accounting software can create financial statements and financial reports—a task usually reserved for accountants.Still, basic accounting functions and basic bookkeeping services are distinct, and there are many differences between accountants and bookkeepers and what they offer small business owners. Even the best online bookkeeping services for small businesses won’t do everything a dedicated accountant will or can.Bookkeepers: Take care of the day-to-day financials. Bookkeepers post debits and credits, review the general ledger for accuracy, categorize expenses, and generate account statements.Accountants: Take care of big-picture financial planning. Accountants use the updated information a bookkeeper provides to create financial models, analyze trends, prepare income taxes, and provide advice for growth. Read this article for a quick summary of notable differences (and a few similarities) between bookkeeping services and accounting services.",
    },
    {
      id: 2,
      question: "What is Bench?",
      answer:
        "Bench is FreshBooks’ top online bookkeeping services partner. They combine smart software with an affordable virtual bookkeeping professional who ensures your books are up-to-date every month. They also provide expert tax services, including tax advice, tax preparation, and tax filing, so you know your books are airtight come tax season.",
    },
    {
      id: 3,
      question: "Can Bookkeeping services help with taxes?",
      answer:
        "A great bookkeeper ensures your books are 100% tax compliant, saving you time when filing taxes. They also make sure you don’t miss out on any possible deductions.Hear firsthand how Bench and FreshBooks makes running a business and tax time a seamless experience in these 2 case studies.",
    },
    {
      id: 4,
      question: "How big does my business have to be to use bookkeeping services?What Online Payment Options Does FreshBooks Offer?",
      answer:
        "It doesn’t matter how big or small your business is. If you feel like you’re spending too much time on bookkeeping that you could be spending on growing your business, a bookkeeper is perfect for you.Check out this great article about online bookkeeping services for small business owners:",
    },
    {
      id: 5,
      question: "Which Accounting Reports are available in FreshBooks?",
      answer:
        "FreshBooks has more than a dozen Accounting reports, including Profit and Loss, Balance Sheet, Trial Balance, Accounts Aging, Revenue By Client, Accounts Payable Aging, Cash Flow, and General Ledger reports, plus Chart of Accounts.",
    },
  ];

  const toggleAnswer = (id) => {
    setActiveQuestion(activeQuestion === id ? null : id);
  };

  return (
    <>
      <div className="container-fluid client">
        <div className="row">
          <div className="col-lg-4  col-md-12 col-sm-10 m-auto ps-5 text-md-left   ">
            <h4 className="fs-2">
              Have Lots of Clients and Want to Save on Billing?
            </h4>
            <p className="">
              Our FreshBooks Select Plan could be the solution for you, saving
              you time and money.
            </p>
            <h6>The Select Plan includes:</h6>
            <ul className="mt-4 ">
              <li className="mb-2">
                A dedicated account manager to train your team and migrate your
                books from other platforms
              </li>
              <li className="mb-2">
                Access to lower credit card fees and transaction rates
              </li>
              <li>2 free team member accounts</li>
            </ul>
            <button className="fw-bold   ms-3 p-3 mt-2 border-1 rounded col-lg-8   col-md-3 col-sm-5 mt-4  p-2    mb-md-5 mb-sm-5  ">
             Talk to a Specialist
            </button>
          </div>
          <div className="col-lg-6 col-md-12 col-xl-5 m-auto">
            <img
              className=" h-90 col-sm-12   w-100"
              src="/bookkeeping/bodypart2nd.webp"
            ></img>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 col-md-11  col-xl-5 col-sm-12 order-sm-2  order-lg-1 m-auto">
            <img
              className="   w-100 h-90  "
              src="/bookkeeping/bodyleft.jpg"
            ></img>
          </div>
          <div className="col-lg-6 col-md-11 col-sm-12 order-sm-1 m-auto    p-5 ">
            <h4 className="fs-2">
              Resources to Help You Save More at Tax Time
            </h4>
            <div className="d-flex">
              <div className="text-group ">
                <div className="col-md-5 col-sm-7 mt-4 ">
                  <h6 className="mb-4 lh-base">
                    Bookkeeping vs. Accounting: What’s the Difference…
                  </h6>
                  <h6 className="mb-4 lh-base">
                    9 Signs Your Business Needs Bookkeeping Services
                  </h6>
                  <h6 className="pb-3 lh-base">
                    How Bench Keeps You Compliant and On Top of Your Books
                  </h6>
                </div>
                <hr />
                <h4>
                  Get a newsletter that helps you think differently about your
                  business
                </h4>
                <input type="text" placeholder="Email Address*"></input>
                <button className="btn7">Subscribe</button>
                <p className="p3">
                  Yes, I would like FreshBooks to send me helpful tips on how to
                  grow my business and let me know about offers and promotions.
                </p>
              </div>
              <div className=" mt-4 btn-group  ">
                <button className="btn4  ">
                  <h6>Read More</h6>
                </button>
                <button className="btn4 ">
                  <h6>Read More</h6>
                </button>
                <button className="btn4  ">
                  <h6>Read More</h6>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Question part */}
      <div className="container fluid-3">
        <h1 className="text-center mt-5 backgound-img">
          Frequently Asked Questions
        </h1>
        <div className="row"> 
        <div className="col-xl-10  mx-auto   ">
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
      </div></div>
      </div>
    </>
  );
};

export default Bodypart2;
