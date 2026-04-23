import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const socialLinks = [
  { icon: FaGithub, url: "https://github.com/JhonFredyH", label: "GitHub" },
  {
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/jhonf-hidalgo-566274334/",
    label: "LinkedIn",
  },
  { icon: FaEnvelope, url: "mailto:jhonfredyha@gmail.com", label: "Email" },
];

const Footer = ({ lang = "ES" }) => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-logo">
          dev<span>.</span>portfolio
        </div>

        <p className="footer-copy">
          {lang === "ES"
            ? "© 2026 Jhon Fredy Hidalgo — Diseño Web Creativo"
            : "© 2026 Jhon Fredy Hidalgo — Creative Web Design"}
        </p>

        <div className="footer-links">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="footer-link"
              aria-label={link.label}
            >
              <link.icon size={30} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
