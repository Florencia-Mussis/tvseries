import type { Metadata } from "next"
import { Archivo_Black, Roboto } from "next/font/google"
import "../styles/globals.scss"

const archivoBlack = Archivo_Black({ subsets: ["latin"], weight: "400" })
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] })

export const metadata: Metadata = {
  title: "TV Shows",
  description: "Descubre las mejores series de televisión",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${archivoBlack.className} ${roboto.className}`}>
        <main>{children}</main>
      </body>
    </html>
  )
}