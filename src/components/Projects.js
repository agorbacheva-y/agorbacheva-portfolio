import { forwardRef } from "react";
import Title from "./Title";
import login from "../images/login.png";
import trivia from "../images/trivia.png";
import css from "../images/bhromaon.png";
import Stack from "@mui/material/Stack";
import CustomButton from "./CustomButton";

const Projects = ( props, ref ) => {
  return (
    <div className="projects" ref={ref}>
      <Title>Recent Work</Title>
      
      <div className="projects__container">
        {/* Trivia API Game */}
        <div className="project__container">
          <img src={trivia} alt="main menu" className="project__img" />
          
          <div className="project__overlay">
            <div className="project__overlay__text">
              <div className="project__title">
                <h4>Trivia Game</h4>
                <p>A trivia game in React using the Open Trivia DB API.
                  Features: choose from 3 difficulty levels, show correct answer
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
                <a href="https://trivia-quiz-agy.netlify.app/trivia" target="blank">
                  <CustomButton>Live site</CustomButton>
                </a>
                <a href="https://github.com/agorbacheva-y/API.git" target="blank">
                  <CustomButton>Github</CustomButton>
                </a>
              </Stack>
            </div>
          </div>  
        </div>


        {/* SmartKids Learning Game */}
        <div className="project__container">
          <img src={login} alt="main menu" className="project__img" />
          
          <div className="project__overlay">
            <div className="project__overlay__text">
              <div className="project__title">
                <h4>SmartKids Learning Game</h4>
                <p>A game created in React for young children to develop vocabulary
                  and shape recognition. Created as a group project in 
                  Sundsgårdens IT course. Features worked on: Register new user 
                  (removed on live site), Body part game, Face part game
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

        {/* html css final proj */}
        <div className="project__container">
          <img src={css} alt="main menu" className="project__img" />
          
          <div className="project__overlay">
            <div className="project__overlay__text">
              <div className="project__title">
                <h4>HTML/CSS Individual Project</h4>
                <p>The final individual project in Sundsgårdens IT course using html, css, scss
                  for a responsive web design.
                </p>
              </div>
              <div className="project__tech__container">
                <div className="project__tech__button">HTML/CSS</div>
                <div className="project__tech__button">Sass</div>
              </div>
              <Stack 
                spacing={3} 
                direction="row" 
                justifyContent="center"
              >
                <a href="https://agorbacheva-tfwsundsgarden-css-proj.netlify.app/" target="blank">
                  <CustomButton>Live site</CustomButton>
                </a>
                <a href="https://github.com/agorbacheva-y/Bhromaon.git" target="blank">
                  <CustomButton>Github</CustomButton>
                </a>
              </Stack>
            </div>
          </div>  
        </div>

      </div>
    </div>
  );
};

export default forwardRef(Projects);