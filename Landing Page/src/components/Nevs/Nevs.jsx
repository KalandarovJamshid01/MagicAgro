import React from "react";
import { useState, useEffect } from "react";

import Slider from "react-slick";
import useWindowDimensions from "../../Hooks/GetWindow";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";

const Nevs = () => {
  const { height, width } = useWindowDimensions();

  useEffect(() => {
    // console.log(width);
  });

  let sliderNumber = 3;

  if (width <= 1050) {
    sliderNumber = 2;
  }

  if (width <= 600) {
    sliderNumber = 1;
  }

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: sliderNumber,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: true,
  };

  return (
    <Section nopadding id="nevs">
      <SectionTitle main>Yangiliklar</SectionTitle>

      <div className="nevs">
        <Slider {...settings}>
          <div className="nevs__card">
            <div className="nevs__card--box">
              <div className="nevs__card--img nevs__card--img-1"></div>
              <p>
                <span>O</span>‘ZBEKISTON ISHTIROKIDAGI DUNYODAGI ENG KATTA
                QIShLOQ XO‘JALIGI KO‘RGAZMASI DAVOM ETMOQDA
              </p>
              <button>Read More</button>
            </div>
          </div>
          <div className="nevs__card">
            <div className="nevs__card--box">
              <div className="nevs__card--img nevs__card--img-2"></div>
              <p>
                <span>A</span>GROKLASTERLARDA “BETTER COTTON INITIATIVES”
                STANDARTLARI JORIY ETILADI
              </p>
              <button>Read More</button>
            </div>
          </div>
          <div className="nevs__card">
            <div className="nevs__card--box">
              <div className="nevs__card--img nevs__card--img-3"></div>

              <p>
                <span>M</span>EVALARNI SOVUTGICHDA SAQLASH: TALABLARI,
                MUDDATLARI
              </p>
              <button>Read More</button>
            </div>
          </div>
          <div className="nevs__card">
            <div className="nevs__card--box">
              <div className="nevs__card--img nevs__card--img-4"></div>
              <p>
                <span>Q</span>ISH MAVSUMI: SABZAVOT MAHSULOTLARINI SAQLASH VA
                ZAXIRA QILISHDA NIMALARGA EʼTIBOR QARATISH KERAK?
              </p>
              <button>Read More</button>
            </div>
          </div>
          <div className="nevs__card">
            <div className="nevs__card--box">
              <div className="nevs__card--img nevs__card--img-5"></div>
              <p>
                <span>"E</span>-AUKSION” ELEKTRON TANLOVI: DEHQONCHILIK VA
                DAROMAD UCHUN QULAY IMKONIYAT
              </p>
              <button>Read More</button>
            </div>
          </div>
          <div className="nevs__card">
            <div className="nevs__card--box">
              <div className="nevs__card--img nevs__card--img-6"></div>

              <p>
                <span>Y</span>ERNI LAZER BILAN TEKISLASHNING AFZALLIKLARI
              </p>
              <button>Read More</button>
            </div>
          </div>
        </Slider>
      </div>
      <SectionDivider />
    </Section>
  );
};

export default Nevs;
