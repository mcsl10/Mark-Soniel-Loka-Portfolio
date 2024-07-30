import { NavLink } from "react-router-dom"
import styled from "styled-components"

const NavBar = ({scrollToSection, homeRef, aboutRef, projectsRef, contactRef}) => {

    return(
        <NavigationBar>
        <NavButtons onClick={() => scrollToSection(homeRef)}>Home</NavButtons>
        <NavButtons onClick={() => scrollToSection(aboutRef)}>About</NavButtons>
        <NavButtons onClick={() => scrollToSection(projectsRef)}>Projects</NavButtons>
        <NavButtons onClick={() => scrollToSection(contactRef)}>Contact</NavButtons>
        </NavigationBar>
    )
}


const NavigationBar = styled.nav`
position: fixed;
top: 62px;
left: 40px;
display: flex;
flex-direction: column;
`

const NavButtons = styled.button`
margin-bottom: 25px;
height: 50px;
width: 130px;
font-family: poppins, sans-serif;
font-size: 16px;
border-radius: 8px;
transition: font-weight 0.3s ease, font-size 0.3s ease, opacity 0.3s ease, transform 0.3s ease;

&:hover {
font-weight: 700;
font-size: 19px;
cursor: pointer;
opacity: 0.6;
transform: scale(0.9);
}

&:focus {
    outline: none;
}

@media (max-width: 1040px) {
width: 100px;
font-size: 15px;
}

@media (max-width: 730px) {
    width: 90px;
    font-size: 14px;
}

@media (max-width: 615px) {
    width: 70px;

    &:hover {
        font-size: 15px;
    }
}
`;


export default NavBar