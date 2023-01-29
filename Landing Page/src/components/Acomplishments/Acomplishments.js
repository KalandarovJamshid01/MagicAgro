import React from "react";
import { useNavigate } from "react-router-dom";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  { number: 1, text: "Agro Docs" },
  { number: 2, text: "Agro Forum" },
  { number: 3, text: "Agro Detect" },
  { number: 4, text: "Agro Job" },
  { number: 5, text: "Agro Tex" },
  { number: 6, text: "Agro Market" },
  { number: 7, text: "Agro Contract" },
  { number: 8, text: "Sponosors" },
];

const Acomplishments = () => {
  const handleClick = (id) => {
    console.log(id);

    if (id === 1) {
      window.location.replace("https://nextpage");
    }
  };

  return (
    <Section id="categoeis">
      <SectionTitle>Foydalanish bo'limari</SectionTitle>
      <Boxes>
        {data.map((card, index) => (
          <div data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}>
            <Box
              key={index}
              onClick={() => handleClick(index)}
              className="categorieBox"
            >
              <BoxNum>{`${card.text}`}</BoxNum>
            </Box>
          </div>
        ))}
      </Boxes>
      <SectionDivider />
    </Section>
  );
};

export default Acomplishments;
