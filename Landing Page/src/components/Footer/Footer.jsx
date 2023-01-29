import React from "react";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { BiPaperPlane } from "react-icons/bi";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+99-894-726-00-00">+99 894 726 00 00</LinkItem>
          <LinkItem href="tel:+99-888-726-11-11">+99 888 726 11 11</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="#">magicdata@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            Innovating one project at a time{" "}
            <LinkItem href="#"> MagicData</LinkItem>
          </Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="#" target="_blank">
            <AiFillFacebook size="3rem" />
          </SocialIcons>
          <SocialIcons href="#" target="_blank">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
          <SocialIcons href="#" target="_blank">
            <BiPaperPlane size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
