import "./About.css";
import useReveal from "./useReveal";
import {
  FiCode,
  FiLayout,
  FiUsers,
  FiZap,
} from "react-icons/fi";

const ATTRIBUTES = [
  { icon: <FiZap />, label: "Fast learner" },
  { icon: <FiUsers />, label: "Strong communication" },
  { icon: <FiCode />, label: "Detail-oriented" },
  { icon: <FiLayout />, label: "Team player" },
];

function About() {
  const photoSrc = "/image/me2.png";
  const revealRef = useReveal();

  return (
    <section className="about reveal" id="about" ref={revealRef}>
      <div className="about-glow about-glow--2" />

      <h2 className="about-title">About Me</h2>

      <div className="about-grid">
        <div className="about-card about-photo-card about-card--violet">
          <div className="about-photo-ring">
            <img src={photoSrc} alt="Profile" className="about-photo" />
          </div>
          <p className="about-photo-caption">
            Frontend Developer • UI enthusiast
          </p>
        </div>

        <div className="about-card about-card--cyan">
          <div className="about-card-icon"><FiCode /></div>
          <h3>Frontend Focus</h3>
          <p>
            I enjoy turning ideas into smooth, responsive interfaces that feel
            modern and easy to use.
          </p>
        </div>

        <div className="about-card about-card--green">
          <div className="about-card-icon"><FiLayout /></div>
          <h3>Design & Code</h3>
          <p>
            I combine visual thinking with clean code so the result is both
            beautiful and practical.
          </p>
        </div>

        <div className="about-card about-card-wide about-card--pink">
          <h3>Key Attributes</h3>
          <ul className="attributes-list">
            {ATTRIBUTES.map((item) => (
              <li key={item.label}>
                <span className="attr-icon">{item.icon}</span>
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;

