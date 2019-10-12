import React from "react"
import styled, { keyframes } from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import FirstIllustration from "../images/shapes_collaboration.png"
import AppStoreImage from "../images/Download_on_the_App_Store.svg"
import GooglePlayImage from "../images/google-play-badge.png"
import LogoCards from "../components/LogoCards"
import HowItWorksCards from "../components/HowItWorksCards"
import HomeIphone from "../images/home-kago.png"
import OnTripIphone from "../images/on-trip.png"

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <Container>
          <FirstBlockContainer>
            <LeftGrid>
              <FirstHeadline>Moving Your Cargo Just Got Easier.</FirstHeadline>
              <FirstParagraph>
                Get An Instant Quotation And Enjoy 24/7 Customer Service. With
                Our Superior Execution, Kago Is Able To Ship Your Cargo So You
                Can Get More Done.
              </FirstParagraph>
              <DownloadAppContainer>
                <DownloadOnAppStore />
                <GetItOnGoogle />
              </DownloadAppContainer>
              <LeadingBrandsContainer>
                <TrustedBy>Trusted by leading brands across Africa</TrustedBy>
                <LeadingBrandsLogoContainer>
                  <LogoCards image={require("../images/zip.png")} />
                  <LogoCards image={require("../images/olam.png")} />
                  <LogoCards image={require("../images/dangote.png")} />
                  <LogoCards image={require("../images/honeywell.png")} />
                </LeadingBrandsLogoContainer>
              </LeadingBrandsContainer>
            </LeftGrid>
            <RightGrid>
              <TruckIllustration />
            </RightGrid>
          </FirstBlockContainer>

          <WaveBlockContainer className="Hero">
            <svg width="100%" height="172" viewBox="0 0 100% 172" fill="none">
              <path fill="#EAF6FC">
                <animate
                  repeatCount="indefinite"
                  fill="freeze"
                  attributeName="d"
                  dur="30s"
                  values="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;

                   M0 86.3149C316 86.315 444 159.155 884 51.1554C1324 -56.8446 1320.29 34.1214 1538 70.4063C1814 116.407 2156 188.408 2560 86.315V232.317L0 232.316V86.3149Z;

                   M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z;
 
                  M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;"
                />
              </path>
            </svg>
          </WaveBlockContainer>

          <SecondBlockContainer>
            <HowItWorks>Here's how it works</HowItWorks>
            <InThreeSteps>Your cargo moved in 3 easy steps</InThreeSteps>

            <HowCardsContainer>
              <HowItWorksCards
                cardNumber="1/3"
                image={require("../images/creative_teams.png")}
                headline="Request in the app"
                paragraph="Set your pickup location and destination, choose the size of vehicle that is right for you, and when you would like us to arrive."
              />
              <HowItWorksCards
                cardNumber="2/3"
                image={require("../images/marketing_and_comms.png")}
                headline="Don't lift a finger"
                paragraph="We'll take it from here. Two strong Kagoers arrive to load your stuff and secure it safely. We'll see you at your destination!"
              />
              <HowItWorksCards
                cardNumber="3/3"
                image={require("../images/product_and_ux.png")}
                headline="Rate and tip"
                paragraph="We unload your items and place them right where you want them. Tell us about your experience and tip your Kagoers for a job well done."
              />
            </HowCardsContainer>
          </SecondBlockContainer>

          <ThirdBlockContainer>
            <PhoneContainer>
              <FirstPhoneDiv>
                <IphoneHomeBG />
              </FirstPhoneDiv>

              <SecondPhoneDiv>
                <IphoneOnTripBG />
              </SecondPhoneDiv>
            </PhoneContainer>

            <BenefitsContainer>
              <BenefitsTagline>
                When shipping runs better, the whole world runs better too
              </BenefitsTagline>
              <BenefitsInformation>
                With clear, upfront pricing and unrivaled visibility, you always
                have the information needed to make the right business
                decisions.
              </BenefitsInformation>
            </BenefitsContainer>
          </ThirdBlockContainer>
        </Container>
      </Layout>
    )
  }
}

export default IndexPage

/// KEYFRAMES
const floating = keyframes`
     from { transform: translate(0,  0px); }
    65%  { transform: translate(0, 15px); }
    to   { transform: translate(0, -0px); } 
`

const MainTextAnimation = keyframes`
   0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`

// STYLED CSS-------- Fonts
const Paragraph = styled.p`
  font-size: 18px;
  line-height: 25px;
  color: rgba(1, 27, 51, 1);
  font-weight: 400;
`
const HeadlineOne = styled.h1`
  font-size: 55px;
  line-height: 67px;
  color: rgba(0, 6, 69, 1);
  font-weight: 500;
`
const HeadlineThree = styled.h3`
  font-size: 36px;
  line-height: 44px;
  color: rgba(0, 6, 69, 1);
  font-weight: 500;
`

const CaptionOne = styled.p`
  font-size: 16px;
  line-height: 23px;
  color: rgba(1, 27, 51, 1);
  font-weight: 500;
`

const Subtext = styled.p`
  font-size: 16px;
  line-height: 23px;
  color: rgba(150, 158, 189, 1);
  font-weight: 400;
`

// PAGE STYLING BEGINS HERE
const Container = styled.div`
  background-color: white;

  @media (max-width: 411px) {
  }
`

const FirstBlockContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-column-gap: 10px;

  @media (max-width: 900px) {
  }
  @media (max-width: 600px) {
    display: grid;
    justify-items: center;
  }
  @media (max-width: 411px) {
  }
`

//SET UP LEFT AND RIGHT GRIDS [First block]] <------------------[]
const LeftGrid = styled.div`
  margin-left: 80px;
  margin-top: 120px;
  max-width: 575px;
  background-color: white;

  @media (max-width: 1024px) {
    max-width: 462px;
    margin-left: 30px;
    background-color: white;
  }

  @media (max-width: 900px) {
    max-width: 400px;
    margin-left: 30px;
    background-color: white;
  }

  @media (max-width: 600px) {
  }

  @media (max-width: 411px) {
    margin-left: 30px;
    margin-right: 30px;
    margin-top: 120px;
    max-width: 351px;
  }
`

const RightGrid = styled.div`
  margin-top: 90px;
  margin-right: 60px;
  max-width: 575px;
  justify-content: center;
  align-content: center;
  display: grid;

  @media (max-width: 1024px) {
    max-width: 462px;
    margin-right: 30px;
  }
  @media (max-width: 900px) {
    max-width: 400px;
  }
  @media (max-width: 600px) {
    display: none;
  }

  @media (max-width: 411px) {
    display: none;
  }
`

// LEFT GRID [First block] <------------------[]
const FirstHeadline = styled(HeadlineOne)`
  opacity: 0;
  animation: ${MainTextAnimation};
  animation-duration: 3s;
  animation-delay: 0.1s;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);
  @media (max-width: 900px) {
    font-size: 48px;
    line-height: 56px;
  }
`

const FirstParagraph = styled(Paragraph)`
  opacity: 0;
  animation: ${MainTextAnimation};
  animation-duration: 3s;
  animation-delay: 0.2s;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);

  margin-top: -15px;
`
const DownloadAppContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  max-width: 375px;
  align-items: center;

  @media (max-width: 1024px) {
  }
`
const DownloadOnAppStore = styled.div`
  height: 50px;
  width: 150px;
  background: url(${AppStoreImage});
  background-size: contain;
`

const GetItOnGoogle = styled.div`
  height: 70px;
  width: 184px;
  background: url(${GooglePlayImage});
  background-size: cover;
`
//LEADING BRANDS <------------------[]
const LeadingBrandsContainer = styled.div`
  margin-top: 80px;
  max-width: 462px;
  @media (max-width: 1024px) {
    max-width: 462px;
  }
`
const TrustedBy = styled(CaptionOne)`
  @media (max-width: 411px) {
  }
`
const LeadingBrandsLogoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 411px) {
  }
`

//RIGHT GRID [First block] <------------------[]

const TruckIllustration = styled.div`
background-image: url(${FirstIllustration});
background-size: cover;
height: 491px;
width: 575px;
margin-left: 30px;

/*
animation-name: ${floating};
animation-duration: 10s;
animation-iteration-count: infinite;
animation-timing-function: ease-in-out;
*/  

@media (max-width: 1024px) {
  width: 462px;
  height: 346px;
  }

@media (max-width: 900px) {
  width: 400px;
  height: 300px;
  }
`

// WAVEBLOCK
const WaveBlockContainer = styled.div``

//SECOND BLOCK
const SecondBlockContainer = styled.div`
  margin-top: -15px;
  display: grid;
  justify-items: center;
  background-color: #eaf6fc;
  z-index: -100;
`

const HowItWorks = styled(HeadlineThree)``

const InThreeSteps = styled(Subtext)`
  margin-top: -25px;
`

const HowCardsContainer = styled.div`
  max-width: 1280px;
  display: grid;
  grid-template-columns: repeat(3, auto);
  column-gap: 40px;
  margin-top: 30px;
`
// ThIRD BLOCK

const ThirdBlockContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  column-gap: 60px;
  height: 844px;
  justify-content: center;
  align-items: center;
  padding-top: 60px;
  padding-bottom: 60px;
`
const PhoneContainer = styled.div`
  width: 644px;
  height: 844px;
  overflow: hidden;
  position: relative;
  display: grid;
  justify-items: center;
  align-items: center;
`
const FirstPhoneDiv = styled.div`
  width: 306px;
  height: 663px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  margin-top: -100px;
  margin-left: -150px;
  border-radius: 30px;
  background-color: white;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`
const IphoneHomeBG = styled.div`
  width: 276px;
  height: 623px;
  background-image: url(${HomeIphone});
  background-size: cover;
  border-radius: 30px;
`

const SecondPhoneDiv = styled.div`
  width: 306px;
  height: 663px;
  position: absolute;
  margin-top: 100px;
  margin-left: 150px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`
const IphoneOnTripBG = styled.div`
  width: 276px;
  height: 623px;
  background-image: url(${OnTripIphone});
  background-size: cover;
  border-radius: 30px;
`

const BenefitsContainer = styled.div`
  width: 460px;
  height: 300px;
`
const BenefitsTagline = styled(HeadlineThree)`
  max-width: 456px;
`
const BenefitsInformation = styled(Paragraph)`
  max-width: 456px;
`
