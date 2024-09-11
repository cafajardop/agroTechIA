import styles from "./Footer.module.scss";
import globalStyles from "../../scss/_globales.module.scss";

export const Footer = () => {
  return (
    // <footer className={styles.footer}>
    //   <div
    //     className={` ${globalStyles.contenedor} ${styles["contenido-footer"]} ${globalStyles["bg-green"]}  }`}
    //   >
    //     <div className={styles["footer-box ubicacion"]}>
    //       <h3>
    //         <i className="fas fa-map-marker-alt"></i> Ubicación
    //       </h3>
    //       <p>Bogotá, Colombia</p>
    //     </div>

    //     <div className={styles["footer-box contacto"]}>
    //       <h3>
    //         <i className="fas fa-phone"></i> Contacto
    //       </h3>
    //       <p>Tel. 3184043192</p>
    //       <a href="tel:+3184043192">Llamar</a>
    //       <p>Email: info@latiendaagricola.com</p>
    //     </div>

    //     <div className={styles["footer-box horario"]}>
    //       <h3>
    //         <i className="fas fa-clock"></i> Horario
    //       </h3>
    //       <p>Lun-Jue: 11:00 - 22:00</p>
    //       <p>Vie-Sab: 09:00 - 24:00</p>
    //       <p>Domingo: Cerrado</p>
    //     </div>
    //   </div>
    //   <div className={styles["footer-ribbon"]}>
    //     {/* <img src="/images/ribbon.png" alt="Decorative ribbon"> */}
    //   </div>
    //   <p className={styles["copyright"]}>
    //     © 2024 Agro Tech IA Todos los derechos reservados Valeria Fajardo y
    //     Valery Baena.
    //   </p>
    // </footer>

    <footer className={styles.footer}>
      <div className={`${styles.footer__grid} ${globalStyles.contenedor} `}>
        {/* Primera parte */}
        <div className={styles.footer__widget}>
          <h3 className={styles.footer__heading}> Nosotros </h3>
          <p className={styles.footer__texto}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nisi
            similique atque rerum, eum reiciendis provident quo fugiat facilis
            ipsa aut voluptatibus sed magni est laboriosam soluta aperiam, odit
            quos.
          </p>
        </div>


        {/* segunda parte */}
        <div className={styles.footer__widget}>
          <h3 className={styles.footer__heading}> Navegación </h3>
          <nav className={styles.footer__nav}>
            <a href="#" className={styles.footer__link}>Enlace 1</a>
            <a href="#" className={styles.footer__link}>Enlace 2</a>
            <a href="#" className={styles.footer__link}>Enlace 3</a>
            <a href="#" className={styles.footer__link}>Enlace 4</a>
            <a href="#" className={styles.footer__link}>Enlace 5</a>            
          </nav>
        </div>

        {/* Tercera parte */}

        <div className={styles.footer__widget}>
        <h3 className={styles.footer__heading}> Contacto </h3>
          <p className={styles.footer__texto}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nisi
            similique atque rerum, eum reiciendis provident quo fugiat facilis
            ipsa aut voluptatibus sed magni est laboriosam soluta aperiam, odit
            quos.
          </p>
        </div>
      </div> {/* <--!grid--> */}        

      <p className={styles.footer__copyright}>
        © 2024 Agro Tech IA Todos los derechos reservados Valeria Fajardo && Valery Baena.
      </p>

    </footer>
  );
};
