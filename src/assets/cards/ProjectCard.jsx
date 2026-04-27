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
        <div className="project-visual-icon">{project.icon}</div>

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
        <div className="project-number">{project.number}</div>
        <div className="project-name">{project.name[lang]}</div>
        <div className="project-desc">{project.desc[lang]}</div>
        
        <div className="project-features">
          {project.features.map((f, i) => (
            <span key={i}>✔ {f[lang]}</span>
          ))}
        </div>

        <div className="project-links">
          {project.links.map((link, i) => {
            const Icon = link.icon;
            return (
              <a key={i} href={link.url} className="project-link">
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
