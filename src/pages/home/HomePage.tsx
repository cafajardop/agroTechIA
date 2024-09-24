import { Section } from "@components/section/Section";
import styles from "./HomePage.module.scss";
//import globalStyles from '../../scss/_globales.module.scss';
import { useTranslation } from "react-i18next";

import flowerTwo from "../../img/flower-two.svg";
import flowerThree from "../../img/flower-three.svg";
import flowerFour from "../../img/flower-four.svg";
import { BlogUs, Planes, Testimonies } from "@components/index";
import { AboutPage } from "@pages/about/AboutPage";
import { ContactPage } from "@pages/contact/ContactPage";
import { LoginPage } from "@pages/auth";

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
        id="inicio"
        mainTitle={t("mainTitle")}
        title={t("title")}
        paragraph={t("paragraph")}
        icons={icons}
      />

      <AboutPage id="about" />

      <Testimonies
        id="testimonies"
        mainTitle={t("titleTestimonies")}
        title={t("titleTestimonies1")}
      />

      <Planes
        id="plans"
        mainTitle={t("titlePlans")}
        title={t("titlePlans1")}
        paragraph={t("titlePlansParagraph")}
      />

      <BlogUs 
        id="blog"
        mainTitle={t("titleAgricola")}
        title={t("titleAgricola1")}
      />


      <ContactPage
        id="contact"
        mainTitle={t("titleContact")}
        title={t("titleContact1")}
      
      />

      <LoginPage
        id="auth"
        mainTitle={t("titleLogin")}
        title={t("titleLogin1")}      
      />

    </div>
  );
};
