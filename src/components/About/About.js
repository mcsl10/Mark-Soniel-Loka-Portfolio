import styled from "styled-components";
import PcImg from "../Images/pc.jpeg";
import OutdoorImg1 from "../Images/outdoor.jpeg";
import OutdoorImg2 from "../Images/outdoor2.jpeg";

const About = () => {
  return (
    <Container>
      <OutdoorSummerPicture src={OutdoorImg1} alt="Winter weather" />
      <TextContainer>
        <Header>About Me</Header>
        <DescriptiveText>
          I approach everything with the same curiosity and enthusiasm: 
          videogames, hikes, sports, and anything else that piques my interest. 
          When it comes to web development,
          challenges are what I'm after. I like being thrown in new territories
          and code my way out, whether it's through HTML, CSS, Javascript,
          React, Express and Node. As a web developer, I look for ways to
          streamline user experience and prioritize sites that are easy to use
          while still being engaging. I'm always up for improving my skills
          through exchanges and research.
        </DescriptiveText>
        <PC src={PcImg} alt="pc setup" />
      </TextContainer>
      <OutdoorWinterPicture src={OutdoorImg2} alt="Summer day" />
    </Container>
  );
};

const Header = styled.h2`
  padding-left: 25px;
  font-size: 30px;
  font-weight: 500;
  color: lightslategray;

  @media (max-width: 900px) {
    padding-left: 100px;
  }
`;

const DescriptiveText = styled.p`
  text-align: start;
  max-width: 350px;
  margin: 0 auto;
  font-size: 17px;
  padding-left: 10px;

  @media (max-width: 1315px) {
    font-size: 16px;
  }

  @media (max-width: 900px) {
    font-size: 15px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 25px;
  padding-left: 35px;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    padding-left: 0;
  }
`;

const PC = styled.img`
  width: 350px;
  border-radius: 10px;
  margin: 40px auto;

  @media (max-width: 1300px) {
    width: 300px;
  }
`;

const OutdoorWinterPicture = styled.img`
  height: 550px;
  border-radius: 12px;
  margin-right: 20px;

  @media (max-width: 1300px) {
    height: 400px;
  }
`;

//Will have to work on layout because this image goes on top of the "About me" header with smaller screens
//display: none might be an option, but not the best
const OutdoorSummerPicture = styled.img`
  height: 450px;
  border-radius: 12px;

  @media (max-width: 1300px) {
    height: 350px;
  }
`;

export default About;
