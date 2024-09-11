import { Section } from "@components/section/Section";
import styles from "./HomePage.module.scss";
//import globalStyles from '../../scss/_globales.module.scss';
import { useTranslation } from "react-i18next";

import flowerTwo from "../../img/flower-two.svg";
import flowerThree from "../../img/flower-three.svg";
import flowerFour from "../../img/flower-four.svg";
import { JoinUs, Testimonies } from "@components/index";

export const HomePage = () => {
  // const { t } = useTranslation('translation', { keyPrefix: 'welcome' });
  const { t } = useTranslation();

  const icons = [
    { src: flowerTwo, alt: "icono flower-1", label: "Campo" },
    { src: flowerThree, alt: "icono flower-2", label: "Agricultura" },
    { src: flowerFour, alt: "icono té", label: "Vida" },
  ];

  return (
    <div className={styles["home-container"]}>
      <Section
        mainTitle={t("mainTitle")}
        title={t("title")}
        paragraph={t("paragraph")}
        icons={icons}
      />      
      <Testimonies mainTitle={t("mainTitle")} title={t("title")} />

      <JoinUs/>
    </div>
  );
};
