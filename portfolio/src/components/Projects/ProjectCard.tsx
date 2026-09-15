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
    <article className="min-h-[360px] p-6 flex flex-col justify-between bg-[var(--surface)] border border-[var(--border)] rounded-[10px] transition-all duration-200 hover:-translate-y-1.5 hover:border-[var(--primary)]">
      <div className="flex items-center justify-between">
        <span className="text-xs text-[var(--text-secondary)]">Projeto</span>

        <div className="flex gap-3">
          
            href={project.githubUrl}
            target="_blank"
            className="text-[var(--text-secondary)] text-[13px] no-underline hover:text-[var(--primary)] transition-colors duration-200"
          >
            GitHub
          </a>

          {project.liveUrl && (
            
              href={project.liveUrl}
              target="_blank"
              className="text-[var(--text-secondary)] text-[13px] no-underline hover:text-[var(--primary)] transition-colors duration-200"
            >
              Live
            </a>
          )}
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-[var(--text-primary)] text-2xl">
          {project.title}
        </h3>

        <p className="mb-6 text-[var(--text-secondary)] text-[15px] leading-[1.7]">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="px-2.5 py-1.5 bg-[#111c2b] rounded text-[var(--text-secondary)] text-xs"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;