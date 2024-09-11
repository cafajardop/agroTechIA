import React from "react";
import styles from "./Download.module.scss";
import imageApp from "../../img/cellphone.png";
import globalStyles from "../../scss/_globales.module.scss";

import apple from "../../img/tienda-apple.svg";
import android from "../../img/tienda-android.svg";

export const Download = () => {
  return (
    <section className={styles.download}>
       {/* <h2>
        <span>Espera</span>
        Proximamente
      </h2> */}

      <div className={`${styles.download__grid} ${globalStyles.contenedor}`}>
        {/* primera imagen  */}
        <div className={styles.download__image}>
          <img src={imageApp} alt="" />
        </div>

        {/* tiendas */}
        <div className={styles.tiendas}>
          <h3 className={styles.tiendas__heading}>Descarga la App</h3>
          <p className={styles.tiendas__texto}>Proximamente !! Disponible para Android y iOS</p>

          {/* botones tienda apple y android */}
          <div className={styles.tiendas__grid}>
            <a href="#" className={styles.tiendas__enlace}>
              <img src={apple} alt="tienda apple" />
            </a>
            <a href="#" className={styles.tiendas__enlace}>
              <img src={android} alt="tienda android" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
