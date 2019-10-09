import React from 'react'
import styled, {keyframes} from "styled-components"


const HowItWorksCards = props => (
    
    <HowItWorksCard> 
        <CaptionTwo> {props.cardNumber} </CaptionTwo>
        <ImageContainer>
            <ImageDiv image ={props.image}/>
        </ImageContainer>

    </HowItWorksCard>
)

export default HowItWorksCards





const HowItWorksCard = styled.div`
width: 350px;
height: 455px;
box-shadow: 0 10px 20px rgba(0,0,0, 0.15);
border-radius: 10px;
`

const Paragraph = styled.p`
font-size:18px;
line-height: 25px;
color: rgba(1,27,51,1.0);
font-weight: 400;
`
const HeadlineThree = styled.h3`
font-size:28px;
line-height: 28px;
color: rgba(0,6,69,1.0);
font-weight: 500;
`

const CaptionTwo = styled.p`
font-size:14px;
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