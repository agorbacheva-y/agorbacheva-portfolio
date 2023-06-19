import { FaHtml5, FaCss3Alt, FaSass, FaReact, FaFigma, FaWindows } from "react-icons/fa";
import Icon from '@mui/material/Icon';
import { SiJavascript } from "react-icons/si";
import Title from "./Title";

const Skills = () => {

  const icons = [
    {icon: FaHtml5, name: "HTML"},
    {icon: FaCss3Alt, name: "CSS"},
    {icon: FaSass, name: "Sass"},
    {icon: SiJavascript, name: "JavaScript"},
    {icon: FaReact, name: "React"},
    {icon: FaFigma, name: "Figma"},
    {icon: FaWindows, name: "Windows"}
  ];

   return (
    <div className="skills">
      <Title>Skills</Title>

      {icons.map(arr => {
        return (
          <div className="skills-container">
            <ul className="skills-list">
              <li>
                <Icon component={arr.icon} />
                {arr.name}
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Skills;