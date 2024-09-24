// import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import styles from "./NavBar.module.scss";

export const NavBar = () => {
  return (
    <nav className={styles["nav-principal"]}>
      {/* <Link to="/">Inicio</Link>
      <Link to="/about">Nosotros</Link>
      <Link to="/contact">Contacto</Link>
      <Link to="/auth">Login</Link> */}

      <nav className={styles["nav-principal"]}>
        <HashLink smooth to="/#inicio">
          Inicio
        </HashLink>
        <HashLink smooth to="/#about">
          Explora
        </HashLink>

        <HashLink smooth to="/#testimonies">
          Testimonios
        </HashLink>

        <HashLink smooth to="/#plans">
          Planes
        </HashLink>

        <HashLink smooth to="/#blog">
          Blog
        </HashLink>
        
        <HashLink smooth to="/#contact">
          Contacto
        </HashLink>
        
        <HashLink smooth to="/#auth">
          Login
        </HashLink>        
        
      </nav>
    </nav>
  );
};
