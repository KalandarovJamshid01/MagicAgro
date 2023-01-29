import React from "react";
import { Link } from "react-router-dom";

function DocumentationCard(props) {
   const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
   return (
      <>
         <div className="documentation-box documentation-box-design-2">
            <div className="documentation-icon">
               <img src={`${process.env.PUBLIC_URL} ${props.icon}`} alt="docuimentationIcon" />
            </div>
            <div className="documentation-content">
               <h3>
                  <Link onClick={scrollTop} to={`${process.env.PUBLIC_URL}/`}>
                     Yangiliklar
                  </Link>
               </h3>
               <p>
                 {props.text}
               </p>
               <ul>
                  <li>
                     <Link onClick={scrollTop} to={`${process.env.PUBLIC_URL}/`}>
                        <i className="bi bi-file-earmark-text" />
                        Birinchi Qoida
                     </Link>
                  </li>
                  <li>
                     <Link onClick={scrollTop} to={`${process.env.PUBLIC_URL}/`}>
                        <i className="bi bi-file-earmark-text" />
                        Ikkinchi Qoida
                     </Link>
                  </li>
                  <li>
                     <Link onClick={scrollTop} to={`${process.env.PUBLIC_URL}/`}>
                        <i className="bi bi-file-earmark-text" />
                        Uchinchi Qoida
                     </Link>
                  </li>
                  <li>
                     <Link onClick={scrollTop} to={`${process.env.PUBLIC_URL}/`}>
                        <i className="bi bi-file-earmark-text" />
                        To'rtinchi Qoida{" "}
                     </Link>
                  </li>
               </ul>
            </div>
            <div className="btn-wrap documentation-btn-wrap">
               <Link
                  className="common-btn btn-style-4"
                  onClick={scrollTop}
                  to={`${process.env.PUBLIC_URL}/`}
               >
                  Barcha Qoidalar
               </Link>
               <i className="bi bi-chevron-right" />
            </div>
            <span>{props.cardNumber}</span>
         </div>
      </>
   );
}

export default DocumentationCard;
