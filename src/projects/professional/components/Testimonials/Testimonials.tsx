import { TESTIMONIALS } from "../../utils/data/testimonials";
import "./Testimonials.scss";

export default function Testimonials() {
  return (
    <section className="testimonials">
      <h2>Depoimentos</h2>
      <p className="p-alt">Veja o que outros profissionais falam sobre Herleson Pontes e sua atuação profissional:</p>
      <div className="testimonials-content">
        {TESTIMONIALS.map((testimonial, index) => (
          <div
            key={index}
            className="testimonial"
          >
            <small className="quote">❞</small>
            <p className="testimonial-message p">{testimonial.message}</p>
            <img
              src={testimonial.image}
              alt={testimonial.name}
            />
            <h5>{testimonial.name}</h5>
            <small>{testimonial.position}</small>
          </div>
        ))}
      </div>
    </section>
  );
}
