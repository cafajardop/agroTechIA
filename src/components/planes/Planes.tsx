import React from "react";
import styles from "./Planes.module.scss";
import { Card } from "./fragments/cards/Card";

interface Props {
  id: string;
  mainTitle: string;
  title: string;
  paragraph?: string;
}

export const Planes = ({ id, mainTitle, title, paragraph }: Props) => {
  return (
    <section id={id} className={styles.planes}>
      <div className={styles.contenedor}>
        <h2>
          <span>{mainTitle}</span> {title}
        </h2>

        <p>{paragraph}</p>

        <div className={styles.planes__nuestros_planes}>
          <Card />
        </div>
      </div>
    </section>
  );
};
