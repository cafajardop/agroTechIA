import React from 'react'
import styles from './Planes.module.scss';
import { Card } from './fragments/cards/Card';

export const Planes = () => {
  return (
    <section className={styles.planes}>
      <div className={styles.contenedor}>
        <h2>Planes</h2>
        <p className={styles.descripcion}>
          Inicia gratis, crece tu plan cuando sea necesario
        </p>

        <div className={styles.planes__nuestros_planes}>
          <Card/>
        </div>
      </div> 
    </section>
  )
}
