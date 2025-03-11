import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { SeriesCard } from '../../components/SeriesCard'

const mockSeries = {
  id: 202250,
  name: 'Dirty Linen',
  poster_path: '/aoAZgnmMzY9vVy9VWnO3U5PZENh.jpg',
  vote_average: 5,
  overview: 'To exact vengeance, a young woman infiltrates the household of an influential family as a housemaid to expose their dirty secrets. However, love will get in the way of her revenge plot.'
}

describe('<SeriesCard />', () => {
  test('renders SeriesCard with correct data and handles button click', () => {
    const mockOnClick = jest.fn()

    render(<SeriesCard serie={mockSeries} onClick={mockOnClick} />)

    // Verificamos que la imagen y el botón estén correctamente renderizados
    expect(screen.getByRole('img')).toHaveAttribute('src', 'https://image.tmdb.org/t/p/w500/aoAZgnmMzY9vVy9VWnO3U5PZENh.jpg')
    expect(screen.getByRole('img', { name: /Dirty Linen/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Ver detalle/i })).toBeInTheDocument()

    // Simulamos el clic en el botón
    fireEvent.click(screen.getByRole('button', { name: /Ver detalle/i }))

    // Verificamos que la función onClick haya sido llamada correctamente con el id
    expect(mockOnClick).toHaveBeenCalledTimes(1)
    expect(mockOnClick).toHaveBeenCalledWith(mockSeries.id)
  })
})

