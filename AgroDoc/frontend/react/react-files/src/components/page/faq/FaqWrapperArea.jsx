import React, { useState } from "react";

function FaqWrapperArea() {
   const [showActive, SetActive] = useState(0);
   const handleActivebtn = () => {
      if (showActive === false || showActive === 0) {
         SetActive(1);
      } else {
         SetActive(false);
      }
   };
   return (
      <>
         {/* Faq area Start*/}
         <div className="faq-area mt-100 pb-100">
            <div className="container">
               <div className="row">
                  <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
                     <div className="faq-form-wrap">
                        <div className="faq-form-ques-box d-lg-flex align-items-center justify-content-between">
                           <div className="ques-content-wrap d-flex align-items-center">
                              <div className="ques-img">
                                 <img
                                    src={process.env.PUBLIC_URL + "/images/faq-img.png"}
                                    alt="questionIMG"
                                 />
                              </div>
                              <div className="ques-content">
                                 <h3>Har qanday savol bering?</h3>
                                 <p>Javob olish uchun malakali mutahassisdan foydalaning</p>
                              </div>
                           </div>
                           <div className="faq-click-btn mobt-24">
                              <span onClick={handleActivebtn} className="faq-click">
                                 Savol berish
                              </span>
                           </div>
                        </div>
                        <div className={showActive === 1 ? "faq-form fq-active" : "faq-form"}>
                           <form
                              onSubmit={(e) => e.preventDefault()}
                              id="contact-form"
                              action="mail.php"
                              method="POST"
                              className="contat-input"
                           >
                              <div className="row">
                                 <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                    <input type="text" name="name" placeholder=" Ismingiz" />
                                 </div>
                                 <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                    <input type="email" name="email" placeholder="emailingiz" />
                                 </div>
                                 <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <textarea
                                       name="message"
                                       id="message"
                                       cols={30}
                                       rows={3}
                                       placeholder="Savolingizni kiriting"
                                       defaultValue={""}
                                    />
                                 </div>
                                 <div className="form-btn-wrap">
                                    <button type="submit" className="form-btn">
                                       Yuborish
                                    </button>
                                 </div>
                                 <p className="form-message" />
                              </div>
                           </form>
                        </div>
                        {/* faq-1 */}
                        <div className="faq-title mt-60">
                           <h2>License</h2>
                        </div>
                        <div className="faq-wrap">
                           <div className="faq-item">
                              <h5
                                 className="accordion-button"
                                 id="heading01"
                                 data-bs-toggle="collapse"
                                 data-bs-target="#collapse01"
                                 aria-controls="collapse01"
                              >
                                 Qanday o'simlik kasalliklari mavjud ?
                              </h5>
                              <div
                                 id="collapse01"
                                 className="accordion-collapse collapse show"
                                 aria-labelledby="heading01"
                              >
                                 <div className="faq-body">
                                    Oʻsimliklar kasalliklari — oʻsimliklarda turli sabablar —
                                    kasallik qoʻzgʻatuvchilar hamda noqulay tashqi sharoit taʼsirida
                                    yuz beradigan patologik jarayonlar. Bular organizm funksiyasi
                                    (fotosintez, nafas olish, oʻstiruvchi moddalar sintezi, suv,
                                    oziq moddalar harakati)ning buzilishiga, oʻsimlikning butunlay
                                    nobud boʻlishi yoki baʼzi organlarining zararlanishiga olib
                                    keladi. Oʻsimliklar kasalliklari hosilni kamaytirib, sifatini
                                    buzadi. Mas, viltning rivojlanishi va tarqalishi uchun qulay
                                    sharoit vujudga kelgan yillari paxta hosili 20—25% ga, baʼzi
                                    hududlarda 60—80% gacha kamayishi mumkin. Oʻsimliklar
                                    kasalliklarining 30 mingdan ortiq turi maʼlum. Ular belgilari
                                    yoki tiplari (patografik tasnif), zararlangan oʻsimliklar
                                    (oʻsimlikshunoslik tasnifi) hamda kasallik qoʻzgʻatuvchi
                                    sabablar (etiologik tasnif) boʻyicha guruhlanadi. Etiologik
                                    tasnif negizida Oʻsimliklar kasalliklari yuqumsiz va yuqumli
                                    kasalliklarga ajraladi.{" "}
                                 </div>
                              </div>
                           </div>
                           <div className="faq-item">
                              <h5
                                 id="heading02"
                                 className="accordion-button collapsed"
                                 data-bs-toggle="collapse"
                                 data-bs-target="#collapse02"
                                 aria-controls="collapse02"
                              >
                                 Yuqumsiz o'simlik kasalliklari qanday turlari mavjud?
                              </h5>
                              <div
                                 id="collapse02"
                                 className="accordion-collapse collapse"
                                 aria-labelledby="heading02"
                              >
                                 <div className="faq-body">
                                    Yuqumsiz Oʻsimliklar kasalliklari, asosan, muhitning abiotik
                                    omillari: mineral oziqlanish tartibining buzilishi, xususan,
                                    makroelementlar — azot, fosfor, kaliy hamda mikroelementlar —
                                    bor, rux, temir, mis, molibdenning yetishmasligi; noqulay suv
                                    rejimi (tuproqda namning yetishmasligi yoki ortib ketishi);
                                    oʻsimliklarga yuqori yoki past traning taʼsiri, havo va tuproq
                                    trasining keskin oʻzgarishi natijasida vujudga keladi. Yuqumsiz
                                    Oʻsimliklar kasalliklarining kelib chiqishiga havo va tuproqdagi
                                    zararli aralashmalar (sulfit angidrid taʼsirida barglarning
                                    kuyishi va toʻkilishi); tuproqqa solinadigan baʼzi gerbitsidlar
                                    qoddigʻi taʼsiri; noqulay yorugʻliq rejimi (xususan,
                                    issiqxonalar va parniklarda yorugʻlikning yetishmasligi,
                                    oʻsimliklarning yotib qolishi, xloroz kabilarga sabab boʻlishi
                                    mumkin); ionlovchi nurlar (alfa,beta, gamma nurlar, rentgen
                                    nurlari, neytronlar); baʼzi zamburugʻlar (Gʻivagsht, Vo1guSh va
                                    boshqalar turlar) hamda ayrim yuksak oʻsimliklar tomonidan
                                    tuproqqa chiqariladigan toksinlar sabab boʻlishi mumkin.
                                 </div>
                              </div>
                           </div>
                           <div className="faq-item">
                              <h5
                                 id="heading03"
                                 className="accordion-button collapsed"
                                 data-bs-toggle="collapse"
                                 data-bs-target="#collapse03"
                                 aria-controls="collapse03"
                              >
                                 Yuqumli o'simlik kasalliklari haqida ma'lumot{" "}
                              </h5>
                              <div
                                 id="collapse03"
                                 className="accordion-collapse collapse"
                                 aria-labelledby="heading03"
                              >
                                 <div className="faq-body">
                                    Yuqumli Oʻsimliklar kasalliklariga oʻsimliklarning virusli
                                    kasalliklari (mozaika kasalligining bir qancha turlari, soʻlish,
                                    pakanalik, gʻumbaklanish, proliferatsiya — toʻqimalarning oʻsib
                                    ketishi); oʻsimliklar bakterial kasalliklar yoki bakteriozlar
                                    (oʻsimliklar raki, bakterial chirishning turli xillari, mevali
                                    daraxtlar, tamaki va boshqalarning bakterial kuyish
                                    kasalliklari); oʻsimlik zamburugʻli kasalliklari yoki
                                    mikofitozlar (oʻsimlik zang kasalliklarining bir qancha turlari,
                                    qorakuya, ragʻa, fuzariozlar, chirishlar, sitosporozlar,
                                    askoxitozlar va boshqalar) kiradi. Shuningdek, aktinomitsetlar
                                    qoʻzgʻatadigan aktinomikozlar, algofitozlar; gelmintofitozlar
                                    ham yuqumli Oʻsimliklar kasalliklariga kiradi. Yuqumli
                                    kasalliklarga oʻsimliklarning parazit hasharot (entomofitozlar)
                                    bilan zararlanishi ham sabab boʻlishi mumkin.
                                 </div>
                              </div>
                           </div>
                        </div>
                        {/* faq-2 */}
                        <div className="faq-title mt-60">
                           <h2>Narxlar &amp; qo'llab quvvatlash </h2>
                        </div>
                        <div className="faq-wrap">
                           <div className="faq-item">
                              <h5
                                 id="heading06"
                                 className="accordion-button collapsed"
                                 data-bs-toggle="collapse"
                                 data-bs-target="#collapse06"
                                 aria-controls="collapse06"
                              >
                                 Bu platformadan foydalanish tekinmi?
                              </h5>
                              <div
                                 id="collapse06"
                                 className="accordion-collapse collapse"
                                 aria-labelledby="heading06"
                              >
                                 <div className="faq-body">
                                    Mazkur platformadan foydalanish ikki xil ta'rifga ega pullik va
                                    bepul ta'riflari mavjud bepul ta'rifida mazkur platformadan
                                    ro'yhatdan o'tgan istalgan foydalanuvchi foydalanishi
                                    mumkin.Pullik ta'rifida esa bir oylik va bir yillik ta'riflar
                                    mavjud va bu ta'riflarni sotib olgan foydalanuvchilarning
                                    savollariga expertlar javob berishadi
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mobt-50">
                     <div className="category-wrap">
                        <div className="category-title">
                           <h3>Category</h3>
                        </div>
                        <div className="category-list">
                           <ul>
                              <li>
                                 Litsenziya <i className="bi bi-arrow-right" />
                              </li>
                              <li>
                                 Narxlar &amp; Yordam
                                 <i className="bi bi-arrow-right" />
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* Faq area End */}
      </>
   );
}

export default FaqWrapperArea;
