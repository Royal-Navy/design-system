import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult } from '@testing-library/react'

import { Input, SelectInputProps } from './Input'

describe('Select Input', () => {
  let wrapper: RenderResult
  let props: SelectInputProps

  beforeEach(() => {
    props = {
      getStyles: jest.fn(),
      cx: jest.fn(),
      isHidden: false,
      innerRef: jest.fn(),
      className: 'myclass',
    }
  })

  describe('and no label is provided', () => {
    beforeEach(() => {
      wrapper = render(<Input {...props} />)
    })

    it('should not render a label', () => {
      expect(wrapper.queryByTestId('select-label')).toBeNull()
    })

    it('renders an input', () => {
      expect(
        wrapper.getByTestId('react-select-vendor-input')
      ).toBeInTheDocument()
    })
  })

  describe('and a label is provided', () => {
    beforeEach(() => {
      props['aria-label'] = 'Test label'

      wrapper = render(<Input {...props} />)
    })

    it('should render a label', () => {
      expect(wrapper.getByTestId('select-label')).toBeInTheDocument()
      expect(wrapper.getByTestId('select-label')).toHaveTextContent(
        'Test label'
      )
    })
  })
})
