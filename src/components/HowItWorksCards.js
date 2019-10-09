import React from 'react'
import styled, {keyframes} from "styled-components"


const HowItWorksCards = props => (
    
    <HowItWorksCard> 
        <CaptionTwo> {props.cardNumber} </CaptionTwo>
        <ImageContainer>
            <ImageDiv image ={props.image}/>
        </ImageContainer>
        <TextDiv>
        <HeadlineThree>{props.headline}</HeadlineThree>
        <Paragraph>{props.paragraph} </Paragraph>
        </TextDiv>

    </HowItWorksCard>
)

export default HowItWorksCards





const HowItWorksCard = styled.div`
width: 350px;
height: 455px;
box-shadow: 0 10px 20px rgba(0,0,0, 0.15);
border-radius: 10px;
`
const TextDiv = styled.div`
max-width: 280px;
margin-left: 40px;
margin-top: 30px;
`


const Paragraph = styled.p`
font-size:15px;
line-height: 22px;
color: rgba(1,27,51,1.0);
font-weight: 400;
 margin-top: -10px;
`
const HeadlineThree = styled.p`
font-size:24px;
line-height: 24px;
color: rgba(0,6,69,1.0);
font-weight: 500;
`

const CaptionTwo = styled.p`
font-size:11px;
line-height: 14px;
color: rgba(1,27,51,1.0);
font-weight: 400;
margin-left: 30px;
margin-top: 30px;
`
const ImageContainer = styled.div`
margin-top: 40px;
display: grid;
justify-items: center;
`

const ImageDiv = styled.div`
width: 270px;
height: 170px;
background: url(${props => props.image});
background-size:cover;

`