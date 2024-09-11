import React from "react";
import styles from "./ButtonWhatsapp.module.scss";

export const ButtonWhatsapp = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=573502154571&text=%22%C2%A1Hola!%20Soy%20Agro%20Tech%20IA,%20tu%20asistente%20en%20tecnolog%C3%ADa%20para%20mejorar%20la%20agricultura.%20%C2%BFEn%20qu%C3%A9%20te%20puedo%20ayudar%20hoy?%20%F0%9F%8C%B1%F0%9F%A4%96%22"
      target="_blank"
      className={styles.float}
    >
      <i className={`fa-brands fa-whatsapp ${styles["fa-whatsapp"]}`}></i>
    </a>
  );
};
