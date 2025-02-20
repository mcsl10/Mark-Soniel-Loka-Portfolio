import styled, {keyframes} from "styled-components"

const Contact = () => {
return (
    <Container>
    <ContainerForText>
    <ContactHeader>Let's Get In Touch!</ContactHeader>
    <InfoSection><ColoredWord>Email</ColoredWord> : marksonielloka@gmail.com</InfoSection>
    <InfoSection>Thanks for checking out my portfolio!</InfoSection>
    </ContainerForText>
    </Container>
)
}

const ContactHeader = styled.h2`
font-weight: 400;
font-size: 3rem;
margin-bottom: 50px; 

@media (max-width: 888px) {
font-size: 2.5rem;
}

@media (max-width: 535px) {
font-size: 2rem;
}
`

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

const ContainerForText = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding-bottom: 5rem;
`

const Container = styled.div`
display: flex;
justify-content: center;
align-items: flex-end;
min-height: 100vh;
`


export default Contact