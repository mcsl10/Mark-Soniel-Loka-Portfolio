import styled from "styled-components";

//React icons
import { GiConsoleController } from "react-icons/gi";
import { GiHockey } from "react-icons/gi";
import { GiPineTree } from "react-icons/gi";
import { FaRegArrowAltCircleRight } from "react-icons/fa";



const About = () => {
  return (
    <Container>
      <TextContainer>
        <Header><HeaderAnimation>About Me</HeaderAnimation></Header>
        <DescriptiveText>
          I approach everything with the same curiosity and enthusiasm: 
          <InterestList>
          <li>
          <FaRegArrowAltCircleRight style={{marginRight: "15px", marginBottom: "-2px", color: "cadetblue"}} />
            Videogames <GiConsoleController style={{marginLeft: "4px", fontSize: "1.5rem"}} />
          </li>
          <li>
          <FaRegArrowAltCircleRight style={{marginRight: "15px", marginBottom: "-2px", color: "lightseagreen"}} />
            Sports <GiHockey style={{marginLeft: "4px", fontSize: "1.5rem"}} />
          </li>
          <li>
          <FaRegArrowAltCircleRight style={{marginRight: "15px", marginBottom: "-2px", color: "teal"}} />
            Hiking and Nature <GiPineTree style={{marginLeft: "4px", fontSize: "1.5rem"}} />
          </li>
          </InterestList>
          and anything else that piques my interest. 
        </DescriptiveText>
        <MoreDescriptiveText>
          When it comes to web development,
          challenges are what I'm after. I like being thrown into new territories
          and code my way out, whether it's through the front-end or back-end.
          </MoreDescriptiveText>
          <MoreDescriptiveText>
          As a web developer, I strive to
          streamline user experience and prioritize sites that are easy to use
          while still being engaging. I'm always up for improving my skills
          through exchanges and research.
          </MoreDescriptiveText>
      </TextContainer>
    </Container>
  );
};

const Header = styled.h2`
  padding: 0 25%;
  font-size: 1.9rem;
  font-weight: 500;
  color: royalblue;
  margin-top: 0;
  margin-bottom: 23px;

  @media (max-width: 900px) {
    padding-left: 100px;
  }

  @media (max-width: 472px) {
    font-size: 1.65rem;
  }
`;

const HeaderAnimation = styled.span`
position: relative;

&::after {
content: "";
z-index: -100;
position: absolute;
background: gold;
height: 18px;
width: 100%;
bottom: 0;
left: 0;
transition: width 0.2s ease-in-out;
/* box-shadow: 0px 0px 10px rgba(255, 215, 0, 0.5); */
box-shadow: 0px 0px 10px rgba(255, 99, 71, 0.5);
}

&:hover::after {
  width: 30%;
  /* box-shadow: 0px 0px 15px rgba(255, 140, 0, 0.7);  */
  box-shadow: 0px 0px 15px rgba(255, 99, 71, 0.8);
}
`

const DescriptiveText = styled.p`
  max-width: 23rem;
  margin: 2rem auto;
  font-size: 1.1rem;
  padding-left: 10px;

  @media (max-width: 1212px) {
    font-size: 0.99rem;
  }

  @media (max-width: 980px) {
    margin: 0;
  }
`;


const MoreDescriptiveText = styled.p`
max-width: 25rem;
margin: 1rem auto;
font-size: 1.1rem;
padding-left: 10px;

@media (max-width: 1212px) {
    font-size: 0.99rem;
  }

@media (max-width: 980px) {
  margin: 0.9rem auto;
}
`

const InterestList = styled.ul`
padding-left: 3px;
list-style-type: none;

li {
  margin-bottom: 0.1rem;
}
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  min-height: 100vh;
  max-width: 90vw;
  /* flex-wrap: wrap; // Allow wrapping to avoid my description from getting too tight and getting pushed down */


  @media (max-width: 980px) {
    flex-direction: column;
    align-items: center;

  }
`;

export default About;
