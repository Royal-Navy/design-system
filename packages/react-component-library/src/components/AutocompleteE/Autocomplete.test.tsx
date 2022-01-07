import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { AutocompleteE, AutocompleteEOption } from '.'

describe('AutocompleteE', () => {
  let onChangeSpy: (value: string) => void
  let wrapper: RenderResult

  describe('when using the default prop values', () => {
    beforeEach(() => {
      const canShowFourthOption = false

      onChangeSpy = jest.fn()

      wrapper = render(
        <AutocompleteE id="autocomplete-id" label="Label" onChange={onChangeSpy}>
          <AutocompleteEOption value="one">One</AutocompleteEOption>
          <AutocompleteEOption value="two">Two</AutocompleteEOption>
          <AutocompleteEOption value="three">Three</AutocompleteEOption>
          {canShowFourthOption && (
            <AutocompleteEOption value="four">Four</AutocompleteEOption>
          )}
        </AutocompleteE>
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
        'autocomplete-id'
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

    it('does not display a clear button', () => {
      expect(wrapper.queryAllByTestId('select-clear-button')).toHaveLength(0)
    })

    it('does not display the items', () => {
      expect(wrapper.queryAllByTestId('select-option')).toHaveLength(0)
    })

    it.skip('does not show the arrow button in a hover state', () => {
      expect(wrapper.getByTestId('select-arrow-button')).toHaveStyleRule(
        'background-color',
        'transparent'
      )
    })

    describe('when the arrow button is clicked', () => {
      beforeEach(() => {
        userEvent.click(wrapper.getByTestId('select-arrow-button'))
      })

      it('renders the label smaller', () => {
        expect(wrapper.getByText('Label')).toHaveStyleRule(
          'transform',
          'translate(11px,6px) scale(0.75)'
        )
      })

      it('focuses the input', () => {
        expect(wrapper.getByTestId('select-input')).toHaveFocus()
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
          userEvent.click(wrapper.getByText('Two'))
        })

        it('hides the items', () => {
          expect(wrapper.queryAllByTestId('select-option')).toHaveLength(0)
        })

        it('sets the value', () => {
          expect(wrapper.getByTestId('select-input')).toHaveValue('Two')
        })

        it('blurs the input', () => {
          expect(wrapper.getByTestId('select-input')).not.toHaveFocus()
        })

        it('calls the `onChange` callback', () => {
          expect(onChangeSpy).toHaveBeenCalledTimes(1)
          expect(onChangeSpy).toHaveBeenCalledWith('two')
        })

        describe('and the clear button is clicked', () => {
          beforeEach(() => {
            userEvent.click(wrapper.getByTestId('select-clear-button'))
          })

          it('resets the value', () => {
            expect(wrapper.getByTestId('select-input')).toHaveValue('')
          })

          it('calls the `onChange` callback', () => {
            expect(onChangeSpy).toHaveBeenCalledWith(null)
          })
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

  describe('when `value` is set', () => {
    beforeEach(() => {
      wrapper = render(
        <AutocompleteE label="Label" value="two">
          <AutocompleteEOption value="one">One</AutocompleteEOption>
          <AutocompleteEOption value="two">Two</AutocompleteEOption>
          <AutocompleteEOption value="three">Three</AutocompleteEOption>
        </AutocompleteE>
      )
    })

    it('sets the value', () => {
      expect(wrapper.getByTestId('select-input')).toHaveValue('Two')
    })
  })
})
