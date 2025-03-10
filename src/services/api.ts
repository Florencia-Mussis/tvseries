import { PopularSeriesResponse, SeriesDetailResponse } from '../types/index'

const API_KEY = 'c6aeee577586ba38e487b74dfede5deb'
const BASE_URL = 'https://api.themoviedb.org/3'

export const fetchPopularSeries = async (page: number = 1): Promise<PopularSeriesResponse> => {
  const res = await fetch(`${BASE_URL}/tv/popular?api_key=${API_KEY}&page=${page}`)
  const data = await res.json()
  if (!res.ok) {
    throw { status: data.status_code } 
  }
  return data
}

export const fetchSeriesDetails = async (id: string): Promise<SeriesDetailResponse> => {
  const res = await fetch(`${BASE_URL}/tv/${id}?api_key=${API_KEY}`)  
  if (!res.ok) {
    throw new Error('Error fetching series details')
  }
  const data = await res.json()  
  return data
}

