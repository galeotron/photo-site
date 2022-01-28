import React from "react";
import {
  NavbarContainer,
  NavbarLinkContainer,
  NavbarLinkWrapper,
  NavbarLink,
  NavbarLogoWrapper,
  NavbarLogo,
  MobileIconWrapper,
  MobileIcon,
  MobileIconWrapperHidden
} from "./NavbarElements";
import { IoReorderTwoOutline } from "react-icons/io5"

import logo from "../../images/logo.png";

const Navbar = () => {
  return (
    <NavbarContainer>
      <MobileIconWrapperHidden>
        <MobileIcon>
          <IoReorderTwoOutline />
        </MobileIcon>
      </MobileIconWrapperHidden>
      <NavbarLogoWrapper>
        <NavbarLogo src={logo}></NavbarLogo>
      </NavbarLogoWrapper>
      <MobileIconWrapper>
        <MobileIcon>
          <IoReorderTwoOutline />
        </MobileIcon>
      </MobileIconWrapper>
      <NavbarLinkContainer>
        <NavbarLinkWrapper>
          <NavbarLink to="/">Home</NavbarLink>
        </NavbarLinkWrapper>
        <NavbarLinkWrapper>
          <NavbarLink to="/sessions">Sessions</NavbarLink>
        </NavbarLinkWrapper>
        <NavbarLinkWrapper>
          <NavbarLink to="/about">About</NavbarLink>
        </NavbarLinkWrapper>
        <NavbarLinkWrapper>
          <NavbarLink to="/contact">Contact</NavbarLink>
        </NavbarLinkWrapper>
        <NavbarLinkWrapper>
          <NavbarLink to="/portfolio">Portfolio</NavbarLink>
        </NavbarLinkWrapper>
      </NavbarLinkContainer>
    </NavbarContainer>
  );
};

export default Navbar;
