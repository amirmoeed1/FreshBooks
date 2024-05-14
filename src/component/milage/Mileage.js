import React,{useState} from 'react'
import Naya from './Naya';
// import Hide from '../Hide/Hide';
// import { Pics } from '../Pics/Pics';
// import Footer from '../Footer/Footer';
import './Mileage.css';
function Mileage() {

  return (
    <>
    <div id="mileage">
      <div className='second  '>

        <div className='first-2' >
          <h1 className='heading1'>MILEAGE TRACKING</h1>
          <h2  className='max-auto text-center '>Never Miss a Trip With Our Automated<br/> Mileage Tracker App</h2>
          <p>ExcellentStar Rating(Based on 4,380 GetApp reviews)</p>
          <button className='btn'>Try It Free</button>
          <p>Try it Free for 30 Days! No credit card required. Cancel anytime.</p>
          <img className='w-75 h-90 mt-5' src='/assets/mileage-tracking.webp'></img>
          <p className=' p-tag mt-5  '>BUSINESS OWNERS LOVE FRESHBOOKS MILEAGE TRACKER APP</p>

        </div>


      </div>
      
      {/* -------------------secon-section */}

      <div class=' container mt-5'>
        <div class='row'>

          <div class='col-lg-6 col-md-6 col-sm-12  m-auto '>

            <h4 className='fs-2'>Log Trips as You Drive, Hands-Free</h4>
            <p className=''>Every time your car moves in the name of business it’s an expense you can claim at tax time.
              FreshBooks Mileage Tracking automatically logs each trip and also saves your travel history..</p>
            <button class='btn'>Try It Free</button>


          </div>
          <div class='col-lg-6 col-md-6 col-sm-12 m-auto'>

            <img className=' w-75 h-90 mt-5' src='/assets/mobileBilling.webp'></img>
          </div>
        </div>
      </div>
        {/* ------------------third-section */}
      <div class='container-fluid mt-5 '>
        <div className='color'>
          <div class='row'>

            <div class='col-lg-6 col-md-6 col-sm-12 m-auto text-md-left p-5 '>

              <h4 className='fs-2'>More Organized While on the Road </h4>
              <p className='col-md-7'>The last thing you need is paper trip logs. Easily swipe your screen to classify a trip as business
                or personal, then send a mileage report directly to your email or download it from FreshBooks.</p>
              <button class='btn'>Try It Free</button>


            </div>
            <div class='col-lg-6 col-md-6 col-sm-12 m-auto'>

              <img className='w-75 h-90 mt-5' src='/assets/mobileExpenses.webp'></img>
            </div>
          </div>
        </div>
      </div>
      {/* -------------------four-section */}
      <div class='container  mt-5 px-lg-5 px-4'>
        <div class='row'>

          <div class='col-lg-6 col-md-6 col-sm-12  m-auto '>

            <h4 className='fs-2'>Be Tax Compliant and Get Your Best Return</h4>
            <p className='col-md-7'>TFreshBooks Mileage Tracking shows potential tax deductions for every business trip.
              Download accurate and ready-to-be-filed reports to deduct every mile and reduce your taxable income.</p>
            <button class='btn'>Try It Free</button>


          </div>
          <div class='col-lg-6 col-md-6 col-sm-12 m-auto'>

            <img className='w-75 h-90 mt-5 mx-auto' src='/assets/mobileWork.webp'></img>
          </div>
        </div>
      </div>




      {/* --------------------------five-section */}


      <div className='p-5   bg-primary'>
        <div className='row p-5 '>

          <div class='col-md-4 m-auto col-sm-8 '>
            <h4 className='f1 mb-5' >WHAT ELSE?</h4>
            <h4 className='f2 fs-1 mb-5'>Do Even More With Mileage Tracking</h4>
            <button class='btn2'>Try It Free</button>
            <p className='p5 ' >No credit card required. Cancel anytime</p>

          </div>



          <div className='dis  bg-dark-blue p-4  col-md-4 col-sm-12'>

            <h4 className='fs-2'>Handy Reports</h4>
            <p>Easily download and share insightful reports with your team</p>
           <img className='w-75' src='/assets/MileageReport.webp'></img>

          </div>

          <div className='res bg-dark-blue col-md-4 col-sm-12 px-0 d-flex flex-wrap'>
            <div className=" p-3 border border-primary h-50 w-50">

              <div className='mt-3'>

                <h5>Edit and Adjust Trip Details</h5>
                <p>Manually edit trips in case of any discrepancy</p>
              </div>
            </div>

            <div className=" p-3 border border-primary h-50 w-50">
              <div className='mt-3'>
                <h5>Easy On/Off Toggle</h5>
                <p>Easily turn Mileage Tracking on and off at anytime</p>
              </div>
            </div>

            <div className=" p-3 border border-primary h-50 w-50">
              <div className='mt-3'>
                <h5>Local Rates In-App</h5>
                <p>Check mileage allowance rates for your country</p>
              </div>
            </div>

            <div className=" p-3 border border-primary h-50 w-50">
              <div className='mt-3 '>

                <h5>Easily Find Logged Trips</h5>
                <p>Sort and filter all trips by date range</p>
              </div>
            </div>
          </div>

        
      </div>
      
     
<Naya/>

        </div>






     {/* --------------six-section */}

      <div className='client '>
        <div className="container-fluid">

          <div class='row'>

            <div class='col-lg-6  col-md-6 m-auto text-md-left p-5 '>

              <h4 className='fs-2'>Have Lots of Clients and Want to Save on Transaction Fees? </h4>
              <p className=''>Our FreshBooks Select Plan could be the solution for you, saving you time and money.</p>
              <h4>The Select Plan includes:</h4>
              <ul>
                <li>A dedicated account manager to train your team and migrate your books from other platforms</li>
                <li>Access to lower credit card fees and transaction rates</li>
                <li>2 free team member accounts</li>
              </ul>
              <button class='btn3'>Talk to a Specialist</button>


            </div>
            <div class='  col-lg-6 col-md-6 col-xl-4 '>

              <img className=' h-90 col-sm-12 col-md-12 w-100' src='/assets/faqright.webp'></img>
            </div>
          </div>

          <div class='row'>

            <div class='six-section col-lg-5 col-md-6 col-xl-6  order-sm-2 order-lg-1 order-md-1   '>
              <img className='col-sm-12 col-md-12 w-100 h-90  ' src='/assets/faqleft.webp'></img>

            </div>
            <div class='col-lg-5 col-md-4 order-sm-1 '>

              <h4 className='fs-2'>Resources to Help You Save More at Tax Time</h4>
              <div className='d-flex'>
                <div className='text-group'>
                  <p>9 Common Business Expense Mistakes U.S. Freelancers Make</p>
                  <p>How to Claim Mileage on U.S. Taxes</p>
                  <p>Mileage Tracking For FreshBooks iOS and Android Apps</p>
                  <hr />
                  <h4>Get a newsletter that helps you think differently about your business</h4>
                  <input type='text' placeholder='Email Address*'>
                  </input>
                  <button className='btn7'>Subscribe</button>
                  <p className='p3'>Yes, I would like FreshBooks to send me helpful tips on how to
                    grow my business and let me know about offers and promotions.</p>
                </div>

                <div className='  btn-group '>
                  <button class='btn4 '>Read More</button>
                  <button class='btn4 '>Read More</button>
                  <button class='btn4  '>Read More</button>
                </div>
              </div>



            </div>
          </div>
        </div>
      </div>
      </div>
      
      {/* <Hide/>
      <Pics/>
      <Footer/> */}

    </>


  )
}

export default Mileage;