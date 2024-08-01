 import React from 'react'
 import { Link } from 'react-router-dom'
 import './header.css'
 const header = () => {
   return (
     <>
     <nav className="navbar navbar-expand-lg bg-body-tertiary index1  position-fixed w-100 top-0">
  <div className="container-fluid   ms-4">
     
  <Link to={'/'}>
  <img className="width-01" src="./mainpage/freshbooks-logo.svg" />
  </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
           
          </a>
        </li>
        
        <li className="nav-item ms-5 dropdown">
          <a
            className="nav-link fs-6 dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
           Features
          </a>
          <ul className="dropdown-menu  ">
            <div className='row'>
          <div className="col-lg-3 col-sm-3 ms-5">
          <li>
                <b>BILL & GET PAID</b>
              </li>
              <li className='mt-2'>
                <Link to={"/invoice"}>Invoicing</Link>
              </li>
              <li className='mt-2'> 
                <Link to={"/payments"}>Payments</Link>
              </li>
              <li className='mt-2'>
                <Link to={"/timesheets-and-time-tracking"}>
                  Time Tracking
                </Link>
              </li>
              </div>
            <div className="col-lg-3 col-sm-3">
              <li className='mt-2'>
                <b>ACCOUNTING & TAXES</b>
              </li>
              <li className='mt-2'>
                <Link to={"/accounting"}>Accounting</Link>
              </li>
              <li className='mt-2'>
                <Link to={"/expenses-and-receipts-tracking"}>
                  Expense $ Reciepts
                </Link>
              </li>
              <li className='mt-2'>
                <Link to={"/financial-reporting"}>Reports</Link>
              </li>
              <li className='mt-2'>
                <Link to={"/mileage-tracking-app"}>
                  Mileagee Tracking App
                </Link>
              </li>
              <li className='mt-2'>
                <Link to={"/bookkeeping"}>Bookkeeping</Link>
              </li>
            </div>
            <div className="col-lg-2 col-sm-2">
              <li>
                <b>LEARNING</b>
              </li>
              <li className='mt-2'>
                <Link to={'/blog'}>Blog </Link></li>
              
            </div>
            <div className="col-lg-3 col-sm-2">
              <li>
                <b> ENABLE YOUR TEAM</b>
              </li>
              <li className='mt-2'>
                <Link to={"/payroll-software"}>Payroll</Link>
              </li>
              <Link className='mt-2'>Team Management</Link>
               
            </div>
            </div>
        
      
    
          </ul>
        </li>
        <li className="nav-item ms-5">
          <a className="nav-link fs-6 " aria-disabled="true">
          Pricing
          </a>
        </li>
      </ul>
      {/* for search  */}
      {/* <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form> */}
      <li className="text-dark  px-5" aria-disabled="true"  href="">
    +923086793427
  </li>
  
  <li>
  <Link className=" ms-5 mt-2 text-dark " to={"/contact"}>
    Contact us
  </Link></li>
  <li>
  <Link className=" ms-5 mt-2 text-dark" to={"/sign_in"}>
    Login
  </Link></li>
  <button className="buton-1 mt-2  ms-5 ">Try It Free</button>
    </div>
  </div>
 
</nav>

     </>
   )
 }
 
 export default header
 