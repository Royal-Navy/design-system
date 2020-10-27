import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { IconLayers } from '@royalnavy/icon-library'
import { render, RenderResult, fireEvent } from '@testing-library/react'

import { Dropdown } from './Dropdown'

const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
]

describe('Dropdown', () => {
  let wrapper: RenderResult
  let onSelectSpy: (value: string) => void

  describe('all props', () => {
    beforeEach(() => {
      onSelectSpy = jest.fn()

      wrapper = render(
        <Dropdown
          onSelect={onSelectSpy}
          options={options}
          label="Dropdown label"
          labelIcon={<IconLayers />}
        />
      )
    })

    it('should render the label icon', () => {
      expect(wrapper.getByTestId('placeholder-icon')).toBeInTheDocument()
    })

    it('should render the label', () => {
      expect(wrapper.getByTestId('placeholder-label')).toHaveTextContent(
        'Dropdown label'
      )
    })

    it('should set the ARIA attributes on the input', () => {
      expect(wrapper.container.querySelector('input')).toHaveAttribute(
        'aria-label',
        'Dropdown label'
      )
    })

    describe('when the dropdown is clicked', () => {
      beforeEach(() => {
        fireEvent.focus(wrapper.container.querySelector('input'))
        fireEvent.keyDown(wrapper.container.querySelector('input'), {
          key: 'ArrowDown',
          code: 40,
        })
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
          expect(onSelectSpy).toHaveBeenCalledWith('2')
        })
      })
    })
  })

  describe('minimal props', () => {
    beforeEach(() => {
      onSelectSpy = jest.fn()

      wrapper = render(
        <Dropdown
          onSelect={onSelectSpy}
          options={options}
          label="Dropdown label"
        />
      )
    })

    it('should render the label', () => {
      expect(wrapper.getByTestId('placeholder-label')).toBeInTheDocument()
    })

    it('should not render the label icon', () => {
      expect(wrapper.queryAllByTestId('placeholder-icon')).toHaveLength(0)
    })
  })
})
