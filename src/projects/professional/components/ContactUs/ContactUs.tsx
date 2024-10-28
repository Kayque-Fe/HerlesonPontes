import "./ContactUs.scss";

export default function ContactUs() {
  return (
    <section
      className="contact-us item-list"
      id="contato"
    >
      <h2>Entre em Contato</h2>

      <p>
        Utilize o formulário para enviar sua mensagem ou para solicitar sua palestra, curso ou capacitação com Herleson
        Pontes.
      </p>

      <p>Venha fazer parte deste novo mundo de possibilidades infinitas!</p>

      <div className="card-form">
        <div className="card-social-media">
          <h5>Informações para contato</h5>
          <i className="material-symbols-outlined">email</i>
          <p>Envie sua mensagem ou nos encontre nas Redes Sociais!</p>
          <div className="social-media">
            <a
              href=""
              className="social-media-link"
            >
              <img src="/src/assets/svgs/icons8-facebook.svg"></img>
            </a>
            <a
              href=""
              className="social-media-link"
            >
              <img src="/src/assets/svgs/icons8-instagram.svg"></img>
            </a>
            <a
              href=""
              className="social-media-link"
            >
              <img src="/src/assets/svgs/icons8-linkedin.svg"></img>
            </a>
            <a
              href=""
              className="social-media-link"
            >
              <img src="/src/assets/svgs/icons8-youtube.svg"></img>
            </a>
            <a
              href=""
              className="social-media-link"
            >
              <img src="/src/assets/svgs/icons8-twitterx.svg"></img>
            </a>
          </div>
        </div>
        <form className="form-group">
          <div className="form-control">
            <label htmlFor="name">Nome (obrigatório)</label>
            <input
              type="text"
              id="name"
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">E-mail (obrigatório)</label>
            <input
              type="email"
              id="email"
            />
          </div>
          <div className="form-control">
            <label htmlFor="subject">Assunto</label>
            <input
              type="text"
              id="subject"
            />
          </div>
          <div className="form-control">
            <label htmlFor="message">Mensagem</label>
            <textarea id="message" />
          </div>
          <button className="btn-secondary">Enviar</button>
        </form>
      </div>
    </section>
  );
}
