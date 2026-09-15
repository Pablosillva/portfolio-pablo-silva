function About() {
  return (
    <section id="about" className="max-w-[1320px] mx-auto px-5 md:px-14 py-25 md:py-40">
      <div className="max-w-[700px] mb-14 md:mb-20">
        <p className="mb-6 text-[var(--primary)] text-sm font-semibold uppercase tracking-[2px]">
          Sobre mim
        </p>

        <h2 className="text-4xl md:text-6xl leading-[1.05] tracking-tighter text-[var(--text-primary)]">
          Transformando ideias em
          <span className="text-[var(--text-secondary)]"> experiências digitais.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-[100px]">
        <div className="max-w-[560px]">
          <p className="mb-6 text-[var(--text-secondary)] text-[17px] leading-[1.8]">
            Sou um desenvolvedor Full Stack Junior apaixonado por tecnologia,
            desenvolvimento web e pela criação de soluções digitais.
          </p>

          <p className="mb-6 text-[var(--text-secondary)] text-[17px] leading-[1.8]">
            Atualmente, estou construindo minha experiência através de
            projetos práticos, estudando novas tecnologias e buscando
            entender cada etapa do desenvolvimento de uma aplicação.
          </p>

          <p className="mb-6 text-[var(--text-secondary)] text-[17px] leading-[1.8]">
            Meu objetivo é transformar ideias em produtos funcionais,
            acessíveis e bem estruturados.
          </p>
        </div>

        <div className="flex flex-col gap-10">
          <div className="pb-8 border-b border-[var(--border)]">
            <span className="block mb-4 text-[var(--primary)] text-sm font-semibold">
              01
            </span>
            <h3 className="mb-3 text-xl text-[var(--text-primary)]">
              Desenvolvimento
            </h3>
            <p className="text-[15px] leading-[1.7] text-[var(--text-secondary)]">
              Construção de aplicações web modernas utilizando tecnologias
              frontend e backend.
            </p>
          </div>

          <div className="pb-8 border-b border-[var(--border)]">
            <span className="block mb-4 text-[var(--primary)] text-sm font-semibold">
              02
            </span>
            <h3 className="mb-3 text-xl text-[var(--text-primary)]">
              Aprendizado
            </h3>
            <p className="text-[15px] leading-[1.7] text-[var(--text-secondary)]">
              Evolução constante através de estudos, projetos práticos e
              resolução de problemas.
            </p>
          </div>

          <div className="pb-8 border-b border-[var(--border)]">
            <span className="block mb-4 text-[var(--primary)] text-sm font-semibold">
              03
            </span>
            <h3 className="mb-3 text-xl text-[var(--text-primary)]">
              Foco no usuário
            </h3>
            <p className="text-[15px] leading-[1.7] text-[var(--text-secondary)]">
              Criação de interfaces simples, intuitivas e agradáveis de
              utilizar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;