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
        <TitleText>Services I Offer</TitleText>
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
              ON THE BIGGEST DAY OF YOUR LIFE, FEEL CONFIDENT FULLY LETTING GO
              AND ENJOYING EVERYTHING YOUR WEDDING HAS TO OFFER. KNOW THAT EACH
              SPECIAL DETAIL IS BEING CAPTURED WHILE YOU GET TO LIVE IN THE
              MOMENT WITH YOUR LOVED ONES.
            </DescripMdTxt>
          </DescripMdWrapper>
          <DescripSmWrapper>
            <DescripSmTxt>
              Includes: -custom built coverage based on your needs -explore add
              ons like second shooters, first looks, rehearsal dinner coverage,
              etc. -online gallery of full-resolution photos & print release -
              weddings for 50-100+ guests *travel & accommodation fees may apply
              packages starting at $6,000
            </DescripSmTxt>
          </DescripSmWrapper>
        </DescripContainer>
      </EngagementContainer>
      <FamilyContainer>
        <DescripFamContainer>
          <DescripLgWrapper>
            <DescripLgTxt>Engagements</DescripLgTxt>
          </DescripLgWrapper>
          <DescripMdWrapper>
            <DescripMdTxt>
              ON THE BIGGEST DAY OF YOUR LIFE, FEEL CONFIDENT FULLY LETTING GO
              AND ENJOYING EVERYTHING YOUR WEDDING HAS TO OFFER. KNOW THAT EACH
              SPECIAL DETAIL IS BEING CAPTURED WHILE YOU GET TO LIVE IN THE
              MOMENT WITH YOUR LOVED ONES.
            </DescripMdTxt>
          </DescripMdWrapper>
          <DescripSmWrapper>
            <DescripSmTxt>
              Includes: -custom built coverage based on your needs -explore add
              ons like second shooters, first looks, rehearsal dinner coverage,
              etc. -online gallery of full-resolution photos & print release -
              weddings for 50-100+ guests *travel & accommodation fees may apply
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
              ON THE BIGGEST DAY OF YOUR LIFE, FEEL CONFIDENT FULLY LETTING GO
              AND ENJOYING EVERYTHING YOUR WEDDING HAS TO OFFER. KNOW THAT EACH
              SPECIAL DETAIL IS BEING CAPTURED WHILE YOU GET TO LIVE IN THE
              MOMENT WITH YOUR LOVED ONES.
            </DescripMdTxt>
          </DescripMdWrapper>
          <DescripSmWrapper>
            <DescripSmTxt>
              Includes: -custom built coverage based on your needs -explore add
              ons like second shooters, first looks, rehearsal dinner coverage,
              etc. -online gallery of full-resolution photos & print release -
              weddings for 50-100+ guests *travel & accommodation fees may apply
              packages starting at $6,000
            </DescripSmTxt>
          </DescripSmWrapper>
        </DescripContainer>
      </EngagementContainer>
    </SessionsContainer>
  );
};

export default Sessions;
