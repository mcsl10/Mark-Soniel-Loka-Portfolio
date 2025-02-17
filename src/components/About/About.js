import styled from "styled-components";
import PcImg from "../Images/pc.jpeg";
import OutdoorImg1 from "../Images/outdoor.jpeg";
import OutdoorImg2 from "../Images/outdoor2.jpeg";

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
          and code my way out, whether it's through the front-end or back-end, using 
          {' '}<AnimatedTech tech="HTML">HTML</AnimatedTech>, {' '}
          <AnimatedTech tech="CSS">CSS</AnimatedTech>, {' '}
          <AnimatedTech tech="JavaScript">JavaScript</AnimatedTech>, {' '}
          <AnimatedTech tech="React">React</AnimatedTech>, {' '} 
          and <AnimatedTech tech="Node">Node</AnimatedTech>.
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

// Keeping original font in white for tech stack and only have colors on hover (Keeping original colors commented out in case)
const AnimatedTech = styled.span`
  font-weight: bold;
  /* color: ${({ tech }) =>
    tech === 'HTML' ? '#e44d26' : // HTML orange-red
    tech === 'CSS' ? '#1572b6' : // CSS blue
    tech === 'JavaScript' ? '#f7df1e' : // JS yellow
    tech === 'React' ? '#61dafb' : // React light blue
    '#8cc84b'}; // Node.js green */
  display: inline-block; // This ensures the element is treated as a block for the scaling effect (Scaling doesn't work without this)
  transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;

  &:hover {
    color: ${({ tech }) =>
      tech === 'HTML' ? '#e44d26' : // Darker HTML orange-red #c1351d
      tech === 'CSS' ? '#1572b6' : // Darker CSS blue #106ba3
      tech === 'JavaScript' ? '#f7df1e' : // Darker JS yellow #e4c024
      tech === 'React' ? '#61dafb' : // Darker React light blue #4fa3d1
      '#8cc84b'}; // Darker Node.js green #7a9d5c
    transform: scale(0.92);
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
