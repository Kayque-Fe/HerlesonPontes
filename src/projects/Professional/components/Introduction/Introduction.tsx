import { LIST_INTRODUCTION } from "../../utils/list-introduction";
import "./Introduction.scss";

export default function Introduction() {
  return (
    <section className="introduction">
      <ul className="cards">
        {LIST_INTRODUCTION.map((item) => (
          <li className="card">
            <i className="material-symbols-rounded">{item.icon}</i>
            <div className="card-content">
              <h2>{item.title}</h2>
              <p>{item.subtitle}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
