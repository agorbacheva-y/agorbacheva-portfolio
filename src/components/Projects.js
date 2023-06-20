import Title from "./Title";
import mainmenu from "../images/mainmenu.png"

const Projects = () => {
  return (
    <div className="projects">
      <Title>Recent Work</Title>
      <div className="project__container">
        <img src={mainmenu} alt="main menu" className="project__img" />
        <div className="project__overlay">
          <div className="project__text">
            <h5>SmartKids Learning Game</h5>
          </div>
        </div>  
      </div>
    </div>
  );
};

export default Projects;