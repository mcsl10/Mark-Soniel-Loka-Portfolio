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
import { SiMongodb } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";

const Home = () => {
  return (
    <Container>
      <ProfileSection>
      <MyProfileImage src={Image} alt="Image of Mark" />
      <TextContainer>
        <Header>Hi, I'm <Name>Mark</Name> | Full-Stack Developer</Header>
        <IntroText>
          Passionate about development, I'm dedicated
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
          <SiMongodb />
          <TechText>MongoDB</TechText>
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
              href="https://www.linkedin.com/in/mark-soniel-loka"
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 10vh;

  @media (max-width: 870px) {
    flex-direction: column;
  }
`;


// Group the profile image and text together
const ProfileSection = styled.div`
  display: flex;
  align-items: flex-start; /* Keep image and text together */
  flex-direction: row;

  @media (max-width: 1022px) {
    flex-direction: column;
    align-items: center; 
  }
`;


const MyProfileImage = styled.img`
  width: 21rem;
  transition: transform 0.3s ease;
  border-radius: 50%; /* Makes the border around my img sync with my circle shaped img */
  position: relative;
  border: 2px solid transparent; /* Transparent so background is visible */
  background: linear-gradient(white, white) padding-box, 
              repeating-linear-gradient(45deg, gold, gold 10px, transparent 10px, transparent 20px) border-box;
  animation: borderAnimation 8s linear infinite;

  &:hover {
    transform: scale(1.15); 
  }

  @media (max-width: 1212px) {
    width: 18rem;
  }

  @media (max-width: 900px) {
    width: 16rem;
  }

  @keyframes borderAnimation {
    0% { background-position: 0 0; }
    100% { background-position: 40px 40px; } /* Moves the dashed effect */
  }
`;


const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 30px;

  @media (max-width: 1022px) {
    margin-left: 0;
    align-items: center;
  }
`;


const Header = styled.h1`
  font-size: 3.3rem;
  font-weight: 500;
  margin: 20px 0;
  color: lightslategray;

  @media (max-width: 1212px) {
    font-size: 2.9rem;
  }
  
  @media (max-width: 984px) {
    text-align: center;
  }

  @media (max-width: 900px) {
    font-size: 2.5rem;
  }

  @media (max-width: 478px) {
    text-align: center;
  }
`;

const Name = styled.span`
/* color: gold;
text-shadow: 0px 4px 10px tomato; */
color: royalblue;
position: relative;

&::after {
content: "";
z-index: -100;
position: absolute;
background: gold;
height: 28px;
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

const IntroText = styled.p`
  max-width: 550px;
  font-size: 1.19rem;

  @media (max-width: 1212px) {
    font-size: 1rem;
  }

  @media (max-width: 1022px) {
    text-align: center;
  }

  @media (max-width: 900px) {
    font-size: 0.92rem;
  }
`;


const ContainerForTechStack = styled.div`
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  justify-content: center; 
  align-items: center;      

  svg {
    width: 2.5rem;
    height: 2.5rem;
    color: lightslategray;
  }

  @media (max-width: 1212px) {
    svg {
      width: 2.12rem;
      height: 2.12rem;
    }
  }

  @media (max-width: 900px) {
    svg {
      width: 2rem;
      height: 2rem;
    }
  }
`;


const TechItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.15); 
  }
`;


const TechText = styled.p`
  margin-top: 8px;
  color: lightslategray;
  font-size: 14px;
`;


const ContainerForProfileLinks = styled.div`
  color: gray;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 4rem;
  width: 100%;

  @media (max-width: 1580px) {
    padding-left: 12.7%;
  }

  @media (max-width: 1270px) {
    padding-left: 25%;
  }

  @media (max-width: 1022px) {
    padding-left: 0;
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


const IconLink = styled.a`
  color: inherit;

  &:hover {
    color: gold;
  }
`;


const Linkedin = styled(FaLinkedin)`
  width: 4rem;
  height: 4rem;
  border-radius: 8px;
  box-shadow: 0px 2px 5px rgba(160, 180, 255, 0.6);

  &:hover {
    box-shadow: 0px 4px 10px tomato;
  }

  @media (max-width: 1212px) {
    width: 3.5rem;
    height: 3.5rem;
  }

  @media (max-width: 900px) {
    width: 3.3rem;
    height: 3.3rem;
  }
`;

const Github = styled(FaGithubSquare)`
  width: 4rem;
  height: 4rem;
  border-radius: 8px;
  margin-left: 20px;
  box-shadow: 0px 2px 5px rgba(160, 180, 255, 0.6);

  &:hover {
    box-shadow: 0px 4px 10px tomato;
  }

  @media (max-width: 1212px) {
    width: 3.5rem;
    height: 3.5rem;
  }

  @media (max-width: 900px) {
    width: 3.3rem;
    height: 3.3rem;
  }
`;


export default Home;
