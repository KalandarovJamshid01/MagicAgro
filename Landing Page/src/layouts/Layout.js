import React from "react";
import { Link, useHref } from "react-router-dom";

import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { BiPaperPlane } from "react-icons/bi";
import { DiCssdeck } from "react-icons/di";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import {
  Container,
  HeaderContainer,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./LayoutStyles";

export const Layout = ({ children }) => {
  // let hreff = useHref();

  return (
    <Container>
      <HeaderContainer>
        <Div1>
          <a
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              marginBottom: "20px",
            }}
          >
            <DiCssdeck size="3rem" /> <Span>MagicAgro</Span>
          </a>
        </Div1>
        <Div2>
          <li>
            <a href="#categoeis">
              <NavLink>Bo'limlar</NavLink>
            </a>
          </li>
          <li>
            <a href="#projects">
              <NavLink>Loyihalar</NavLink>
            </a>
          </li>
          <li>
            <a href="#nevs">
              <NavLink>Yangiliklar</NavLink>
            </a>
          </li>
        </Div2>
        <Div3>
          <SocialIcons href="#" target="_blank">
            <AiFillFacebook size="3rem" />
          </SocialIcons>
          <SocialIcons href="#" target="_blank">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
          <SocialIcons href="#" target="_blank">
            <BiPaperPlane size="3rem" />
          </SocialIcons>
        </Div3>
      </HeaderContainer>

      <main>{children}</main>
      <Footer />
    </Container>
  );
};
