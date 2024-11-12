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
        <Header>About Me</Header>
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
      <OutdoorWinterPicture src={OutdoorImg2} alt="Winter day" />
    </Container>
  );
};

const Header = styled.h2`
  padding: 0 25%;
  font-size: 1.9rem;
  font-weight: 500;
  color: lightslategray;
  margin-top: 0;
  margin-bottom: 23px;

  @media (max-width: 900px) {
    padding-left: 100px;
  }
`;

const DescriptiveText = styled.p`
  max-width: 23rem;
  margin: 2rem auto;
  font-size: 1.063rem;
  padding-left: 10px;

  /* @media (max-width: 1315px) {
    font-size: 16px;
  }

  @media (max-width: 900px) {
    font-size: 15px;
  } */
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
font-size: 1.063rem;
padding-left: 10px;
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


  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PC = styled.img`
  width: 430px;
  border-radius: 10px;
  margin: 40px auto;

  @media (max-width: 1300px) {
    width: 300px;
  }
`;

const OutdoorWinterPicture = styled.img`
  height: 38rem;
  border-radius: 12px;
  margin-left: 3.5rem;
  margin-top: 4rem;
`;

const OutdoorSummerPicture = styled.img`
  height: 450px;
  border-radius: 12px;

  @media (max-width: 1300px) {
    height: 350px;
  }
`;

export default About;
