import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '../../src/app/page'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn().mockReturnValue({
    push: jest.fn(),
    query: {},
  }),
}))

describe('<Home />', () => {
  test('renders HeroSection, h1', () => {
    render(<Home />)
    
    expect(screen.getByText('Series de televisión sin límites y mucho más')).toBeInTheDocument()
    
    expect(screen.getByText('| Series Populares')).toBeInTheDocument()
  })
})  