import { Link } from "react-router-dom";
import styles from "./NavBar.module.scss";

export const NavBar = () => {
  return (
    <nav className={styles["nav-principal"]}>
      <Link to="/">Inicio</Link>
      <Link to="/about">Nosotros</Link>
      <Link to="/contact">Blog</Link>
      <Link to="/contact">Contacto</Link>
    </nav>
  );
};
