import "./Multicards.css";


const Multicard = () => {
  let abc = [
    {
      image:
        "https://www.freshbooks.com/blog/wp-content/uploads/2022/04/What-is-the-best-FreshBooks-Plan-for-your-client-370x247.png",
      button: "ACCOUNTING PARTNER PROGRAM",
      dscrp: "Accountants: What Is the Best FreshBooks Plan for Your Client?",
    },
    {
      image:
        "https://www.freshbooks.com/blog/wp-content/uploads/2024/03/freshbooks-integrations-accountants-370x247.jpeg",
      button: "ACCOUNTING PARTNER PROGRAM",
      dscrp: "12 Best FreshBooks Apps for Accountants",
    },
    {
      image:
        "https://www.freshbooks.com/blog/wp-content/uploads/2020/08/Accounting-Professionals-Program-370x247.jpg",
      button: "ACCOUNTING PARTNER PROGRAM",
      dscrp: "Welcome to the FreshBooks Accounting Partner Program",
    },
    {
      image:
        "https://www.freshbooks.com/blog/wp-content/uploads/2024/01/freshbooks-payroll-370x247.jpg",
      button: "PRODUCT $ PARTNER NEWS ",
      dscrp: "Simplify Your Payroll: Pay Your People Right From FreshBooks",
    },
    {
      image:
        "https://www.freshbooks.com/blog/wp-content/uploads/2023/01/Chris-Gaudry-FreshBooks-Four-Four-Films-Case-Study-Blog-Hero-Image-852x568-1-370x247.png",
      button: "CASE STUDIES",
      dscrp: "FreshBooks Saves This Canadian Filmmaker More Than $2,750 a Year",
    },
  ];
  return (
    <div >

      <div>
        <h1 data-sider-select-id="abb6eb84-20d1-48fd-8238-f52bbe5aa1dc" className="heading">
          Where Small Business Owners{" "}
          <span className="bg">Learn&nbsp;to&nbsp;Thrive</span>
        </h1>
        <p className="subheading mb-5 ">
          FreshBooks makes accounting painless for millions of small business
          owners. But your work doesn’t end there. Our blog is here to help!
          With actionable insights into all aspects of running a small business,
          FreshBooks helps you thrive.
        </p>
      </div>
      <div 
        style={{ marginLeft: "170px" }}
        className="fw-bold my-2   ps-5   "
      >
        TOP STORIES
      </div>
      <div
        style={{ maxWidth: "1900px" }}
        className="abc wrap px-5  mx-auto "
      >
        {abc.map((item, index) => {
          
          return (
            <div key={index} className="card position-relative shadow" style={{ width: "400px " }}>
      <img src={item?.image} className="card-img-top" alt="..." />
      <div className="card-body ">
        <h5 className="btn-mtn ">{item?.button}</h5>
        <p style={{fontSize:"16px",fontWeight:"600"}} className="card-text pb-5  dscr "> {item?.dscrp}</p>
        <p className="pb-5"></p>

        <a href="#" className="btn btn-outline-primary ms-auto mb-4 me-4 position-absolute bottom-0 end-0">
          Read More
        </a>
      </div>
    </div>


          )
          
       } )}
        <div className="multicard" ></div>
      </div>
    </div>
  );
};

export default Multicard;
