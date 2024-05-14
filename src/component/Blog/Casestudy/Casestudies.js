import React from "react";
import Card from "../Card/Card";
import "./Casestudies.css"

const Casestudies = () => {
  let abc2 = [
    {
      image:
        "https://www.freshbooks.com/blog/wp-content/uploads/2021/06/blog-hero-excentric-case-study.jpg",

      dscrp:
        "With FreshBooks, Victoria’s Marketing Agency Is Invoicing 5 Times Faster 🇨🇦",
    },
    {
      image:
        "https://www.freshbooks.com/blog/wp-content/uploads/2022/06/samantha-simms-case-study-hero.png",

      dscrp:
        "Attorney Samantha Is a Software Expert—and FreshBooks Is Her Accounting Software of Choice",
    },
    {
      image:
        "https://www.freshbooks.com/blog/wp-content/uploads/2021/06/Blog-Hero-Images.jpg",

      dscrp:
        "How FreshBooks Makes Accounting Easier for Global Entrepreneur Carolina",
    },
    {
      image:
        "https://www.freshbooks.com/blog/wp-content/uploads/2021/11/RC-Hero-Image.png ",

      dscrp:
        "Sara Uses FreshBooks Because She Knows Accounting and Getting Paid Are Tough",
    },
  ];

  return (
    <div>
      <div className="text-center  p-5 ">
        <h2 className="tc">Case studies</h2>
      </div>
      <div
        style={{ maxWidth: "1900px" }}
        className=" d-flex  wrap px-5  mx-auto casestudy "
      >
        {abc2.map((data, index) => {
          return <Card key={index} item={data}></Card>;
        })}
      </div>
      <div
        style={{ maxWidth: "1900px" }}
        className="d-flex justify-content-end px-4  mx-auto"
      >
        <a
          href="https://www.freshbooks.com/blog/case-studies/case-studies-case-studies"
          class="more-articles"
        >
          More Case Studies
        </a>
      </div>
    </div>
  );
};

export default Casestudies;
