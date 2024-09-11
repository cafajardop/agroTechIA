import styles from "./Footer.module.scss";
import globalStyles from "../../scss/_globales.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footer__grid} ${globalStyles.contenedor} `}>
        {/* Primera parte */}
        <div className={styles.footer__widget}>
          <h3 className={styles.footer__heading}> Nosotros </h3>
          <p className={styles.footer__texto}>
            Agro Tech IA es una plataforma innovadora que utiliza inteligencia
            artificial para optimizar la gestión agrícola. Nuestro objetivo es
            proporcionar a los agricultores herramientas avanzadas para la toma
            de decisiones basada en datos en tiempo real, mejorando la
            eficiencia y sostenibilidad del sector agrícola.
          </p>
        </div>

        {/* segunda parte */}
        <div className={styles.footer__widget}>
          <h3 className={styles.footer__heading}> Navegación </h3>
          <nav className={styles.footer__nav}>
            <a href="#" className={styles.footer__link}>
              Servicios
            </a>
            <a href="#" className={styles.footer__link}>
              Tecnología{" "}
            </a>
            <a href="#" className={styles.footer__link}>
              Planes
            </a>
            <a href="#" className={styles.footer__link}>
              Contacto
            </a>
            <a href="#" className={styles.footer__link}>
              Blog
            </a>
          </nav>
        </div>

        {/* Tercera parte */}

        <div className={styles.footer__widget}>
          <h3 className={styles.footer__heading}> Contacto </h3>
          <p className={styles.footer__texto}>
            Si tienes alguna pregunta o necesitas más información, no dudes en
            contactarnos:
            Email: contacto@agrotechia.com
            Teléfono: +57 350 2154571
          </p>
        </div>
      </div>{" "}
      {/* <--!grid--> */}
      <p className={styles.footer__copyright}>
        © 2024 Agro Tech IA Todos los derechos reservados Todos los derechos reservados. Valeria Fajardo & Valery Baena.
      </p>
    </footer>
  );
};
