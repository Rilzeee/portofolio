import { useEffect, useState } from "react";
import "./Projects.css";
import useReveal from "./useReveal";

const PROJECTS = [
  {
    title: "PHP",
    desc: "Membuat database menggunakan php dan di tampilkan melalui Locallhost.",
    img: "/image/Projects1.png",
    demo: "#",
    code: "#",
  },
  {
    title: "My Portfolio V1",
    desc: "Portofolio pertama saya yang di baut hanya dengan menggunakan HTML dan CSS.",
    img: "/image/Project2.png",
    demo: "#",
    code: "#",
  },
  {
    title: "Laravel",
    desc: "Belajar cara menggunakan Laravel yang sangat membingungkan, dan membuat kepala pusing.",
    img: "/image/Project3.png",
    demo: "#",
    code: "#",
  },
  {
    title: "My Portofolio V2",
    desc: "Web yang sekarang anda lihat, adalah web portofolio saya yang baru.",
    img: "/image/Project4.png",
    demo: "#",
    code: "#",
  },
];

function Projects() {
  const revealRef = useReveal();
  const [selected, setSelected] = useState(null); // project yang sedang dilihat
  const [visible, setVisible] = useState(false); // untuk animasi masuk/keluar

  const openModal = (project) => {
    setSelected(project);
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
    // tunggu animasi keluar selesai lalu hapus dari state
    setTimeout(() => setSelected(null), 300);
  };

  // Lock scroll saat modal terbuka
  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  // Tutup dengan tombol Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section className="projects reveal" id="projects" ref={revealRef}>
      <h2>Projects</h2>

      <div className="projects-grid">
        {PROJECTS.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-thumb">
              <img src={project.img} alt={project.title} />
            </div>
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <div className="project-links">
              <button
                className="view-btn"
                onClick={() => openModal(project)}
              >
                View Projects
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Fullscreen Modal */}
      {selected && (
        <div
          className={`project-modal ${visible ? "modal-visible" : "modal-hidden"}`}
          onClick={closeModal}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={closeModal}
              aria-label="Close"
            >
              &times;
            </button>
            <div className="modal-image">
              <img src={selected.img} alt={selected.title} />
            </div>
            <div className="modal-body">
              <h3>{selected.title}</h3>
              <p>{selected.desc}</p>
              <div className="modal-actions">
                <a href={selected.demo} className="modal-btn">Live Demo</a>
                <a href={selected.code} className="modal-btn">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;

