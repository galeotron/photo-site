import React from "react";
import {
  NavbarContainer,
  NavbarLinkContainer,
  NavbarLinkWrapper,
  NavbarLink,
  NavbarLogoWrapper,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <NavbarContainer>
        <NavbarLogoWrapper>
          
        </NavbarLogoWrapper>  
      <NavbarLinkContainer>
        <NavbarLinkWrapper>
          <NavbarLink>Home</NavbarLink>
        </NavbarLinkWrapper>
        <NavbarLinkWrapper>
          <NavbarLink>Sessions</NavbarLink>
        </NavbarLinkWrapper>
        <NavbarLinkWrapper>
          <NavbarLink>About</NavbarLink>
        </NavbarLinkWrapper>
        <NavbarLinkWrapper>
          <NavbarLink>Contact</NavbarLink>
        </NavbarLinkWrapper>
        <NavbarLinkWrapper>
          <NavbarLink>Portfolio</NavbarLink>
        </NavbarLinkWrapper>
      </NavbarLinkContainer>
    </NavbarContainer>
  );
};

export default Navbar;
