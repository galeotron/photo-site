import styled from "styled-components";

export const ContactContainer = styled.div`
    // border: 2px solid blue;
    padding: 75px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
    height: calc(100vh - 130px);
    background-color: #fde1d1;

    @media screen and (max-width: 600px) {

        height: 100vh

    }

`;

export const ContactLgTxtWrapper = styled.div`
    // border: 2px solid blue;
    margin-bottom: 35px;
`;

export const ContactLgTxt = styled.h1`
    text-align: center;
    font-family: 'Satisfy', cursive;
    font-size: 62px;
    color: #8c4f49;
`;

export const ContactMdTxtWrapper = styled.div`
    margin-bottom: 70px;
`;

export const ContactMdTxt = styled.h3`
    text-align: center;
    font-family: "Poppins", sans-serif;
    color: black;
`;

export const IconSectionContainer = styled.div`
    display: flex;
    // border: 2px solid red;
    justify-content: space-around;
    width: 1000px;

    @media screen and (max-width: 1000px) {

        width: 100vw;

    }

    @media screen and (max-width: 600px) {

        width: 100vw;
        flex-direction: column;

    }


`;

export const IconContainer = styled.a`
    // border: 2px solid blue;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: #black;
    font-family: 'Poppins', sans-serif;

    @media screen and (max-width: 600px) {

        margin-top: 10px;

    }

`;

export const NewIconWrapper = styled.div`
    color: #fde1d1;
    margin-top: 10px;
`;

export const IconWrapper = styled.div`
    /* border: 2px solid orange; */
    border-radius: 5000000px;
    width: 10vw;
    height: 10vw;
    max-width: 175px;
    max-height: 175px;
    background-color: #36afa3;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
    
    @media screen and (max-width: 600px) {

        width: 35px;
        height: 35px;

    }

`;

export const IconDescTxtWrapper = styled.div`

`;

export const IconDescTxt = styled.h2`
    text-align: center;
    color: black;
    
`;

export const AddressWrapper = styled.div`

`;

export const AddressTxt = styled.h4`
    text-align: center;
    color: black;
`;