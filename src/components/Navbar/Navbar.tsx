import "./Navbar.css";

function Navbar() {
    return (
        <header className="navbar">
            <nav className="navbar-container">
                <a href="/" className="logo">
                    Pablo<span>.</span>
                </a>

                <div className="nav-links">
                    <a href="#about">Sobre</a>
                    <a href="#projects">Projetos</a>
                    <a href="#skills">Skills</a>
                    <a href="#contact">Contato</a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;