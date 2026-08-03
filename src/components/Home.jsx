import "./Home.css";
import useReveal from "./useReveal";
import ElectricBorder from './ElectricBorder'
import GradientText from './GradientText'
import LogoLoop from './LogoLoop';
import { SiReact, SiMysql, SiLaravel, SiHtml5,  } from 'react-icons/si';

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiMysql />, title: "MySQL", href: "https://mysql.com" },
  { node: <SiLaravel />, title: "Laravel", href: "https://laravel.com" },
  { node: <SiHtml5 />, title: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
];

function Home() {
  const revealRef = useReveal();

 function scrollToSection(id) {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  }

  return (
    <div>
      <div className="home reveal" id="home" ref={revealRef}>
        <div className="photo">
          <ElectricBorder
            color="#a5aaec"
            speed={1}
            chaos={0.12}
            thickness={2}
            style={{ borderRadius: 16 }}
          >
            <img src="/image/me.png" alt="me" />
          </ElectricBorder>
        </div>

        <div className="text">
          <GradientText
            colors={["#5227FF", "#bdff9f", "#cf97c6"]}
            animationSpeed={8}
            showBorder={false}
            className="custom-class"
          >
            HEY, I'M MUHAMMAD HAFIZH ARASYID
          </GradientText>
          <p>
            I'm a Front-End Developer and UI/UX Designer. I have experience in creating
            responsive and user-friendly websites using HTML, CSS, JavaScript, and React.
            I also have experience in designing user interfaces using Figma and Adobe XD.
          </p>

          <div className="button-group">
            <button
              className="btn-projects"
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </button>

            <button
              className="btn-contact"
              onClick={() => scrollToSection("contact")}
            >
              Contact Me
            </button>
          </div>

          <div className="logo-loop-wrapper">
            <LogoLoop
              logos={techLogos}
              speed={80}
              direction="left"
              logoHeight={56}
              gap={48}
              hoverSpeed={0}
              scaleOnHover
              fadeOut
              fadeOutColor="#7a7a7a"
              ariaLabel="Technology partners"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;