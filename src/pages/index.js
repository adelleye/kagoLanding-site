import React from "react"
import { Link } from "gatsby"
import styled, {keyframes} from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

class IndexPage extends React.Component {
  render() {
  
    return (
  <Layout>
    
    <SEO title="Home" />
    <FirstHeadline>Moving Your Cargo
Just Got Easier.</FirstHeadline>
    <FirstParagraph>
    Get An Instant Quotation And Enjoy 24/7 Customer Service. With Our Superior Execution, Kago Is Able To Ship Your Cargo So You Can Get More Done. 
    </FirstParagraph>
    
  </Layout>
  )
}
}


export default IndexPage




// STYLED CSS
const Paragraph = styled.p`
font-size:18px;
line-height: 25px;
color: rgba(1,27,51,1.0);
font-weight: 400;
`
const HeadlineOne = styled.h1`
font-size:60px;
line-height: 67px;
color: rgba(0,6,69,1.0);
font-weight: 500;
`

const FirstHeadline = styled(HeadlineOne)`
`

const FirstParagraph = styled(Paragraph)`

`