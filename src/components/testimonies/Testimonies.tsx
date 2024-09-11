import React from "react";
import styles from "./Testimonies.module.scss";

import testimonial1 from "../../img/testimonial1.jpg";
import testimonial2 from "../../img/testimonial2.jpg";
import testimonial3 from "../../img/testimonial3.jpg";
import testimonial4 from "../../img/testimonial4.jpg";
import testimonial5 from "../../img/testimonial5.jpg";
import stars from "../../img/estrellas.png";
import { useTranslation } from "react-i18next";

interface Props {
  mainTitle?: string;
  title?: string;
  paragraph?: string;
}

export const Testimonies = ({ mainTitle, title }: Props) => {

  const { t } = useTranslation();

  const testimonies1 = t("testimonies1");
  const testimonies2 = t("testimonies2");
  const testimonies3 = t("testimonies3");
  const testimonies4 = t("testimonies4");
  const testimonies5 = t("testimonies5");

  const icons = [    
    { src: testimonial1, alt: "testimonial1", label: "Campo", text: testimonies1 },
    {
      src: testimonial2,
      alt: "testimonial2",
      label: "Agricultura",
      text: testimonies2,
    },
    { src: testimonial3, alt: "testimonial3", label: "Vida", text: testimonies3 },
    { src: testimonial4, alt: "testimonial4", label: "Campo", text: testimonies4 },
    {
      src: testimonial5,
      alt: "testimonial5",
      label: "Agricultura",
      text: testimonies5,
    },
  ];

  return (
    <>
      <h2>
        <span>{mainTitle}</span> {title}
      </h2>

      <section className={styles.testimonies}>
        <div className={styles.testimonies__grid}>
          {icons &&
            icons.length > 0 &&
            icons.map((icon, index) => (
              <div key={index} className={styles.testimonial}>
                <header className={styles.testimonial__header}>
                  <div className={styles.testimonial__image}>
                    <img src={icon.src} alt="testimonial" />
                  </div>

                  <div className={styles.testimonial__information}>
                    <p className={styles.testimonial__autor}></p>
                    <img
                      className={styles.testimonial__calification}
                      src={stars}
                      alt="star images"
                    />
                  </div>
                </header>

                <blockquote className={styles.testimonial__texto}>
                  {icon.text}
                </blockquote>
              </div>
            ))}
        </div>
      </section>
    </>
  );
};
