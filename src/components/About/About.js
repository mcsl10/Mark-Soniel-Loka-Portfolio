import styled from "styled-components";
import coolDev from "../Images/cooldev.jpg"

//React icons
import { GiConsoleController } from "react-icons/gi";
import { GiHockey } from "react-icons/gi";
import { GiPineTree } from "react-icons/gi";
import { FaRegArrowAltCircleRight } from "react-icons/fa";



const About = () => {
  return (
    <Container>
        <Header><HeaderAnimation>About Me</HeaderAnimation></Header>

        {/* Top Section */}
        <TopRow>
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
        <CoolDevImg src={coolDev} alt="Developer art" />
        </TopRow>

        {/* Bottom Section */}
        <BottomRow>
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
          </BottomRow>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 90vw;

  @media (max-width: 980px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Header = styled.h2`
  text-align: center;
  font-size: 1.9rem;
  font-weight: 500;
  color: royalblue;
  margin-top: 0;
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

const TopRow = styled.div`
display: flex;
justify-content: center;
gap: 7rem;

@media (max-width: 980px) {
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}
`

const DescriptiveText = styled.p`
  margin: 2rem 0;
  font-size: 1.1rem;

  @media (max-width: 1212px) {
    font-size: 0.99rem;
  }

  @media (max-width: 980px) {
    margin: 0;
  }
`;

const InterestList = styled.ul`
padding-left: 3px;
list-style-type: none;

li {
  margin-bottom: 0.1rem;
}
`

const CoolDevImg = styled.img`
height: 14rem;
width: 14rem;
border-radius: 30%;
margin: 2.5rem 0;
`

const BottomRow = styled.div`
display: flex;
justify-content: center;
gap: 7rem;
margin-top: 1.2rem;

@media (max-width: 980px) {
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  margin-top: 0.5rem;
}
`

const MoreDescriptiveText = styled.p`
margin: 1rem 0;
font-size: 1.1rem;

@media (max-width: 1212px) {
    font-size: 0.99rem;
  }

@media (max-width: 980px) {
  margin: 0.9rem auto;
}
`

export default About;
