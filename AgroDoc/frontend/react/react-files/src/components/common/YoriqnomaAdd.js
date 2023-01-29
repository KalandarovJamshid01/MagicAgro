import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AddYoriq } from "../Actions/Yoriq";
import { useDispatch } from "react-redux";

export const YoriqnomaAdd = () => {
   const dispatch = useDispatch();
   const [name, setname] = useState("");
   const [photo, setphoto] = useState("");
   const haldleSubmit = (e) => {
      e.preventDefault();
   };
   const shoot = () => {
      dispatch(AddYoriq(name, photo));
   };
   return (
      <>
         <div className="sign-up mt-100 pb-100">
            <div className="container">
               <div className="row justify-content-center">
                  <div className="col-xl-7 col-lg-10 col-md-12 col-sm-12 col-12">
                     <div className="input-card-wrap input-card-wrap-design-2 text-center ">
                        <div className="input-card-title">
                           <h2>Yo'riqnoma Categoriya qo'shish</h2>
                        </div>
                        <div className="input-card-box mt-100">
                           <form onSubmit={haldleSubmit}>
                              <input
                                 type="text"
                                 placeholder="Categoriya kiriting"
                                 value={name}
                                 onChange={(e) => setname(e.target.value)}
                              />
                              <input
                                 type="file"
                                 className="form-control-pass"
                                 value={photo}
                                 onChange={(e) => setphoto(e.target.value)}
                                 placeholder="Password"
                              />
                              <i className="bi bi-eye field-icon toggle-password" />
                              <button className=" mt-5" onClick={shoot}>
                                 Qo'shish
                              </button>
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};
