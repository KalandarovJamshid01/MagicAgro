import React from "react";
import { Link } from "react-router-dom";
import { Content } from "../../Actions/content";
import { useSelector, useDispatch } from "react-redux";

function DocumentLeftMenuArea() {
   const { yoriq } = useSelector((state) => state.bosqichId);
   const disp = useDispatch();
   return (
      <>
         <div className="col-lg-3 order-1">
            <div className="document-left-menu position-sticky">
               {yoriq?.map((val) => (
                  <div className="left-menu-item">
                     <h5
                        onClick={() => disp(Content(val?._id))}
                        className="accordion-button"
                        id="heading01"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse01"
                        aria-controls="collapse01"
                     >
                        {val?.name} <span>01</span>
                     </h5>
                     <div
                        id="collapse01"
                        className="accordion-collapse collapse show"
                        aria-labelledby="heading01"
                     >
                        <ul className="sub-menu">
                           <li>
                              <Link to={"#"}>sizga kerakli bo'lgan eng foydali ma'lumotlar</Link>
                           </li>
                        </ul>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </>
   );
}

export default DocumentLeftMenuArea;
