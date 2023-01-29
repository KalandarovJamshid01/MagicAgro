import React from "react";
import DocumentationCard from "./DocumentationCard";

function Documentation() {
   return (
      <>
         <div className="documentation-area mt-100">
            <div className="container">
               <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                     <div className="section-title text-center mb-50">
                        <h1>Yo'riqnoma</h1>
                        <p>Yo'riqnomaga amal qilish orqali siz yaxshi natijalarga ega bo'lasiz</p>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                     <div className="documentation-tab-wrap documentation-tab-wrap-design-2">
                        <ul
                           className="nav nav-pills nav-pills-design-2"
                           id="pills-tab"
                           role="tablist"
                        >
                           <li className="nav-item" role="presentation">
                              <button
                                 className="nav-link active"
                                 id="pills-one-tab"
                                 data-bs-toggle="pill"
                                 data-bs-target="#pills-one"
                                 type="button"
                                 role="tab"
                                 aria-controls="pills-one"
                                 aria-selected="true"
                              >
                                 Chorvachilik
                              </button>
                           </li>
                           <li className="nav-item" role="presentation">
                              <button
                                 className="nav-link"
                                 id="pills-two-tab"
                                 data-bs-toggle="pill"
                                 data-bs-target="#pills-two"
                                 type="button"
                                 role="tab"
                                 aria-controls="pills-two"
                                 aria-selected="false"
                              >
                                 Parrandachilik
                              </button>
                           </li>
                           <li className="nav-item" role="presentation">
                              <button
                                 className="nav-link"
                                 id="pills-three-tab"
                                 data-bs-toggle="pill"
                                 data-bs-target="#pills-three"
                                 type="button"
                                 role="tab"
                                 aria-controls="pills-three"
                                 aria-selected="false"
                              >
                                 Tuyaqushchilik
                              </button>
                           </li>
                           <li className="nav-item" role="presentation">
                              <button
                                 className="nav-link"
                                 id="pills-four-tab"
                                 data-bs-toggle="pill"
                                 data-bs-target="#pills-four"
                                 type="button"
                                 role="tab"
                                 aria-controls="pills-four"
                                 aria-selected="false"
                              >
                                 Qoramolchilik
                              </button>
                           </li>
                        </ul>
                        <div className="tab-content tab-content-shape" id="pills-tabContent">
                           <div
                              className="tab-pane fade show active"
                              id="pills-one"
                              role="tabpanel"
                              aria-labelledby="pills-one-tab"
                           >
                              <div className="row g-4">
                                 <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                    <DocumentationCard
                                       text=" Respublikamizda qorakoʼl qoʼy zotlaridan jaydari, hisor zotlari va goʼshtdorserjun
                                    zot guruhlari urchitib koʼpaytirilmoqda. Ushbu zotlarning har biri oʼzining muhim
                                    biologik va xoʼjalik foydali belgilariga ega boʼladi"
                                       icon="/images/icons/doc-icon-1.svg"
                                       cardTitle="Footnotes"
                                       cardNumber="01"
                                    />
                                 </div>
                                 <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                    <DocumentationCard
                                       text="Oʼzbekistonning goʼshtdor-serjun (halq tilida-malish) qoʼylarning zot
                                    guruxlarini yaratish ishlari oʼtgan asrning ikkinchi yarmida yaʼni 1953-1954 yillardan
                                    boshlangan boʼlib"
                                       icon="/images/icons/doc-icon-2.svg"
                                       cardTitle="Copyright & Legal"
                                       cardNumber="02"
                                    />{" "}
                                 </div>
                                 <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                    <DocumentationCard
                                       text="Hisor zotli qoʼylar. xalq selektsiyasida Tojikistonda yaratilgan zot boʼlib,
                                    asosan Tojikistonda va Respublikamizning                              Surxondaryo va Qashqadaryo viloyatlarida keng
                                    tarqalgan zotdir"
                                       icon="/images/icons/doc-icon-3.svg"
                                       cardTitle="Layo Getting Start"
                                       cardNumber="03"
                                    />
                                 </div>
                                 <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12"></div>
                                 <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12"></div>
                                 <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12"></div>
                              </div>
                           </div>
                           <div
                              className="tab-pane fade"
                              id="pills-two"
                              role="tabpanel"
                              aria-labelledby="pills-two-tab"
                           >
                              <div className="row g-4">
                                 <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                    <DocumentationCard
                                       text="Tovuqlar ratsionida energiyaning asosiy manbai boʼlib donli ozuqalar
                                    (makkajoʼxori, bugʼdoy, oqjoʼxori, arpa, suli), yogʼli ozuqalar, makkajoʼxoriga
                                    ishlov berish chiqindilari, oʼsimlik yogʼlari 
                                   ."
                                       icon="/images/icons/doc-icon-4.svg"
                                       cardTitle="Api Questions"
                                       cardNumber="04"
                                    />
                                 </div>
                                 <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                    <DocumentationCard
                                       text="Tuxum vaznining yuqori boʼlishi ratsiondagi xom protein (oqsil),
                                    linolevaya kislotasi va metionin moddalarining miqdor darajasiga
                                    toʼgʼridan toʼgʼri bogʼliq boʼladi."
                                       icon="/images/icons/doc-icon-5.svg"
                                       cardTitle="Accound Settings"
                                       cardNumber="05"
                                    />
                                 </div>
                                 <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                    <DocumentationCard
                                       text="Suv taʼminoti-parrandadan yuqori mahsulot olishda nafaqat yuqori
                                    sifatli va toʼyimli muvozanatlashtirilgan ozuqalar kerak boʼladi, balki
                                    toza ichimlik suvi ham katta ahamiyatga egadir."
                                       icon="/images/icons/doc-icon-3.svg"
                                       cardTitle="Layo Getting Start"
                                       cardNumber="03"
                                    />
                                 </div>
                              </div>
                           </div>
                           <div
                              className="tab-pane fade"
                              id="pills-three"
                              role="tabpanel"
                              aria-labelledby="pills-three-tab"
                           >
                              <div className="row g-4">
                                 <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                    <DocumentationCard
                                       text="Tuyaqush biologiyasi-tuyaqushlar etxoʼr parranda emas, asosan turli oʼtlar
                                    bilan oziqlanadi. Yana bir oʼziga xos xususiyatlaridan biri jigʼildonini (zob)
                                    yoʼqligidir. Dastlab ozuqa oshqozon oldi kamersida toʼplanib, keyin qalin
                                    devorlari mavjud katta oshqozonga tushadi."
                                       icon="/images/icons/doc-icon-1.svg"
                                       cardTitle="Footnotes"
                                       cardNumber="07"
                                    />
                                 </div>
                                 <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                    <DocumentationCard
                                       text="Jinsiy voyaga urgʼochisi 3 yoshda, erkagi 4 yoshda yetiladi. Tuyaqushlar
                                    fermada boqilganda oddiy tarzda, yetarli darajada oziqlantirilganda
                                    urgʼochilari 1,5-2 yillik yoshida oʼnlab tuxum qilishi mumkin, shundan bir qismi
                                    urugʼlantirilgan tuxum boʼladi."
                                       icon="/images/icons/doc-icon-2.svg"
                                       cardTitle="Copyright & Legal"
                                       cardNumber="02"
                                    />{" "}
                                 </div>
                                 <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                    <DocumentationCard
                                       text="Tuyaqushchilik fermasini barpo etishni eng qimmat, shu bilan birga eng
                                    oddiy usuli bu koʼpayishga tayyor katta yoshdagi tuyaqushlarni sotib olish. Katta
                                    yoshdagi tuyaqushlarni sotib olishda yaxshisi 1 bosh erkak tuyaqushga 2 bosh urgʼochisi
                                    sotib olinsa maqsadga muvofiq boʼladi."
                                       icon="/images/icons/doc-icon-3.svg"
                                       cardTitle="Layo Getting Start"
                                       cardNumber="03"
                                    />
                                 </div>
                              </div>
                           </div>
                           <div
                              className="tab-pane fade"
                              id="pills-four"
                              role="tabpanel"
                              aria-labelledby="pills-four-tab"
                           >
                              <div className="row g-4">
                                 <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                    <DocumentationCard
                                       text="2015 yilda sof zotli Blanka 54 laqabli rekordchi sigirdan 3,9 foiz
                                    yog‘lilikda 10 ming 600 kg. sut sog‘ib olingan.
                                    Mazkur zotga mansub sigirlarning o‘rtacha sut mahsuldorligi 3100-3400
                                    kg., sut tarkibidagi yog‘ miqdori 4,0 foiz va undan yuqori."
                                       icon="/images/icons/doc-icon-1.svg"
                                       cardTitle="Footnotes"
                                       cardNumber="01"
                                    />
                                 </div>
                                 <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                    <DocumentationCard
                                       text="Sigirlarni sersut qilish. Bunda ushbu tadbir 90-100 kun davomida
                                    o‘tkaziladi. Sigirlar shu davrda laktatsiya davomida beradigan sutining
                                    40-50 foizini berishga, sutini ko‘paytirishiga moyil bo‘ladi."
                                       icon="/images/icons/doc-icon-2.svg"
                                       cardTitle="Copyright & Legal"
                                       cardNumber="02"
                                    />
                                 </div>
                                 <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                    <DocumentationCard
                                       text="Ratsion tarkibida 24,0 foiz dag‘al, 45,0 foiz shirali va 31,34 foiz yem
                                    ozuqalar bo‘lib, bu nisbat sigirlarning ozuqalarni ishtaha bilan yeyishi va
                                    uning hazm bo‘lishining biologik xususiyatlariga juda mos tushadi."
                                       icon="/images/icons/doc-icon-3.svg"
                                       cardTitle="Layo Getting Start"
                                       cardNumber="03"
                                    />
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

export default Documentation;
