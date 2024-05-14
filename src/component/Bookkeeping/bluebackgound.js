import React, { useState } from "react";
import "./bluebackground.css";
 

const Bluebackgound = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [showImage, setShowImage] = useState(false);
  const faqData = [
    {
      id: 1,
      question: "Monthly Bookkeeping Services",
      answer:
        "Get organized transactions and expertly prepared financial statements each month.",
      Image: "/bookkeeping/bench.webp",
    },
    {
      id: 2,
      question: "Bench Retro Bookkeeping Services",
      answer:
        "For more than two years of historical bookkeeping, letters from the IRS, years of unfiled back taxes, missing records, or anything else your business is facing.",
    },
    {
      id: 3,
      question: "Tax Advisory + Tax Filing Services",
      answer: "Get year-round bookkeeping and unlimited tax advisory support.",
    },
  ];

  const toggleAnswer = (id) => {
    setActiveQuestion(activeQuestion === id ? null : id);
  };
  const toggleImage = () => {
    setShowImage(!showImage); // Toggle image visibility
  };
  return (
    <>
      <div className="container-fluid  position22 bg-primary">
        <div className="row mt-lg-5 pt-3  ">
          <div className="col-lg-3 col-md-12 mt-lg-5 pt-lg-5 mt-md-2 ps-5">
            <h5 className="para-color1">WHAT ELSE?</h5>
            <h1 className="text-white pb-5">
              Make Every Part of Bookkeeping Easier
            </h1>
            <button class="btn btn-cta-green  py-3 mb-md-3 font-weight-medium ">
              Talk to a Specialist
            </button>
          </div>
          <div className="col-lg-7 fluid-1 mt-5  mx-auto col-md-10 background-color-1">
            <div className="row mt-5 ">
              <div className="col-lg-6 col-md-7 col-sm-7  ">
                <h4 className="text-white ">Monthly Bookkeeping Services</h4>
                <p className="para-color">
                  Get organized transactions and expertly prepared financial
                  statements each month.
                </p>
                <img className=" w-100    " src="/bookkeeping/bench.webp"></img>
              </div>
              <div className="col-lg-6 col-md-4 ">
                <div className="row">
                  <div className="col-lg-6 col-md-11   ">
                    <h4 className="text-white ">
                      Catch Up Bookkeeping Services
                    </h4>
                    <p className="para-color  ">
                      Work with expert bookkeepers to get your books up-to-date
                      and ready to file—fast.
                    </p>
                  </div>

                  <div className="col-lg-6 col-md-5">
                    <img
                      className="w-100 img-remove"
                      src="/bookkeeping/chatimg.svg"
                    ></img>
                  </div>
                </div>

                <div className="row mt-5 ">
                  <div className="col-lg-6 col-md-12">
                    <h5 className="text-white">
                      Bench Retro Bookkeeping Services
                    </h5>
                    <p className="para-color">
                      For more than two years of historical bookkeeping, letters
                      from the IRS, years of unfiled back taxes, missing
                      records, or anything else your business is facing.
                    </p>
                  </div>
                  <div className="col-lg-6 col-md-11 ">
                    <h4 className="text-white">
                      Tax Advisory + Tax Filing Services
                    </h4>
                    <p className="para-color">
                      Get year-round bookkeeping and unlimited tax advisory
                      support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container  fluid-2">
            <div className="mt-5">
              <hr />
              {faqData.map((item) => (
                <div className="accordion-item  " key={item.id}>
                  <div
                    className="accordion-header  "
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
                      <img
                        src={process.env.PUBLIC_URL + item.Image}
                        alt="Bookkeeping Service"
                        className={`w-50 ms-5 ps-5 ${
                          showImage ? "" : "d-none"
                        }`}
                        onClick={toggleImage}
                      />
                    </div>
                  )}

                  <hr />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default Bluebackgound;
