import React from 'react'

import { render, screen } from '@testing-library/react'

import { spacing } from '@royalnavy/design-tokens'

import { ProgressBar } from './ProgressBar'

describe('ProgressBar', () => {
  it('should render the component', () => {
    render(<ProgressBar value={50} />)
    expect(screen.getByRole('progressbar')).toBeInTheDocument()
  })

  it('should handle negative values', () => {
    render(<ProgressBar value={-50} />)
    expect(screen.getByRole('progressbar')).toHaveAttribute(
      'aria-valuenow',
      '0'
    )
    expect(screen.getByRole('progressbar')).toHaveAttribute('title', '0%')
  })

  it('should handle values above 100', () => {
    render(<ProgressBar value={150} />)
    expect(screen.getByRole('progressbar')).toHaveAttribute(
      'aria-valuenow',
      '100'
    )
    expect(screen.getByRole('progressbar')).toHaveAttribute('title', '100%')
  })

  it('should handle invalid values', () => {
    // @ts-ignore
    render(<ProgressBar value="not3" />)
    expect(screen.getByRole('progressbar')).toHaveAttribute(
      'aria-valuenow',
      '0'
    )
    expect(screen.getByRole('progressbar')).toHaveAttribute('title', '0%')
  })

  it('should set the progress bar values', () => {
    render(<ProgressBar value={50} />)
    expect(screen.getByRole('progressbar')).toHaveAttribute(
      'aria-valuenow',
      '50'
    )
    expect(screen.getByRole('progressbar')).toHaveAttribute(
      'aria-valuemin',
      '0'
    )
    expect(screen.getByRole('progressbar')).toHaveAttribute(
      'aria-valuemax',
      '100'
    )
    expect(screen.getByRole('progressbar')).toHaveAttribute('title', '50%')
  })

  it('should render the internal progress', () => {
    const progress = 50
    render(<ProgressBar value={progress} />)

    const progressElement = screen.getByRole('presentation')
    expect(progressElement).toHaveStyle(`width: ${progress}%`)
  })

  it('should set the height of the progress indicator', () => {
    const size = spacing('4')
    render(<ProgressBar value={50} size="4" />)
    expect(screen.getByRole('presentation')).toHaveStyle(`height: ${size}`)
  })

  it('should render the component as disabled', () => {
    render(<ProgressBar value={50} isDisabled />)

    expect(screen.getByRole('progressbar')).toHaveStyle('cursor: not-allowed')
  })
})
