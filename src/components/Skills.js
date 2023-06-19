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
      <div className="skills__container">
        {icons.map(arr => {
          return (
            
              <ul className="skills__list">
                <li className="skills__icon">
                  <Icon component={arr.icon} />
                  {arr.name}
                </li>
              </ul>
            
          );
        })}
      </div>
    </div>
  );
};

export default Skills;