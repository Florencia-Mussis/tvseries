import React from 'react'
import type { Metadata } from 'next'
import { Archivo_Black, Roboto } from 'next/font/google'
import '../styles/globals.scss'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

const archivoBlack = Archivo_Black({ subsets: ['latin'], weight: '400' })
const roboto = Roboto({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'TV Shows',
  description: 'Descubre las mejores series de televisión',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='es'>
      <body className={`${archivoBlack.className} ${roboto.className}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}