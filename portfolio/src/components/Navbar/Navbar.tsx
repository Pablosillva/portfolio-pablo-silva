import { useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import useTheme from "../../hooks/useTheme";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const links = [
    { href: "#about", label: "Sobre" },
    { href: "#projects", label: "Projetos" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contato" },
  ];

  return (
    <header className="w-full border-b border-[var(--border)] relative">
      <nav className="h-20 max-w-[1320px] mx-auto px-5 md:px-14 flex items-center justify-between">
        <a href="/" className="text-[var(--text-primary)] text-2xl font-bold no-underline">
          Pablo<span className="text-[var(--primary)]">.</span>
        </a>

        {/* Desktop: links + botão de tema juntos, mesmo espaçamento */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (

            <a key={link.href}
              href={link.href}
              className="text-[var(--text-secondary)] text-sm no-underline hover:text-[var(--primary)] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}

          <button
            onClick={toggleTheme}
            className="text-[var(--text-primary)] hover:text-[var(--primary)] transition-colors duration-200"
            aria-label="Alternar tema"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile: tema + hambúrguer */}
        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={toggleTheme}
            className="text-[var(--text-primary)] hover:text-[var(--primary)] transition-colors duration-200"
            aria-label="Alternar tema"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[var(--text-primary)]"
            aria-label="Abrir menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden absolute top-16 right-5 w-56 bg-[var(--surface)] border border-[var(--border)] rounded-lg shadow-lg flex flex-col p-4 gap-1">
          {links.map((link) => (

            <a key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[var(--text-secondary)] text-sm no-underline hover:text-[var(--primary)] hover:bg-[var(--background)] transition-colors duration-200 px-3 py-2 rounded-md"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

export default Navbar;