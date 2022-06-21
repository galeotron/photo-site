import styled from "styled-components";
import { Link } from "react-router-dom";

export const PortfolioContainer = styled.div`
    
`;

export const BannerContainer = styled.div`
    // border: 2px solid red;
    position: relative;
    margin-bottom: 80px;
`;

export const BannerImgWrapper = styled.div`

`;

export const BannerImg = styled.img`
    height: 552px;
    width: 100%;
    object-fit: cover;
`;

export const BannerTxtWrapper = styled.div`
    position: absolute;
    top: 100px;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
`;

export const BannerTxt = styled.h1`

`;

export const GalleryContainer = styled.div`
    // border: 2px solid blue;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 50px;
`;

export const CarouselContainer = styled.div`
    // border: 2px solid orange;
    display: flex;
    justify-content: center;
    position: relative;
    overflow-y: hidden;
    overflow-x: hidden;
`;

export const CarouselImgWrapper = styled.div`
    max-width: 80vw;
    max-height: 80vh;
    display: flex;
    align-items: center;
`;

export const CarouselImg = styled.img`
    width: 100%;
    height: 100%;
`;

export const ButtonContainer = styled(Link)`
    // border: 2px solid green;
    /* width: 250px; */
    display: flex;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 20px;
    color: #b7796c;
    text-decoration: none;

`;

export const ButtonTextWrapper = styled.div`

`;

export const ButtonText = styled.h3`
    font-size: 2em;
    
`;

export const ButtonArrowWrapper = styled.div`
    font-size: 3.5em;
    // border: 2px solid blue;
    display: flex;
    align-items: center;
    margin-left: 10px;
`;

export const CarouselArrowWrapper = styled.div`

`;