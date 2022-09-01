import { TypographyS } from '@defencedigital/design-tokens'
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Autocomplete, AutocompleteOption } from '.'

describe('Autocomplete', () => {
  let onChangeSpy: (value: string | null) => void
  let wrapper: RenderResult

  describe('when using the default prop values', () => {
    beforeEach(() => {
      const canShowFourthOption = false

      onChangeSpy = jest.fn()

      wrapper = render(
        <Autocomplete id="autocomplete-id" label="Label" onChange={onChangeSpy}>
          <AutocompleteOption value="one">One</AutocompleteOption>
          <AutocompleteOption value="two">Two</AutocompleteOption>
          <AutocompleteOption value="three">Three</AutocompleteOption>
          {canShowFourthOption && (
            <AutocompleteOption value="four">Four</AutocompleteOption>
          )}
        </Autocomplete>
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

    it('sets `aria-expanded` on the input wrapper to `false`', () => {
      expect(wrapper.getByTestId('select-input-wrapper')).toHaveAttribute(
        'aria-expanded',
        'false'
      )
    })

    it.skip('does not show the arrow button in a hover state', () => {
      expect(wrapper.getByTestId('select-arrow-button')).toHaveStyleRule(
        'background-color',
        'transparent'
      )
    })

    describe('when the arrow button is clicked', () => {
      beforeEach(() => {
        return userEvent.click(wrapper.getByTestId('select-arrow-button'))
      })

      it('renders the label smaller', () => {
        expect(wrapper.getByText('Label')).toHaveStyleRule(
          'font-size',
          TypographyS
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

      it('sets `aria-expanded` on the input wrapper to `true`', () => {
        expect(wrapper.getByTestId('select-input-wrapper')).toHaveAttribute(
          'aria-expanded',
          'true'
        )
      })

      describe('and the second item is clicked', () => {
        beforeEach(() => {
          return userEvent.click(wrapper.getByText('Two'))
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

        it('focuses the toggle button', () => {
          expect(wrapper.getByTestId('select-arrow-button')).toHaveFocus()
        })

        describe('and the clear button is clicked', () => {
          beforeEach(() => {
            return userEvent.click(wrapper.getByTestId('select-clear-button'))
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
        return userEvent.tab()
      })

      it('shows the items', () => {
        expect(wrapper.queryAllByTestId('select-option')).toHaveLength(3)
      })
    })

    describe('when clicking on the input', () => {
      beforeEach(() => {
        return userEvent.click(wrapper.getByTestId('select-input'))
      })

      it('shows the items', () => {
        expect(wrapper.queryAllByTestId('select-option')).toHaveLength(3)
      })
    })
  })

  describe('when options are added after the initial render', () => {
    beforeEach(() => {
      wrapper = render(
        <Autocomplete id="autocomplete-id" label="Label" onChange={jest.fn()}>
          <>{}</>
        </Autocomplete>
      )
      wrapper.rerender(
        <Autocomplete id="autocomplete-id" label="Label" onChange={jest.fn()}>
          <AutocompleteOption value="one">One</AutocompleteOption>
          <AutocompleteOption value="two">Two</AutocompleteOption>
        </Autocomplete>
      )
      return userEvent.click(wrapper.getByTestId('select-arrow-button'))
    })

    it('displays the items', () => {
      const options = wrapper.getAllByTestId('select-option')

      expect(options[0]).toHaveTextContent('One')
      expect(options[1]).toHaveTextContent('Two')
      expect(options).toHaveLength(2)
    })
  })

  describe('when options are added while the menu is open', () => {
    beforeEach(async () => {
      wrapper = render(
        <Autocomplete id="autocomplete-id" label="Label" onChange={jest.fn()}>
          <>{}</>
        </Autocomplete>
      )

      await userEvent.click(wrapper.getByTestId('select-arrow-button'))

      wrapper.rerender(
        <Autocomplete id="autocomplete-id" label="Label" onChange={jest.fn()}>
          <AutocompleteOption value="one">One</AutocompleteOption>
          <AutocompleteOption value="two">Two</AutocompleteOption>
        </Autocomplete>
      )
    })

    it('displays the items', () => {
      const options = wrapper.getAllByTestId('select-option')

      expect(options[0]).toHaveTextContent('One')
      expect(options[1]).toHaveTextContent('Two')
      expect(options).toHaveLength(2)
    })
  })

  describe('when the default `id` is used and the arrow button is clicked', () => {
    let initialId: string

    beforeEach(() => {
      wrapper = render(
        <Autocomplete label="Label" value="two">
          <AutocompleteOption value="one">One</AutocompleteOption>
        </Autocomplete>
      )
      initialId = wrapper.getByTestId('select-input').id
      return userEvent.click(wrapper.getByTestId('select-arrow-button'))
    })

    it('does not generate a new `id`', () => {
      expect(wrapper.getByTestId('select-input')).toHaveAttribute(
        'id',
        initialId
      )
    })
  })

  describe('when `value` is set to a valid value', () => {
    beforeEach(() => {
      wrapper = render(
        <Autocomplete label="Label" value="two">
          <AutocompleteOption value="one">One</AutocompleteOption>
          <AutocompleteOption value="two">Two</AutocompleteOption>
          <AutocompleteOption value="three">Three</AutocompleteOption>
        </Autocomplete>
      )
    })

    it('sets the value', () => {
      expect(wrapper.getByTestId('select-input')).toHaveValue('Two')
    })

    it('shows a clear button', () => {
      expect(wrapper.getByTestId('select-clear-button')).toBeInTheDocument()
    })
  })

  describe('when `value` and hideClearButton are set', () => {
    beforeEach(() => {
      wrapper = render(
        <Autocomplete label="Label" value="two" hideClearButton>
          <AutocompleteOption value="one">One</AutocompleteOption>
          <AutocompleteOption value="two">Two</AutocompleteOption>
          <AutocompleteOption value="three">Three</AutocompleteOption>
        </Autocomplete>
      )
    })

    it('does not show a clear button', () => {
      expect(
        wrapper.queryByTestId('select-clear-button')
      ).not.toBeInTheDocument()
    })
  })

  describe.each(['invalid', null])('when `value` is set to `%s`', (value) => {
    beforeEach(() => {
      wrapper = render(
        <Autocomplete label="Label" value={value}>
          <AutocompleteOption value="one">One</AutocompleteOption>
          <AutocompleteOption value="two">Two</AutocompleteOption>
          <AutocompleteOption value="three">Three</AutocompleteOption>
        </Autocomplete>
      )
    })

    it('does not set the value', () => {
      expect(wrapper.getByTestId('select-input')).toHaveValue('')
    })
  })
})
