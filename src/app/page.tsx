'use client'

import React, { useState, useEffect } from "react"
import { fetchPopularSeries } from '../services/api'
import { PopularSeriesResponse } from '../types'
import { SeriesList } from '../components/SeriesList'
import { SeriesPagination } from '../components/SeriesPagination'
import { HeroSection } from '../components/HeroSection'
import styles from '../styles/components/home.module.scss'

interface ApiError {
  status?: number
  message?: string
}

export default function Home() {
  const [series, setSeries] = useState<PopularSeriesResponse['results']>([])
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
      } catch (error: unknown) {
        if ((error as ApiError).status) {
          const apiError = error as ApiError
          const statusCode = apiError.status
          const errorMessage = apiError.message || 'Error desconocido'

          switch (statusCode) {
            case 404:
              setError("No se encontraron las series.")
              break
            case 503:
              setError("Este servicio está temporalmente fuera de línea, inténtelo más tarde.")
              break
            case 429:
              setError("Servicio saturado, inténtelo más tarde.")
              break
            default:
              setError(errorMessage) 
          }
        } else {
          setError("Hubo un error desconocido")
        }
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
