import { useState, useEffect } from "react";
import Aurora from "./components/Aurora";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Loading from "./components/Loading";

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Kunci scroll body selama loading tampil
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setFadeOut(true); // mulai fade-out
      setTimeout(() => {
        setLoading(false); // hapus setelah animasi selesai
        // Buka kembali scroll setelah loading selesai
        document.body.style.overflow = "";
        document.documentElement.style.overflow = "";
      }, 600);
    }, 3000); // loading 3 detik

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, []);

if (loading) {
    return <Loading fadeOut={fadeOut} />;
  }

  return (
    <div className="main-wrapper">
      {/* Background Aurora tetap di belakang */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          zIndex: -1,
          pointerEvents: "none",
        }}
      >
        <Aurora
          colorStops={["#34f5ab", "#B497CF", "#5227FF"]}
          blend={0.5}
          amplitude={1}
          speed={0.5}
        />
      </div>

      {/* Navbar melayang di atas */}
      <Navbar />

      {/* Container Utama untuk Snap Scroll */}
      <main>
        <section className="section-snap" id="home">
          <Home />
        </section>

        <section className="section-snap" id="about">
          <About />
        </section>

        <section className="section-snap" id="projects">
          <Projects />
        </section>

        <section className="section-snap" id="skills">
          <Skills />
        </section>

        <section className="section-snap" id="story">
          <Story />
        </section>

        <section className="section-snap" id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;