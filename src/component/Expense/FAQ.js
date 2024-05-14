import React, { useState } from "react";

const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const faqData = [
    {

      id: 1,
      question: "Can I generate a year-end business report in FreshBooks?",
      answer:
        "The Reports on your dashboard will give you easy access to all of the business reports available in FreshBooks."
    },
    {
      id: 2,
      question: "Can FreshBooks generate financial reports?",
      answer:
        "From Profit & Loss to the Sales Tax Summary, FreshBooks gives you standard business reports to help you understand your business’ health. Better yet, you can even easily download the reports to share with your accountant.",
    },
    {
      id: 3,
      question: "Can FreshBooks generate accounting reports for Tax-time?",
      answer:
        " While FreshBooks doesn’t generate tax-time specific accounting reports, you can easily get all the information you need to file your small business taxes from the reports provided"
    },
    {
      id: 4,
      question: "Can I generate a Profit & Loss report in FreshBooks?",
      answer:
        "Absolutely. FreshBooks makes it easy to keep a close eye on the bottom line with Profit & Loss Reports you can whip up in mere seconds. Plus, each account has a spiffy dashboard that neatly displays how much your business has spent vs. earned over your selected period of time.",
    },
    {
        id: 5,
        question: "Can I automatically apply credits to my invoices?",
        answer:
          "Any credit created for your client, whether it’s a Credit Note, Overpayment or Prepayment Credit, can be automatically applied to invoices generated by a recurring template. Follow the steps here to get it enabled moving forward.",
      },
  
  ];

  const toggleAnswer = (id) => {
    setActiveQuestion(activeQuestion === id ? null : id);
  };

  return (
    <div className="  container">
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

export default FAQ;