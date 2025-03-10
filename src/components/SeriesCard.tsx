import React from 'react'
import { Series } from '../types'
import styles from '../styles/components/seriesCard.module.scss'

interface SeriesCardProps {
  serie: Series
  onClick: (id: number) => void
}

export const SeriesCard: React.FC<SeriesCardProps> = ({ serie, onClick }) => {
  return (
    <div className={styles.seriesCard} onClick={() => onClick(serie.id)}>
      <img
        src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
        alt={serie.name}
        className={styles.seriesImg}
      />
      <button className={styles.detailButton}>Ver detalle</button>
    </div>
  )
}

