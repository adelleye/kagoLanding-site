import React from "react"
import styled, { keyframes } from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import FirstIllustration from "../images/shapes_collaboration.png"
import AppStoreImage from "../images/Download_on_the_App_Store.svg"
import GooglePlayImage from "../images/google-play-badge.png"
import LogoCards from "../components/LogoCards"
import HowItWorksCards from "../components/HowItWorksCards"

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

          <SecondBlockContainer>
            <HowItWorks>How it works</HowItWorks>

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
  grid-template-columns: repeat(4, auto);

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

//SECOND BLOCK
const SecondBlockContainer = styled.div`
  margin-top: 150px;
  display: grid;
  justify-items: center;
`

const HowItWorks = styled(HeadlineThree)``

const HowCardsContainer = styled.div`
  max-width: 1280px;
  display: grid;
  grid-template-columns: repeat(3, auto);
  column-gap: 40px;
  margin-top: 30px;
`
