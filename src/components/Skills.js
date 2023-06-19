import { FaHtml5, FaCss3Alt, FaSass, FaReact, FaFigma, FaWindows } from "react-icons/fa";
import Icon from '@mui/material/Icon';
import { SiJavascript } from "react-icons/si";
import Title from "./Title";

const Skills = () => {

  const icons = [
    {icon: FaHtml5, name: "HTML", id: 1},
    {icon: FaCss3Alt, name: "CSS", id: 2},
    {icon: FaSass, name: "Sass", id: 3},
    {icon: SiJavascript, name: "JavaScript", id: 4},
    {icon: FaReact, name: "React", id: 5},
    {icon: FaFigma, name: "Figma", id: 6},
    {icon: FaWindows, name: "Windows", id: 7}
  ];

   return (
    <div className="skills">
      <Title>Skills</Title>
      <div className="skills__container">
        {icons.map(arr => {
          return (
            <ul key={arr.id} className="skills__list">
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