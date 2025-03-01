import styled from "styled-components";


const Footer = () => {

    return (
        <FooterContainer>
            <Copyright>© 2025 Built and designed by Mark Soniel-Loka</Copyright>
        </FooterContainer>
    )
}

const FooterContainer = styled.footer`
background-color:rgb(15, 15, 15);
position: absolute; /* Removes it from body's normal flow */
left: 0;
right: 0;
height: 4rem;
display: flex;
justify-content: center;
align-items: center;
`

const Copyright = styled.p`
font-size: 0.7rem;
`


export default Footer