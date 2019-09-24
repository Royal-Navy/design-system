import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult } from '@testing-library/react'

import { DropdownIndicator } from './DropdownIndicator'

describe('Dropdown Indicator', () => {
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

  describe('and the menu is closed', () => {
    beforeEach(() => {
      props.selectProps.menuIsOpen = false
      wrapper = render(<DropdownIndicator {...props} />)
    })

    it('should render the indicator points down', () => {
      expect(wrapper.queryByTestId('TriangleDown')).toBeInTheDocument()
    })

    it('should not render the indicator points down', () => {
      expect(wrapper.queryByTestId('TriangleUp')).toBeNull()
    })
  })

  describe('and the menu is open', () => {
    beforeEach(() => {
      props.selectProps.menuIsOpen = true
      wrapper = render(<DropdownIndicator {...props} />)
    })

    it('should not render the indicator points down', () => {
      expect(wrapper.queryByTestId('TriangleDown')).toBeNull()
    })

    it('should render the indicator points down', () => {
      expect(wrapper.queryByTestId('TriangleUp')).toBeInTheDocument()
    })
  })
})
