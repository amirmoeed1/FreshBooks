import React from "react";
import "./ebook.css"

const Ebook = () => {
  return (
    <div className="text-center  p-5 ">
      <h2>eBooKs</h2>
      <div   className="d-flex wrap p-4  ">
        <div style={{width:"300px"}}  className="overflow-hidden  p-4 ">
          <img
            className="w-100 shadow rounded"
            src="https://www.freshbooks.com/blog/wp-content/uploads/2021/04/Homepage_Tile.jpg"
            alt=""
          />
        </div>
        <div style={{width:"300px"}} className="overflow-hidden  p-4 ">
          <img
            className="w-100  shadow rounded"
            src="https://www.freshbooks.com/blog/wp-content/uploads/2022/03/Accountant-Matters-Homepage_Tile.jpg"
            alt=""
          />
        </div>
        <div style={{width:"300px"}} className="overflow-hidden  p-4  ">
          <img
            className="w-100 shadow rounded"
            src="https://www.freshbooks.com/blog/wp-content/uploads/2022/05/Standing-Out-From-the-Crowd_Homepage-Tile.png"
            alt=""
          />
        </div>
        <div style={{width:"300px"}} className="overflow-hidden  p-4 ">
          <img
            className="w-100 shadow rounded"
            src="https://www.freshbooks.com/blog/wp-content/uploads/2022/09/Student-Debt-Homepage-Tile.png"
            alt=""
          />
        </div>
      </div>
     <div className="d-flex wrap justify-content-end">

      <a href="https://www.freshbooks.com/blog/case-studies/ebooks" class="more-articles">More eBooks</a>
     </div>
      </div>
  
  );
};
<div>
  
</div>

export default Ebook;
