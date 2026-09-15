import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

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

        {/* Links normais - só aparecem em telas médias pra cima */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            
            <a  key={link.href}
              href={link.href}
              className="text-[var(--text-secondary)] text-sm no-underline hover:text-[var(--primary)] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Botão hambúrguer - só aparece no mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[var(--text-primary)]"
          aria-label="Abrir menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Menu mobile - só aparece quando menuOpen é true */}
      {menuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[var(--background)] border-b border-[var(--border)] flex flex-col px-5 py-6 gap-5">
          {links.map((link) => (
            
            <a  key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[var(--text-secondary)] text-sm no-underline hover:text-[var(--primary)] transition-colors duration-200"
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