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
    title: "AutoTech Center",
    description:
      "Portal de conteúdo sobre mecânica, funilaria e diagnóstico automotivo, com categorias de artigos, ferramentas interativas (calculadoras, gerador de código OBD2) e sistema de login.",
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "Express", "PostgreSQL"],
    githubUrl: "https://github.com/Pablosillva/autotech",
    liveUrl: "https://autotechcenter.vercel.app/",
  },
  {
    title: "Revizzi Auto Center",
    description:
      "Site institucional da oficina onde trabalho como mecânico há 8 anos, reconstruído em React com páginas de serviços, blog e contato.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "React Router", "Lucide React"],
    githubUrl: "https://github.com/Pablosillva/revizzi",
    liveUrl: "",
  },
  {
    title: "Portfólio Pessoal",
    description:
      "Este portfólio, desenvolvido para apresentar minha transição de carreira para desenvolvedor Full Stack.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/Pablosillva/portfolio-pablo-silva",
    liveUrl: "",
  },
];

function Projects() {
  return (
    <section id="projects" className="max-w-[1320px] mx-auto px-14 py-40">
      <div className="max-w-[700px] mb-20">
        <p className="mb-6 text-[var(--primary)] text-sm font-semibold uppercase tracking-[2px]">
  Projetos
</p>

        <h2 className="text-4xl md:text-6xl leading-[1.05] tracking-tighter text-[var(--text-primary)]">
          Algumas coisas que
          <span className="text-[var(--text-secondary)]"> construí.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;