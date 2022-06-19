import React from "react";
import { AddressTxt, AddressWrapper, ContactContainer, ContactLgTxt, ContactLgTxtWrapper, ContactMdTxt, ContactMdTxtWrapper, IconContainer, IconDescTxt, IconDescTxtWrapper, IconSectionContainer, IconWrapper } from "./ContactElements";
import {HiOutlineMail} from "react-icons/hi";
import {BsPhone} from "react-icons/bs";
import { FaInstagram, FaFacebookF } from "react-icons/fa";


const Contact = () => {
  return (
  <ContactContainer>
    <ContactLgTxtWrapper>
      <ContactLgTxt>Contact Me</ContactLgTxt>
    </ContactLgTxtWrapper>
    <ContactMdTxtWrapper>
      <ContactMdTxt>Get in touch to get the ball rolling</ContactMdTxt>
    </ContactMdTxtWrapper>
    <IconSectionContainer>
      <IconContainer>
        <IconWrapper>
          <HiOutlineMail />
        </IconWrapper>  
        <IconDescTxtWrapper>
          <IconDescTxt>Email</IconDescTxt>
        </IconDescTxtWrapper>
        <AddressWrapper>
          <AddressTxt>something@whatever.com</AddressTxt>
        </AddressWrapper>
      </IconContainer>
      <IconContainer>  
        <IconWrapper>
          <BsPhone />
        </IconWrapper>  
        <IconDescTxtWrapper>
          <IconDescTxt>Phone</IconDescTxt>
        </IconDescTxtWrapper>
        <AddressWrapper>
          <AddressTxt>1234567891</AddressTxt>
        </AddressWrapper>
      </IconContainer>
      <IconContainer href="//www.instagram.com/">  
        <IconWrapper>
          <FaInstagram />
        </IconWrapper>  
        <IconDescTxtWrapper >
          <IconDescTxt>Instagram</IconDescTxt>
        </IconDescTxtWrapper>
        <AddressWrapper>
          <AddressTxt>instagram.com/asdf</AddressTxt>
        </AddressWrapper>
      </IconContainer>
      <IconContainer href="//www.facebook.com/">  
        <IconWrapper>
          <FaFacebookF />
        </IconWrapper>  
        <IconDescTxtWrapper>
          <IconDescTxt>Facebook</IconDescTxt>
        </IconDescTxtWrapper>
        <AddressWrapper>
          <AddressTxt>facebook.com/asdf</AddressTxt>
        </AddressWrapper>
      </IconContainer>
    </IconSectionContainer>
  </ContactContainer>
  );
};

export default Contact;
