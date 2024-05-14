import React from 'react'
import './Footer.module'
import Dropdown from './Dropdown';
import Naya from './Naya';

function Footer() {
  return (
     <>
      {/* <Dropdown/> */}
         <div id="footer">
     
         <div className="container hiid">
  <div className="footer ">
        <div className=" row  ">
    <div className='col-md-2 col-sm-2'> <img className='  logo ' src="logo.svg" alt="" /></div>

    <div className=' col-md-2 col-sm-2'>
        <ul className='words'>
           <li><a className=''  href=""><span>COMPANY</span></a></li> 
            <li><a  href=""><span>About Us </span></a></li>
            <li><a  href=""><span>Our Story</span></a></li>
            <li className='specific'><a href=""><span>Diversty And Inclusity </span></a></li>
            <li><a  href=""><span>Career </span></a></li>
            <li><a  href=""><span>Contact </span></a></li>
            <li><a  href=""><span>Press Center </span></a></li>
    </ul>
    </div>
    
    <div className=' col-md-2 col-sm-2'>
    <ul className='words'>
    <li><a className=''  href=""><span>WHO IT'S FOR</span></a></li> 
            <li><span>BUSSINESS SIZE </span></li>
            <li><a  href=""><span>Freelancers</span></a></li>
            <li className='specific pt-2 pb-2'><a  href=""><span>Bussinesses with <br /> contractor </span></a></li>
            <li className='specific'><a  href=""><span>Bussinesses with <br /> Employees</span></a></li>
            <li className='specific pt-2 pb-4'><a  href=""><span>Self-Empolyed <br /> Professionals </span></a></li>
            <li className='pb-2'><span>BUSINESS INDUSTRY  </span></li>
            <li><a  href=""><span>Accountants</span></a></li>
            <li><a  href=""><span>Construction</span></a></li>
            <li><a  href=""><span>Consultants</span></a></li>
            <li><a  href=""><span>Legal</span></a></li>

    </ul>
    </div>
      
    <div className='col-md-2 col-sm-2'>
    <ul className='words'>
    <li><a className=''  href=""><span>PARTNERS</span></a></li> 
           
            <li><a  href=""><span>Partners</span></a></li>
            <li><a  href=""><span>Affliate program </span></a></li>
            <li><a  href=""><span>Apps</span></a></li>
            <li><a  href=""><span>Developers </span></a></li>
            <li><a  href=""><span>Education </span></a></li>
            <li><a  href=""><span>Referral Program </span></a></li>
    </ul>
    </div>
   

    <div className='col-md-2 col-sm-2'>
    <ul className='words'>
    <li><a className=''  href=""><span>HELPFULL LINKS</span></a></li> 
           
            <li><a  href=""><span>Accounting Software</span></a></li>
            <li><a  href=""><span>Accounting Templates </span></a></li>
            <li><a  href=""><span>Blog</span></a></li>
            <li><a  href=""><span>Glossary </span></a></li>
            <li><a  href=""><span>Login </span></a></li>
            <li><a  href=""><span>Pricing </span></a></li>
            <li><a  href=""><span>QuickBooks Alternative </span></a></li>
            <li><a  href=""><span>Resource Hub </span></a></li>
            <li><a  href=""><span>Sign Up </span></a></li>
            <li><a  href=""><span>Sitemap</span></a></li>
            <li><a  href=""><span>Support</span></a></li>
            <li><a  href=""><span>Tools </span></a></li>
    </ul>
    </div>

    

    <div className='col-md-2 col-sm-2'>
        <ul className='words'>
        <li><a  href=""><span>POLICIES </span></a></li>
            <li><a  href=""><span>Accessibility</span></a></li>
            <li><a  href=""><span>Privacy Policy</span></a></li>
            <li><a  href=""><span>Security Safeguards </span></a></li>
            <li><a  href=""><span>Terms of Service </span></a></li>
    </ul>
    </div>

      </div>

        </div>
    </div>
    </div>
<Naya/>

    
    </>
  )
}







export default Footer;








