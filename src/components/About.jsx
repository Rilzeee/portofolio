import { useEffect, useRef, useState } from "react";
import "./About.css";
import useReveal from "./useReveal";
import {
  FiAward,
  FiMonitor,
  FiServer,
  FiDatabase,
  FiLayout,
  FiDownload,
} from "react-icons/fi";

const ATTRIBUTES = [
  { icon: <FiAward />, label: "2+ Years  Experience (School Projects)" },
  { icon: <FiMonitor />, label: "Figma To Code (HTML, CSS, React)" },
  { icon: <FiServer />, label: "Backend Basics (PHP, Laravel" },
  { icon: <FiDatabase />, label: "Database Management (CMD, phpMyAdmin)" },
];

const STATS = [
  { target: 2, suffix: "+", label: "Years Experience" },
  { target: 6, suffix: "+", label: "Projects Completed" },
];

/* Komponen animasi angka naik dari 0 sampai target saat terlihat di layar */
function Counter({ target, suffix, label }) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;

const duration = 2600;
            const start = performance.now();

            const tick = (now) => {
              const progress = Math.min((now - start) / duration, 1);
              // easing mulus (ease-out-expo) dengan perlambatan sangat halus
              const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
              setValue(Math.round(eased * target));
              if (progress < 1) requestAnimationFrame(tick);
            };

            requestAnimationFrame(tick);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div className="about-stat" ref={ref}>
      <span className="about-stat-value">
        {value}
        {suffix}
      </span>
      <span className="about-stat-label">{label}</span>
    </div>
  );
}

function About() {
  const photoSrc = "image/me2.png";
  const revealRef = useReveal();
  const [showCv, setShowCv] = useState(false);
  const [cvScrolled, setCvScrolled] = useState(false);
  const cvContentRef = useRef(null);

// Deteksi scroll di dalam modal CV → tampilkan tombol download (desktop)
  useEffect(() => {
    if (!showCv) return;
    const el = cvContentRef.current;
    if (!el) return;

    const handleScroll = () => {
      setCvScrolled(el.scrollTop > 120);
    };

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, [showCv]);

  return (
    <section className="about reveal" id="about" ref={revealRef}>
      <div className="about-glow about-glow--2" />

      <h2 className="about-title">ABOUT ME</h2>

      <div className="about-grid">
        <div className="about-card about-photo-card about-card--violet">
          <div className="about-photo-ring">
            <img src={photoSrc} alt="Profile" className="about-photo" />
          </div>
          <p className="about-photo-caption">
            Frontend Developer • UI enthusiast
          </p>

          <div className="about-stats">
            {STATS.map((stat) => (
              <Counter key={stat.label} {...stat} />
            ))}
          </div>

          <button
            className="about-cv-btn"
            onClick={() => setShowCv(true)}
          >
            <FiAward /> View CV
          </button>
        </div>

        <div className="about-card about-card--cyan">
          <div className="about-card-icon"><FiMonitor /></div>
          <h3>Web Development</h3>
          <p>
            I focus on building modern web interfaces using react, HTML, and CSS, alongside strong foundations in 
            backend programing with PHP and Laravel.
          </p>
        </div>

        <div className="about-card about-card--green">
          <div className="about-card-icon"><FiLayout /></div>
          <h3>Design & Database</h3>
          <p>
            I translate Figma designs into clean, responsive code and manage databases efficiently using PhpMyAdmin and MySQL
             via CMD.
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

{/* ====== Modal CV ====== */}
      {showCv && (
        <div className="cv-modal" onClick={() => setShowCv(false)}>
          <div
            className="cv-modal-content"
            ref={cvContentRef}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="cv-modal-close"
              onClick={() => setShowCv(false)}
              aria-label="Close"
            >
              &times;
            </button>

<div className="cv-modal-image">
              <img src="my cv/cv.jpeg" alt="Curriculum Vitae" />
            </div>

            <a
              className={`cv-download-btn ${cvScrolled ? "visible" : ""}`}
              href="my cv/cv.jpeg"
              download="Muhammad-Hafizh-Arasyid-CV.jpeg"
              title="Download CV"
            >
<FiDownload />
            </a>
          </div>
        </div>
      )}
    </section>
  );
}

export default About;
