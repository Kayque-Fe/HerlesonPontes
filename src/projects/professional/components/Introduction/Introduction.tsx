import { LIST_INTRODUCTION } from "../../utils/data/list_introduction";
import "./Introduction.scss";

export default function Introduction() {
  return (
    <div className="introduction">
      <ul className="cards">
        {LIST_INTRODUCTION.map((item, index: number) => (
          <li
            className="card"
            key={index}
          >
            <i className="material-symbols-outlined">{item.icon}</i>
            <div className="card-content">
              <h5>{item.title}</h5>
              <p>{item.subtitle}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
