import styled from "styled-components";

export const ContactContainer = styled.div`
    border: 2px solid blue;
    padding: 75px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
    height: calc(100vh - 130px);
`;

export const ContactLgTxtWrapper = styled.div`
    border: 2px solid blue;
    margin-bottom: 35px;
`;

export const ContactLgTxt = styled.h1`
    text-align: center;
`;

export const ContactMdTxtWrapper = styled.div`
    margin-bottom: 70px;
`;

export const ContactMdTxt = styled.h3`
    text-align: center;
`;

export const IconSectionContainer = styled.div`
    display: flex;
    border: 2px solid red;
    justify-content: space-around;
    width: 1000px;
`;

export const IconContainer = styled.div`
    border: 2px solid blue;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const IconWrapper = styled.div`
    /* border: 2px solid orange; */
    border-radius: 5000000px;
    width: 10vw;
    height: 10vw;
    max-width: 175px;
    max-height: 175px;
    background-color: orange;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
`;

export const IconDescTxtWrapper = styled.div`

`;

export const IconDescTxt = styled.h2`
    text-align: center;
`;

export const AddressWrapper = styled.div`

`;

export const AddressTxt = styled.h4`
    text-align: center;
`;