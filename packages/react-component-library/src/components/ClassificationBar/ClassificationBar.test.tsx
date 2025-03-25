import React from 'react'

import { render, screen } from '@testing-library/react'

import { ClassificationBar } from './ClassificationBar'

describe('ClassificationBar', () => {
  it('should render the correct classification text when not isSecret', () => {
    render(<ClassificationBar />)
    expect(screen.getByText('Official Sensitive')).toBeInTheDocument()
  })

  it('should render the correct classification text when isSecret', () => {
    render(<ClassificationBar isSecret />)
    expect(screen.getByText('SECRET UK EYES ONLY')).toBeInTheDocument()
  })

  it('should render the correct classification text when isCondensed', () => {
    render(<ClassificationBar isCondensed />)
    expect(screen.getByText('OS')).toBeInTheDocument()
  })

  it('should render the correct classification text when isCondensed and isSecret', () => {
    render(<ClassificationBar isCondensed isSecret />)
    expect(screen.getByText('SUKEO')).toBeInTheDocument()
  })
})
