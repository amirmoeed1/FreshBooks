import React from 'react'
import "./Expence.css"
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';



function Expence() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <>
            <div className="container-fluid" id='fluid'>
                <div className='row '>
                    <div className='col-sm-12 mt-5 pt-3'>
                        <div className='expence'>
                            <div className="expence-content justify-content-center p-4  w-55  ">
                                <h1 className='expence-heading '>Expense Tracking Made Simple</h1>
                                <p className='expence-paragraph  w-50'>FreshBooks powerful and simple expense tracker makes tracking business expenses ridiculously easy. You’ll know at a glance what you’re spending and how profitable you are, without the headache of spreadsheets or shoeboxes of receipts.</p>
                                <button className='btn btn-success1 mb-3 ' id='button'>TRY IT FREE</button>
                                <p className='after-btn ps-3'>No credit card required. Cancel <br></br><span className='ms-5 ps-4'>anytime</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end expence */}

            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <nav className="navbar navbar-expand-lg bg-light">
                            <button
                                className="navbar-toggler mx-auto"
                                type="button"
                                onClick={toggleDropdown}
                            >
                                <span className="nav-link dropdown-toggle">Expense</span>
                            </button>
                            <div className={`collapse navbar-collapse justify-content-space ${dropdownOpen ? 'show' : ''}`}>
                                <ul className="navbar-nav w-100 justify-content-around">
                                    <li className="nav-item">
                                        <Link className="nav-link" to={'http://localhost:3000/invoice'}>Invoicing</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to={'http://localhost:3000/expenses-and-receipts-tracking'}>Expense</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link"   to={'http://localhost:3000/timesheets-and-time-tracking'}>Time Tracking</Link>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Project</a>
                                    </li>
                                    <li className="nav-item">
                                        < Link to="http://localhost:3000/bookkeeping" className="nav-link"  >Bookkeeping</Link>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Payments</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Accounting</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a
                                            className="nav-link dropdown-toggle"
                                            href="#"
                                            role="button"
                                            onClick={toggleDropdown}
                                        >
                                            Dropdown
                                        </a>
                                        <div className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
                                            <a className="dropdown-item" href="#">Reports</a>
                                            <a className="dropdown-item" href="#">Mobile</a>
                                            <a className="dropdown-item" href="#">App store</a>
                                            <a className="dropdown-item" href="#">Clients</a>
                                            <a className="dropdown-item" href="#">Payroll</a>
                                            <a className="dropdown-item" href="#">Mileage Tracking</a>
                                            <a className="dropdown-item" href="#">Proposals</a>
                                            <a className="dropdown-item" href="#">Bookkeeping</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>



            {/* nav end */}

            <div className='container-fluid mt-4                                                                                                                                                                                                                                                                                                                                                       '>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className="star d-flex justify-content-center mt-2 ">
                            <h4>Excellent</h4>
                            <img src="./Expense/yellow.svg" alt="" />
                            <p className=''>(Based on <a href="">4,380 GetApp reviews)</a></p>
                        </div>
                    </div>
                </div>
            </div>

            {/* star end */}
            <div className='container-fluid mt-5'>
                <div className='row justify-content-center'>
                    <div className='col-lg-2 order-lg-2 text-center'></div>
                    <div className='col-lg-4   col-md-8  col-sm-8 order-lg-3 md-text-center  sm-text-centermx-auto  '>
                        <h1 className=' '>Track Your Business Expenses Without Lifting a Finger</h1>
                        <p className='business-paragraph'>
                            Connect your bank account or credit card to FreshBooks and say goodbye to manual entry. Every day your FreshBooks account will be updated with your most recent spending so your business is always automatically up-to-date.
                        </p>
                        <button className="btn btn-success1" id='button'>TRY IT FREE</button>
                    </div>
                    <div className='col-lg-5 order-lg-1 col-md-8 col-sm-9 text-center mx-auto mb-4 mb-lg-1 mt-4'>
                        <img className='business-img img-fluid mx-auto w-75' src="Expense/thridpic.webp" alt="" />
                    </div>
                </div>
            </div>

            {/* business end */}

            <div className='container-fluid mt-5'>
                <div className='row'>
                    <div className='col-lg-6  ps-5 '>

                        <h1 className='scan-heading'>Automatic Mobile Receipt Scanning</h1>
                        <p className="scan-paragraph">
                            The fastest way to log and categorize expenses in your account.
                        </p>
                        <ul className='dot'>
                            <li> <img className='tic' src="tic.svg" alt="" /> Scan and save paper and digital receipts</li>
                            <li><img className='tic' src="tic.svg" alt="" /> Auto-capture the merchant, totals, and taxes</li>
                            <li><img className='tic' src="tic.svg" alt="" /> Email receipts directly to your account to capture transactions</li>
                            <a href="">Learn more about capturing expenses</a>
                        </ul>
                        <button className="btn btn-success1 " id='button'>TRY IT FREE</button>
                    </div>
                    <div className='col-lg-5  text-center mb-4 mb-lg-1 mt-4'>
                        <img className='business-img img-fluid mx-auto w-75' src="Expense/scan.webp" alt="" />
                    </div>
                </div>
            </div>
            {/* automatic */}

            <div className='container-fluid mt-5'>
                <div className='row justify-content-center'>
                    <div className='col-lg-2 order-lg-2 text-center'></div>
                    <div className='col-lg-4  col-md-8  col-sm-8 order-lg-3 md-text-center  sm-text-center mx-auto  '>
                        <h1 className='never-heading'>Never Lose Another Receipt</h1>
                        <p className='never-paragraph w-75'>
                            Stop worrying about having to remember every last detail yourself. Snap a picture of a receipt, log it, and let FreshBooks keep things organized for you in the cloud.
                        </p>
                        <button className="btn btn-success1 " id='button'>TRY IT FREE</button>
                    </div>
                    <div className='col-lg-5 order-lg-1 col-md-8 col-sm-9 text-center mx-auto mb-4 mb-lg-1 mt-4'>
                        <img className='business-img img-fluid mx-auto w-75' src="Expense/neverlose.webp" alt="" />
                    </div>
                </div>
            </div>
            {/* neverlose */}

            <div className='container-fluid mt-5'>
                <div className='row justify-content-center'>
                    <div className='col-lg-2 order-lg-2 text-center'></div>
                    <div className='col-lg-4 col-md-8 col-sm-8 order-lg-1 md-text-center  sm-text-center mx-auto  '>
                        <h1 className='category-heading'>Make Tax Time a Breeze</h1>
                        <p className="category-paragraph">
                            Categorization of expenses in FreshBooks is made with tax time in mind, so it’s easy for you (or your accountant) to file. At tax time you have all the information you need without any of the complexity.
                        </p>
                        <button className="btn btn-success1 ms-4" id='button'>TRY IT FREE</button>
                    </div>
                    <div className='col-lg-5 order-lg-2 col-md-8 col-sm-9 text-center mx-auto mb-4 mb-lg-1 mt-4'>
                        <img className='business-img img-fluid mx-auto w-75' src="Expense/category.webp" alt="" />
                    </div>
                </div>
            </div>
            {/* category */}

            <div className='container-fluid mt-5'>
                <div className='row justify-content-center'>
                    <div className='col-lg-2 order-lg-2 text-center'></div>
                    <div className='col-lg-4   col-md-8  col-sm-8 order-lg-3 md-text-center  sm-text-center mx-auto  '>
                        <h1 className='bill-heading'>Easily Bill Your Client for Expenses</h1>
                        <p className='bill-paragraph'>
                            Forget about leaving money on the table. With FreshBooks you can quickly mark your business expenses as billable, add a markup, and then automatically pull them onto an invoice for your client.
                        </p>
                        <button className="btn btn-success1 " id='button'>TRY IT FREE</button>
                    </div>
                    <div className='col-lg-5 order-lg-1 col-md-8 col-sm-9 text-center mx-auto mb-4 mb-lg-1 mt-4'>
                        <img className='business-img img-fluid mx-auto w-75' src="Expense/bill.webp" alt="" />
                    </div>
                </div>
            </div>
            {/* bill */}

            <div className='container-fluid mt-5'>
                <div className='row justify-content-center'>
                    <div className='col-lg-2 order-lg-2 text-center'></div>
                    <div className='col-lg-4   col-md-8  col-sm-8 order-lg-1 md-text-center  sm-text-center mx-auto  '>
                        <h1 className='track-heading'>Keep Project Spending on Track</h1>
                        <p className="track-paragraph">
                            Tracking expenses in FreshBooks means your team can keep tabs on what they’re spending on projects. It also means you can keep a close eye on how things are tracking to budget.
                        </p>
                        <button className="btn btn-success " id='button'>TRY IT FREE</button>
                    </div>
                    <div className='col-lg-5 order-lg-2 col-md-8 col-sm-9 text-center mx-auto mb-4 mb-lg-1 mt-4'>
                        <img className='business-img img-fluid mx-auto mx-lg-0 w-75' src="Expense/track.webp" alt="" />
                    </div>
                </div>
            </div>

            {/* track */}

            <div className='container-fluid mt-5 '>
                <div className='row'>

                    <div className='col-lg-5  col-md-8 md-text-center mx-auto '>
                        <h1 className='doyouknow-heading fs-2'>Other Ways FreshBooks Makes Expense Tracking Easy</h1>
                        <ul>
                            <li>Multi-currency expenses</li>
                            <li>Auto-categorization of expenses</li>
                            <li>Tax friendly categories</li>
                            <li>Easily assign recurring expenses</li>
                            <li>Automatically import expenses from your bank</li>
                            <li>Easily mark expenses to rebill to a client later</li>
                            <li>Snap and store pictures of receipts in the mobile app</li>
                            <li>Secure receipt storage in the cloud so mobile and desktop are always in sync</li>
                        </ul>
                        <a href="">See more ways FreshBooks helps keep you organized</a>
                    </div>
                    <div className='col-lg-6 ' >
                        <div className='style'>
                            <img className='card-image w-25 d-grid mx-auto' src="Expense/lastwala.jpg" alt="" />

                            <div className='col-lg-1 order-lg-2'></div>
                            <div class="card w-50 mx-auto" >
                                <div class="card-body text-center">
                                    <h5 class="card-title" id='title'>Did You Know…</h5>
                                    <p class="card-text"> With the time and energy you’ll save every month, FreshBooks ends up paying for itself…</p>
                                    <button className="btn btn-success1 " id='button'>TRY IT FREE</button>
                                    <p >No credit card required.Cancel anytime.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}

export default Expence