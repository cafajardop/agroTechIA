
import React from 'react'
import styles from './Card.module.scss';

export const Card = () => {
  return (
    <>
      <div className={`${styles.plan} ${styles.inicio}`}>
          <h3>Inicio</h3>
          <p className={styles.precio}> $2.99 Mes</p>

          <ul className={styles.listado}>
            <li>Monitorización de hasta 30 hectáreas</li>
            <li>Reportes básicos de clima</li>
            <li>Acceso a estadísticas de producción</li>
          </ul>

          <a href="#" className={styles.boton_plan}>Inscribirme</a>
      </div>

      <div className={`${styles.plan} ${styles.negocio}`}>
          <h3>Negocio</h3>
          <p className={styles.precio}> $3.99 Mes</p>

          <ul className={styles.listado}>
            <li>Monitorización de hasta 50 hectáreas</li>
            <li>Predicciones de producción y clima</li>
            <li>Análisis avanzado de suelo</li>
            <li>Asistencia remota vía app</li>
          </ul>

          <a href="#" className={styles.boton_plan}>Inscribirme</a>
      </div>

      <div className={`${styles.plan} ${styles.pro}`}>
          <h3>PRO</h3>
          <p className={styles.precio}> $6.99 Mes</p>

          <ul className={styles.listado}>
              <li>Monitorización de áreas ilimitadas</li>
              <li>Todas las plataformas de análisis agrícola</li>
              <li>Reportes avanzados y personalizados</li>
              <li>Análisis predictivo con inteligencia artificial</li>
              <li>Asistencia técnica especializada</li>
          </ul>

          <a href="#" className={styles.boton_plan}>Inscribirme</a>
      </div>
    </>
  )
}
