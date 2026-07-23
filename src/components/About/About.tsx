import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-header">
          <p className="section-label">Sobre mim</p>

          <h2>
            Transformando ideias em
            <span> experiências digitais.</span>
          </h2>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>
              Sou um desenvolvedor Full Stack Junior apaixonado por tecnologia,
              desenvolvimento web e pela criação de soluções digitais.
            </p>

            <p>
              Atualmente, estou construindo minha experiência através de
              projetos práticos, estudando novas tecnologias e buscando
              entender cada etapa do desenvolvimento de uma aplicação.
            </p>

            <p>
              Meu objetivo é transformar ideias em produtos funcionais,
              acessíveis e bem estruturados.
            </p>
          </div>

          <div className="about-info">
            <div className="info-item">
              <span>01</span>
              <h3>Desenvolvimento</h3>
              <p>
                Construção de aplicações web modernas utilizando tecnologias
                frontend e backend.
              </p>
            </div>

            <div className="info-item">
              <span>02</span>
              <h3>Aprendizado</h3>
              <p>
                Evolução constante através de estudos, projetos práticos e
                resolução de problemas.
              </p>
            </div>

            <div className="info-item">
              <span>03</span>
              <h3>Foco no usuário</h3>
              <p>
                Criação de interfaces simples, intuitivas e agradáveis de
                utilizar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;