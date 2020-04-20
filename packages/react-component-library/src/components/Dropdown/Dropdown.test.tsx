import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult, fireEvent } from '@testing-library/react'

import { Dropdown } from './Dropdown'

describe('Dropdown', () => {
  let wrapper: RenderResult
  let onSelectSpy: (value: string) => void

  describe('all props', () => {
    beforeEach(() => {
      onSelectSpy = jest.fn()

      const options = [
        { label: 'Option 1', value: "1" },
        { label: 'Option 2', value: "2" },
        { label: 'Option 3', value: "3" },
      ]

      wrapper = render(
        <Dropdown
          onSelect={onSelectSpy}
          options={options}
          label="Dropdown label"
        />
      )
    })

    it('should render the label', () => {
      expect(wrapper.getByText('Dropdown label')).toBeInTheDocument()
    })

    describe('when the dropdown is clicked', () => {
      beforeEach(() => {
        fireEvent.focus(wrapper.container.querySelector('input'))
        fireEvent.keyDown(wrapper.container.querySelector('input'), { key: 'ArrowDown', code: 40 })
      })

      it('should render three options', () => {
        expect(wrapper.getByText('Option 1')).toBeInTheDocument()
        expect(wrapper.getByText('Option 2')).toBeInTheDocument()
        expect(wrapper.getByText('Option 3')).toBeInTheDocument()
      })

      describe('when the second option is clicked', () => {
        beforeEach(() => {
          wrapper.getByText('Option 2').click()
        })

        it('should call the `onSelect` callback once', () => {
          expect(onSelectSpy).toHaveBeenCalledTimes(1)
          expect(onSelectSpy).toHaveBeenCalledWith("2")
        })
      })
    })
  })
})
