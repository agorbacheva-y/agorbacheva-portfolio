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
            <p>A React game for young children to develop vocabulary
              and shape recognition. Developed as a group project during 
              Sundsgårdens IT course.
            </p>
            <div>
              <button>React</button>
              <button>React Router</button>
              <button>Web Speech API</button>
            </div>
            <div>
              <button>View live</button>
              <button>See code</button>
            </div>
            
          </div>
        </div>  
      </div>
    </div>
  );
};

export default Projects;