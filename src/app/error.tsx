'use client'

import React from 'react'
import { useEffect } from 'react'
import styles from '../styles/components/error.module.scss'

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

const ErrorPage = ({ error, reset }: ErrorPageProps) => {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className={styles.errorContainer}>
      <h1>Oops! Something went wrong.</h1>
    </div>
  )
}

export default ErrorPage
