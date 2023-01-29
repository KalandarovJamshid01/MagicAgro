import React, { useEffect, useReducer, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { yoriqId } from "../Actions/yoriqId";
const initalHeaderState = { activeMenu: "", scrllTop: "" };
const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
function reducer(state, action) {
   switch (action.type) {
      case "homeOne":
         return { activeMenu: "homeOne", scrllTop: scrollTop() };
      case "docs":
         return { activeMenu: "docs", scrllTop: scrollTop() };
      case "pages":
         return { activeMenu: "pages", scrllTop: scrollTop() };
      case "topic":
         return { activeMenu: "topic", scrllTop: scrollTop() };
      case "blog":
         return { activeMenu: "blog", scrllTop: scrollTop() };
      case "contact":
         return { activeMenu: "contact", scrllTop: scrollTop() };
      default:
         return { activeMenu: "" };
   }
}
function Header() {
   const dis = useDispatch();
   const { isauth } = useSelector((state) => state.user);
   const { user } = useSelector((state) => state.user);
   const { yoriq } = useSelector((state) => state.yoriqnoma);

   // Sticky Menu Area
   useEffect(() => {
      window.addEventListener("scroll", isSticky);
      return () => {
         window.removeEventListener("scroll", isSticky);
      };
   });

   /* Method that will fix header after a specific scrollable */
   const isSticky = (e) => {
      const header = document.querySelector(".header-menu-area");
      const scrollTop = window.scrollY;
      scrollTop >= 250 ? header.classList.add("sticky") : header.classList.remove("sticky");
   };
   const [state, dispatch] = useReducer(reducer, initalHeaderState);
   // console.log(state);
   const [showSidebar, SetSidebar] = useState(0);
   const [mobileSidebar, SetMobileSidebar] = useState(0);
   const handleSidebar = () => {
      if (showSidebar === false || showSidebar === 0) {
         return SetSidebar(1);
      } else {
         return SetSidebar(false);
      }
   };
   const handleMobileSidebar = () => {
      if (mobileSidebar === false || mobileSidebar === 0) {
         SetMobileSidebar(1);
      } else {
         SetMobileSidebar(false);
      }
   };

   return (
      <>
         <header>
            <nav>
               <div className="header-menu-area header-menu-area-design-2">
                  <div className="container">
                     <div className="row align-items-center">
                        <div className="col-xl-2 col-lg-2 col-sm-6 col-6">
                           <div className="logo text-left">
                              <Link
                                 style={{ cursor: "pointer" }}
                                 onClick={scrollTop}
                                 to={`${process.env.PUBLIC_URL}/`}
                              >
                                 <h2> MagicDocs</h2>
                              </Link>
                           </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 col-sm-6 col-6">
                           <Link
                              to={"#"}
                              onClick={handleMobileSidebar}
                              className={
                                 mobileSidebar === 1
                                    ? "hidden-lg hamburger h-active"
                                    : "hidden-lg hamburger"
                              }
                           >
                              <span className="h-top" />
                              <span className="h-middle" />
                              <span className="h-bottom" />
                           </Link>
                           <nav className={mobileSidebar === 1 ? "main-nav slidenav" : "main-nav"}>
                              <div className="logo mobile-ham-logo d-lg-none d-block text-left">
                                 <Link onClick={scrollTop} to={"#"}>
                                    <img
                                       src={process.env.PUBLIC_URL + "/images/magicAgro.png"}
                                       alt="logo"
                                    />
                                 </Link>
                              </div>
                              <ul>
                                 <li className="">
                                    <Link
                                       onClick={() => dispatch({ type: "homeOne" })}
                                       to={"/"}
                                       className={
                                          state.activeMenu === "homeOne" ? "header-active1" : ""
                                       }
                                    >
                                       Bosh sahifa
                                    </Link>
                                 </li>
                                 <li className="has-child-menu">
                                    <Link
                                       to={"#"}
                                       onClick={() => dispatch({ type: "docs" })}
                                       className={
                                          state.activeMenu === "docs" ? "header-active1" : ""
                                       }
                                    >
                                       Yo'riqnoma
                                    </Link>
                                    <i className="fl flaticon-plus">+</i>
                                    <ul
                                       className={
                                          state.activeMenu === "docs"
                                             ? "sub-menu  d-block"
                                             : "sub-menu d-none"
                                       }
                                    >
                                       <li>
                                          {/* <Link to="/ish">
                                             <li>Ish O'rinlari</li>
                                          </Link>
                                          <Link to="/tex">
                                             <li>Texnikalar</li>
                                          </Link> */}
                                          <a href="http://my.vetgov.uz/opendata/7.pdf">
                                             <li>Chorvachilik</li>
                                          </a>
                                          <a href="http://my.vetgov.uz/opendata/9.pdf">
                                             <li>Parrandachilik</li>
                                          </a>
                                          <a href="http://my.vetgov.uz/opendata/4.pdf">
                                             <li>Tuyaqushchilik</li>
                                          </a>
                                          <a href=" http://my.vetgov.uz/opendata/6.pdf">
                                             <li>Qoramolchilik</li>
                                          </a>
                                       </li>

                                       <li></li>
                                    </ul>
                                 </li>
                                 <li className="has-child-menu">
                                    <Link
                                       to={"#"}
                                       onClick={() => dispatch({ type: "pages" })}
                                       className={
                                          state.activeMenu === "pages" ? "header-active1" : ""
                                       }
                                    >
                                       Sahifalar
                                    </Link>
                                    <i className="fl flaticon-plus">+</i>
                                    <ul
                                       className={
                                          state.activeMenu === "pages"
                                             ? "sub-menu  d-block"
                                             : "sub-menu d-none"
                                       }
                                    >
                                       <li>
                                          <NavLink
                                             onClick={() => dispatch({ type: "pages", scrollTop })}
                                             to={`${process.env.PUBLIC_URL}/faq`}
                                          >
                                             Ko'p so'ralgan savollar
                                          </NavLink>
                                       </li>

                                       <li>
                                          <NavLink
                                             onClick={() => dispatch({ type: "pages", scrollTop })}
                                             to={`${process.env.PUBLIC_URL}/question`}
                                          >
                                             Savol yo'llash?
                                          </NavLink>
                                       </li>
                                    </ul>
                                 </li>

                                 {user?.role === "ADMIN" && (
                                    <li className="has-child-menu">
                                       <Link
                                          to={"/yo'riqnoma"}
                                          onClick={() => dispatch({ type: "blog" })}
                                          className={
                                             state.activeMenu === "blog" ? "header-active1" : ""
                                          }
                                       >
                                          Yo'riqnoma qo'..
                                       </Link>
                                    </li>
                                 )}

                                 <li>
                                    <NavLink
                                       onClick={() => dispatch({ type: "contact", scrollTop })}
                                       to={`${process.env.PUBLIC_URL}/contact`}
                                    >
                                       Contact
                                    </NavLink>
                                 </li>
                                 {user ? null : (
                                    <li>
                                       <NavLink
                                          className="common-btn btn-style-6"
                                          to={`${process.env.PUBLIC_URL}/login`}
                                       >
                                          Kirish
                                       </NavLink>
                                    </li>
                                 )}
                              </ul>
                              <div className="menu-btn-wrap d-block d-lg-none">
                                 <Link className="common-btn btn-style-1" to={"#"}>
                                    Support
                                 </Link>
                              </div>
                           </nav>
                        </div>
                        <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                           {isauth ? (
                              <div
                                 style={{
                                    // position: "absolute",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                 }}
                              >
                                 <Link
                                    className="common-btn btn-style-6"
                                    style={{ marginLeft: "130px" }}
                                    to={"/logout"}
                                 >
                                    Logout
                                 </Link>
                                 <h5 style={{ marginLeft: "10px" }}>{user.name}</h5>
                              </div>
                           ) : (
                              <div className="menu-btn-wrap" style={{ width: "320px" }}>
                                 <Link
                                    style={{ height: "50px", width: "200px", marginRight: "80px" }}
                                    className="common-btn btn-style-6"
                                    to={"/sign-up"}
                                 >
                                    Ro'yhatdan o'tish
                                 </Link>
                                 {/* <Link className="common-btn btn-style-6" to={"/login"}>
                                    Kirish
                                 </Link> */}
                                 <div className="menu-toggle-btn">
                                    <ul onClick={handleSidebar}>
                                       <li />
                                       <li />
                                       <li />
                                    </ul>
                                 </div>
                              </div>
                           )}
                        </div>
                     </div>
                  </div>
               </div>
            </nav>
            <div
               className={
                  showSidebar === 1
                     ? "menu-toggle-btn-full-shape show-sidebar"
                     : "menu-toggle-btn-full-shape"
               }
            >
               <div className="menu-toggle-wrap bg-white">
                  <div className="sidebar-top-area d-flex justify-content-between align-items-center">
                     <div className="cross-icon" onClick={handleSidebar}>
                        <i className="bx bx-x" />
                     </div>
                     <div className="sidebar-logo">MagicDocs</div>
                  </div>
                  <div className="sidebar-body">
                     <div className="sidebar-form-area">
                        <h5>Ochiq ma'lumotlar portali</h5>
                        <form onSubmit={(e) => e.preventDefault()}>
                           <input type="text" name="name" placeholder="Enter your email" />
                           <button className="sidebar-btn">Yuborish</button>
                        </form>
                     </div>
                     <div className="sidebar-contact-area">
                        <h3 className="sidebar-contact-title">Contact</h3>
                        <ul>
                           <li>
                              <h5>Joylashuv :</h5>
                              <p> Toshkent </p>
                           </li>
                           <li>
                              <h5>Telefon : :</h5>
                              <p>+998906770959</p>
                           </li>
                           <li>
                              <h5>Email : :</h5>
                              <p>magicdocs@email.com</p>
                           </li>
                        </ul>
                     </div>
                  </div>
                  <div className="sidebar-social-area">
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
            </div>
         </header>
      </>
   );
}

export default Header;
