import React from "react"
import styled, { keyframes } from "styled-components"

const Footer = () => (
  <FooterContainer>
    <InnerFooterContainer>
      <SupportContainer>
        <Support> Support </Support>
        <Email> Email </Email>
        <Email> Email </Email>
      </SupportContainer>

      <AddressContainer>
        <AddressTitle>Address</AddressTitle>
        <Address>
          126 Joel Ogunnaike Street,
          <br />
          Ikeja GRA, Ikeja,
          <br />
          Lagos, Nigeria.
        </Address>
      </AddressContainer>

      <CompanyContainer>
        <Company> Company </Company>
        <About> About </About>
        <Careers> Careers </Careers>
        <MediaKit> Media Kit </MediaKit>
      </CompanyContainer>
      <SocialContainer>
        <Social> Social </Social>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 512 512"
        >
          <a href="https://www.instagram.com/severenature/">
            <path d="M336 96c21.2 0 41.3 8.4 56.5 23.5S416 154.8 416 176v160c0 21.2-8.4 41.3-23.5 56.5S357.2 416 336 416H176c-21.2 0-41.3-8.4-56.5-23.5S96 357.2 96 336V176c0-21.2 8.4-41.3 23.5-56.5S154.8 96 176 96h160m0-32H176c-61.6 0-112 50.4-112 112v160c0 61.6 50.4 112 112 112h160c61.6 0 112-50.4 112-112V176c0-61.6-50.4-112-112-112z" />
            <path d="M360 176c-13.3 0-24-10.7-24-24s10.7-24 24-24c13.2 0 24 10.7 24 24s-10.8 24-24 24zM256 192c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64m0-32c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96z" />
          </a>
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 512 512"
        >
          <a href="https://www.instagram.com/severenature/">
            <path d="M426.8 64H85.2C73.5 64 64 73.5 64 85.2v341.6c0 11.7 9.5 21.2 21.2 21.2H256V296h-45.9v-56H256v-41.4c0-49.6 34.4-76.6 78.7-76.6 21.2 0 44 1.6 49.3 2.3v51.8h-35.3c-24.1 0-28.7 11.4-28.7 28.2V240h57.4l-7.5 56H320v152h106.8c11.7 0 21.2-9.5 21.2-21.2V85.2c0-11.7-9.5-21.2-21.2-21.2z" />
          </a>
        </svg>
      </SocialContainer>
    </InnerFooterContainer>
  </FooterContainer>
)

export default Footer

const Title = styled.p`
  font-size: 18px;
  line-height: 0px;
  color: rgba(1, 27, 51, 1);
  font-weight: 500;
`

const CaptionOne = styled.p`
  font-size: 16px;
  line-height: 26px;
  color: rgba(1, 27, 51, 1);
  font-weight: 400;
`

const FooterContainer = styled.div`
  width: 100%;
  height: 250px;
  background-color: rgba(247, 249, 252, 1);
`

const InnerFooterContainer = styled.div`
  display: grid;
  justify-items: center;
  padding-top: 40px;
  margin-left: 80px;
  margin-right: 80px;
  grid-template-columns: repeat(4, 1fr);
`

const SupportContainer = styled.div``

const Support = styled(Title)``
const Email = styled(CaptionOne)``

const AddressContainer = styled.div``
const AddressTitle = styled(Title)``
const Address = styled(CaptionOne)``

const CompanyContainer = styled.div``
const Company = styled(Title)``
const About = styled(CaptionOne)``
const Careers = styled(CaptionOne)``
const MediaKit = styled(CaptionOne)``

const SocialContainer = styled.div``
const Social = styled(Title)``
