import React from "react";
import styles from "./BlogUs.module.scss";
import deliveryimage from "../../img/agricola.jpg";
import { useTranslation } from "react-i18next";

interface Props {
  id: string;
  mainTitle: string;
  title: string;
  paragraph?: string;
}

export const BlogUs = ({ id, mainTitle, title }: Props) => {
  const { t } = useTranslation();

  return (
    <section id={id} className={styles.delivery}>
      <h2>
        <span>{mainTitle}</span> {title}
      </h2>

      <div className={styles.delivery__grid}>
        <div className={styles.delivery__imagen}>
          <img src={deliveryimage} alt="image delivery" />
        </div>

        <div className={styles.delivery__contenido}>
          <p className={styles.delivery__texto}>{t("messageAgricola")}</p>
          <p className={styles.delivery__texto}>{t("messageAgricola1")}</p>

          <a href="#" className={styles.delivery__enlace}>
            Más informacion
          </a>
        </div>
      </div>
    </section>
  );
};
