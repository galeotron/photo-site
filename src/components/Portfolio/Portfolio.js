import React from 'react';
import { BannerContainer, BannerImg, BannerImgWrapper, BannerTxt, BannerTxtWrapper, ButtonArrowWrapper, ButtonContainer, ButtonText, ButtonTextWrapper, CarouselArrowWrapper, CarouselContainer, CarouselImg, CarouselImgWrapper, GalleryContainer, PortfolioContainer } from './PortfolioElements';

import Mountain from "../../images/mountain.jpg";

import Slider from '../Slider';

import {CgArrowLongRight} from "react-icons/cg";

const Portfolio = () => {
  return (
    <PortfolioContainer>
      <BannerContainer>
        <BannerImgWrapper>
          <BannerImg src={Mountain}></BannerImg>
        </BannerImgWrapper>
        <BannerTxtWrapper>
          <BannerTxt>Portfolio</BannerTxt>
        </BannerTxtWrapper>
      </BannerContainer>
      <GalleryContainer>
        <CarouselContainer>
          
          <CarouselImgWrapper>
            <Slider></Slider>
          </CarouselImgWrapper>
        </CarouselContainer>
        <ButtonContainer>
          <ButtonTextWrapper>
            <ButtonText>Let's get started</ButtonText>
          </ButtonTextWrapper>
          <ButtonArrowWrapper>
            <CgArrowLongRight />
          </ButtonArrowWrapper>
        </ButtonContainer>
      </GalleryContainer>
    </PortfolioContainer>
  );
};

export default Portfolio;
