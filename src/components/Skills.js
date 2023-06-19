import { FaHtml5, FaCss3Alt, FaSass, FaReact, FaFigma, FaWindows } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import Title from "./Title";

const Skills = () => {

  const skills = [
    FaHtml5,
    FaCss3Alt,
    FaSass,
    SiJavascript,
    FaReact,
    FaFigma,
    FaWindows
  ];

   return (
    <div className="skills">
      <Title>Skills</Title>

      <div className="skills-container">
        {skills.map((item, i) => {
          const MySkills = skills[i]
          return (
            <ul key={item} className="skills-list">
              <li>
                <MySkills />
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;

{/* <div className="skills-icon">
{skills.map((icon, i) => (
  <p key={icon}>{icon}</p>
))}
</div> */}