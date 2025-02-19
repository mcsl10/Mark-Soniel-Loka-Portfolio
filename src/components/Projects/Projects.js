import styled from "styled-components";
import NyanCatProject from "../Images/gameProjectCropped.png";
import GamingVaultProject from "../Images/gameinfo3.png"

const Projects = () => {
  return (
    <Container>
      <Header><HeaderAnimation>Projects</HeaderAnimation></Header>
      <ProjectContainer>
        <TextContainer>
          <ProjectTitle>Gaming Vault</ProjectTitle>
          <ProjectDescription>
            A full-stack web application utilizing the IGDB API to fetch and display game data. 
            Users can explore a list of the most popular and newest games, manage their gaming catalog by 
            adding games to 'Interested', 'Currently Playing', or 'Played' sections, and leave 
            ratings and comments. This project showcases my creativity in designing a personalized and 
            interactive experience for gamers, blending functionality with an intuitive user interface.
          </ProjectDescription>
          <ProjectLink
          href="https://github.com/mcsl10/Gaming-Vault"
          target="_blank"
          rel="noopener noreferrer"
          >
            View Code
          </ProjectLink>
          </TextContainer>
        <ProjectImg src={GamingVaultProject} alt="Screenshot of Gaming Vault" />
      </ProjectContainer>
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
          <ProjectLink
          href="https://github.com/mcsl10/project-js-nyan-cat"
          target="_blank"
          rel="noopener noreferrer"
          >
            View Code
          </ProjectLink>
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
  font-size: 1.9rem;
  margin: 0 auto;
  color: royalblue;
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

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: row;
  color: white;
  font-size: 1.05rem;
  max-width: 80rem;
  margin: 5rem 0;
  gap: 30px;

  @media (max-width: 980px) {
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
`;

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
  font-size: 1.1rem;

  @media (max-width: 1250px) {
    max-width: 100%;
    font-size: 0.96rem;
  }
`;

const ProjectLink = styled.a`
  align-self: center;
  height: 3rem;
  width: 7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-family: poppins;
  text-decoration: none;
  padding: 2px 12px;
  margin-top: 1rem;
  font-size: 1rem;
  color: rgb(180, 180, 200);
  border-radius: 8px;
  background: linear-gradient(145deg, #2e2f38, #1f2027);
  transition: transform 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0px 2px 5px rgba(180, 180, 255, 0.5);

  &:hover {
    transform: scale(0.9);
    color: black;
    background: gold;
    box-shadow: 0px 4px 10px tomato;
    font-weight: bold;
  }
`;

const ProjectImg = styled.img`
  width: 15rem;
  border-radius: 8px;
  transition: transform 0.3s ease;
  margin-left: 20px;

  &:hover {
    transform: scale(1.2);
  }

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

export default Projects;
