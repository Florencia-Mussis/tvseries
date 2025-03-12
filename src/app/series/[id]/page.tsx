import React from 'react'
import { fetchSeriesDetails } from '../../../services/api'
import { SeriesDetailResponse } from '../../../types'
import { SeriesDetail } from '../../../components/SeriesDetail'

type Params = Promise<{ id: string }>

export default async function SeriesDetailPage({ params }: { params: Params }) {
  const { id } = await params
  const data: SeriesDetailResponse = await fetchSeriesDetails(id)
  
  return <SeriesDetail series={data} />
}
