import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>

      <div className="contact-links">

        <a
          href="mailto:vmanushree2006@gmail.com"
          className="contact-item"
        >
          <FaEnvelope />
          <span>Email</span>
        </a>

        <a
          href="https://github.com/Manu1067"
          target="_blank"
          rel="noreferrer"
          className="contact-item"
        >
          <FaGithub />
          <span>GitHub</span>
        </a>

        <a
          href="https://www.linkedin.com/in/manushree-v-938116362"
          target="_blank"
          rel="noreferrer"
          className="contact-item"
        >
          <FaLinkedin />
          <span>LinkedIn</span>
        </a>

      </div>
    </section>
  );
}