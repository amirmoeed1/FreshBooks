import React, { useEffect, useState } from "react";
import "./Productnews.css"

const Productnews = () => {
  let some;
  useEffect(() => {
   some = [
      {
        title: "What's New in FreshBooks - 2024",
        image:
          "https://www.freshbooks.com/blog/wp-content/uploads/2024/01/Roundup-Hero-2x-144x96.png",
      },
      {
        title: "Multiple Income Streams? Now You Can Track Them Independently",
        image:
          "https://www.freshbooks.com/blog/wp-content/uploads/2023/10/invoice-income-categorization-144x96.jpg",
      },
      {
        title: " What’s New in FreshBooks – 2023",
        image:
          "https://www.freshbooks.com/blog/wp-content/uploads/2023/01/2023-Roundup-5-144x96.png",
      },
      {
        title: "Simplify Your Payroll: Pay Your People Right From FreshBooks",
        image:
          "https://www.freshbooks.com/blog/wp-content/uploads/2024/01/freshbooks-payroll-144x96.jpg",
      },
      {
        title:
          "Accurately Track Meetings and Maximize Profits with Google Calendar",
        image:
          "https://www.freshbooks.com/blog/wp-content/uploads/2015/03/Form-8829-blog-hero-852-x-568-144x96.jpg",
      },
      {
        title:
          " Wondering How to Record Overpayment in Accounting Software? Credits on FreshBooks Makes It Easy",
        image:
          "https://www.freshbooks.com/blog/wp-content/uploads/2021/02/Credits-Blog-Hero-2-144x96.jpg"
      },
      {
        title: "New Year’s Resolution? Fix the Way We Do Payroll",
        image:
          "https://www.freshbooks.com/blog/wp-content/uploads/2023/12/freshbooks-payroll-teaser-144x96.jpg"
      },
      {
        title:
          "How to Set Up a Bank Transfer (ACH Payment) on FreshBooks in a Few Easy Steps",
        image:
          "https://www.freshbooks.com/blog/wp-content/uploads/2019/03/blog_0004_ACH-Payments-on-FreshBooks-144x96.jpg"
      },
      {
        title:
          " Create 1-Step Online Payment Links, With FreshBooks Checkout Links",
        image:
          "https://www.freshbooks.com/blog/wp-content/uploads/2020/07/checkout-links-1-144x96.jpg"
      },
      
    ];

    let thrice = transformArray(some,3);
    setNews(thrice);

  }, []);
  let [news, setNews] = useState([]);


  function transformArray(array) {
    const chunkedArray = [];
    let chunk = [];
    for (let i = 0; i < array.length; i++) {
      if (chunk.length === 3) {
        chunkedArray.push(chunk);
        chunk = [];
      }
      chunk.push(array[i]);
    }
    if (chunk.length > 0) {
      chunkedArray.push(chunk);
    }
    return chunkedArray;
  }

  return (
    <div className=" mx-auto" style={{ width: "80%" }}>
      <h2 class="section-title">Product News</h2>
      <div className="container ">
        <div className="row d-flex ">
          {news.map((thrice) => {
            return (
              <div className="col-4">
                {thrice.map((item) => {
                  console.log(item);
                  return (
                    <div className="py-4 d-flex align-items-start  ">
                      <img style={{ width: "30%" }} src={item?.image} alt="" />
                      <span
                        style={{ fontSize: "0.8rem" }}
                        className="ps-4 d-block fw-lighter  "
                      >
                        {item?.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      <div className="d-flex px-4 justify-content-end mx-5">
        <a
          href="https://www.freshbooks.com/blog/freshbooks-news/product-news"
          class="more-articles"
        >
          More Product News
        </a>
      </div>
    </div>
  );
};

export default Productnews;
