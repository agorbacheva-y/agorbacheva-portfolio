import Title from "./Title";
import mainmenu from "../images/mainmenu.png"
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import CustomButton from "./CustomButton";

const Projects = () => {
  return (
    <div className="projects">
      <Title>Recent Work</Title>
      
      <div className="project__container">
        <img src={mainmenu} alt="main menu" className="project__img" />
        <div className="project__overlay">
          <div className="project__text">
            <h5>SmartKids Learning Game</h5>
            <p>A React game for young children to develop vocabulary
              and shape recognition. Developed as a group project during 
              Sundsgårdens IT course.
            </p>
            <div className="project__tech__container">
              <div className="project__tech__button">React</div>
              <div className="project__tech__button">React Router</div>
              <div className="project__tech__button">Web Speech API</div>
            </div>
            <Stack 
              spacing={3} 
              direction="row" 
              justifyContent="center"
            >
              <a href='https://kids-learning-game.netlify.app/' target="blank">
                <CustomButton>Live site</CustomButton>
              </a>
              <a href='https://github.com/agorbacheva-y/kids-learning-game.git' target="blank">
                <CustomButton>Github</CustomButton>
              </a>
            </Stack>
          </div>
        </div>  
      </div>
    </div>
  );
};

export default Projects;