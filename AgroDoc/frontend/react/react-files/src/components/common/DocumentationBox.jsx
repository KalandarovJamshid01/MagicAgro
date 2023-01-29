import React from "react";
import { Link } from "react-router-dom";
import { BosqichId } from "../Actions/bosqich";
import { useDispatch } from "react-redux";
function DocumentationBox(props) {
   const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
   const dispatch = useDispatch();
   //  alert(props?.val?.name)
   return (
      <>
         <div
            style={{ width: "100%", marginLeft: "15px" }}
            className="documentation-box documentation-knowledge-design-2"
         >
            <div className="documentation-card-header">
               <div className="documentation-icon">
                  <img src={props?.val?.photo} alt={props?.val?.name} />
               </div>
               <h3>
                  <Link onClick={scrollTop} to={`${process.env.PUBLIC_URL}/`}>
                     {/* kartoshka */}
                     {props?.val?.name}
                     {/* {props?.val?.photo} */}
                  </Link>
               </h3>
            </div>
            <div className="documentation-content">
               <ul>
                  <li>
                     <Link onClick={scrollTop} to={`${process.env.PUBLIC_URL}/document-details`}>
                        <i className="bi bi-file-earmark-text" />
                        {/* Bu kartoshka mahsulti */}
                     </Link>
                  </li>
               </ul>
            </div>
            <div className="btn-wrap documentation-knowledge-design-2-btn-wrap">
               <Link
                  className="documentation-knowledge-btn"
                  onClick={() => dispatch(BosqichId(props?.val?._id))}
                  // to={`${process.env.PUBLIC_URL}/document-details/${props?.val?._id}`}
               >
                  View More
               </Link>
               <i className="bi bi-arrow-right" />
            </div>
         </div>
      </>
   );
}

export default DocumentationBox;
