import { NavBar } from "@components/navbar/NavBar";
import styles from "./Header.module.scss";
import globalStyles from '../../scss/_globales.module.scss';
import logo from '../../img/logo.svg';

export const Header = () => {
  return (
    <header className={`${styles.header} ${styles['header-inicio']}`}>
      <div className={`${styles['contenido-header']} ${globalStyles.contenedor}`}>
        <div className={styles.barra}>
          <div className={styles.logo}>
            <img src={logo} alt="logo" />
          </div>
          <NavBar />
        </div>

        <div className={styles["texto-header"]}>
          <h1>Proyecto de Grado</h1>
          <h3>Agro tech IA</h3>
        </div>
      </div>
    </header>
  );
};