'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { Series } from '../types'
import { SeriesCard } from './SeriesCard'
import styles from '../styles/components/seriesList.module.scss'

interface SeriesListProps {
  series: Series[]
}

export const SeriesList: React.FC<SeriesListProps> = ({ series }) => {
  const router = useRouter()

  const handleViewDetails = (id: number) => {
    router.push(`/series/${id}`)
  }

  return (
    <div>
      <div className={styles.seriesList}>
        {series.map((serie) => (
          <SeriesCard key={serie.id} serie={serie} onClick={handleViewDetails} />
        ))}
      </div>
    </div>
  )
}
