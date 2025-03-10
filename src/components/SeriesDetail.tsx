import React from 'react'
import { SeriesDetailResponse } from '../types'
import styles from '../styles/components/seriesDetail.module.scss'

interface SeriesDetailProps {
  series: SeriesDetailResponse
}

export const SeriesDetail: React.FC<SeriesDetailProps> = ({ series }) => {
  return (
    <div>
        <div className={styles.detailContainer}>
            <img
            src={`https://image.tmdb.org/t/p/w500${series.poster_path}`}
            alt={series.name}
            className={styles.img}
            />
            <div className={styles.details}>
                <h1 className={styles.title}>{series.name}</h1>
                <div className={styles.detailBubble}>
                    <ul>
                        <li>
                            {series.first_air_date?.split('-')[0]}
                        </li>
                        <li>
                           ★ {series.vote_average.toFixed(1)}
                        </li>
                    </ul>
                    <ul>
                        {series.genres.map((genre) => (
                            <li key={genre.id}>{genre.name}</li>
                        ))}
                    </ul>
                </div>
                <div className={styles.detailDescription}>
                    <p>{series.overview || ''}</p>
                </div>
                <button className={styles.startButton}>
                    Empezar
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 6L15 12L9 18" stroke="rgb(240, 240, 240)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>
        </div>
    </div>
  )
}
