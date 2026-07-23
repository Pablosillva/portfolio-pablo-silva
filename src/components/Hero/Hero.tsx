import "./Hero.css";

function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">
                <p>Olá, eu sou</p>

                <h1>Pablo Silva</h1>

                <h2>Desenvolvedor Full Stack Junior</h2>

                <p>
                    Construo experiências digitais modernas e aplicações web
                     funcionais utilizando tecnologias modernas.
                </p>

                <div className="hero-actions">
                    <a href="#projects" className="btn btn-primary">
                        Ver Projetos
                    </a>
                    <a href="#contact" className="btn btn-secondary">
                        Entre em Contato
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Hero;