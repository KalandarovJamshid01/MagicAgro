import React from "react";
import { Link } from "react-router-dom";

function SupporForumArea() {
   const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
   return (
      <>
         <div className="support-area support-area-design-2">
            <div className="container">
               <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                     <div className="section-title mb-70 text-center">
                        <h1>Formni qo'llab quvvatlash</h1>
                        <p>
                           mazkur platformani qo'llab quvvatlash uchun ko'proq savol bering va
                           savolga javob bilsangiz savolni javobini berishingizni so'rab qolamiz
                        </p>
                     </div>
                  </div>
               </div>
               <div className="row g-4">
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                     <div className="support-box support-box-design-2">
                        <div className="support-icon-wrap">
                           <img
                              src={process.env.PUBLIC_URL + "/images/icons/support-icon-1.svg"}
                              alt="SuportIMG"
                           />
                        </div>
                        <div className="support-content text-center">
                           <h2>
                              <Link to={"#"}>Savol berish</Link>
                           </h2>
                           <Link
                              onClick={scrollTop}
                              to={`${process.env.PUBLIC_URL}/#`}
                              className="read-btn"
                           ></Link>
                        </div>
                        <span>8 Article</span>
                     </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                     <div className="support-box support-box-design-2">
                        <div className="support-icon-wrap">
                           <img
                              src={process.env.PUBLIC_URL + "/images/icons/support-icon-1.svg"}
                              alt="SuportIMG"
                           />
                        </div>
                        <div className="support-content text-center">
                           <h2>
                              <Link to={"#"}> Savolga javob berish</Link>
                           </h2>
                           <Link
                              onClick={scrollTop}
                              to={`${process.env.PUBLIC_URL}/#`}
                              className="read-btn"
                           ></Link>
                        </div>
                        <span>6 Article</span>
                     </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                     <div className="support-box support-box-design-2">
                        <div className="support-icon-wrap">
                           <img
                              src={process.env.PUBLIC_URL + "/images/icons/support-icon-1.svg"}
                              alt="SuportIMG"
                           />
                        </div>
                        <div className="support-content text-center">
                           <h2>
                              <Link to={"#"}>Formga o'tish</Link>
                           </h2>
                           <Link
                              onClick={scrollTop}
                              to={`${process.env.PUBLIC_URL}/#`}
                              className="read-btn"
                           ></Link>
                        </div>
                        <span>5 Article</span>
                     </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                     <div className="support-box support-box-design-2">
                        <div className="support-icon-wrap">
                           <img
                              src={process.env.PUBLIC_URL + "/images/icons/support-icon-2.svg"}
                              alt="SuportIMG"
                           />
                        </div>
                        <div className="support-content text-center">
                           <h2>
                              <Link to={"#"}>Biz bilan bog'lanish</Link>
                           </h2>
                           <Link
                              onClick={scrollTop}
                              to={`${process.env.PUBLIC_URL}/#`}
                              className="read-btn"
                           ></Link>
                        </div>
                        <span>3 Article</span>
                     </div>
                  </div>
               </div>
               <div className="row mt-80">
                  <div className="btn-wrap btn-wrap-center">
                     <Link
                        className="common-btn btn-style-3"
                        onClick={scrollTop}
                        to={`${process.env.PUBLIC_URL}/`}
                     >
                        Barcha bo'limlar
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default SupporForumArea;
