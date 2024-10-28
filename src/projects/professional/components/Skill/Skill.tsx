import { SKILLS } from "../../utils/data/skills";
import "../Header/Header.scss";
import "./Skill.scss";

export default function Skill() {
  return (
    <section
      className="skills item-list"
      id="competencias"
    >
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
      {SKILLS.map((skill) => (
        <div
          key={skill.id}
          className="card-skill"
        >
          <i className="material-symbols-outlined">{skill.icon}</i>
          <div className="card-content">
            <h5>{skill.title}</h5>
            <p>{skill.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
