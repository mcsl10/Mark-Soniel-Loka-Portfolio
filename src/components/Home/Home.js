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
      <ProfileSection>
      <MyProfileImage src={Image} alt="Image of Mark" />
      <TextContainer>
        <Header>Full-Stack Developer</Header>
        <IntroText>
          Hi, I'm Mark Soniel-Loka. Passionate about development, I'm dedicated
          to continuous growth and eager to take on innovative challenges.
        </IntroText>
        <ContainerForTechStack>
          <TechItem>
          <FaHtml5 />
          <TechText>HTML</TechText>
          </TechItem>
          <TechItem>
          <FaCss3 />
          <TechText>CSS</TechText>
          </TechItem>
          <TechItem>
          <IoLogoJavascript />
          <TechText>JavaScript</TechText>
          </TechItem>
          <TechItem>
          <FaReact />
          <TechText>React</TechText>
          </TechItem>
          <TechItem>
          <FaNodeJs />
          <TechText>Node.js</TechText>
          </TechItem>
          <TechItem>
          <FaGitAlt />
          <TechText>Git</TechText>
          </TechItem>
          </ContainerForTechStack>
          </TextContainer>
        </ProfileSection>
        {/* Socials Section */}
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
    </Container>
  );
};

const Header = styled.h1`
  font-size: 3.3rem;
  margin: 20px 0;
  color: lightslategray;
`;

const IntroText = styled.p`
  max-width: 550px;
  font-size: 19px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20vh;

  @media (max-width: 870px) {
    flex-direction: column;
  }
`;

// Group the profile image and text together
const ProfileSection = styled.div`
  display: flex;
  align-items: flex-start; /* Keep image and text together */
  flex-direction: row;

  @media (max-width: 870px) {
    flex-direction: column;
    align-items: center; /* Center in mobile view */
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 30px;
`;

const MyProfileImage = styled.img`
  width: 21rem;
`;

const ContainerForProfileLinks = styled.div`
  color: gray;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 4rem;
  padding-left: 18rem;
  width: 100%;
`;

const Linkedin = styled(FaLinkedin)`
  width: 4rem;
  height: 4rem;

  @media (max-width: 1315px) {
    width: 3.5rem;
    height: 3.5rem;
  }

  @media (max-width: 870px) {
    width: 40px;
    height: 40px;
  }
`;

const Github = styled(FaGithubSquare)`
  width: 4rem;
  height: 4rem;
  padding-left: 20px;

  @media (max-width: 1315px) {
    width: 3.5rem;
    height: 3.5rem;
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
    width: 2.5rem;
    height: 2.5rem;
    color: lightslategray;
  }

  @media (max-width: 1315px) {
    svg {
      width: 2.19rem;
      height: 2.19rem;
    }
  }

  @media (max-width: 870px) {
    svg {
      width: 30px;
      height: 30px;
    }
  }
`;

const TechItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TechText = styled.p`
  margin-top: 8px;
  color: lightslategray;
  font-size: 14px;
`;

export default Home;
