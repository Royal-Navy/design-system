import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult } from '@testing-library/react'

import { DropdownLabel } from './DropdownLabel'

describe('Dropdown Label', () => {
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

  describe('and there is just text to display', () => {
    beforeEach(() => {
      props.label = 'test'
      wrapper = render(<DropdownLabel {...props} />)
    })

    it('should render the label', () => {
      expect(wrapper.queryByTestId('dropdownlabel__label')).toBeInTheDocument()
      expect(wrapper.queryByTestId('dropdownlabel__label')).toHaveTextContent(
        'test'
      )
    })

    it('should not render the left icon', () => {
      expect(
        wrapper.queryByTestId('rn-dropdownlabel__start-adornment')
      ).toBeNull()
    })

    it('should not render right content', () => {
      expect(wrapper.queryByTestId('rn-dropdownlabel__rightcontent')).toBeNull()
    })

    it('should not render visible icon', () => {
      expect(wrapper.queryByTestId('rn-dropdownlabel__iconvisible')).toBeNull()
    })

    it('should not render invisible icon', () => {
      expect(
        wrapper.queryByTestId('rn-dropdownlabel__iconinvisible')
      ).toBeNull()
    })
  })

  describe('and there a left icon to display', () => {
    beforeEach(() => {
      props.label = 'test'
      props.icon = () => <span>thing</span>
      wrapper = render(<DropdownLabel {...props} />)
    })

    it('should render the label', () => {
      expect(wrapper.queryByTestId('dropdownlabel__label')).toBeInTheDocument()
      expect(wrapper.queryByTestId('dropdownlabel__label')).toHaveTextContent(
        'test'
      )
    })

    it('should render the left icon', () => {
      expect(
        wrapper.queryByTestId('rn-dropdownlabel__start-adornment')
      ).toBeInTheDocument()
    })

    it('should not render right content', () => {
      expect(wrapper.queryByTestId('rn-dropdownlabel__rightcontent')).toBeNull()
    })

    it('should not render visible icon', () => {
      expect(wrapper.queryByTestId('rn-dropdownlabel__iconvisible')).toBeNull()
    })

    it('should not render invisible icon', () => {
      expect(
        wrapper.queryByTestId('rn-dropdownlabel__iconinvisible')
      ).toBeNull()
    })
  })

  describe('and the option indicated a hidden element', () => {
    beforeEach(() => {
      props.label = 'test'
      props.hidden = true
      wrapper = render(<DropdownLabel {...props} />)
    })

    it('should render the label', () => {
      expect(wrapper.queryByTestId('dropdownlabel__label')).toBeInTheDocument()
      expect(wrapper.queryByTestId('dropdownlabel__label')).toHaveTextContent(
        'test'
      )
    })

    it('should not render the left icon', () => {
      expect(
        wrapper.queryByTestId('rn-dropdownlabel__start-adornment')
      ).toBeNull()
    })

    it('should not render right content', () => {
      expect(wrapper.queryByTestId('rn-dropdownlabel__rightcontent')).toBeNull()
    })

    it('should not render visible icon', () => {
      expect(wrapper.queryByTestId('rn-dropdownlabel__iconvisible')).toBeNull()
    })

    it('should render invisible icon', () => {
      expect(
        wrapper.queryByTestId('rn-dropdownlabel__iconinvisible')
      ).toBeInTheDocument()
    })
  })

  describe('and the option indicated a visible element', () => {
    beforeEach(() => {
      props.label = 'test'
      props.visible = true
      wrapper = render(<DropdownLabel {...props} />)
    })

    it('should render the label', () => {
      expect(wrapper.queryByTestId('dropdownlabel__label')).toBeInTheDocument()
      expect(wrapper.queryByTestId('dropdownlabel__label')).toHaveTextContent(
        'test'
      )
    })

    it('should not render the left icon', () => {
      expect(
        wrapper.queryByTestId('rn-dropdownlabel__start-adornment')
      ).toBeNull()
    })

    it('should not render right content', () => {
      expect(wrapper.queryByTestId('rn-dropdownlabel__rightcontent')).toBeNull()
    })

    it('should render visible icon', () => {
      expect(
        wrapper.queryByTestId('rn-dropdownlabel__iconvisible')
      ).toBeInTheDocument()
    })

    it('should not render invisible icon', () => {
      expect(
        wrapper.queryByTestId('rn-dropdownlabel__iconinvisible')
      ).toBeNull()
    })
  })

  describe('and the option indicates there is right aligned content', () => {
    beforeEach(() => {
      props.label = 'test'
      props.rightContent = () => <p>right content</p>
      wrapper = render(<DropdownLabel {...props} />)
    })

    it('should render the label', () => {
      expect(wrapper.queryByTestId('dropdownlabel__label')).toBeInTheDocument()
      expect(wrapper.queryByTestId('dropdownlabel__label')).toHaveTextContent(
        'test'
      )
    })

    it('should not render the left icon', () => {
      expect(
        wrapper.queryByTestId('rn-dropdownlabel__start-adornment')
      ).toBeNull()
    })

    it('should render right content', () => {
      expect(
        wrapper.queryByTestId('rn-dropdownlabel__rightcontent')
      ).toBeInTheDocument()
    })

    it('should render visible icon', () => {
      expect(
        wrapper.queryByTestId('rn-dropdownlabel__rightcontent')
      ).toBeInTheDocument()
      expect(
        wrapper.queryByTestId('rn-dropdownlabel__rightcontent')
      ).toContainHTML('<p>right content</p>')
    })

    it('should not render invisible icon', () => {
      expect(
        wrapper.queryByTestId('rn-dropdownlabel__iconinvisible')
      ).toBeNull()
    })
  })
})
