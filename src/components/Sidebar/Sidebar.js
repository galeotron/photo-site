import React from 'react'
import { ContentContainer, LinksContainer, LinksWrapper, LinkText, SidebarContainer, XWrapper } from './SidebarElements'
import { IoClose } from "react-icons/io5"


const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen}>
        <ContentContainer>
          <XWrapper>
            <IoClose onClick={toggle}/>
          </XWrapper>
          <LinksContainer>
            <LinksWrapper>
              <LinkText to="/" >HOME</LinkText>
            </LinksWrapper>
            <LinksWrapper>
              <LinkText to="/sessions" >SESSIONS</LinkText>
            </LinksWrapper>
            <LinksWrapper>
              <LinkText to="/about" >ABOUT</LinkText>
            </LinksWrapper>
            <LinksWrapper>
              <LinkText to="/contact" >CONTACT</LinkText>
            </LinksWrapper>
            <LinksWrapper>
              <LinkText to="/portfolio" >PORTFOLIO</LinkText>
            </LinksWrapper>
          </LinksContainer>
        </ContentContainer>
    </SidebarContainer>
  )
}

export default Sidebar