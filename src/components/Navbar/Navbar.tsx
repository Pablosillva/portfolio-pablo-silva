function Navbar() {
  return (
    <header className="w-full border-b border-[var(--border)]">
      <nav className="h-20 max-w-[1320px] mx-auto px-14 flex items-center justify-between">
        <a href="/" className="text-[var(--text-primary)] text-2xl font-bold no-underline">
          Pablo<span className="text-[var(--primary)]">.</span>
        </a>

        <div className="flex items-center gap-8">
          <a href="#about" className="text-[var(--text-secondary)] text-sm no-underline hover:text-[var(--primary)] transition-colors duration-200">
            Sobre
          </a>

          <a href="#projects" className="text-[var(--text-secondary)] text-sm no-underline hover:text-[var(--primary)] transition-colors duration-200">
            Projetos
          </a>

          <a href="#skills" className="text-[var(--text-secondary)] text-sm no-underline hover:text-[var(--primary)] transition-colors duration-200">
            Skills
          </a>

          <a href="#contact" className="text-[var(--text-secondary)] text-sm no-underline hover:text-[var(--primary)] transition-colors duration-200">
            Contato
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;