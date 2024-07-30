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
font-size: 44px;
margin-bottom: 50px; 
`

const InfoSection = styled.p`
font-size: 18px;
`

const ColoredWord = styled.span`
color: cyan;
font-weight: 450;
`

const ContainerForText = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding-bottom: 100px;
`

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: center;
height: 100vh;
`




export default Contact