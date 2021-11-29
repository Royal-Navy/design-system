import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render, RenderResult } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ColorAction000 } from '@defencedigital/design-tokens'

import { SelectE } from '.'
import { SelectEOption } from './SelectEOption'

describe('SelectE', () => {
  let onChangeSpy: (value: string) => void
  let wrapper: RenderResult

  describe('when using the default prop values', () => {
    beforeEach(() => {
      const canShowFourthOption = false

      onChangeSpy = jest.fn()

      wrapper = render(
        <SelectE id="select-id" label="Label" onChange={onChangeSpy}>
          <SelectEOption value="one">One</SelectEOption>
          <SelectEOption value="two">Two</SelectEOption>
          <SelectEOption value="three">Three</SelectEOption>
          {canShowFourthOption && (
            <SelectEOption value="three">Three</SelectEOption>
          )}
        </SelectE>
      )
    })

    it('sets the `aria-labelledby` attributes', () => {
      const labelId = wrapper.getByTestId('select-label').getAttribute('id')
      expect(wrapper.getByTestId('select')).toHaveAttribute(
        'aria-labelledby',
        labelId
      )
      expect(wrapper.getByTestId('select-input')).toHaveAttribute(
        'aria-labelledby',
        labelId
      )
    })

    it('sets the custom `id` of the input', () => {
      expect(wrapper.getByTestId('select-input')).toHaveAttribute(
        'id',
        'select-id'
      )
    })

    it('renders the label', () => {
      expect(wrapper.getByText('Label')).toBeInTheDocument()
    })

    it('sets the `htmlFor` of the label', () => {
      const expected = wrapper.getByTestId('select-input').getAttribute('id')

      expect(wrapper.getByTestId('select-label')).toHaveAttribute(
        'for',
        expected
      )
    })

    it('does not set the value', () => {
      expect(wrapper.getByTestId('select-input')).toHaveValue('')
    })

    it('does not display the items', () => {
      expect(wrapper.queryAllByTestId('select-option')).toHaveLength(0)
    })

    it('does not show the arrow button in a hover state', () => {
      expect(wrapper.getByTestId('select-arrow-button')).toHaveStyleRule(
        'background-color',
        'transparent'
      )
    })

    describe('when the mouse enters the input', () => {
      beforeEach(() => {
        fireEvent.mouseEnter(wrapper.getByTestId('select-input'))
      })

      it('shows the arrow button in a hover state', () => {
        expect(wrapper.getByTestId('select-arrow-button')).toHaveStyleRule(
          'background-color',
          ColorAction000
        )
      })

      describe('and the mouse leaves the input', () => {
        beforeEach(() => {
          fireEvent.mouseLeave(wrapper.getByTestId('select-input'))
        })

        it('shows the arrow button in a hover state', () => {
          expect(wrapper.getByTestId('select-arrow-button')).toHaveStyleRule(
            'background-color',
            'transparent'
          )
        })
      })
    })

    describe('when the arrow button is clicked', () => {
      beforeEach(() => {
        wrapper.getByTestId('select-arrow-button').click()
      })

      it('displays the items', () => {
        const options = wrapper.getAllByTestId('select-option')

        expect(options[0]).toHaveTextContent('One')
        expect(options[1]).toHaveTextContent('Two')
        expect(options[2]).toHaveTextContent('Three')
        expect(options).toHaveLength(3)
      })

      describe('and the second item is clicked', () => {
        beforeEach(() => {
          wrapper.getByText('Two').click()
        })

        it('hides the items', () => {
          expect(wrapper.queryAllByTestId('select-option')).toHaveLength(0)
        })

        it('sets the value', () => {
          expect(wrapper.getByTestId('select-input')).toHaveValue('Two')
        })

        it('calls the `onChange` callback', () => {
          expect(onChangeSpy).toHaveBeenCalledTimes(1)
          expect(onChangeSpy).toHaveBeenCalledWith('two')
        })
      })
    })

    describe('when tabbing to the input', () => {
      beforeEach(() => {
        userEvent.tab()
      })

      it('shows the items', () => {
        expect(wrapper.queryAllByTestId('select-option')).toHaveLength(3)
      })
    })

    describe('when clicking on the input', () => {
      beforeEach(() => {
        userEvent.click(wrapper.getByTestId('select-input'))
      })

      it('shows the items', () => {
        expect(wrapper.queryAllByTestId('select-option')).toHaveLength(3)
      })
    })
  })
})
