import { useState } from "react";
import { NAVBAR_DATA } from "../../utils/navbar.js";
import "./Navbar.scss";

export default function Navbar() {
  const [onTop, setOnTop] = useState(true);

  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar")!;
    if (window.scrollY > 0) {
      setOnTop(false);
      navbar.classList.add("navbar-scroll");
    } else {
      setOnTop(true);
      navbar.classList.remove("navbar-scroll");
    }
  });

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img
          src={onTop ? "/src/assets/images/logo.png" : "/src/assets/images/logo_alternada.png"}
          alt="logo_herleson_pontes"
        />
      </div>

      <div className="navbar-links">
        {NAVBAR_DATA.map((item) => (
          <a
            key={item.id}
            href={item.url}
          >
            {item.title}
          </a>
        ))}
      </div>
    </div>
  );
}
