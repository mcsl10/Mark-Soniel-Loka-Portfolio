import styled from "styled-components";
import PcImg from "../Images/pc.jpeg";
import OutdoorImg1 from "../Images/outdoor.jpeg";
import OutdoorImg2 from "../Images/outdoor2.jpeg";

//React icons
import { GiHockey } from "react-icons/gi";

const About = () => {
  return (
    <Container>
      <TextContainer>
        <Header>About Me</Header>
        <DescriptiveText>
          I approach everything with the same curiosity and enthusiasm: 
          <InterestList>
          <li>Videogames</li>
          <li>
            Sports <GiHockey style={{marginLeft: "4px", fontSize: "1.5rem"}} />
          </li>
          <li>Hiking and Nature</li>
          </InterestList>
          and anything else that piques my interest. 
        </DescriptiveText>
        <MoreDescriptiveText>
          When it comes to web development,
          challenges are what I'm after. I like being thrown into new territories
          and code my way out, whether it's through the front-end or back-end, using HTML,
          CSS, JavaScript, React, and Node. 
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

const MoreDescriptiveText = styled.p`
max-width: 25rem;
margin: 1rem auto;
font-size: 1.063rem;
padding-left: 10px;
`

const InterestList = styled.ul`
padding-left: 20px;

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
