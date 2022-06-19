import React from "react";
import {
  WelcomeContainer,
  HeroContainer,
  HeroImg,
  WelcomeLgText,
  WelcomeLgTextWrapper,
  WelcomeTextWrapper,
  WelcomeText,
  CirlceImgContainer,
  CircleImgWrapper,
  CirlceImg,
  ContactContainer,
  ContactImgContainer,
  ContactImgWrapper,
  ContactImg,
  BlankBg,
  ContactTxtBoxContainer,
  ContactLgTextWrapper,
  ContactLgText,
  ContactTextWrapper,
  ContactText,
  ContactTextButtonContainer,
  ContactTextButtonWrapper,
  ContactTextButtonText,
  ContactArrowWrapper,
} from "./HeroElements";
import yellowstone from "../../images/yellowstone.jpg";
import family from "../../images/family.jpg";
import children from "../../images/children.jpg";
import engagement from "../../images/engagement.jpg";
import hands from "../../images/hands.jpg";

const Hero = ({isOpen}) => {
  return (
    <>
      <HeroContainer>
        <HeroImg src={yellowstone}></HeroImg>
      </HeroContainer>
      <WelcomeContainer>
        <WelcomeLgTextWrapper>
          <WelcomeLgText>Copper Creek Photography</WelcomeLgText>
        </WelcomeLgTextWrapper>
        <WelcomeTextWrapper>
          <WelcomeText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            suscipit ligula et dolor mollis, id fringilla felis fermentum. Proin
            semper ligula ut iaculis pharetra. Nulla facilisi. Curabitur
            eleifend sit amet risus in porttitor. Suspendisse ut lectus aliquam,
            luctus mauris vel, pharetra nulla. Praesent laoreet bibendum nibh
            luctus interdum. Mauris magna ex, ornare vel velit sit amet, blandit
            posuere augue. Curabitur eleifend sit amet felis quis cursus. Donec
            porttitor malesuada felis, id facilisis orci tempus eu.
          </WelcomeText>
        </WelcomeTextWrapper>
        <CirlceImgContainer>
          <CircleImgWrapper>
            <CirlceImg src={children}></CirlceImg>
          </CircleImgWrapper>
          <CircleImgWrapper>
            <CirlceImg src={engagement}></CirlceImg>
          </CircleImgWrapper>
          <CircleImgWrapper>
            <CirlceImg src={family}></CirlceImg>
          </CircleImgWrapper>
        </CirlceImgContainer>
      </WelcomeContainer>
      <ContactContainer>
        <ContactImgContainer>
          <ContactImgWrapper>
            <ContactImg src = {hands}></ContactImg>
          </ContactImgWrapper>
        </ContactImgContainer>
        <BlankBg></BlankBg>
        <ContactTxtBoxContainer>
          <ContactLgTextWrapper>
            <ContactLgText>Let's get started!</ContactLgText>
          </ContactLgTextWrapper>
          <ContactTextWrapper>
            <ContactText> Contact me today to go over your vision. We will schedule a 15 minute call blah blah blah</ContactText>
          </ContactTextWrapper>
          <ContactTextButtonContainer>
            <ContactTextButtonWrapper>
              <ContactTextButtonText>Contact</ContactTextButtonText>
            </ContactTextButtonWrapper>
            <ContactArrowWrapper>

            </ContactArrowWrapper>
          </ContactTextButtonContainer>
        </ContactTxtBoxContainer>
      </ContactContainer>
    </>
  );
};

export default Hero;
