import ProjectCard from "../cards/ProjectCard";
import { projects, projectsContent } from "../../data/projectContent.js";
import "./Projects.css";

const Projects = ({ lang = "ES" }) => {
  const c = projectsContent[lang];

  return (
    <section className="projects" id="proyectos">
      <div className="page-section">
        <div className="section-header reveal">
          <span className="section-label">{c.label}</span>
          <h2 className="section-title">{c.title}</h2>
          <div className="section-line"></div>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
