'use client'

import React from "react"
import { useState, useEffect } from 'react'
import { fetchPopularSeries } from '../services/api'
import { PopularSeriesResponse } from '../types'
import { SeriesList } from '../components/SeriesList'
import { SeriesPagination } from '../components/SeriesPagination'
import { HeroSection } from '../components/HeroSection'
import styles from '../styles/components/home.module.scss'

export default function Home() {
  const [series, setSeries] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const getSeries = async () => {
      setLoading(true)
      setError(null)
      try {
        const data: PopularSeriesResponse = await fetchPopularSeries(page)
        setSeries(data.results)
        setTotalPages(data.total_pages)
      } catch (error: any) {
        const statusCode = error?.status

        switch (statusCode) {
          case 404:
            setError("No se encontraron las series.")
            break
          case 503:
            setError("Este servicio está temporalmente fuera de línea, inténtelo más tarde.")
            break
          case 429:
            setError("Servicio saturado, inténtelo más tarde")
            break
          default:
            setError("Hubo un problema con la conexión, por favor intenta de nuevo.")
        }
        console.error("Error API:", error)
      } finally {
        setLoading(false)
      }
    }

    getSeries()
  }, [page])

  return (
    <div>
      <HeroSection />
      <h1 className={styles.title}>| Series Populares</h1>
      {error && <div className={styles.errorMessage}>❌ {error}</div>}
      <SeriesList series={series} />
      <SeriesPagination 
        page={page} 
        setPage={setPage} 
        totalPages={totalPages} 
        loading={loading} 
      />
    </div>
  )
}