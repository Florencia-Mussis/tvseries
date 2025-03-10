import React from 'react'
import styles from '../styles/components/heroSection.module.scss'

export const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>Series de televisión sin límites y mucho más</h1>
      </div>
    </section>
  )
}
