import styled, {keyframes} from "styled-components";
import funcoffee from "../Images/funcoffee.png";

const Contact = () => {
return (
    <Container>
    <ContainerForText>
    <ContactHeader>Let's have a chat</ContactHeader>
    <CoffeeWrapper>
    <FunCoffeeImg src={funcoffee} alt="Happy Coffee" />
    <Smoke />
    </CoffeeWrapper>
    <InfoSection><ColoredWord>Email</ColoredWord> : marksonielloka@gmail.com</InfoSection>
    </ContainerForText>
    </Container>
)
}

const Container = styled.div`
display: flex;
justify-content: center;
align-items: flex-end;
min-height: 100vh;
`

const ContainerForText = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding-bottom: 5rem;
`


const ContactHeader = styled.h2`
font-weight: 400;
font-size: 3rem;
margin-bottom: 3.2rem; 

@media (max-width: 888px) {
font-size: 2.5rem;
}

@media (max-width: 535px) {
font-size: 2rem;
}
`


// Wrapper to hold the coffee image & smoke animation
const CoffeeWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;


const FunCoffeeImg = styled.img`
height: 16rem;
z-index: 2;
`


// Smoke Animation
const rise = keyframes`
  0% {
    opacity: 0.2;
    transform: translateY(0) scale(1);
  }
  50% {
    opacity: 0.5;
    transform: translateY(-30px) scale(1.1);
  }
  100% {
    opacity: 0;
    transform: translateY(-60px) scale(1.2);
  }
`;


// Smoke effect using a pseudo-element
const Smoke = styled.div`
  position: absolute;
  top: -10px;
  width: 40px;
  height: 80px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.4) 20%, transparent);
  opacity: 0;
  animation: ${rise} 3s infinite ease-in-out;
  filter: blur(5px);

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 30px;
    height: 60px;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.4) 20%, transparent);
    opacity: 0;
    animation: ${rise} 3.5s infinite ease-in-out;
    filter: blur(5px);
  }

  &::before {
    left: -20px;
    animation-delay: 0.3s;
  }

  &::after {
    right: -20px;
    animation-delay: 0.6s;
  }
`;


const InfoSection = styled.p`
font-size: 1.3rem;

@media (max-width: 888px) {
font-size: 1rem;
}

@media (max-width: 535px) {
font-size: 0.93rem;
}
`

const ColoredWord = styled.span`
color: cyan;
font-weight: 450;
`


export default Contact