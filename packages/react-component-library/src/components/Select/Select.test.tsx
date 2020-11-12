import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render, RenderResult } from '@testing-library/react'
import { IconAnchor } from '@royalnavy/icon-library'
import userEvent from '@testing-library/user-event'

import { Select } from '.'

const options = [
  {
    badge: 'Badge 1',
    label: 'Option 1',
    value: '1',
  },
  {
    badge: 'Badge 2',
    label: 'Option 2',
    value: '2',
  },
]

describe('Select', () => {
  let wrapper: RenderResult
  let onChangeSpy: (event: any) => void

  describe('when provided with all props', () => {
    beforeEach(() => {
      onChangeSpy = jest.fn()

      wrapper = render(
        <Select
          className="rn-select--modifier"
          label="Select label"
          name="select-name"
          onChange={onChangeSpy}
          options={options}
          value="2"
        />
      )
    })

    it('should add the CSS modifier', () => {
      expect(wrapper.container.children[0].classList).toContain(
        'rn-select--modifier'
      )
    })

    it('should render the label', () => {
      expect(wrapper.getByText('Select label')).toBeInTheDocument()
    })

    it('should render the select with the selected value', () => {
      expect(
        wrapper.getByTestId('select-single-value-label')
      ).toHaveTextContent('Option 2')
    })

    it('should add the name', () => {
      const hiddenInput = wrapper.container.children[0].children[1]

      expect(hiddenInput.getAttribute('name')).toEqual('select-name')
    })

    describe('when the select is clicked', () => {
      beforeEach(() => {
        const input = wrapper.getByTestId('react-select-vendor-input')
        fireEvent.focus(input)
        fireEvent.keyDown(input, {
          key: 'ArrowDown',
          code: 40,
        })
      })

      it('should render two options', () => {
        expect(wrapper.getAllByTestId('select-option-label')).toHaveLength(2)
      })

      describe('when the first option is clicked', () => {
        beforeEach(() => {
          wrapper.getByText('Option 1').click()
        })

        it('should call the `onChange` spy once', () => {
          expect(onChangeSpy).toHaveBeenCalledTimes(1)
          expect(onChangeSpy).toHaveBeenCalledWith({
            target: { name: 'select-name', value: '1' },
          })
        })
      })
    })
  })

  describe('when a downstream consumer provides a data-testid', () => {
    beforeEach(() => {
      wrapper = render(<Select options={options} data-testid="select-1" />)
    })

    it('should not find the input using the default `data-testid`', () => {
      expect(
        wrapper.queryAllByTestId('react-select-vendor-input')
      ).toHaveLength(0)
    })

    it('should find the input using the new `data-testid`', () => {
      expect(wrapper.getByTestId('select-1')).toBeInTheDocument()
    })
  })

  describe('when provided with options that have icons', () => {
    beforeEach(() => {
      onChangeSpy = jest.fn()

      const iconOptions = options.map((option) => ({
        ...option,
        icon: <IconAnchor data-testid="select-option-icon" />,
      }))

      wrapper = render(<Select label="Select label" options={iconOptions} />)

      const input = wrapper.getByTestId('react-select-vendor-input')
      fireEvent.focus(input)
      fireEvent.keyDown(input, {
        key: 'ArrowDown',
        code: 40,
      })
    })

    it('should render the icons', () => {
      expect(wrapper.getAllByTestId('select-option-icon')).toHaveLength(2)
    })
  })
})
