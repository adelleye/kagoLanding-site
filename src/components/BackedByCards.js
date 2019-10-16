import React from "react"
import styled from "styled-components"

const BackedByCards = props => (
  <BackedByCard>
    <ProfilePicAndNameContainer>
      <ProfilePic image={props.image} />
      <NameAndPositionContainer>
        <Name>{props.name}</Name>
        <Position>{props.position}</Position>
      </NameAndPositionContainer>
    </ProfilePicAndNameContainer>

    <ReviewContainer>
      <Review>{props.review}</Review>
    </ReviewContainer>
  </BackedByCard>
)

export default BackedByCards

const BackedByCard = styled.div`
  background-color: white;
  width: 390px;
  height: 292px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  display: grid;
  grid-template-rows: 50px 105px;
  grid-gap: 60px;
  @media (max-width: 480px) {
    width: 90vw;
  }
`
const ProfilePicAndNameContainer = styled.div`
  width: 195px;
  height: 50px;
  display: grid;
  grid-template-columns: 50px 200px;
  grid-gap: 10px;
  background-color: white;
  margin-top: 50px;
  margin-left: 35px;
`
const ProfilePic = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: brown;
  background: url(${props => props.image});
  background-size: cover;
`
const NameAndPositionContainer = styled.div`
  width: 200px;
  line-height: 50px;

  float: left;
`
const Name = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 0px;
`
const Position = styled.p`
  font-size: 13px;
  font-weight: 400;
  line-height: 0px;
`
const ReviewContainer = styled.div`
  width: 320px;
  height: 105px;
  margin-left: 35px;
  @media (max-width: 480px) {
    width: 75vw;
  }
`
const Review = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 23px;
`
