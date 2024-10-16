import styled from "styled-components";
import Image from "../Images/Testing.png";

//React Icons
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa";

const Home = () => {
  return (
    <Container>
      <MyProfileImage src={Image} alt="Image of Mark" />
      <TextContainer>
        <Header>Full-Stack Developer</Header>
        <IntroText>
          Hi, I'm Mark Soniel-Loka. Passionate about development, I'm dedicated
          to continuous growth and eager to take on innovative challenges.
        </IntroText>
        <ContainerForTechStack>
          <FaHtml5 />
          <FaCss3 />
          <IoLogoJavascript />
          <FaReact />
          <FaNodeJs />
          <FaGitAlt />
        </ContainerForTechStack>
        <ContainerForProfileLinks>
          <TransformEffectForLinks>
            <IconLink
              href="https://www.linkedin.com/in/mark-soniel-loka-4a9155198"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin />
            </IconLink>
          </TransformEffectForLinks>
          <TransformEffectForLinks>
            <IconLink
              href="https://github.com/mcsl10"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
            </IconLink>
          </TransformEffectForLinks>
        </ContainerForProfileLinks>
      </TextContainer>
    </Container>
  );
};

const Header = styled.h1`
  font-size: 50px;
  margin: 20px 0;
  color: lightslategray;

  @media (max-width: 1185px) {
    font-size: 40px;
  }

  @media (max-width: 870px) {
    font-size: 35px;
  }
`;

const IntroText = styled.p`
  max-width: 550px;
  font-size: 19px;

  @media (max-width: 1315px) {
    font-size: 17px;
  }

  @media (max-width: 870px) {
    font-size: 15px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 20vh;
  padding-right: 50px;
  padding-left: 120px;

  @media (max-width: 870px) {
    flex-direction: column;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 20px;
`;

const MyProfileImage = styled.img`
  width: 320px;
`;

const ContainerForProfileLinks = styled.div`
  color: gray;
  display: flex;
  flex-direction: row;
  padding-top: 7px;
`;

const Linkedin = styled(FaLinkedin)`
  width: 50px;
  height: 50px;

  @media (max-width: 1315px) {
    width: 45px;
    height: 45px;
  }

  @media (max-width: 870px) {
    width: 40px;
    height: 40px;
  }
`;

const Github = styled(FaGithubSquare)`
  width: 50px;
  height: 50px;
  padding-left: 20px;

  @media (max-width: 1315px) {
    width: 45px;
    height: 45px;
  }

  @media (max-width: 870px) {
    width: 40px;
    height: 40px;
  }
`;

const IconLink = styled.a`
  color: inherit;

  &:hover {
    opacity: 0.5;
  }
`;

//Added TransformEffectForLinks, since transform wasn't properly applying to my anchors
//However if I remove TransformEffectForLinks from my github link (Line 42 and 50)
//But add transition and transform properties to IconLink just above
//The transform effect will still work for the github logo lol

const TransformEffectForLinks = styled.div`
  transition: transform 0.3s ease, opacity 0.3s ease;

  &:hover {
    transform: scale(0.9);
  }
`;

const ContainerForTechStack = styled.div`
  display: flex;
  gap: 40px;

  svg {
    width: 40px;
    height: 40px;
    color: lightslategray;
  }

  @media (max-width: 1315px) {
    svg {
      width: 35px;
      height: 35px;
    }
  }

  @media (max-width: 870px) {
    svg {
      width: 30px;
      height: 30px;
    }
  }
`;

export default Home;
