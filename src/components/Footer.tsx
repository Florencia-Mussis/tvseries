import React from 'react'
import Link from 'next/link'
import styles from '../styles/components/footer.module.scss'

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
          <ul>
            <li><Link href="#">Acerca de TV Shows</Link></li>
            <li><Link href="#">Preguntas frecuentes</Link></li>
            <li><Link href="#">Información corporativa</Link></li>
            <li><Link href="#">Inversores</Link></li>
          </ul>
    
          <ul>
            <li><Link href="#">Centro de ayuda</Link></li>
            <li><Link href="#">Ponte en contacto con nosotros</Link></li>
            <li><Link href="#">Empleo</Link></li>
            <li><Link href="#">Términos de uso</Link></li>
          </ul>
   
          <ul>
            <li><Link href="#">Preferencias de cookies</Link></li>
            <li><Link href="#">Opciones de anuncios</Link></li>
            <li><Link href="#">Política de privacidad</Link></li>
            <li><Link href="#">Avisos legales</Link></li>
          </ul>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} TV Shows | Todos los derechos reservados</p>
      </div>
    </footer>
  )
}

