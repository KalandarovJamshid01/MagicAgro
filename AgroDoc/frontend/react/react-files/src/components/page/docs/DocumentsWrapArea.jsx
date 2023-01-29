import React from "react";
import DocumentationBox from "../../common/DocumentationBox";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function DocumentsWrapArea() {
   const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

   const { yoriq } = useSelector((state) => state.yoriqId);
   return (
      <>
         <div className="documents-area pt-100 mb-100">
            <div className="container">
               <div
                  style={{ display: "flex", flex: "3", width: "100%" }}
                  className="row g-4 align-items-center  col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12"
               >
                  {yoriq?.map((val) => (
                     <DocumentationBox
                        val={val}
                        icon="/images/icons/extension.svg"
                        title="Admin Panel"
                     />
                  ))}
               </div>
               <div  className="row mt-40">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                     <div className="pagination-wrap text-center">
                        <ul>
                           <li>
                              <Link onClick={scrollTop} to={"#"}>
                                 <i className="bi bi-arrow-left" />
                              </Link>
                           </li>
                           <li>
                              <Link onClick={scrollTop} to={"#"}>
                                 01
                              </Link>
                           </li>
                           <li>
                              <Link onClick={scrollTop} to={"#"}>
                                 02
                              </Link>
                           </li>
                           <li>
                              <Link onClick={scrollTop} to={"#"}>
                                 03
                              </Link>
                           </li>
                           <li>
                              <Link onClick={scrollTop} to={"#"}>
                                 <i className="bi bi-arrow-right" />
                              </Link>
                           </li>
                        </ul>
                     </div>
                  </div>
                  
               </div>
            </div>
         </div>
      </>
   );
}

export default DocumentsWrapArea;
