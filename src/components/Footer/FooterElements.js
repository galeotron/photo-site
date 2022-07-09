import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
    // border: 2px solid red;
    padding: 50px;
    background-color: #8c4f49;

    @media screen and (max-width: 800px) {
        padding: 0px;
        padding-top: 50px;
        padding-bottom: 50px;
    }
`;

export const FooterPicContainer = styled.div`
    /* border: 2px solid blue; */
    display: flex;
    margin-bottom: 50px;

    @media screen and (max-width: 800px) {
        flex-wrap: wrap;
    }

`;

export const FooterPicWrapper = styled.div`

    width: 10%;
    height: 10vw;

    @media screen and (max-width: 1215px) {
        height: 120px;
    }
    @media screen and (max-width: 800px) {
        width: 50%;
        height: 30vh;
    }
`;

export const FooterPic = styled.img`
    border: 1px solid #8c4f49;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const FooterCenterLineWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const FooterCenterLine = styled.hr`
    width: 70%;
    border-top: 1px solid #f8ece4;
`;

export const FooterItemsContainer = styled.div`
    margin-top: 10px;
    // border: 2px solid red;
    display: flex;
    // align-items: center;
    justify-content: center;

    @media screen and (max-width: 600px) {
        flex-direction: column;
    }
`;

export const FooterItemsWrapper = styled.div`
    // border: 2px solid blue;

    width: 33.333%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    height: 100%;


    @media screen and (max-width: 600px) {
        width: 100%;
        padding: 25px;
    }
`;

export const FooterLogo = styled.img`
    width: 100%;
`;

export const NavSectionContainer = styled.div`
    display: flex;
    flex-direction: column;

`;

export const FooterLgTextWrapper = styled.div`
    // border: 2px solid yellow;
    margin-bottom: 25px;
`;

export const FooterLgText = styled.h1`
    text-align: center;
    font-family: 'Satisfy', cursive;
`;

export const FooterLinkContainer = styled.div`
    // border: 2px solid orange;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`;

export const FooterLinkWrapper = styled.div`
    // border: 2px solid red;
    margin-bottom: 10px;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const FooterLink = styled(Link)`
    width: 100%;
    text-align: center;
    color: #fde1d1;
    text-decoration: none;
    font-family: 'Poppins', sans-serif;

    &:hover {
        color: black;
        transition: 0.3s ease-out;
    }
`;

export const TextSocialContainer = styled.div`
    // border: 2px solid yellow;

    @media screen and (max-width: 600px) {
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        align-items: flex-start;
    }
`;

export const FooterTextWrapper = styled.div`
    width: 100%;
    border: 2px solid white;
    margin-bottom: 25px;

    @media screen and (max-width: 600px) {
        width: 66%;

    }

`;

export const FooterText = styled.h4`
    text-align: center;
    font-family: 'Poppins', sans-serif;
    margin-top: 8px;
    color: #fde1d1;
`;

export const FooterSocialContainer = styled.div`
    // border: 2px solid red;
    display: flex;
    justify-content: center;
`;

export const FooterSocialWrapper = styled.a`
    padding: 8px;
    font-size: 23px;
    color: #fde1d1;
    cursor: pointer;

    &:hover {
        color: black;
        transition: 0.3s ease-out;
    }
`;

export const EndContainer = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    /* border: 2px solid yellow; */
`;

export const SvgWrapper = styled.div`
    font-size: 100px;
`;

export const EndLineWrapper = styled.div`
    /* border: 2px solid blue; */
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const EndLine = styled.hr`
    width: 70%;
    border-top: 1px solid #f8ece4;

`;