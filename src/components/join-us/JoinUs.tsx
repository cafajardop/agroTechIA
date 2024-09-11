import React from "react";
import styles from "./JoinUs.module.scss";
import deliveryimage from "../../img/agricola.jpg";
import { useTranslation } from "react-i18next";

export const JoinUs = () => {

  const { t } = useTranslation();

  return (
    <section className={styles.delivery}>
      <h2>
        <span>Agro Tech IA</span>
          {t("titleAgricola")}
      </h2>

      <div className={styles.delivery__grid}>
        <div className={styles.delivery__imagen}>
          <img src={deliveryimage} alt="image delivery" />
        </div>

        <div className={styles.delivery__contenido}>
          <p className={styles.delivery__texto}>{t("messageAgricola")}</p>
          <p className={styles.delivery__texto}>{t("messageAgricola1")}</p>

          <a href="#" className={styles.delivery__enlace}>Más informacion</a>
        </div>
      </div>
    </section>
  );
};
