// import styles from './Section.module.scss';
import styles from "./Section.module.scss";

interface Icon {
  src: string;
  alt: string;
  label: string;
}

interface Props {
  mainTitle?: string;
  title?: string;
  paragraph?: string;
  icons?: Icon[];
}

export const Section = ({ mainTitle, title, paragraph, icons }: Props) => {
  return (
    <>
      <h2>
        <span>{mainTitle}</span> {title}
      </h2>

      <p>{paragraph}</p>

      {icons && icons.length > 0 && (
        <section className={styles.iconos}>
          <ul className={styles["listado-iconos"]}>
            {icons.map((icon, index) => (
              <li key={index}>
                <img src={icon.src} alt={icon.alt} />
                <p>{icon.label}</p>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
};
