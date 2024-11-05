import styled from "styled-components";
import NyanCatProject from "../Images/gameProjectCropped.png";

const Projects = () => {
  return (
    <Container>
      <ProjectHeader>Projects</ProjectHeader>
      <ProjectContainer>
        <TitleOfProject>
          <ContainerForTitle>Web Browser Game</ContainerForTitle>
          <DescriptonOfProjectImg>
            Using object-oriented programming and implementing both a score and
            lives system, I made this web browser game more functional. This,
            combined with the character, enemies, and gameboard, gave a more
            personal touch to the game. Finally, I gave the game a beginning and
            end by adding a restart button once the game is over.
          </DescriptonOfProjectImg>
        </TitleOfProject>
        <ImgOfProject src={NyanCatProject} />
      </ProjectContainer>
    </Container>
  );
};

const ProjectHeader = styled.h2`
  font-weight: 500;
  font-size: 28px;
  margin: 0 auto;
  color: lightslategray;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: white;
  font-size: 17px;
  padding: 50px 200px;

  @media (max-width: 1300px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ImgOfProject = styled.img`
  width: 250px;
  border-radius: 8px;
  transition: width 0.2s ease;

  &:hover {
    width: 350px;
    cursor: pointer;
  }
`;

//Added this because as screen got smaller, TitleOfProject wasn't adjusting
//This keeps TitleOfProject and DescriptionOfProjectImg in sync with screen movement
const ContainerForTitle = styled.div`
  @media (max-width: 1300px) {
    padding-left: 50px;
  }
`;

const TitleOfProject = styled.h3`
  font-weight: 450;

  @media (max-width: 900px) {
    font-size: 19px;
  }
  @media (max-width: 800px) {
    font-size: 18px;
  }
`;

//Made this a div instead of p for better responsiveness at lower screen sizes
const DescriptonOfProjectImg = styled.div`
  font-weight: 300;
  margin-top: 40px;
  font-size: 18px;

  //As the screen gets smaller, once width reaches 1000px, words stops wrapping because of min-width
  //Text goes from moving to static
  //Not the cleanest transition
  @media (max-width: 1300px) {
    padding-left: 50px;
  }
  @media (max-width: 1000px) {
    font-size: 17px;
    min-width: 500px;
  }
  @media (max-width: 800px) {
    font-size: 16px;
    min-width: 400px;
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
