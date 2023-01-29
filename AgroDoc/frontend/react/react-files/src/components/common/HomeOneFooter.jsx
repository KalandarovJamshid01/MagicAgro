import React from "react";
import { Link } from "react-router-dom";

function HomeOneFooter() {
   const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
   return (
      <footer className="footer-area pt-55">
         <img
            className="shape hero-botto-footer-left"
            src={process.env.PUBLIC_URL + "/images/bg/footer-circle.png"}
            alt="IMG"
         />
         <div className="container">
            <div className="row">
               <div className="col-xl-12 col-lg-12 col-sm-12 col-12">
                  <div className="footer-wrap">
                     <div className="row justify-content-between g-sm-start g-4">
                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                           <div className="widget">
                              <div className="title">
                                 <h2 className="footer-title">Biz Haqimizda</h2>
                              </div>
                              <div className="content">
                                 <p>
                                    Bu platforma MagicAgro deb nomlanib sizning 
                                    ilmingizni oshiradi.
                                 </p>
                              </div>
                              <div className="title">
                                 <h3 className="footer-title">Bizning email manzil</h3>
                              </div>
                              <div className="contact">
                                 <p>
                                    <a href="mailto:info@website.com">info@example.com</a>
                                 </p>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-6 col-sm-12 col-6">
                           <div className="widget">
                              <div className="title">
                                 <h3 className="footer-title">Foydali linklar</h3>
                              </div>
                              <div className="link">
                                 <ul>
                                    <li>
                                       <Link onClick={scrollTop} to={`${process.env.PUBLIC_URL}/#`}>
                                          Bizning email
                                       </Link>
                                    </li>
                                    <li>
                                       <Link onClick={scrollTop} to={`${process.env.PUBLIC_URL}/#`}>
                                          Savol yo'llash
                                       </Link>
                                    </li>
                                    <li>
                                       <Link onClick={scrollTop} to={`${process.env.PUBLIC_URL}/#`}>
                                          Form
                                       </Link>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </div>

                        <div className="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-6">
                           <div className="widget">
                              <div className="title">
                                 <h3 className="footer-title">MagicDocs haqida</h3>
                              </div>
                              <div className="link">
                                 <ul>
                                    <li>
                                       <Link onClick={scrollTop} to={`${process.env.PUBLIC_URL}/`}>
                                          Sahifalar
                                       </Link>
                                    </li>
                                    <li>
                                       <Link onClick={scrollTop} to={`${process.env.PUBLIC_URL}/`}>
                                          Yo'riqnoma
                                       </Link>
                                    </li>
                                    <li>
                                       <Link onClick={scrollTop} to={`${process.env.PUBLIC_URL}/`}>
                                          Contact
                                       </Link>
                                    </li>
                                    <li>
                                       <Link onClick={scrollTop} to={`${process.env.PUBLIC_URL}/`}>
                                          Zararlangan o'simliklar
                                       </Link>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="row copy-wrap align-items-center g-4 border--top">
               <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                  <div className="copy-social">
                     <ul>
                        <li>
                           <a
                              rel="noopener noreferrer"
                              href="https://www.facebook.com/"
                              target="_blank"
                           >
                              <i className="bx bxl-facebook" />
                           </a>
                        </li>
                        <li>
                           <a
                              rel="noopener noreferrer"
                              href="https://www.twitter.com/"
                              target="_blank"
                           >
                              <i className="bx bxl-twitter" />
                           </a>
                        </li>
                        <li>
                           <a
                              rel="noopener noreferrer"
                              href="https://www.instagram.com/"
                              target="_blank"
                           >
                              <i className="bx bxl-instagram" />
                           </a>
                        </li>
                        <li>
                           <a
                              rel="noopener noreferrer"
                              href="https://www.pinterest.com/"
                              target="_blank"
                           >
                              <i className="bx bxl-pinterest-alt" />
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
               <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                  <div className="copy-right-area text-lg-end">
                     <p className="copy-text">
                        MAGICDOCS
                        <a rel="nofollow" target="blank" href="https://www.egenslab.com/"></a>
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
}

export default HomeOneFooter;
