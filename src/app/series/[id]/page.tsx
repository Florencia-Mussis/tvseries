import React from 'react'
import { fetchSeriesDetails } from '../../../services/api'
import { SeriesDetailResponse } from '../../../types'
import { SeriesDetail } from '../../../components/SeriesDetail'

export default async function SeriesDetailPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const data: SeriesDetailResponse = await fetchSeriesDetails(id)
  
  return <SeriesDetail series={data} />
}
