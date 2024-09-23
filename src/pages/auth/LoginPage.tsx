import React from "react";
import styles from "./Login.module.scss";

export const LoginPage = () => {
  return (
    <div className={styles.login_container}>
      <div className={`${styles.login_form} ${styles.login_form_1} `}>
        <h3>Ingreso</h3>
        <form>
          <div className={styles.form_group}>
            <input
              type="text"
              className={styles.form_control}
              placeholder="Correo"
            />
          </div>
          <div className={styles.form_group}>
            <input
              type="password"
              className={styles.form_control}
              placeholder="Contraseña"
            />
          </div>
          <div className={styles.form_group}>
            <input type="submit" className={styles.btn_submit} value="Login" />
          </div>
        </form>
      </div>

      <div className={`${styles.login_form} ${styles.login_form_2} `}>
        <h3>Registro</h3>
        <form>
          <div className={styles.form_group}>
            <input
              type="text"
              className={styles.form_control}
              placeholder="Nombre"
            />
          </div>
          <div className={styles.form_group}>
            <input
              type="email"
              className={styles.form_control}
              placeholder="Correo"
            />
          </div>
          <div className={styles.form_group}>
            <input
              type="password"
              className={styles.form_control}
              placeholder="Contraseña"
            />
          </div>

          <div className={styles.form_group}>
            <input
              type="password"
              className={styles.form_control}
              placeholder="Repita la contraseña"
            />
          </div>

          <div className={styles.form_group}>
            <input
              type="submit"
              className={styles.btn_submit}
              value="Crear cuenta"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
