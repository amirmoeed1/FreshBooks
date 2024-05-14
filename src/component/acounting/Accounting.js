import React,{useState, useEffect} from 'react';
import Account from './Account';
import { Pics } from '../milage/Pics';
import Footer from '../milage/Footer';
import { Link } from 'react-router-dom';

import './Accounting.css';
function Accounting() {
  const [isMobile, setIsMobile] = useState(false);
  const [showMoreFeatures, setShowMoreFeatures] = useState(false); // State to control visibility of more features dropdown

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024); // Adjust breakpoint as needed
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMobileMenuChange = (event) => {
    const selectedPage = event.target.value;
    window.location.href = selectedPage; // Navigate to the selected page
  };

  const toggleMoreFeatures = () => {
    setShowMoreFeatures(!showMoreFeatures);
  };
  return (
    <>

       
         {/* -------------------first-section */}
         <div id="accounting ">
      <div className=' img-bg mt-5 pt-5 '>
        <div className='col-md-10 col-lg-8 col-xl-6 col-sm-6 px-5' >
          <h1 className='text-shadow max-auto'>Say Hello to Effortlessly Organized Books</h1>
          <p className='text-shado2 my-3'>Ensure accuracy, prove compliance, prepare detailed financial reports,
            make informed business decisions, and easily work with your
            accountant. With FreshBooks, you get flexible software that grows
            with you as your accounting needs change.
          </p>
          <button  className='buton my-sm-1 my-3'>Try It Free</button>
          <p className='text-center max-width'>No credit card required. Cancel anytime.</p>
        </div>
        <div className="min-height"></div>
      </div>

      {isMobile ? (<div className="flex-center">
        <select className="mobile-dropdown mt-4" onChange={handleMobileMenuChange}>
          <option value="http://localhost:3000/invoice">Invoicing</option>
          <option value="http://localhost:3000/expenses-and-receipts-tracking">Expenses</option>
          <option value="http://localhost:3000/timesheets-and-time-tracking">Time Tracking</option>
          <option value="http://localhost:3000/bookkeeping">Bookkeeping</option>
          <option value="http://localhost:3000/">Estimates</option>
          <option value="http://localhost:3000/payments">Payments</option>
          <option value="http://localhost:3000/accounting">Accounting</option>
          <option value="" onClick={toggleMoreFeatures}>More Features</option>
        </select>
        </div>
      ) : (
        <div className=" ">
          <ul className="d-flex py-3 pb-4 bg-light text-11 list-unstyled  border-box">
            <li>
              <Link  to={'http://localhost:3000/invoice'} className="p-3 text-decoration-none">
                Invoicing
              </Link>
            </li>
            <li>
              <Link to={'http://localhost:3000/expenses-and-receipts-tracking'} className="p-4 text-decoration-none">
                Expenses
              </Link>
            </li>
            <li>
              <Link to={'http://localhost:3000/timesheets-and-time-tracking'} className="p-4 text-decoration-none">
                Time Tracking
              </Link>
            </li>
            <li>
              <Link to="http://localhost:3000/bookkeeping" className="p-4 text-decoration-none">
                Bookkeeping
              </Link>
            </li>
            {/* <li>
              <a href="https://www.freshbooks.com/estimating-software" className="p-4 text-decoration-none">
                Estimates
              </a>
            </li> */}
            <li>
              <Link to="http://localhost:3000/payments" className="p-4 text-decoration-none">
                Payments
              </Link>
            </li>
            <li>
              <Link to="http://localhost:3000/accounting"  className="p-4 text-decoration-none">
                Accounting
              </Link>
            </li>
            <li>
              <a href="#" className="p-4 text-decoration-none" onClick={toggleMoreFeatures}>
                More Features
              </a>
              {showMoreFeatures && (
                <ul className="dropdown-menu">
                  {/* Add additional features here */}
                  <li>
                    <a href="/">Feature 1</a>
                  </li>
                  <li>
                    <a href="/ mileage-tracking-app">Feature 2</a>
                  </li>
                  <li>
                    <a href="/">Feature 3</a>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      )}

    {/* --------------------------second-section */}
      <div className='para text-center py-4 py-lg-5  mt-5' >
        <p className='mt-5'>Excellent 4.5 stars
          (Based on 4,380 GetApp reviews)</p>
        <h2>Ensure Compliance With Accurate Reporting</h2>
        <p className='paragraph'>FreshBooks Double-Entry Accounting gives you everything you need to stay<br />
          organized for tax time, stay compliant with regulations, and make decisions based<br />
          on up-to-date insights. <br />

          And with a customizable Chart of Accounts, you can keep track of every<br />
          number as your business grows.</p>
        <button className='botn'>Try It Free</button>

      </div>

   {/* ---------------third-section */}
      <div class='container mt-5 '>
        <div class='row'>

          <div className='col-lg-6 col-sm-6   align-item-center justify-content-center flex-column  flex-md-row mb-5 ' >
            <div className="mb-4 d-flex gap-3 align-items-center fs-6">
              <img src='/assets/balance-sheet.svg'></img>
              <h3 className='fs-6'>Balance Sheet</h3>
            </div>
            <div className="mb-4 d-flex gap-3 align-items-center">
              <img src='/assets/trial-balance.svg'></img>
              <h3 className='fs-6'>Trial Balance</h3><br />
            </div>
            <div className="mb-4 d-flex gap-3 align-items-center">
              <img src='/assets/general-ledger.svg'></img>
              <h3 className='fs-6'>General Ledger</h3>
            </div>
            <div className="mb-4 d-flex gap-3 align-items-center">
              <img src='/assets/cost-of-goods-sold.svg'></img>
              <h3 className='fs-6 fw-2'>Account Payable</h3> <br />
            </div>
          </div>


          <div className='col-lg-6 col-sm-6' id='second-4'>
            <div className="mb-4 d-flex gap-3 align-items-center" >
              <img src='/assets/cost-of-goods-sold.svg'></img>
              <h3 className='fs-6'>Cost Of Goods Sold</h3>
            </div>
            <div className="mb-4 d-flex gap-3 align-items-center">
              <img src='/assets/chart-of-accounts.svg'></img>
              <h3 className='fs-6'>Chart Of Accounts</h3><br />
            </div>
            <div className="mb-4 d-flex gap-3 align-items-center">
              <img src='/assets/accountant-access.svg'></img>
              <h3 className='fs-6'>Accountant Access</h3>
            </div>
            <div className="mb-4 d-flex gap-3 align-items-center">
              <img src='/assets/journal-entries.svg'></img>
              <h3 className='fs-6'>Journal Entries</h3>
            </div>

          </div>
        </div>
      </div>

      {/* -------------four-section */}
      <div class='container mt-5'>
        <div class='row'>

          <div class='para1 col-lg-6  col-md-8    '>
    
              <h4 className='max-auto fs-3'>Managing Your Books<br/> Is Simple With<br/> Advanced Accounting</h4>
              <p className='col-md-7'>Grow your business by tracking loans, new assets, and unique income and expense
                categories. Create insightful reports to see 
                where your business stands and plan for the future.</p>
              <button class='botn'>Try It Free</button>
              
           
          </div>
          <div class='col-lg-6 col-md-8'>

            <img className='w-100 h-75' src='/assets/advanced-accounting-reports.webp'></img>
          </div>
        </div>
      </div>

{/* -----------------------five-section */}

      <div className='container mt-5'>
        <div className="row">
          <div className="col-lg-5 col-md-8  ">

            <img className='w-75 h-75' src="assets/tax-time-reports@2x.png" />
          </div>

          <div className="para1 col-lg-5 mx-5 col-md-7">
            

              <h5 className='max-auto fs-3'>Know the Metrics That Matter</h5>
              <p className='col-md-7'>See where you stand without having to loop in your accountant. With FreshBooks, you can
                confidently stay on top of the health of your business, make choices based on insights, and
                understand the costs of running your business—all at a glance. Create accounting reports and
                use the accounting tools in FreshBooks so you always know the costs of running your business.</p>
              <button class='botn'>Try It Free</button>
            </div>
          
        </div>

      </div>
             {/* ------------------six-section */}
      <div className='container mt-5'>
        <div className="row">
          <div className="para1 col-lg-6  col-md-8 m-auto ">
            <h4 className='max-auto  fs-3'>Everything your<br/> Accountant Needs…and More</h4>
            <p className='col-md-7'>Invite your accountant and their team of up to 10 accountant team members to your FreshBooks
              account with just a few clicks. Your accountant will be able to update your Journal Entries and
              Chart of Accounts. Plus, they can run reports, file taxes, and help you make smart business
              decisions. All for no extra cost.

              Whether it’s tax time or you need to make
              financial decisions, working with your accountant is easy</p>
            <button className='botn'>Try It Free</button>
          </div>
          <div className=' col-lg-6 col-md-8'>

            <img className='w-100 h-75' src='/assets/invite-accountant.webp'></img>
          </div>
        </div>
      </div>
      {/* -----------------seven-section */}
      <div className='container mt-5'>
        <div className="row">
          <div className=' col-lg-6 col-md-8'>

            <img className='w-75 mt-5 h-75' src='/assets/bank-reconciliation.webp'></img>
          </div>
          <div className="para1 col-lg-5 mx-4   ">
          
              <h4 className='max-auto fs-3'>Reconcile Your Books–<br/>Fast–With Automated<br/> Bank Reconciliation</h4>
              <p className='col-md-8'>Waiting for a bank statement and comparing it to your books takes too much time, which is why
                you are going to love automated bank reconciliation. Approve, change, and import
                transactions directly from your bank account. Create a summary report and export it to Excel
                with the click of a button.</p>
              <button className='botn'>Try It Free</button>
            </div>
          </div>
        </div>
      
{/* -----------------eight-section */}
      <div className='container mt-5'>
        <div className="row">
          <div className="para1 col-lg-6  col-md-8 m-auto">
            
              <h4 className='max-auto fs-3'>Paying Bills Is a Breeze<br/> With Accounts Payable</h4>
              <p className='col-md-7'>Keep bills organized so you know where you stand with vendors. Upload an image of your
                bills, email bills to your account, and import expenses directly from your bank account. Then,
                run reports like Profit & Loss, Cash Flow Statement, and Accounts Payable Aging to see
                what’s coming in, outstanding bills, and how much sales tax you’ve paid. </p>
              <button className='botn'>Try It Free</button>
            </div>
          <div className='  col-md-6'>

            <img className='w-100 mt-5 h-75' src='/assets/accounting-ocr.webp'></img>
          </div>
          </div>
        </div>
            {/* -------------------nine-section */}
      <div className='container mt-5'>
        <div className="row">
          <div className=' col-lg-6 col-md-8'>

            <img className='w-75 mt-5 h-75' src='/assets/client-credits.webp'></img>
          </div>
          <div className=" para1 col-lg-5 mx-4 col-md-8  ">
            
              <h4 className='max-auto fs-3'>Track Every Type of<br/> Transaction With<br/> Credits</h4>
              <p className='col-md-7'>Have you ever needed to refund a client for a transaction? Or wanted to reward a loyal
                customer with a discount? With the Credits feature, you can track prepayments, overpayments, and credit
                notes, and easily apply them to future invoices–all without making a mental note to add them! </p>
              <button className='botn'>Try It Free</button>
            </div>
          </div>
        </div>
        </div>
      <Account/>
        <Pics/>
        <Footer/>
      

    </>
  )
}

export default Accounting;