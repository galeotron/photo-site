import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeroContainer = styled.div`
  /* border: 2px solid green; */
  width: 100vw;
  /* height: calc(100vh - 130px;) */
  height: calc(100vh - 130px);
  /* height: 50px; */
  overflow-y: hidden;
  overflow-x: hidden;
  max-width: 100%;
`;

export const HeroImg = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
  overflow-y: hidden;
  overflow-x: hidden;
`;

export const WelcomeContainer = styled.div`
  /* border: 2px solid red; */

  overflow-y: hidden;
  overflow-x: hidden;
  background: #fde1d1;
`;

export const WelcomeLgTextWrapper = styled.div`
  /* border: 2px solid red; */
  margin-top: 4em;
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const WelcomeLgText = styled.h1`
  // border: 2px solid blue;
  font-family: "Satisfy", cursive;
  color: #8c4f49;
  font-size: 50px;
`;

export const WelcomeTextWrapper = styled.div`
  /* border: 2px solid yellow; */
  margin-left: 5em;
  margin-right: 5em;
  margin-top: 1em;
  display: flex;
  justify-content: center;
  text-align: center;

  @media screen and (max-width: 800px) {
    margin-left: 15px;
    margin-right: 15px;
  }
`;

export const WelcomeText = styled.h2`
  // border: 2px solid orange;
  // color: #8c4f49;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
`;

export const CirlceImgContainer = styled.div`
  /* border: 2px solid black; */
  margin-top: 7em;
  display: flex;
  padding-left: 7em;
  padding-right: 7em;
  flex-wrap: wrap;
  justify-content: space-around;
  background: #f2aa6b;

  @media screen and (max-width: 1730px) {
    padding-left: 0px;
    padding-right: 0px;
  }

  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    padding-left: 0px;
    padding-right: 0px;
  }
`;

export const CircleImgWrapper = styled.div`
  /* border: 2px solid green; */
  width: calc(90vw / 3);
  height: calc(90vw / 3);
  padding: 10px;
  margin-top: 30px;
  margin-bottom: 30px;
  max-width: 500px;
  max-height: 500px;

  @media screen and (max-width: 800px) {
    width: 90%;
    height: 90vw;
  }
`;

export const CirlceImg = styled.img`
  /* border: 2px solid purple; */
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50% 50%;
`;

export const ContactContainer = styled.div`
  // border: 2px solid red;
  max-width: 100%;
  background: #fde1d1;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ContactImgContainer = styled.div`
  /* border: 2px solid blue; */
  width: 70vw;
  height: 40vw;
  // margin-top: 5em;
  // padding-top: 5em;
  // padding-bottom: 5em;

  @media screen and (max-width: 800px) {
    margin-top: 0px;
    height: auto;
  }
`;

export const ContactImgWrapper = styled.div`
  /* border: 2px solid yellow; */
  width: 100%;
  height: 100%;
  z-index: 5;
`;

export const ContactImg = styled.img`
  /* border: 2px solid green; */
  width: 100%;
  height: 100%;
  position: relative;
  object-fit: cover;
  z-index: 5;

  @media screen and (max-width: 800px) {
    position: static;
    width: 100vw;
    height: auto;
    object-fit: fill;
  }
`;

export const BlankBg = styled.div`
  background: #fde1d1;
  width: 100vw;
  max-width: 100%;
  height: 35vw;
  position: relative;
  top: -35vw;
  z-index: 4;

  margin-bottom: -35vw;

  @media screen and (max-width: 800px) {
    position: static;
    display: none;
    margin-bottom: 0px;
    top: 0px;
  }
`;

export const ContactTxtBoxContainer = styled.div`
  background: #36afa3;
  position: relative;
  z-index: 6;
  top: -32vw;
  left: 65vw;
  margin-bottom: -32vw;
  padding: 30px;

  height: 30vw;
  width: 29vw;

  @media screen and (max-width: 800px) {
    position: static;
    width: 90vw;
    height: auto;
    margin-bottom: 0px;
    align-self: center;
    top: 0px;
    margin-top: 15px;
  }
`;

export const ContactLgTextWrapper = styled.div`
  text-align: center;
`;

export const ContactTextWrapper = styled.div`
  text-align: center;
`;

export const ContactTextButtonWrapper = styled.div`
  text-align: center;
  // border: 2px solid blue;
  text-decoration: none;
  color: black;
  font-family: 'Poppins', sans-serif;
`;

export const ContactTextButtonContainer = styled(Link)`
  text-decoration: none;
  color: black;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #fde1d1;
  margin-top: 100px;
  // height: 100%;
  display: flex;
  align-items: flex-end;
  // border: 2px solid red;
  // padding-bottom: 150px;
  justify-content: center;
`;

export const ContactTextButtonText = styled.h2`
  text-decoration: none;
`;

export const ContactLgText = styled.h1`
  font-family: "Satisfy", cursive;
  color: #fde1d1;
  font-size: 50px;
`;

export const ContactText = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 22px;
  margin-top: 15px;
`;

export const ContactArrowWrapper = styled.div``;
