import React from 'react'
import Link from 'next/link'
import styles from '../styles/components/header.module.scss'

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <img
            src="/logo.png"
            alt="Logo"
          />
        </Link>
        <button className={styles.loginButton}>Iniciar sesión</button>
      </div>
    </header>
  )
}
