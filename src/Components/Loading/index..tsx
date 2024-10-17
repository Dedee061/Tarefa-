import React from 'react'
import styles from './styles.module.css'

export default function Loading() {
    return (
        <div className={styles.spinnerContainer}>
          <div className={styles.spinner}></div>
          <p className={styles.textLoding}>Carregando...</p>
        </div>
      );
}
