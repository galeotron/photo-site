import React from "react";
import {
  FooterContainer,
  FooterItemsContainer,
  FooterPicWrapper,
  FooterItemsWrapper,
  FooterLgText,
  FooterLgTextWrapper,
  FooterLinkWrapper,
  FooterPicContainer,
  FooterSocialContainer,
  FooterSocialWrapper,
  FooterText,
  FooterTextWrapper,
  EndLineWrapper,
  EndLine,
  SvgWrapper,
  FooterPic,
  FooterCenterLineWrapper,
  FooterCenterLine,
  FooterLogo,
  FooterLink,
  EndContainer,
  FooterLinkContainer,
  NavSectionContainer,
  TextSocialContainer,
} from "./FooterElements";
import antoinette from "../../images/antoinnetee.jpg";
import threePeople from "../../images/three-people.jpg";
import berries from "../../images/berries.jpg";
import whiteFlower from "../../images/white-flower.jpg";
import shoes from "../../images/shoes.jpg";
import dance from "../../images/dance.jpg";
import girl from "../../images/girl.jpg";
import happy from "../../images/happy.jpg";
import kid from "../../images/kid.jpg";
import pregnant from "../../images/pregnant.jpg";
import logo from "../../images/logo.png";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { SiMobxstatetree } from "react-icons/si";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterPicContainer>
        <FooterPicWrapper>
          <FooterPic src={antoinette}></FooterPic>
        </FooterPicWrapper>
        <FooterPicWrapper>
          <FooterPic src={threePeople}></FooterPic>
        </FooterPicWrapper>
        <FooterPicWrapper>
          <FooterPic src={berries}></FooterPic>
        </FooterPicWrapper>
        <FooterPicWrapper>
          <FooterPic src={whiteFlower}></FooterPic>
        </FooterPicWrapper>
        <FooterPicWrapper>
          <FooterPic src={shoes}></FooterPic>
        </FooterPicWrapper>
        <FooterPicWrapper>
          <FooterPic src={dance}></FooterPic>
        </FooterPicWrapper>
        <FooterPicWrapper>
          <FooterPic src={girl}></FooterPic>
        </FooterPicWrapper>
        <FooterPicWrapper>
          <FooterPic src={happy}></FooterPic>
        </FooterPicWrapper>
        <FooterPicWrapper>
          <FooterPic src={kid}></FooterPic>
        </FooterPicWrapper>
        <FooterPicWrapper>
          <FooterPic src={pregnant}></FooterPic>
        </FooterPicWrapper>
      </FooterPicContainer>
      <FooterCenterLineWrapper>
        <FooterCenterLine></FooterCenterLine>
      </FooterCenterLineWrapper>
      <FooterItemsContainer>
        <FooterItemsWrapper>
          <FooterLogo src={logo}></FooterLogo>
        </FooterItemsWrapper>
        <FooterItemsWrapper>
          <NavSectionContainer>
            <FooterLgTextWrapper>
              <FooterLgText>Navigate</FooterLgText>
            </FooterLgTextWrapper>
            <FooterLinkContainer>
              <FooterLinkWrapper>
                <FooterLink to="/">Home</FooterLink>
              </FooterLinkWrapper>
              <FooterLinkWrapper>
                <FooterLink to="/sessions">Sessions</FooterLink>
              </FooterLinkWrapper>
              <FooterLinkWrapper>
                <FooterLink to="/about">About</FooterLink>
              </FooterLinkWrapper>
              <FooterLinkWrapper>
                <FooterLink to="/contact">Contact</FooterLink>
              </FooterLinkWrapper>
              <FooterLinkWrapper>
                <FooterLink to="/portfolio">Portfolio</FooterLink>
              </FooterLinkWrapper>
            </FooterLinkContainer>
          </NavSectionContainer>
        </FooterItemsWrapper>
        <FooterItemsWrapper>
          <TextSocialContainer>
            <FooterTextWrapper>
              <FooterText>
                Carly Butler is a wedding and lifestyle photographer that caters
                to Idaho and beyond. She captures the authentic lovers who seek
                genuine moments big and small.
              </FooterText>
            </FooterTextWrapper>
            <FooterLgTextWrapper>
              <FooterLgText>Let's Connect</FooterLgText>
            </FooterLgTextWrapper>
            <FooterSocialContainer>
              <FooterSocialWrapper>
                <FaInstagram />
              </FooterSocialWrapper>
              <FooterSocialWrapper>
                <FaFacebookF />
              </FooterSocialWrapper>
            </FooterSocialContainer>
          </TextSocialContainer>
        </FooterItemsWrapper>
      </FooterItemsContainer>
      <EndContainer>
        <EndLineWrapper>
          <EndLine></EndLine>
        </EndLineWrapper>
        <SvgWrapper>
          <SiMobxstatetree />
        </SvgWrapper>
        <EndLineWrapper>
          <EndLine></EndLine>
        </EndLineWrapper>
      </EndContainer>
    </FooterContainer>
  );
};

export default Footer;
