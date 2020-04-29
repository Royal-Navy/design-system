import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult, fireEvent } from '@testing-library/react'

import { Select } from '.'

describe('Select', () => {
  let wrapper: RenderResult
  let onChangeSpy: (event: any) => void

  describe('when provided with all props', () => {
    beforeEach(() => {
      onChangeSpy = jest.fn()

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
        fireEvent.focus(wrapper.container.querySelector('input'))
        fireEvent.keyDown(wrapper.container.querySelector('input'), {
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
})
