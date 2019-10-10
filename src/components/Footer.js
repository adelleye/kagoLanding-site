import React from "react"
import styled, { keyframes } from "styled-components"

const Footer = () => (
  <FooterContainer>
    <Random> This is a footer </Random>
  </FooterContainer>
)

export default Footer

const FooterContainer = styled.div`
  width: 100%;
  height: 300px;
  background-color: rgba(247, 249, 252, 1);

  display: grid;
  align-items: center;
`
const Random = styled.p`
  text-align: center;
  font-size: 11px;
  font-weight: 400;
`
