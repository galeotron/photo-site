import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
  /* border: 2px solid red; */
  width: 100vw;
  max-width: 100vw;
  /* height: 100px; */
  /* height: 8em; */
  height: 130px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  overflow-x: hidden;
  padding-left: 5em;
  padding-right: 5em;
  background: #f8ece4;
  max-width:100%;

  @media screen and (max-width: 1300px) {
    padding-left: 10px;
    padding-right: 10px;
  }
  @media screen and (max-width: 1125px) {
    justify-content: space-between;
  }
  @media screen and (max-width: 300px) {
    justify-content: space-around;
    padding-left: 0px;
    padding-right: 0px;
  }
`;

export const NavbarLinkContainer = styled.div`
  /* border: 2px solid black; */
  display: flex;

  @media screen and (max-width: 1125px) {
    display: none;
  }
`;

export const NavbarLinkWrapper = styled.div`
  /* border: 2px solid blue; */
  display: flex;
  align-items: center;
  margin-left: 2em;
  margin-right: 2em;
`;

export const NavbarLogoWrapper = styled.div`
  /* border: 2px solid orange; */
  width: 500px;
  padding-top: 10px;

  @media screen and (max-width: 600px) {
    width: 350px;
    display: flex;
    align-items: center;
  }

  @media screen and (max-width: 450px) {
    width: 250px;
    display: flex;
    align-items: center;
  }
  @media screen and (max-width: 350px) {
    width: 150px;
    display: flex;
    align-items: center;
  }
`;

export const NavbarLogo = styled.img`
  width: 500px;

  @media screen and (max-width: 600px) {
    width: 350px;
  }

  @media screen and (max-width: 450px) {
    width: 250px;
  }
  @media screen and (max-width: 350px) {
    width: 150px;
  }
`;

export const NavbarLink = styled(Link)`
  /* border: 2px solid green; */
  cursor: pointer;
  color: #b7796c;
`;

export const MobileIconWrapper = styled.div`
  /* border: 2px solid yellow; */
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const MobileIcon = styled.div`
  display: none;
  font-size: 2.2rem;

  @media screen and (max-width: 1125px) {
    display: block;
  }
`;

export const MobileIconWrapperHidden = styled.div`
  /* border: 2px solid yellow; */

  display: none;

  @media screen and (max-width: 1125px) {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    visibility: hidden;
  }
`;
