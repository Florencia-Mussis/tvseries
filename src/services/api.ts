import { API_KEY, BASE_URL } from './config'
import { PopularSeriesResponse, SeriesDetailResponse } from '../types/index'

/**
 * Función genérica para hacer peticiones a la API de TMDB.
 * @param endpoint - Ruta del endpoint dentro de la API (sin incluir BASE_URL).
 * @param params - Parámetros adicionales para la consulta.
 * @returns - Respuesta en formato JSON o lanza un error si la petición falla.
 */

const fetchFromAPI = async <T>(endpoint: string, params: Record<string, string> = {}): Promise<T> => {
  const url = new URL(`${BASE_URL}${endpoint}`)
  const searchParams = new URLSearchParams({ api_key: API_KEY, ...params })

  const res = await fetch(`${url}?${searchParams.toString()}`)
  const data = await res.json()

  if (!res.ok) {
    throw  { status: data.status_code }
  }

  return data
}

// Obtener series populares
export const fetchPopularSeries = (page: number = 1) =>
  fetchFromAPI<PopularSeriesResponse>('/tv/popular', { page: page.toString() })

// Obtener detalles de una serie
export const fetchSeriesDetails = (id: string) =>
  fetchFromAPI<SeriesDetailResponse>(`/tv/${id}`)


