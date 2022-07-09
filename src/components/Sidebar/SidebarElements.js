import styled from "styled-components";
import { Link } from "react-router-dom";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #fde1d1;
  transition: 0.3s ease-in-out;

  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0%")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const ContentContainer = styled.div`
  // border: 2px solid red;
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

export const XWrapper = styled.div`
  // border: 2px solid blue;
  font-size: 30px;
  align-self: flex-end;
  cursor: pointer;
`;

export const LinksContainer = styled.div`
  // border: 2px solid green;
`;

export const LinksWrapper = styled.div`
  // border: 2px solid orange;
  margin-bottom: 15px;
  

`;

export const LinkText = styled(Link)`
    text-decoration: none;
    color: #412234;
    font-size: 18px;
    font-family: 'Poppins', sans-serif;
    
`;

