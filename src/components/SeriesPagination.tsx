'use client'

import React from 'react'
import { FC } from 'react'
import styles from '../styles/components/seriesPagination.module.scss'

interface SeriesPaginationProps {
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>
  totalPages: number
  loading: boolean
}

export const SeriesPagination: FC<SeriesPaginationProps> = ({ page, setPage, totalPages, loading }) => {
  return (
    <div>
      <div className={styles.pagination}>
        <button 
          disabled={page === 1 || loading} 
          onClick={() => setPage(page - 1)}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 6L9 12L15 18" stroke="rgb(240, 240, 240)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <span>{page} - {totalPages}</span>
        <button 
          disabled={page === totalPages || loading} 
          onClick={() => setPage(page + 1)}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 6L15 12L9 18" stroke="rgb(240, 240, 240)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  )
}
