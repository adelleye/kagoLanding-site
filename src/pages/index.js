import React from "react"
import { Link } from "gatsby"
import styled, {keyframes} from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import FirstIllustration from "../images/first-Illustration.png"
import AppStoreImage from "../images/Download_on_the_App_Store.svg"
import GooglePlayImage from "../images/google-play-badge.png"
import LogoCards from "../components/LogoCards"

class IndexPage extends React.Component {
  render() {
  
    return (
  <Layout>
    <SEO title="Home" />
    <Container>
     <FirstBlockContainer>
      <LeftGrid>
        <FirstHeadline>
            Moving Your Cargo Just Got Easier.
          </FirstHeadline>
          <FirstParagraph>
              Get An Instant Quotation And Enjoy 24/7 Customer Service. With Our Superior Execution, 
              Kago Is Able To Ship Your Cargo So You Can Get More Done. 
          </FirstParagraph>
          <DownloadAppContainer>
              <DownloadOnAppStore/>
              <GetItOnGoogle/>
          </DownloadAppContainer>
          <LeadingBrandsContainer>
              <TrustedBy>
              Trusted by leading brands across Africa
              </TrustedBy>
              <LeadingBrandsLogoContainer>
              <LogoCards
                 image={require("../images/zip.png")}
                 />
                 <LogoCards
                 image={require("../images/olam.png")}
                 />
                 <LogoCards
                 image={require("../images/dangote.png")}
                 />
                 <LogoCards
                 image={require("../images/honeywell.png")}
                 />
              </LeadingBrandsLogoContainer>
          </LeadingBrandsContainer>
      </LeftGrid>
      <RightGrid>
         <TruckIllustration/>
      </RightGrid>
     </FirstBlockContainer>
    </Container>
  </Layout>
  )
}
}


export default IndexPage




// STYLED CSS--- Objects
const Paragraph = styled.p`
font-size:18px;
line-height: 25px;
color: rgba(1,27,51,1.0);
font-weight: 400;
`
const HeadlineOne = styled.h1`
font-size:55px;
line-height: 67px;
color: rgba(0,6,69,1.0);
font-weight: 500;
`
const CaptionOne = styled.p`
font-size:16px;
line-height: 23px;
color: rgba(1,27,51,1.0);
font-weight: 500;
`


// PAGE STYLING BEGINS HERE
const Container = styled.div`
background-color: white;
`

const FirstBlockContainer = styled.div`
display: grid;
grid-template-columns: repeat(2,auto);
@media (max-width: 411px) {
  max-width: 411px;
  grid-template-columns: 1;
  }

`

//Left [Firstblock]
const LeftGrid = styled.div`
margin-left: 80px;
margin-top: 220px;
max-width: 575px;
@media (max-width: 411px) {
  max-width: 411px;
  margin-top:120px;
  margin-left: 30px;
  margin-right: 30px;
  }

`

const FirstHeadline = styled(HeadlineOne)`
`

const FirstParagraph = styled(Paragraph)`
margin-top: -15px;
`
const DownloadAppContainer = styled.div`
display: grid;
grid-template-columns: repeat(2,auto);
max-width: 375px;
align-items: center;
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
//LEADING BRANDS

const LeadingBrandsContainer = styled.div`
margin-top: 80px;
`
const TrustedBy = styled(CaptionOne)`
`
const LeadingBrandsLogoContainer = styled.div`
display: grid;
grid-template-columns: repeat(4, auto)
`


//Right [First block]
const RightGrid = styled.div`
margin-top: 200px;

@media (max-width: 411px) {
  display: none;
  }

`
const TruckIllustration = styled.div`
background: url(${FirstIllustration});
background-size: cover;
height: 395px;
width: 526px;
`