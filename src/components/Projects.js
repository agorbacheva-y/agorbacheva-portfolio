import { forwardRef } from "react";
import Title from "./Title";
import login from "../images/login.png";
import trivia from "../images/trivia.png";
import Stack from "@mui/material/Stack";
import CustomButton from "./CustomButton";

const Projects = ( props, ref ) => {
  return (
    <div className="projects" ref={ref}>
      <Title>Recent Work</Title>
      
      {/* SmartKids Learning Game */}
      <div className="project__container">
        <img src={login} alt="main menu" className="project__img" />
        
        <div className="project__overlay">
          <div className="project__overlay__text">
            <div className="project__title">
              <h4>SmartKids Learning Game</h4>
              <p>A React game for young children to develop vocabulary
                and shape recognition. Developed as a group project during 
                Sundsgårdens IT course.
              </p>
            </div>
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

      {/* Trivia API Game */}
      <div className="project__container">
        <img src={trivia} alt="main menu" className="project__img" />
        
        <div className="project__overlay">
          <div className="project__overlay__text">
            <div className="project__title">
              <h4>Trivia Game</h4>
              <p>A React game using the Open Trivia DB API.
              </p>
            </div>
            <div className="project__tech__container">
              <div className="project__tech__button">React</div>
              <div className="project__tech__button">React Router</div>
              <div className="project__tech__button">Open Trivia API</div>
            </div>
            <Stack 
              spacing={3} 
              direction="row" 
              justifyContent="center"
            >
              <a href="#" target="blank">
                <CustomButton>Live site</CustomButton>
              </a>
              <a href="#" target="blank">
                <CustomButton>Github</CustomButton>
              </a>
            </Stack>
          </div>
        </div>  
      </div>
    </div>
  );
};

export default forwardRef(Projects);