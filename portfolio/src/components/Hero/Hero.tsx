function Hero() {
  return (
    <section className="max-w-[1320px] min-h-[calc(100vh-80px)] mx-auto px-5 md:px-14 flex items-center py-16 md:py-0">
      <div className="grid md:grid-cols-2 gap-12 items-center w-full">
        {/* Coluna da esquerda - texto */}
        <div className="max-w-[700px]">
          <p className="mb-4 text-[var(--primary)] text-base font-medium animate-[fadeInUp_0.6s_ease-out]">
            Olá, eu sou
          </p>

          <h1 className="mb-4 text-[var(--text-primary)] text-4xl sm:text-5xl md:text-7xl leading-none tracking-tighter animate-[fadeInUp_0.6s_ease-out_0.1s_backwards]">
            Pablo Silva
          </h1>

          <h2 className="mb-6 text-[var(--text-secondary)] text-xl sm:text-2xl md:text-4xl font-medium animate-[fadeInUp_0.6s_ease-out_0.2s_backwards]">
            Desenvolvedor Full Stack Junior
          </h2>

          <p className="max-w-[560px] mb-8 text-[var(--text-secondary)] text-base leading-[1.8] animate-[fadeInUp_0.6s_ease-out_0.3s_backwards]">
            Construo experiências digitais modernas e aplicações web funcionais utilizando tecnologias modernas.
          </p>

          <div className="flex flex-wrap gap-4 animate-[fadeInUp_0.6s_ease-out_0.4s_backwards]">

            <a href="#projects" className="px-6 py-3 rounded-md bg-[var(--primary)] text-[var(--background)] font-medium hover:opacity-90 transition">
              Ver Projetos
            </a>

            <a href="#contact" className="px-6 py-3 rounded-md border border-[var(--border)] text-[var(--text-primary)] font-medium hover:bg-[var(--surface)] transition">
              Entre em Contato
            </a>
          </div>
        </div>

        {/* Coluna da direita - bloco de código estilo terminal */}
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg overflow-hidden w-full">
          <div className="flex gap-2 px-4 py-3 border-b border-[var(--border)]">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-yellow-500" />
            <span className="w-3 h-3 rounded-full bg-green-500" />
          </div>

          <pre className="p-4 md:p-6 text-xs md:text-sm leading-relaxed overflow-x-auto">
            <code>
              <span className="text-purple-400">const</span>{" "}
              <span className="text-blue-300">desenvolvedor</span> = {"{"}
              {"\n"}  <span className="text-sky-300">nome</span>:{" "}
              <span className="text-green-400">"Pablo Silva"</span>,
              {"\n"}  <span className="text-sky-300">nivel</span>:{" "}
              <span className="text-green-400">"Junior"</span>,
              {"\n"}  <span className="text-sky-300">stack</span>: [
              <span className="text-green-400">"React"</span>,{" "}
              <span className="text-green-400">"TypeScript"</span>,{" "}
              <span className="text-green-400">"Node.js"</span>,
              {"\n"}    <span className="text-green-400">"PostgreSQL"</span>],
              {"\n"}  <span className="text-sky-300">focadoEm</span>:{" "}
              <span className="text-green-400">"Criar soluções reais"</span>,
              {"\n"}{"}"};
              {"\n\n"}
              <span className="text-purple-400">function</span>{" "}
              <span className="text-yellow-300">criarSolucoes</span>(
              <span className="text-orange-300">ideia</span>) {"{"}
              {"\n"}  <span className="text-purple-400">return</span>{" "}
              transformar(<span className="text-orange-300">ideia</span>).em(
              <span className="text-green-400">"solução digital"</span>);
              {"\n"}{"}"}
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}

export default Hero;