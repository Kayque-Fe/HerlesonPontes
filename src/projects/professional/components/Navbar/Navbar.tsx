import { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { NAVBAR_DATA, NavbarData } from "../../utils/data/navbar_list.js";
import "./Navbar.scss";

export default function Navbar({ isScrolled, onChangeUrl }: any) {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className={`${!isScrolled ? "" : "navbar-scroll"} navbar`}>
      <div className="navbar-content">
        <div className="navbar-logo">
          <img
            src={!isScrolled ? "/src/assets/images/logo.png" : "/src/assets/images/logo_alternada.png"}
            alt="logo_herleson_pontes"
          />
        </div>

        <menu className="navbar-links">
          {NAVBAR_DATA.map((item: NavbarData) => (
            <NavLink
              key={item.id}
              to={item.url}
              className={`${"#" + onChangeUrl === item.url ? "navbar-link-active" : ""}`}
            >
              {item.title}
            </NavLink>
          ))}
        </menu>
      </div>
    </div>
  );
}
