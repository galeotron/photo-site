import styled from "styled-components";

export const HeaderContainer = styled.div`
    // border: 2px solid blue;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f8ece4;
`;

export const HeaderTextWrapper = styled.div`
    // border: 2px solid red;
    height: 50%;
    display: flex;
    align-items: center;

`;

export const HeaderText = styled.h1`

`;

export const HeroContainer = styled.div`
    // border: 2px solid orange;
    height: 420px;
`;

export const HeroWrapper = styled.div`
    // border: 2px dotted red;
    max-height: 100%;
    max-width: 100%;
`;

export const HeroImg = styled.img`
    // height: 420px;
    height: 420px;
    width: 100%;
    object-fit: cover;
    // position: absolute;

`;

export const TextAreaContainer = styled.div`
    // border: 2px solid blue;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #412234;
    
`;

export const TextWrapper = styled.div`
    // border: 2px solid red;
    height: 67%;
    width: 50%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;

    @media screen and (max-width: 800px) {
        height: 100%;
        justify-content: space-around;
      }

      @media screen and (max-width: 550px) {
        width: 100%;
        margin-left: 5px;
        margin-right: 5px;
      }
`;

export const IndivTextWrapper = styled.div`
    // border: 2px solid purple;
    // margin-bottom: 20px;

    // @media screen and (max-width: 800px) {
    //     margin: 5px;
    //   }
`;

export const Text = styled.p`
      font-size: 20px;
`;

export const AbstractPicContainer = styled.div`
    // border: 2px solid green;
    height: 300px;
`;

export const AbstractPicWrapper = styled.div`
    height: 100%;
    width: 100%;
`;

export const AbstractPic = styled.img`
    height: 300px;
    width: 100%;
    object-fit: cover;
`;