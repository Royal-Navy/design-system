import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult } from '@testing-library/react'

import { Option } from './Option'

describe('Select Option', () => {
  let wrapper: RenderResult
  let props: any

  beforeEach(() => {
    props = {
      className: 'myclass',
      clearValue: jest.fn(),
      cx: jest.fn(),
      data: { label: 'test label' },
      getStyles: jest.fn(),
      getValue: jest.fn(),
      hasValue: false,
      innerRef: jest.fn(),
      isDisabled: false,
      isFocused: false,
      isMulti: false,
      isSelected: false,
      options: [],
      selectOption: jest.fn(),
      selectProps: jest.fn(),
      setValue: jest.fn(),
    }
  })

  describe('and a badge is not provided', () => {
    beforeEach(() => {
      wrapper = render(<Option {...props} />)
    })

    it('should not render a badge', () => {
      expect(wrapper.queryByTestId('badge')).toBeNull()
    })

    it('should use the label', () => {
      expect(wrapper.getByTestId('select-option-label')).toHaveTextContent(
        'test label'
      )
    })
  })

  describe('and a badge is provided', () => {
    beforeEach(() => {
      props.data.badge = '100'
      wrapper = render(<Option {...props} />)
    })

    it('should render a badge', () => {
      expect(wrapper.getByTestId('badge')).toBeInTheDocument()
      expect(wrapper.getByTestId('badge')).toHaveTextContent('100')
    })
  })
})
