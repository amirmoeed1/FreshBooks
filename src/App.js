import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Payment from "./component/Paymants";
import Bookkeepingindex from "./component/Bookkeeping";
import Maininvocing from "./component/invocing";
import { Time } from "./component/time traking/time";
import Expenceindex from './component/Expense';
import Mileagee from "./component/milage";
import Acounting from "./component/acounting";
import Body from "./component/mainpage/body";
import Blog from "./component/Blog/Blog";
import Payroll from "./component/payroll/Payroll";
import Header from "./component/mainpage/header";
import Contact from "./component/contact/Contact";
import { Login } from "./component/login/login";
import { Singup } from "./component/singup/singup";
// import Header from "./component/mainpage/header";
// import Footeer from "./footeer";
// const CLIENT_ID ='64657723314-mrtjdkhco5q7trdrip9qh3mjktlra9f3.apps.googleusercontent.com'


// import Pics from './component/Bookkeeping/sulman';
function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={< Body/>}/>
          <Route path='/invoice' element={<Maininvocing/>}/>
          <Route path="/payments" element={<Payment />}/>
          <Route path='/timesheets-and-time-tracking' element={<  Time/>}/>
          <Route path='/accounting' element={< Acounting />}/>
          <Route path='/mileage-tracking-app' element={< Mileagee />}/>
          <Route path="/bookkeeping" element={<Bookkeepingindex />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/payroll-software" element={<Payroll/>} />
          <Route path='/expenses-and-receipts-tracking' element={< Expenceindex />}/>

          <Route path='/Blog' element={< Blog/>}/>
          {/* <Route path='/8' element={< Header/>}/> */}
          <Route path='/sign_in' element={<Login/>}/>
          <Route path='/sign_up' element={< Singup/>}/>
        </Routes>
      </BrowserRouter>
      

    </>
  );
}

export default App;
