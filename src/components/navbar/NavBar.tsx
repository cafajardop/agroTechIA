import { Link } from "react-router-dom";
import styles from "./NavBar.module.scss";

export const NavBar = () => {
  return (
    <nav className={styles["nav-principal"]}>
      <Link to="/">Inicio</Link>
      <Link to="/about">Nosotros</Link>
      <Link to="/contact">Conctacto</Link>
      <Link to="/auth">Login</Link>
    </nav>
  );
};
