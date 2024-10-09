import "../Header/Header.scss";
import "./MeetProfessional.scss";
export default function MeetProfessional() {
  return (
    <section className="meet-professional">
      <h3>PROFISSIONAL DE TECNOLOGIA DA INFORMAÇÃO</h3>
      <h2>Herleson Pontes</h2>
      <p>
        Professor, consultor, escritor e palestrante, com Doutorado em Informática Aplicada, Mestrados em Informática
        Aplicada e Gestão de Projetos, além de Bacharel em Sistemas de Informação, Estudante das Pós-graduações em
        Informática Aplicada à Educação e Docência para a Educação Profissional e Tecnológica, Graduando em Educação
        Física e com certificações na área de Tecnologia da Informação.
      </p>
      <button className="btn-header btn-header-alt">Conheça o profissional</button>
      <ImageColumn />
    </section>
  );
}

export function ImageColumn() {
  return (
    <section className="meet-professional-image">
      <img
        src="https://via.placeholder.com/300"
        alt="Herleson Pontes"
      />
      <img
        src="https://via.placeholder.com/300"
        alt="Herleson Pontes"
      />
      <img
        src="https://via.placeholder.com/300"
        alt="Herleson Pontes"
      />
    </section>
  );
}
