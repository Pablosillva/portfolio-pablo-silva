import RevealOnScroll from "../RevealOnScroll/RevealOnScroll";

interface Skill {
  name: string;
  level: "Iniciante" | "Intermediário" | "Avançado";
}

interface SkillGroup {
  category: string;
  skills: Skill[];
}

const skillGroups: SkillGroup[] = [
  {
    category: "Front-end",
    skills: [
      { name: "React", level: "Intermediário" },
      { name: "TypeScript", level: "Intermediário" },
      { name: "Tailwind CSS", level: "Intermediário" },
      { name: "Next.js", level: "Iniciante" },
      { name: "React Router", level: "Iniciante" },
    ],
  },
  {
    category: "Back-end",
    skills: [
      { name: "Node.js", level: "Iniciante" },
      { name: "Express", level: "Iniciante" },
      { name: "PostgreSQL", level: "Iniciante" },
    ],
  },
  {
    category: "Ferramentas",
    skills: [
      { name: "Git & GitHub", level: "Intermediário" },
      { name: "Vite", level: "Intermediário" },
      { name: "Lucide React", level: "Intermediário" },
    ],
  },
];

const levelStyles: Record<Skill["level"], string> = {
  Iniciante: "bg-[#111c2b] text-[var(--text-secondary)]",
  Intermediário: "bg-[var(--primary)]/15 text-[var(--primary)]",
  Avançado: "bg-[var(--primary)] text-[var(--background)]",
};

function Skills() {
  return (
    <section id="skills" className="max-w-[1320px] mx-auto px-5 md:px-14 py-25 md:py-40">
      <div className="max-w-[700px] mb-14 md:mb-20">
        <p className="mb-6 text-[var(--primary)] text-sm font-semibold uppercase tracking-[2px]">
          Skills
        </p>

        <h2 className="text-4xl md:text-6xl leading-[1.05] tracking-tighter text-[var(--text-primary)]">
          Tecnologias que
          <span className="text-[var(--text-secondary)]"> já utilizei.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
  {skillGroups.map((group, index) => (
    <RevealOnScroll key={group.category} delay={index * 150}>
      <div>
        <h3 className="mb-6 text-lg font-semibold text-[var(--text-primary)]">
          {group.category}
        </h3>

        <div className="flex flex-col gap-3">
          {group.skills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center justify-between px-4 py-3 border border-[var(--border)] rounded-lg"
            >
              <span className="text-sm text-[var(--text-primary)]">
                {skill.name}
              </span>

              <span
                className={`px-2.5 py-1 rounded text-xs font-medium ${levelStyles[skill.level]}`}
              >
                {skill.level}
              </span>
            </div>
          ))}
        </div>
      </div>
    </RevealOnScroll>
  ))}
</div>
    </section>
  );
}

export default Skills;