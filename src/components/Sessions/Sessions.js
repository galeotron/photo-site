import React from "react";
import {
  DescripContainer,
  DescripLgTxt,
  DescripLgWrapper,
  DescripMdTxt,
  DescripMdWrapper,
  DescripSmTxt,
  DescripSmWrapper,
  EngagementContainer,
  FamilyContainer,
  Pic,
  PicContainer,
  PicWrapper,
  SessionsContainer,
  TitleText,
  TitleTextWrapper,
  DescripFamContainer,
} from "./SessionsElements";
import Happy from "../../images/happy.jpg";
import Family from "../../images/family.jpg";
import Senior from "../../images/girl.jpg";

const Sessions = () => {
  return (
    <SessionsContainer>
      <TitleTextWrapper>
        <TitleText>Sessions</TitleText>
      </TitleTextWrapper>
      <EngagementContainer>
        <PicContainer>
          <PicWrapper>
            <Pic src={Happy}></Pic>
          </PicWrapper>
        </PicContainer>
        <DescripContainer>
          <DescripLgWrapper>
            <DescripLgTxt>Engagements</DescripLgTxt>
          </DescripLgWrapper>
          <DescripMdWrapper>
            <DescripMdTxt>
              On the biggest day of your life, feel confident fully letting go
              and enjoying everything your wedding has to offer. Know that each
              special detail is being captured while you get to live in the
              moment with your loved ones.
            </DescripMdTxt>
          </DescripMdWrapper>
          <DescripSmWrapper>
            <DescripSmTxt>
              <b>Includes: </b> <br/>-custom built coverage based on your needs <br/>
              -explore add-ons like second shooters, first looks, rehearsal dinner coverage, etc. <br/>
              -online gallery of full-resolution photos & print release <br/>
              - weddings for 50-100+ guests *travel & accommodation fees may apply
              packages starting at $6,000
            </DescripSmTxt>
          </DescripSmWrapper>
        </DescripContainer>
      </EngagementContainer>
      <FamilyContainer>
        <DescripFamContainer>
          <DescripLgWrapper>
            <DescripLgTxt>Family</DescripLgTxt>
          </DescripLgWrapper>
          <DescripMdWrapper>
            <DescripMdTxt>
              On the biggest day of your life, feel confident fully letting go
              and enjoying everything your wedding has to offer. Know that each
              special detail is being captured while you get to live in the
              moment with your loved ones.
            </DescripMdTxt>
          </DescripMdWrapper>
          <DescripSmWrapper>
            <DescripSmTxt>
            <b>Includes: </b> <br/>-custom built coverage based on your needs <br/>
              -explore add-ons like second shooters, first looks, rehearsal dinner coverage, etc. <br/>
              -online gallery of full-resolution photos & print release <br/>
              - weddings for 50-100+ guests *travel & accommodation fees may apply
              packages starting at $6,000
            </DescripSmTxt>
          </DescripSmWrapper>
        </DescripFamContainer>
        <PicContainer>
          <PicWrapper>
            <Pic src={Family}></Pic>
          </PicWrapper>
        </PicContainer>
      </FamilyContainer>
      <EngagementContainer>
        <PicContainer>
          <PicWrapper>
            <Pic src={Senior}></Pic>
          </PicWrapper>
        </PicContainer>
        <DescripContainer>
          <DescripLgWrapper>
            <DescripLgTxt>Senior</DescripLgTxt>
          </DescripLgWrapper>
          <DescripMdWrapper>
            <DescripMdTxt>
              On the biggest day of your life, feel confident fully letting go
              and enjoying everything your wedding has to offer. Know that each
              special detail is being captured while you get to live in the
              moment with your loved ones.
            </DescripMdTxt>
          </DescripMdWrapper>
          <DescripSmWrapper>
            <DescripSmTxt>
            <b>Includes: </b> <br/>-custom built coverage based on your needs <br/>
              -explore add-ons like second shooters, first looks, rehearsal dinner coverage, etc. <br/>
              -online gallery of full-resolution photos & print release <br/>
              - weddings for 50-100+ guests *travel & accommodation fees may apply
              packages starting at $6,000
            </DescripSmTxt>
          </DescripSmWrapper>
        </DescripContainer>
      </EngagementContainer>
    </SessionsContainer>
  );
};

export default Sessions;
