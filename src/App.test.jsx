import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react'
import App from './App.tsx'

describe('App', () => {
  it('renders the App component', () => {
    render(<App />)
    
    screen.debug();
  })
})