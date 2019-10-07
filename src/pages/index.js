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
    
    <HelloWorld>Welcome to your new Gatsby site </HelloWorld>
   
  </Layout>
  )
}
}

export default IndexPage

// STYLED CSS
const ParagraphOne = styled.p`
font-size:28px;
line-height: 25px;
color: rgba(1,27,51,1.0)
`

const HelloWorld = styled(ParagraphOne)`

`