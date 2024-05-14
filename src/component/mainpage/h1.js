<header className='mb-5 row index1   position-fixed bg-light '>
<nav className="d-flex justify-content-between align-items-center">
  <Link to={'/'}>
  <img className="width-01" src="./mainpage/freshbooks-logo.svg" />
  </Link>

  <ul className="list mt-4 h-75">
    <li className="fs-6 mt-2 ">
      Features{" "}
      <svg width={10} height={6} xmlns="http://www.w3.org/2000/svg">
        <path
          stroke="#686868"
          strokeWidth="1.5"
          fill="none"
          d="m1 1 4 4 4-4"
        />
      </svg>
      <ul className="dropdown">
        <div className="continer-fluid">
          <div className="row mart-1">
            <div className="col-lg-3 ms-5">
              <li>
                <b>BILL & GET PAID</b>
              </li>
              <li>
                <Link to={"/invoice"}>Invoicing</Link>
              </li>
              <li>
                <Link to={"/payments"}>Payments</Link>
              </li>
              <li>
                <Link to={"/timesheets-and-time-tracking"}>
                  Time Tracking
                </Link>
              </li>
            </div>
            <div className="col-lg-3 col-sm-4">
              <li>
                <b>ACCOUNTING & TAXES</b>
              </li>
              <li>
                <Link to={"/accounting"}>Accounting</Link>
              </li>
              <li>
                <Link to={"/expenses-and-receipts-tracking"}>
                  Expense $ Reciepts
                </Link>
              </li>
              <li>
                <Link to={"/financial-reporting"}>Reports</Link>
              </li>
              <li>
                <Link to={"/mileage-tracking-app"}>
                  Mileagee Tracking App
                </Link>
              </li>
              <li>
                <Link to={"/bookkeeping"}>Bookkeeping</Link>
              </li>
            </div>
            <div className="col-lg-2">
              <li>
                <b>LEARNING</b>
              </li>
              <li>
                <Link to={'/blog'}>Blog </Link></li>
              
            </div>
            <div className="col-lg-3">
              <li>
                <b> ENABLE YOUR TEAM</b>
              </li>
              <li>
                <Link to={"/payroll-software"}>Payroll</Link>
              </li>
              <li>Team Management</li>
              <li>
                <b>Business App</b>
              </li>
              <li> AppStore</li>
              <li> IOS $ Andriod Apps</li>
            </div>
          </div>
        </div>
      </ul>
    </li>
    {/* <li>
      For Small Businesses{" "}
      <svg width={10} height={6} xmlns="http://www.w3.org/2000/svg">
        <path
          stroke="#686868"
          strokeWidth="1.5"
          fill="none"
          d="m1 1 4 4 4-4"
        />
      </svg>
      <ul className="dropdown drop-2">
        <div className="row">
          <div className="col-md-4 ms-5">
          <li>
          <b>BUSINESS SIZE</b>
        </li>
        <li>Freelancers</li>
        <li>Self-Employed Professionals</li>
        <li>Businesses With Employees</li>
        <li>Businesses With Contractors</li>
        </div>
        <div className="col-md-6">
          <li>
          <b> INDUSTRY TYPE</b>
        </li>
        <li>Marketing & Agencies</li>
        <li>Creatives</li>
        <li>Construction & Trades</li>
        <li>Counsulting</li>
        <li>IT & Technology</li>
        <li>Legal</li>
        <li>Business & Prof.Services</li>
        </div>
        </div>
      </ul>
    </li>
    <li>
      For Accountants{" "}
      <svg width={10} height={6} xmlns="http://www.w3.org/2000/svg">
        <path
          stroke="#686868"
          strokeWidth="1.5"
          fill="none"
          d="m1 1 4 4 4-4"
        />
      </svg>
      <ul className="dropdown drop-3">
      <div className="row">
          <div className="col-md-">
            </div>
            <div className="col-md-4 ms-5">
        <li>Acounting Partner Program</li>
        <li>Collaborative Accounting</li>
        <li>Accountant Hub</li>
            </div>
            </div>
      </ul>
    </li>
    <li>
      Resources{" "}
      <svg width={10} height={6} xmlns="http://www.w3.org/2000/svg">
        <path
          stroke="#686868"
          strokeWidth="1.5"
          fill="none"
          d="m1 1 4 4 4-4"
        />
      </svg>
      <ul className="dropdown drop-4">
      <div className="row">
          <div className="col-md-3 ms-5">
          <li>
          <b>LEARNING</b>
        </li>
        <li>Blog</li>
        <li>Glossary</li>
        <li>Hub</li>
        <li> Reports Library </li>
        <li> Podcasts</li>
        </div>
        <div className="col-md-3">
          <li>
          <b> Compare</b>
        </li>
        <li>FreshBooks vs QuickBooks</li>
        <li>FreshBooks vs HoneyBooks</li>
        <li>FreshBooks vs Harvest</li>
        <li>FreshBooks vs Wave</li>
        <li> FreshBooks vs Xero</li>
         
        </div>
        <div className="col-md-2">
          <li>
          <b> TOOLS</b>
        </li>
        <li> Free Invoice Generator</li>
        <li> Invoice Templates</li>
        <li>Acounting Templates</li>
        <li> Business Name Generator</li>
        <li>  Estimates Templates</li>
         
        </div>
        <div className="col-md-3">
          <li>
          <b> SUPPORT</b>
        </li>
        <li>  Help Center</li>
        <li>
          <b> PARTNERS</b>
        </li>
        <li>  Partners</li>
        <li>
          <b> CALCULATORS</b>
        </li>
        <li>  Business Loan Calculator</li>
        <li>   Mark Up Calculator</li>
        </div>
        </div>
      </ul>
    </li> */}
    <li className='fs-6 mt-2 ms-5'>Pricing</li>
  </ul>
  <a className="text-dark  px-4" href="">
    +923497672117
  </a>
  <Link className=" text-dark " to={"/contact"}>
    Contact us
  </Link>
  <Link className="  text-dark" to={"/sign_in"}>
    Login
  </Link>
  {/* <div className="btn"> */}
  {/* <button id="reg">Try It Free</button> */}
  <button className="buton-1 ms-5 mt-3 mb-3">Try It Free</button>

  {/* </div> */}
</nav>
</header> 


















header{
    width: 85rem;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;    
    }
    nav{
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    /* align-items: center;  */
    /* background-color: violet; */
    }
    .nav h2{
    margin-right: 2vw;
    font-size: 2.5vw;
    }
    
    .list{
      z-index: 90;
    list-style: none;
    gap: 15px;
    font-size: 1vw;
    display: flex;
    /* margin-top: 2vh !important; */
    justify-content: center;
    }
    .list li ul{
    display: none;
    transition: 5s !important;
    position: relative;
    /* margin-top: 1vw; */
    list-style: none;
    background-color: white;
    line-height: 1.7vw;
    /* border-radius: 1vw; */
    /* box-shadow: 5px 5px 50px #d6cdcd; */
    }
    .list li{
    transition: 5s !important;
    cursor: pointer;
    
    }
     
    .list li:hover svg{
    transform: rotate(180deg);
    }
    .list li:hover ul{
    position: absolute;
    display: block;
    } 
    .dropdown li{
    padding: 0.5vw 1vw;
    /* margin-top: 1vh; */
    
    }
    .dropdown{
      margin-top: 1.2rem !important;
      width: 98rem;
     /* margin-left: -23.5rem; */
    border-top: 1px solid rgb(192, 190, 190);
    }