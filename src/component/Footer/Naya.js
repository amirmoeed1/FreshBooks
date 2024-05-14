import React, { useState } from "react";
import "./Naya.css";

const Naya = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const faqData = [
    {
      id: 1,
      question: "COMPANY",
      answer:'About Us',
      answers:'Our Story',
      answers1:'Diversity and Inclusivity',
      answers2:'Careers',
      answers3:'Contact',
      answers4:'Press Center'
    },
    {
      id: 2,
      question: "FEATUERS",
      answer:'All FreshBooks Features',
      answers:'Accounting',
      answers1:'AppStore',
      answers2:'Bookkeeping',
      answers3:'Clients',
      answers4:'Expenses & Recipts',
      answers7:'Estimates',
      answers8:'Invoicing',
      answers9:'Mileage Tracking',
      answers10:'Mobile',
      answers11:'Payments',
      answers12:'Payroll',
      answers13:'Projects',
      answers14:'Proposals',
      answers15:'Reports',
      answers16:'Time Tracking',

    },
    {
      id: 3,
      question: "WHO IT'S FOR",
      answer:'Business Size',
      answers:'Freelancers',
      answers1:'Businessess With Contractors',
      answers2:'Businessess with Employess',
      answers3:'Self-Employed Professionals',
      answers4:'Business Industry',
      answers7:'Accountants',
      answers8:'Construction',
      answers9:'consultants',
      answers10:'IT & Technology',
      answers11:'Legal',
      answers12:'Marketing & Agencies',
    },
    {
      id: 4,
      question: "PARTNERS",
      answer:'Partaners',
      answers:'Affilate Program',
      answers1:'Apps',
      answers2:'Developers',
      answers3:'Education',
      answers4:'Referral Programs'
    },
    {
        id: 5,
        question: "HELPFUL LINKS",
        answer:'Accounting Software',
      answers:'Accounting Template',
      answers1:'Blog',
      answers2:'Glossary',
      answers3:'Free Invoice Generator',
      answers4:'Invoice Template',
      answers7:'Estimates Template',
      answers8:'Login',
      answers9:'Pricing',
      answers10:'QuickBooks Alternative',
      answers11:'Resource Hub',
      answers12:'Sign Up',
      answers13:'SiteMap',
      answers14:'Support',
      answers15:'Tools'
      },
      {
        id: 6,
        question: "POLICIES",
        answer:'Accessibility',
      answers:'Privacy Polices',
      answers1:'Security Safeguards',
      answers2:'Terms of Service'
      }
  
  ];

  const toggleAnswer = (id) => {
    setActiveQuestion(activeQuestion === id ? null : id);
  };

  return (
    <div className="hiiid container-fluid">
      
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
                <p>{item.answers}</p>
                <p>{item.answers1}</p>
                <p>{item.answers2}</p>
                <p>{item.answers3}</p>
                <p>{item.answers4}</p>
                <p>{item.answers5}</p>
                <p>{item.answers6}</p>
                <p>{item.answers7}</p>
                <p>{item.answers8}</p>
                <p>{item.answers9}</p>
                <p>{item.answers10}</p>
                <p>{item.answers11}</p>
                <p>{item.answers12}</p>
                <p>{item.answers13}</p>
                <p>{item.answers14}</p>
                <p>{item.answers15}</p>
                <p>{item.answers16}</p>
              </div>
            )}
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Naya;