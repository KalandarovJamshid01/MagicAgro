import React from "react";

import { Layout } from "./layouts/Layout";
import Hero from "./components/Hero/Hero";
import BgAnimation from "./components/BackAnimation/BackAnimation";
import { Section } from "./styles/GlobalComponents";
import Acomplishments from "./components/Acomplishments/Acomplishments";
import Timeline from "./components/Timeline/TimeLine";
import Projects from "./components/Projects/Projects";
import Nevs from "../src/components/Nevs/Nevs";

import "../src/components/Nevs/NevsStyles.css";

function App() {
  return (
    <>
      <Layout>
        <Section grid>
          <Hero />
          <BgAnimation />
        </Section>
        <Acomplishments />
        <Projects />
        <Nevs />
        <Timeline />
      </Layout>
    </>
  );
}

export default App;
