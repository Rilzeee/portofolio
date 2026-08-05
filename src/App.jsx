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

  // Cegah pinch-zoom & geser horizontal di seluruh aplikasi (khusus mobile/iOS)
  useEffect(() => {
    let startX = 0;
    let startY = 0;

    const handleTouchStart = (e) => {
      if (e.touches.length === 1) {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
      }
    };

    const handleTouchMove = (e) => {
      // Blokir pinch-zoom (multi-touch)
      if (e.touches.length > 1) {
        e.preventDefault();
        return;
      }

      // Blokir geser horizontal (biarkan scroll vertikal)
      if (e.touches.length === 1) {
        const dx = e.touches[0].clientX - startX;
        const dy = e.touches[0].clientY - startY;
        // Jika gerakan lebih horizontal daripada vertikal, blokir
        if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 10) {
          e.preventDefault();
        }
      }
    };

    document.addEventListener("touchstart", handleTouchStart, { passive: true });
    document.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
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