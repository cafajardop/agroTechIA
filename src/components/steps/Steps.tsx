import React from "react";
import styles from "./Steps.module.scss";
import stepOne from "../../img/cellphone2.png";
import stepTwo from "../../img/cellphone1.png";
import stepThree from "../../img/cellphone3.png";
// import wave from "../../img/wave.svg";

interface Props {
  id: string;
  mainTitle?: string;
  title?: string;
}

export const Steps = ({ id, mainTitle, title }: Props) => {
  const data = [
    { src: stepOne, alt: "icon step 1" },
    { src: stepTwo, alt: "icon step 1" },
    { src: stepThree, alt: "icon step 1" },
  ];

  return (
    <section id={id} className={styles.pasos}>
      <div className={styles.pasos__contenido}>
        <h2>
          <span>{mainTitle}</span> {title}
        </h2>

        <div className={styles.pasos__grid}>
          {data &&
            data.length > 0 &&
            data.map((icon, index) => (
              <div className={styles.pasos__paso} key={index}>
                <img
                  className={styles.pasos__imagen}
                  src={icon.src}
                  alt={icon.alt}
                />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};
