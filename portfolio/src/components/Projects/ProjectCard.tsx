interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
}

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-card-header">
        <span>Projeto</span>

        <div className="project-links">
          <a href={project.githubUrl} target="_blank">
            GitHub
          </a>

          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank">
              Live
            </a>
          )}
        </div>
      </div>

      <div className="project-card-content">
        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="project-technologies">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;