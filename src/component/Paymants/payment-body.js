import React from 'react';

const Paymentbody = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xl-6 pt-5 col-md-10">
            <h2 className="mb-4 text-md-center col-xl-7">
              <b>
                Set Up Online  
                Payments in a Single  
                Click
              </b>
            </h2>
            <p className="  col-xl-7 text-md-center  ">
              One click is all that’s needed to accept credit  
              card payments right on invoices. Then it’s just a  
              few more steps, so FreshBooks deposits your
           
              money into the right account. Fast and easy, just  
              like you’d expect.
            </p>
            <button className="btn btn-color d-grid  col-4 mx-auto fw-bold mt-3">Try It Free</button>
          </div>
          <div className="col-sm-9 col-xl-6 col-md-11 ">
            <img src="thirdimg.webp" className="w-100 " alt="Payment Setup"></img>
          </div>
        </div>
      </div>
      {/* 4th part */}
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <img src="4thimage.webp" className="w-100" alt="Checkout Links"></img>
          </div>
          <div className="col-sm-12 col-md-6">
            <h2 className="mb-4">
              <b>
                Checkout Links:
                <br /> Accept Payments…
                <br />
                Fast
              </b>
            </h2>
            <p className="para4th">
              Post Checkout Links on your website, social, or
              <br /> anywhere else online to simply let customers
              <br /> click and pay.
            </p>
            <ul className="pt-3 list-unstyled">
              <li className="tikmark-img">Skip creating and sending invoices</li>
              <li className="tikmark-img">Accept credit cards and bank transfers</li>
              <li className="tikmark-img">Automatically send receipts to customers</li>
            </ul>
            <button className="btn btn-color fw-bold mt-3 mb-4">Learn More</button>
          </div>
        </div>
      </div>
      {/* 5th part */}
      <div className="container">
        <div className="row mt-4">
          <div className="col-sm-12 col-md-6">
            <h2 className="mb-4">
              <b>Advanced Payments: A Better Virtual Terminal</b>
            </h2>
            <p className="para4th">
              FreshBooks Advanced Payments lets you accept  credit card payments online, in person and over the phone.
            </p>
            <ul className="pt-3 list-unstyled">
              <li className="tikmark-img2">Save credit card info for easy billing later</li>
              <li className="tikmark-img2">Setup recurring billing profiles for specific clients</li>
              <li className="tikmark-img2">Add automation and create subscription-based client profile.</li>
            </ul>
            <button className="btn btn-color col-xl-5 ">Learn More</button>
            <p className="color-para text-styling has-small-font-size">*Not Available in Trial.</p>
          </div>
          
          <div className="col-sm-12 col-md-6">
            <img src="5thimage.webp" className="w-100" alt="Advanced Payments"></img>
          </div>
          
        </div>
        
      </div>
      {/* last part */}
      <div className='container'>
        <div className='row pt-5'>
          <div className='col-sm-12 col-md-6'>
            <h2><b>Robust Payment Features to Boot</b></h2>
            <ul className=' '>
              <li>Offer clients flexibility with Payment Schedules and Partial Payments</li>
              <li>Request deposits to control your cash flow</li>
              <li>Accept international currencies with Stripe</li>
              <li>Auto-generated Payments Collected Reports</li>
              <li>Fast and easy bank deposits</li>
              <li>Payment options include VISA, MasterCard, AMEX, Apple Pay</li>
              <li>Processing fees are automatically imported as expenses</li>
              <li>
                <a href='https://www.freshbooks.com/features'>See all the benefits of accepting payments in FreshBooks</a>
              </li>
            </ul>
          </div>
          <div className='col-sm-12 text-center col-md-6'>
            <img className='pt-4  rounded ' src='lastpartimg.webp' alt="Did You Know"></img>
            <div className='border m-2'>
              <h1 className='mt-4 color-22'>Did You Know…</h1>
              <p className='color-22'>80% of users that accept online payments <br/>agree that it improves client relationships.</p>
              <button className="btn mt-3 mb-4 col-lg-7  btn-color">Try It Free</button>
              <p className='text-styling'>No credit card required. Cancel anytime.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paymentbody;
