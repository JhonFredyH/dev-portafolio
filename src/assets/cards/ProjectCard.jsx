import { useLang } from "../../context/LangContext";
import "./ProjectCard.css";

const ProjectCard = ({ project, index }) => {
  const { lang } = useLang();

  return (
    <div
      className="project-card reveal reveal--scale"
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className={`project-visual ${project.visual}`}>

        {project.preview ? (
          <>
            <img
              src={project.preview}
              alt="project preview"
              className="project-preview-img"
            />
            <div className="project-hero-overlay" />
          </>
        ) : (
          <div className="project-visual-icon">
            {typeof project.icon === "string" ? (
              <img
                src={project.icon}
                alt="project icon"
                className="project-icon-img"
              />
            ) : (
              <project.icon />
            )}
          </div>
        )}

        <div className="project-tags-overlay">
          {project.tags.map((tag, i) => {
            const Icon = tag.icon;
            return (
              <span key={i} className="tech-badge">
                <Icon size={18} />
                {tag.label}
              </span>
            );
          })}
        </div>
      </div>

      <div className="project-body">

        <div className="project-header">
          <div className="project-number">{project.number}</div>
          {project.live && (
            <div className="project-live-badge">
              <span className="live-dot"></span>
              Production
            </div>
          )}
        </div>

        <div className="project-name">{project.name[lang]}</div>
        <div className="project-desc">{project.desc[lang]}</div>

        <div className="project-divider"></div>

        <div className="project-features">
          {project.features.slice(0, 4).map((f, i) => (
            <span key={i} className="feature-item">
              <span className={`dot ${f.dotColor || "dot-green"}`}></span>
              {f[lang]}
            </span>
          ))}
        </div>

        <div className="project-divider"></div>

        <div className="project-links">
          {project.links
            .filter((link) => link.url !== "#")
            .map((link, i) => {
              const Icon = link.icon;
              return (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`project-link ${link.label.EN === "Live Demo" ? "demo" : ""}`}
                >
                  <Icon size={20} />
                  {link.label[lang]}
                </a>
              );
            })}
        </div>

      </div>
    </div>
  );
};

export default ProjectCard;
