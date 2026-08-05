import { useState } from "react";
import "./Contact.css";
import useReveal from "./useReveal";
import Lanyard from "./Lanyard";
import {
  FaInstagram,
  FaTiktok,
  FaDiscord,
  FaWhatsapp,
} from "react-icons/fa";

const SOCIALS = [
  {
    label: "Instagram",
    icon: <FaInstagram />,
    url: "https://www.instagram.com/hafizarsyd/",
    color: "#8513e2",
  },
  {
    label: "TikTok",
    icon: <FaTiktok />,
    url: "https://www.tiktok.com/@hafizar03_",
    color: "#444343",
  },
  {
    label: "Discord",
    icon: <FaDiscord />,
    url: "https://discord.com/rilzeee./",
    color: "#5865F2",
  },
  {
    label: "WhatsApp",
    icon: <FaWhatsapp />,
    url: "https://wa.me/62882016092249",
    color: "#25D366",
  },
];

function Contact() {
  const revealRef = useReveal();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit() {
    const subject = encodeURIComponent(`Message from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:hafizharasyid03@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <section className="contact reveal" id="contact" ref={revealRef}>
      <h2>CONTACT</h2>

      <div className="contact-grid">
        {/* ====== LANYARD ====== */}
        <div className="contact-lanyard">
          <Lanyard
            position={[0, 0, 10]}
            gravity={[0, -65, 0]}
frontImage="lanyard/me.front.png"
            backImage="lanyard/back.png"
            imageFit="cover"
            lanyardWidth={1.2}
          />
        </div>

        {/* ====== RIGHT COLUMN ====== */}
        <div className="contact-right">
          {/* ====== FORM ====== */}
          <div className="contact-form">
            <input
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
            />

            <input
              name="email"
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
            />

            <textarea
              name="message"
              placeholder="Message"
              rows={4}
              value={form.message}
              onChange={handleChange}
            />

            <button type="button" onClick={handleSubmit}>
              Send Message
            </button>

            {sent && (
              <p className="contact-success">
                Message sent — thanks for reaching out!
              </p>
            )}
          </div>

          {/* ====== SOCIALS ====== */}
          <div className="contact-socials">
            <p className="socials-label">Find me on</p>
            <div className="socials-row">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  style={{ "--social-color": s.color }}
                  title={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>

            <p className="inspired-label"> Inspired coding by</p>
            <div className="inspired-names">
              <span>- M. Abdurrahman Al Ghafiqi, S.Kom</span>
              <span>- Krido Suseno, S.T</span>
              <span>- Muhammad Ferdi Alfian</span>
              <span>- Moch Sutta Puttra H</span>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

