import React from "react";

function ContactWrapper() {
   return (
      <>
         <div className="contact-area mt-100 pb-100">
            <div className="container">
               <div className="row ">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                     <div className="contact-wrap">
                        <div className="row">
                           <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                              <div className="contact-form-box">
                                 <h2>Biz bilan bog'lanish</h2>
                                 <p>Biz sizga 24/7 xizmat ko'rsatamiz</p>
                                 <form
                                    method="post"
                                    id="contact-form"
                                    className="contat-input contat-input-design-2"
                                 >
                                    <div className="row">
                                       <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                                          <label> Ismingiz</label>
                                          <input
                                             required
                                             type="text"
                                             name="name"
                                             placeholder="Ism Kiriting "
                                          />
                                       </div>
                                       <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                                          <label>Familiya</label>
                                          <input
                                             required
                                             type="text"
                                             name="name"
                                             placeholder="Familiya kiriting"
                                          />
                                       </div>
                                       <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                                          <label> Email </label>
                                          <input
                                             required
                                             type="email"
                                             name="email"
                                             placeholder=" email kiriting"
                                          />
                                       </div>
                                       <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                                          <label>Subject</label>
                                          <input
                                             required
                                             type="email"
                                             name="email"
                                             placeholder="Subject  yozish"
                                          />
                                       </div>
                                       <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                          <label>Xabar</label>
                                          <textarea
                                             name="message"
                                             id="message"
                                             cols={30}
                                             rows={5}
                                             placeholder="Xabar yozish"
                                             defaultValue={""}
                                          />
                                       </div>
                                       <div className="form-btn-wrap">
                                          <button type="submit" className="form-btn">
                                             Xabarni yuborish
                                          </button>
                                       </div>
                                       <p className="form-message" />
                                    </div>
                                 </form>
                              </div>
                           </div>
                           <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 mobt-50">
                              <div className="address-wrap">
                                 <div className="contact-address-box">
                                    <i className="bi bi-telephone" />
                                    <h3>Telefon</h3>
                                    <p>Bizga 24/7 qo'ng'iroq qilishingiz mumkin </p>
                                    <a rel="noopener noreferrer" href="tel:+880 122 4333 444">
                                       <span>+998906770959</span>
                                    </a>
                                 </div>
                                 <div className="contact-address-box">
                                    <i className="bi bi-envelope" />
                                    <h3>Email</h3>
                                    <p>
                                       Sizning email orqali berilgan savolingizga 24 soatda javob beramiz
                                    </p>
                                    <a href="mailto:info@example.com">
                                       <span>info@example.com</span>
                                    </a>
                                 </div>
                                 <div className="contact-address-box">
                                    <i className="bi bi-geo-alt-fill" />
                                    <h3>Location</h3>
                                    <span className="address-map">Tashkent</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default ContactWrapper;
