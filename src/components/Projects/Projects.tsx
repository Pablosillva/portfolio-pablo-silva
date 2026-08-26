import "./Projects.css";
import ProjectCard from "./ProjectCard";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
}

const projects: Project[] = [
  {
    title: "Dashboard Analytics",
    description:
      "Dashboard para visualização de métricas e dados de uma aplicação.",
    technologies: ["React", "TypeScript", "CSS"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "E-commerce",
    description:
      "Aplicação de e-commerce com catálogo de produtos e carrinho de compras.",
    technologies: ["React", "Node.js", "PostgreSQL"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Task Manager",
    description:
      "Aplicação para gerenciamento de tarefas e organização de produtividade.",
    technologies: ["React", "TypeScript", "Node.js"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="projects-header">
          <p className="section-label">Projetos</p>

          <h2>
            Algumas coisas que
            <span> construí.</span>
          </h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;