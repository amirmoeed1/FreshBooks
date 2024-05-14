import React from "react";
import Card from "../Card/Card";
import "./Accountingpartner.css"

const Accountingpartners = () => {
  let abc3 = [
    {
      image:
        "https://www.freshbooks.com/blog/wp-content/uploads/2024/04/accountants-client-communications-370x247.jpg",

      dscrp:
        "Stress-Free Client Communications Best Practices, for Accountants",
    },
    {
      image:
        "https://www.freshbooks.com/blog/wp-content/uploads/2024/03/freshbooks-integrations-accountants-370x247.jpeg",

      dscrp: "12 Best FreshBooks Apps for Accountants",
    },
    {
      image:
        "https://www.freshbooks.com/blog/wp-content/uploads/2024/01/client-onboarding-freshbooks-370x247.jpg",

      dscrp: "Accountants: Best Practices for Client Onboarding to FreshBooks",
    },
  ];
  return (
    <div>





      <h2 class="section-title">FreshBooks Accounting Partners</h2>
      <div
        style={{ maxWidth: "1400px" }}
        className=" d-flex  wrap px-5  h-50  mx-auto casestudy "
      >
        {abc3.map((data, index) => {
          return <Card key={index} item={data}></Card>;
        })}
        <div
          className="card position-relative shadow card-img-top2   wrap"
           
        >
          
          <div className="card-body mt-5 pt-5  ">
            <b> FreshBooks for Accontants and Bookkeepers</b>
            <p
              // style={{ fontSize: "16px", fontWeight: "600" }}
              className="card-text ms-5 mb-5 dscr  mt-4  col-md-9"
            >
              
              Work better together with your small-business clients. 
     

              </p>
            <a
              href="#"
              className="btn p-2 color-btn-1 col-md-9   "
              >
              Read More
            </a>
              
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accountingpartners;
