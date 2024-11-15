import styled from "styled-components";
import NyanCatProject from "../Images/gameProjectCropped.png";

const Projects = () => {
  return (
    <Container>
      <Header>Projects</Header>
      <ProjectContainer>
        <TextContainer>
          <ProjectTitle>Web Browser Game</ProjectTitle>
          <ProjectDescription>
            Using object-oriented programming and implementing both a score and
            lives system, I made this web browser game more functional. This,
            combined with the character, enemies, and gameboard, gave a more
            personal touch to the game. Finally, I gave the game a beginning and
            end by adding a restart button once the game is over.
          </ProjectDescription>
          </TextContainer>
        <ProjectImg src={NyanCatProject} alt="Screenshot of web browser game" />
      </ProjectContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.h2`
  font-weight: 500;
  font-size: 1.8rem;
  margin: 0 auto;
  color: lightslategray;
`;


const ProjectContainer = styled.div`
  display: flex;
  flex-direction: row;
  color: white;
  font-size: 1.05rem;
  max-width: 80rem;
  margin: 5rem 0;
  gap: 30px;

  @media (max-width: 800px) {
    flex-direction: column; 
    align-items: center; 
    gap: 15px;
  }
`;

const TextContainer = styled.div`
display: flex;
flex-direction: column;
max-width: 60%;
padding: 10px;

@media (max-width: 900px) {
  max-width: 90%;
  padding: 0;
}
`

const ProjectTitle = styled.h3`
margin: 0;
padding: 0;
padding-bottom: 10px;
padding-left: 1rem;
font-size: 1.2rem;
`;

const ProjectDescription = styled.p`
  font-weight: 300;
  margin-top: 30px;
  font-size: 1.12rem;

  @media (max-width: 763px) {
    max-width: 100%;
    font-size: 1rem;
  }
`;

const ProjectImg = styled.img`
  width: 15rem;
  border-radius: 8px;
  transition: transform 0.3s ease;
  margin-left: 20px;

  &:hover {
    transform: scale(1.2);
    cursor: pointer;

  }

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

//Behavior to fix in the future
//On my 13 inch Mac, when I make the screen smaller while in Projects something weird happens
//After clicking on Projects button and making the screen smaller (at a certain width)
//Screen scrolls up, showing the pc picture as well as the outdoor picture with Projects title at the bottom
//Funny thing is that after that, when making screen bigger again and then smaller again, it works fine
//It automatically comes back to the projects section and works as intended
//However on my 24 inch monitor, it doesn't do this at all

export default Projects;
