import React, { useState } from "react";
import "./Hide.css";

const Hide = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const faqData = [
    {
      id: 1,
      question: "Does FreshBooks Really Track Mileage Automatically?",
      answer:
        "Absolutely! All you need to do is set up Mileage Tracking on the FreshBooks mobile app, then sit back and the app will log all your trips.You can classify each trip as business or personal, at your convenience.",
    },
    {
      id: 2,
      question: "How Do I Get Mileage Tracking Reports?",
      answer:
        "You can either send the report to your email address directly from the mobile app or download the report from the Reports section on FreshBooks desktop.",
    },
    {
      id: 3,
      question: "How Much Does This Feature Cost? And Who Uses It?",
      answer:
        "Zero! The Mileage Tracker app is a free feature that is built-in with all our packages, including during the trial period. When it comes to business expenses",
    },
    {
      id: 4,
      question: "How Does the Mileage Tracker App Work?",
      answer:
        "The FreshBooks mileage tracker app keeps a record of every time you drive your vehicle for business, whether it’s purchasing work supplies or meeting clients.",
    },
  
  ];

  const toggleAnswer = (id) => {
    setActiveQuestion(activeQuestion === id ? null : id);
  };

  return (
    <div className="container">
      <h1 className="text-center text-dark fs-3 mt-5">Frequently Asked Questions</h1>
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
  );
};

export default Hide;