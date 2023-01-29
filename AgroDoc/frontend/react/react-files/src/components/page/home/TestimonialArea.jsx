import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
   const { onClick } = props;
   return <i className="tst tst-2 bx bxs-right-arrow-alt slick-arrow" onClick={onClick}></i>;
}

function SamplePrevArrow(props) {
   const { onClick } = props;
   return <i className="tst tst-1 bx bxs-left-arrow-alt slick-arrow" onClick={onClick}></i>;
}
function TestimonialArea() {
   const [nav, setNav] = useState({
      nav1: null,
      nav2: null,
   });
   const slider1 = useRef();
   const slider2 = useRef();

   useEffect(() => {
      setNav({
         nav1: slider1.current,
         nav2: slider2.current,
      });
   }, []);
   const { nav1, nav2 } = nav;
   const settingCarousel = {
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      autoplay: true,
      speed: 2000,
   };

   const settingsSliderNav = {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      autoplay: true,
      speed: 2000,
      focusOnSelect: true,
   };

   return (
      <>
         <div className="testimonial-area testimonial-area-design-2 mt-100">
            <div className="container">
               <div className="row align-items-end">
                  <div className="col-xl-4 col-lg-5 col-md-12 col-sm-12 col-12">
                     <Slider
                        slidesToShow={1}
                        slidesToScroll={1}
                        asNavFor={nav2}
                        ref={(slider) => (slider1.current = slider)}
                        className="testimonial-img-slide-wrap"
                     >
                        <div className="testimonial-img-slide-box">
                           <img
                              src={
                                 process.env.PUBLIC_URL + "/images/testimonial/testimonial-2-1.png"
                              }
                              alt="TestimonialIMG"
                           />
                           <i className="bx bxs-quote-right" />
                        </div>
                        <div className="testimonial-img-slide-box">
                           <img
                              src={
                                 process.env.PUBLIC_URL + "/images/testimonial/testimonial-2-2.png"
                              }
                              alt="TestimonialIMG"
                           />
                           <i className="bx bxs-quote-right" />
                        </div>
                     </Slider>
                  </div>
                  <div className="col-xl-8 col-lg-7 col-md-12 col-sm-12 col-12 mobt-50">
                     <Slider
                        {...settingCarousel}
                        asNavFor={nav1}
                        ref={(slider) => (slider2.current = slider)}
                        slidesToShow={1}
                        slidesToScroll={1}
                        className="testimonial-content-slide-wrap"
                        {...settingsSliderNav}
                     >
                        <div className="testimonial-content-slide-box">
                           <h2>Bizning mijozlarimiz biz haqimizda qanday fikrda?</h2>
                           <p>
                              Assalomu alaykum men ushbu MagicAgro tizimidan foydalanib o'z
                              hosilimni to'g'ri parvarish qilmoqdaman .Avvallari hosilimni juda ko'p
                              qismi nobud bo'lar edi hozir esa natijalar juda ham yaxshi MagicAgroga
                              katta rahmat
                           </p>
                           <h3>Jabborov Mamarayim </h3>
                           <span>Andijonlik Fermer</span>
                        </div>
                        <div className="testimonial-content-slide-box">
                           <h2>Bizning mijozlarimiz biz haqimizda qanday fikrda??</h2>
                           <p>
                              Assalomu alaykum men ushbu MagicAgro tizimidan foydalanib o'z
                              hosilimni to'g'ri parvarish qilmoqdaman .Avvallari hosilimni juda ko'p
                              qismi nobud bo'lar edi hozir esa natijalar juda ham yaxshi MagicAgroga
                              katta rahmat
                           </p>
                           <h3>Halilov Mirza</h3>
                           <span> Farg'onalik fermer</span>
                        </div>
                     </Slider>
                  </div>
               </div>
            </div>
            <img
               className="shape tes-sp-2"
               src={process.env.PUBLIC_URL + "/images/testimonial/testimonial-shape-h2.png"}
               alt="TestimonialIMG"
            />
         </div>
      </>
   );
}

export default TestimonialArea;
