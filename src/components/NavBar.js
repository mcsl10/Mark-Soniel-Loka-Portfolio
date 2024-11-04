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
top: 0; /* Aligns the navbar to the top */
left: 0; /* Aligns the navbar to the left */
width: 100%; /* Spans the full width of the page */
display: flex;
flex-direction: row;
justify-content: center;
background-color: black;
border-bottom: 2px solid gray;
height: 3.5rem;
z-index: 1000;
`

const NavButtons = styled.button`
color: lightgray;
margin: 0 1rem; 
height: 50px;
width: 130px;
font-family: poppins, sans-serif;
font-size: 1rem;
background-color: transparent;
border: none;
border-radius: 8px;
transition: font-weight 0.3s ease, font-size 0.3s ease, opacity 0.3s ease, transform 0.3s ease;

&:hover {
cursor: pointer;
transform: scale(0.96);
}

&:focus {
    outline: none;
    font-weight: 700;
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