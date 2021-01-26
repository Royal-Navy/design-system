import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult } from '@testing-library/react'

import { ProgressIndicator } from '.'

describe('ProgressIndicator', () => {
  let wrapper: RenderResult

  describe('default props', () => {
    beforeEach(() => {
      wrapper = render(<ProgressIndicator />)
    })

    it('should show the loader', () => {
      expect(wrapper.getByTestId('loader')).toBeInTheDocument()
    })

    it('should show the "Loading..." text', () => {
      expect(wrapper.getByText('Loading...')).toBeInTheDocument()
    })
  })

  describe('with CSS modifier', () => {
    beforeEach(() => {
      wrapper = render(
        <ProgressIndicator className="rn-progress-indicator--custom" />
      )
    })

    it('should add the modifier', () => {
      expect(wrapper.getByTestId('progress-indicator').classList).toContain(
        'rn-progress-indicator--custom'
      )
    })
  })

  describe('with arbitrary props', () => {
    beforeEach(() => {
      wrapper = render(
        <ProgressIndicator data-arbitrary="arbitrary" />
      )
    })

    it('should spread arbitrary props', () => {
      expect(wrapper.getByTestId('progress-indicator')).toHaveAttribute(
        'data-arbitrary',
        'arbitrary'
      )
    })
  })
})
