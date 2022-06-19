import React from "react";
import {
  AbstractPic,
  AbstractPicContainer,
  AbstractPicWrapper,
  HeaderContainer,
  HeaderText,
  HeaderTextWrapper,
  HeroContainer,
  HeroImg,
  HeroWrapper,
  IndivTextWrapper,
  Text,
  TextAreaContainer,
  TextWrapper,
} from "./AboutElements";

import redFlower from "../../images/red-flower.jpg"
import abstract from "../../images/abstract.jpg"

const About = () => {
  return (
    <>
      <HeaderContainer>
        <HeaderTextWrapper>
          <HeaderText>About Sarah</HeaderText>
        </HeaderTextWrapper>
      </HeaderContainer>
      <HeroContainer>
        <HeroWrapper>
          <HeroImg src={redFlower}></HeroImg>
        </HeroWrapper>
      </HeroContainer>
      <TextAreaContainer>
        <TextWrapper>
          <IndivTextWrapper>
            <Text>
              Mel Volkman is a fine artist based on the rustic coast of Maine.
            </Text>
          </IndivTextWrapper>
          <IndivTextWrapper>
            <Text>
              She is most known for her atmospheric perspective and nuanced
              approach to seemingly insignificant moments. Her work communicates
              depth and meaning beyond evident visuals, drawing the viewer
              inward to reflect on both the serene and unquiet emotions
              connected to the impermanence of life.
            </Text>
          </IndivTextWrapper>
          <IndivTextWrapper>
            <Text>
              “Nostalgic”, “Haunting”, "Mysterious", and “Magical" are the words
              most often used to describe her work. She's humbled to be sharing
              her work within private and public spaces throughout the world —
              United States, Germany, United Kingdom, France, Italy, and
              Australia to name a few.
            </Text>
          </IndivTextWrapper>
          <IndivTextWrapper>
            <Text>
              When she's not creating, you can find her relishing slow life with
              her small family, dreaming up elaborate ideas for her dream
              garden, or foraging in the woods and along the misty coast of
              Maine in search of her next subject.
            </Text>
          </IndivTextWrapper>
        </TextWrapper>
      </TextAreaContainer>
      <AbstractPicContainer>
        <AbstractPicWrapper>
          <AbstractPic src={abstract}></AbstractPic>
        </AbstractPicWrapper>
      </AbstractPicContainer>
    </>
  );
};

export default About;
