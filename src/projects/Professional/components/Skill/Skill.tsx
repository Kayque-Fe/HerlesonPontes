import "../Header/Header.scss";
import "./Skill.scss";

export default function Skills() {
  return (
    <section className="meet-professional">
      <h2>Habilidades e Competências</h2>
      <p>
        Profissional e entusiasta tecnológico, além de professor e difusor de conceitos, atividades e experiências
        ligadas à análise de dados, governança e gestão tecnológica, desenvolvimento de soluções, infraestrutura
        tecnológica, jogos digitais, educação e tecnologias assistivas.
      </p>
      <Cards />
    </section>
  );
}

export function Cards() {
  return (
    <div className="cards-skill">
      <div className="card-skill">
        <i className="material-symbols-rounded">home</i>
        <div className="card-content">
          <h3>ANÁLISE E ARMAZENAMENTO DE DADOS</h3>
          <p>
            Emprego de tecnologias para a análise de dados, extração de informações e descoberta de padrões, que
            direcionam tomadas de decisão e ampliam a eficiência das ações organizacionais.
          </p>
        </div>
      </div>

      <div className="card-skill">
        <i className="material-symbols-rounded">home</i>
        <div className="card-content">
          <h3>ANÁLISE E ARMAZENAMENTO DE DADOS</h3>
          <p>
            Emprego de tecnologias para a análise de dados, extração de informações e descoberta de padrões, que
            direcionam tomadas de decisão e ampliam a eficiência das ações organizacionais.
          </p>
        </div>
      </div>
      <div className="card-skill">
        <i className="material-symbols-rounded">home</i>
        <div className="card-content">
          <h3>ANÁLISE E ARMAZENAMENTO DE DADOS</h3>
          <p>
            Emprego de tecnologias para a análise de dados, extração de informações e descoberta de padrões, que
            direcionam tomadas de decisão e ampliam a eficiência das ações organizacionais.
          </p>
        </div>
      </div>
    </div>
  );
}
