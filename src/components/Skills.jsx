import {
  FaReact,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaFigma,
  FaRobot,
} from "react-icons/fa";
import { SiLaravel, SiClaude } from "react-icons/si";
import "./Skills.css";

const SKILLS = [
  { name: "React", Icon: FaReact, glow: "#61dafb" },
  { name: "Laravel", Icon: SiLaravel, glow: "#FF2D20" },
  { name: "HTML", Icon: FaHtml5, glow: "#f97362" },
  { name: "CSS", Icon: FaCss3Alt, glow: "#5227ff" },
  { name: "Claude", Icon: SiClaude, glow: "#d97757" },
  { name: "Blackbox", Icon: FaRobot, glow: "#8b5cf6" },
  { name: "Database", Icon: FaDatabase, glow: "#f5c451" },
  { name: "Figma", Icon: FaFigma, glow: "#B497CF" },
];

const RADIUS = 37;

const ORBIT = SKILLS.map((skill, i) => {
  const angle = (i / SKILLS.length) * Math.PI * 2 - Math.PI / 2;
  return {
    ...skill,
    x: 50 + RADIUS * Math.cos(angle),
    y: 50 + RADIUS * Math.sin(angle),
  };
});

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2>SKILLS</h2>

      <div className="skills-orbit">
        {/* garis + titik energi yang mengalir ke foto */}
        <svg className="orbit-lines" viewBox="0 0 100 100">
          {ORBIT.map((skill) => (
            <g key={skill.name}>
              <line
                x1={skill.x}
                y1={skill.y}
                x2={50}
                y2={50}
                stroke={skill.glow}
                pathLength="1"
              />
              <circle r="0.55" fill={skill.glow}>
                <animateMotion
                  dur="2.6s"
                  repeatCount="indefinite"
                  path={`M ${skill.x} ${skill.y} L 50 50`}
                />
              </circle>
              <circle r="0.55" fill={skill.glow}>
                <animateMotion
                  dur="2.6s"
                  begin="1.3s"
                  repeatCount="indefinite"
                  path={`M ${skill.x} ${skill.y} L 50 50`}
                />
              </circle>
            </g>
          ))}
        </svg>

        {/* foto di tengah */}
        <div className="orbit-center">
<img src="image/me2.png" alt="Me" />
        </div>

        {/* skill card mengelilingi foto */}
        {ORBIT.map((skill) => {
          const Icon = skill.Icon;
          return (
            <div
              key={skill.name}
              className="orbit-skill"
              style={{
                left: `${skill.x}%`,
                top: `${skill.y}%`,
                "--glow": skill.glow,
              }}
            >
              <div className="orbit-skill-icon">
                <Icon />
              </div>
              <span className="orbit-skill-name">{skill.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;

