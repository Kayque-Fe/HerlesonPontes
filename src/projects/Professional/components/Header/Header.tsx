import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Header.scss";

export default function Header() {
  const IMAGES = [
    "/src/assets/images/professional.jpg",
    "/src/assets/images/karate.jpg",
    "/src/assets/images/gaming.jpg",
  ];

  return (
    <header className="header">
      <div className="background-slide">
        <Fade
          arrows={false}
          autoplay={true}
          pauseOnHover={false}
        >
          {IMAGES.map((image, index) => (
            <div
              key={index}
              className="each-fade"
            >
              <img
                className="image"
                src={image}
                alt=""
              />
            </div>
          ))}
        </Fade>
      </div>
      <div className="header-content">
        <h1>Profissional de Tecnologia da Informação</h1>
        <p>
          Análise e Armazenamento de Dados, Governança e Gestão, Desenvolvimento, Infraestrutura e Servidores, Jogos
          Digitais, Informática na Educação e Tecnologias Assistivas!
        </p>
        <div className="header-buttons">
          <button className="btn-header">Saiba mais</button>
          <button className="btn-header">Contato</button>
        </div>
      </div>
    </header>
  );
}
