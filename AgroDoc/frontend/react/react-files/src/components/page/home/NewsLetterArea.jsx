import React from "react";

function NewsLetterArea() {
   return (
      <>
         <div className="newsletter-area">
            <div className="container">
               <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                     <div
                        className="newsletter-wrap newsletter-wrap-design-2 d-flex align-items-center  justify-content-center"
                        style={{ height: "50px" }}
                     >
                        <h2>Bizga Obuna bo'ling</h2>
                        <form onSubmit={(e) => e.preventDefault()} action="index.html">
                           <input type="text" placeholder="Email kiriting" />
                           <i className="bx bxs-right-arrow-alt" />
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default NewsLetterArea;
