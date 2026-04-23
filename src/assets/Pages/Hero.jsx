import "./Hero.css";
import { heroContent, stackTags } from "../../data/heroContent.js";

const Hero = ({ lang = "ES" }) => {
  const c = heroContent[lang];

  return (
    <section className="hero" id="inicio">
      <div className="hero-blob blob1"></div>
      <div className="hero-blob blob2"></div>

      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-badge-text">{c.badge}</span>
        </div>
        <h1>{c.title}</h1>
        <span className="hero-subtitle">{c.subtitle}</span>
        <p className="hero-text">{c.text}</p>

        <div className="hero-stack">
          {stackTags.map((tag) => (
            <span key={tag} className="stack-tag">{tag}</span>
          ))}
        </div>

        <div className="hero-ctas">
          <a href="#proyectos" className="btn-primary">
            {c.cta1}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#contacto" className="btn-secondary">
            {c.cta2}
          </a>
        </div>
      </div>

      <div className="hero-scroll">
        <div className="scroll-line"></div>
        scroll
      </div>
    </section>
  );
};

export default Hero;
