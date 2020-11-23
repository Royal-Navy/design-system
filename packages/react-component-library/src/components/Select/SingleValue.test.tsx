import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult } from '@testing-library/react'

import { SingleValue } from './SingleValue'

describe('Select Option', () => {
  let wrapper: RenderResult
  let props: any

  beforeEach(() => {
    props = {
      clearValue: jest.fn(),
      cx: jest.fn(),
      children: 'test label',
      data: {},
      getStyles: jest.fn(),
    }
  })

  describe('and a badge is not provided', () => {
    beforeEach(() => {
      wrapper = render(<SingleValue {...props} />)
    })

    it('should not render a badge', () => {
      expect(wrapper.queryByTestId('badge')).toBeNull()
    })

    it('should use the label', () => {
      expect(
        wrapper.getByTestId('select-single-value-label')
      ).toHaveTextContent('test label')
    })
  })

  describe('and a badge is provided', () => {
    beforeEach(() => {
      props.data.badge = '100'
      wrapper = render(<SingleValue {...props} />)
    })

    it('should render a badge', () => {
      expect(wrapper.getByTestId('badge')).toBeInTheDocument()
      expect(wrapper.getByTestId('badge')).toHaveTextContent('100')
    })
  })
})
