import React from "react"
import { Link } from "gatsby"
import styled, {keyframes} from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import FirstIllustration from "../images/first-Illustration.png"

class IndexPage extends React.Component {
  render() {
  
    return (
  <Layout>
    <SEO title="Home" />
    <Container>
      <LeftGrid>
        <FirstHeadline>
         Moving Your Cargo Just Got Easier.
           </FirstHeadline>
           <FirstParagraph>
             Get An Instant Quotation And Enjoy 24/7 Customer Service. With Our Superior Execution, 
           Kago Is Able To Ship Your Cargo So You Can Get More Done. 
            </FirstParagraph>
      </LeftGrid>
      <RightGrid>
      <TruckIllustration/>
        
      </RightGrid>
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
// PAGE STYLING BEGINS HERE
const Container = styled.div`
display: grid;
grid-template-columns: repeat(2,auto);

`
const LeftGrid = styled.div`
margin-left: 80px;
margin-top: 250px;
max-width: 575px;
`

const RightGrid = styled.div`
margin-top: 200px;
`
const FirstHeadline = styled(HeadlineOne)`
`

const FirstParagraph = styled(Paragraph)`

`
const TruckIllustration = styled.div`
background: url(${FirstIllustration});
background-size: cover;
height: 395px;
width: 526px;
`