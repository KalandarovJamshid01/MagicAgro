import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";

import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <>
    <Section row nopadding id="section">
      <LeftSection id="sectionTextLeft">
        <SectionTitle main center>
          MagicAgro
        </SectionTitle>
        <SectionText id="sectionText">
          <p id="sectionText-text">
            O'simliklar, poliz ekinlari , daraxtlar va gullarni ekish va ularni
            parvarish qilish. Expertlar va dexqonlardan kerakli tavsiyalar.
            Kasallangan o'simliklarni suniy intelekt yordamida aniqlash va
            yechim topish...
          </p>
        </SectionText>
        <Button>
          <a href="#" rel="noopener noreferrer" style={{ color: "white" }}>
            Read More
          </a>
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
