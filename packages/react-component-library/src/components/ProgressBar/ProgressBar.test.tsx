import React from 'react'

import { render, screen } from '@testing-library/react'

import { color, spacing } from '@royalnavy/design-tokens'

import { ProgressBar } from './ProgressBar'

describe('ProgressBar', () => {
  it('should display the text percentage', () => {
    render(<ProgressBar value={50} showPercentage />)
    expect(screen.getByTestId('percentage-text')).toHaveTextContent('50%')
  })

  it('should render the simple component', () => {
    render(<ProgressBar value={50} />)
    expect(screen.getByRole('progressbar')).toBeInTheDocument()
    expect(screen.queryByTestId('percentage-text')).not.toBeInTheDocument()
  })

  it('should handle negative values', () => {
    render(<ProgressBar value={-50} showPercentage />)
    expect(screen.getByRole('progressbar')).toHaveAttribute(
      'aria-valuenow',
      '0'
    )
    expect(screen.getByRole('progressbar')).toHaveAttribute('title', '0%')
    expect(screen.getByTestId('percentage-text')).toHaveTextContent('0%')
  })

  it('should handle values above 100', () => {
    render(<ProgressBar value={150} showPercentage />)
    expect(screen.getByRole('progressbar')).toHaveAttribute(
      'aria-valuenow',
      '100'
    )
    expect(screen.getByRole('progressbar')).toHaveAttribute('title', '100%')
    expect(screen.getByTestId('percentage-text')).toHaveTextContent('100%')
  })

  it('should handle invalid values', () => {
    // @ts-ignore
    render(<ProgressBar value="not3" showPercentage />)
    expect(screen.getByRole('progressbar')).toHaveAttribute(
      'aria-valuenow',
      '0'
    )
    expect(screen.getByRole('progressbar')).toHaveAttribute('title', '0%')
    expect(screen.getByTestId('percentage-text')).toHaveTextContent('0%')
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
    const disabledColor = color('neutral', '200')
    render(<ProgressBar value={50} isDisabled showPercentage />)

    expect(screen.getByRole('progressbar')).toHaveStyle('cursor: not-allowed')
    expect(screen.getByTestId('percentage-text')).toHaveStyle(
      `color: ${disabledColor}`
    )
  })
})
