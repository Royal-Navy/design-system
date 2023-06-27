import { ColorDanger800, TypographyS } from '@defencedigital/design-tokens'
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { COMPONENT_SIZE } from '../Forms'
import { BORDER_WIDTH } from '../../styled-components'

import {  AutocompleteOption } from '../Autocomplete'
import {Combobox} from '.'

const ERROR_BOX_SHADOW = `0 0 0 ${
  BORDER_WIDTH[COMPONENT_SIZE.FORMS]
} ${ColorDanger800.toUpperCase()}`

describe('Combobox', () => {
  let onBlurSpy: jest.Mock
  let onChangeSpy: jest.Mock<void, [string | null]>
  let wrapper: RenderResult

  describe('when using the default prop values', () => {
    beforeEach(() => {
      const canShowFourthOption = false

      onBlurSpy = jest.fn()
      onChangeSpy = jest.fn<void, [string | null]>()

      wrapper = render(
        <Combobox
          id="autocomplete-id"
          label="Label"
          onBlur={onBlurSpy}
          onChange={onChangeSpy}
        >
          <AutocompleteOption value="one">One</AutocompleteOption>
          <AutocompleteOption value="two">Two</AutocompleteOption>
          <AutocompleteOption value="three">Three</AutocompleteOption>
          {canShowFourthOption && (
            <AutocompleteOption value="four">Four</AutocompleteOption>
          )}
        </Combobox>
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

      it('does not call `onBlur`', () => {
        expect(onBlurSpy).not.toHaveBeenCalled()
      })

      it('displays the items', () => {
        const options = wrapper.getAllByTestId('select-option')

        expect(options[0]).toHaveTextContent('One')
        expect(options[1]).toHaveTextContent('Two')
        expect(options[2]).toHaveTextContent('Three')
        expect(options).toHaveLength(3)
        expect(wrapper.container.querySelectorAll('strong')).toHaveLength(0)
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

        it('calls `onBlur`', () => {
          // This is called twice when an item is clicked on – this is due to
          // Downshift forcibly focusing the input when an item is clicked.
          expect(onBlurSpy).toHaveBeenCalled()
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

  describe('when the component has initialValue "One" selected', () => {
    const ControlledAutocomplete = () => {
      const [value, setValue] = React.useState<string | null>('one')

      return (
        <Combobox
          id="autocomplete-id"
          label="Label"
          onChange={(newValue) => setValue(newValue)}
          initialValue={value}
        >
          <AutocompleteOption value="one">One</AutocompleteOption>
          <AutocompleteOption value="two">Two</AutocompleteOption>
        </Combobox>
      )
    }

    beforeEach(() => {
      wrapper = render(<ControlledAutocomplete />)
    })

    it('has the value "One"', () => {
      expect(wrapper.getByTestId('select-input')).toHaveValue('One')
    })

    describe('when the menu is opened and the second item clicked', () => {
      beforeEach(async () => {
        await userEvent.click(wrapper.getByTestId('select-arrow-button'))
        return userEvent.click(wrapper.getByText('Two'))
      })

      it('has the value "Two"', () => {
        expect(wrapper.getByTestId('select-input')).toHaveValue('Two')
      })
    })

    describe('when the menu is opened and "tw" is typed into the input', () => {
      beforeEach(async () => {
        await userEvent.clear(wrapper.getByTestId('select-input'))
        await userEvent.type(wrapper.getByTestId('select-input'), 'tw')
      })

      it('has filters the options', () => {
        expect(wrapper.getByRole('option')).toHaveTextContent('Two')
      })

      it('has wraps the match characters in a <strong> element', () => {
        expect(wrapper.getByRole('option')).toContainHTML(
          '<strong>Tw</strong>o'
        )
      })
    })
  })

  describe('when the component is uncontrolled with "One" selected', () => {
    beforeEach(() => {
      wrapper = render(
        <Combobox
          id="autocomplete-id"
          label="Label"
          onChange={jest.fn()}
          initialValue="one"
        >
          <AutocompleteOption value="one">One</AutocompleteOption>
          <AutocompleteOption value="two">Two</AutocompleteOption>
        </Combobox>
      )
    })

    it('has the value "One"', () => {
      expect(wrapper.getByTestId('select-input')).toHaveValue('One')
    })

    describe('when the menu is opened and the second item clicked', () => {
      beforeEach(async () => {
        await userEvent.click(wrapper.getByTestId('select-arrow-button'))
        return userEvent.click(wrapper.getByText('Two'))
      })

      it('has the value "Two"', () => {
        expect(wrapper.getByTestId('select-input')).toHaveValue('Two')
      })
    })
  })

  describe('when options are added after the initial render', () => {
    beforeEach(() => {
      wrapper = render(
        <Combobox
          id="autocomplete-id"
          label="Label"
          onChange={jest.fn()}
          initialValue="one"
        >
          <>{}</>
        </Combobox>
      )
      wrapper.rerender(
        <Combobox
          id="autocomplete-id"
          label="Label"
          onChange={jest.fn()}
          initialValue="one"
        >
          <AutocompleteOption value="one">One</AutocompleteOption>
          <AutocompleteOption value="two">Two</AutocompleteOption>
        </Combobox>
      )
      return userEvent.click(wrapper.getByTestId('select-arrow-button'))
    })

    it('displays the items', () => {
      const options = wrapper.getAllByTestId('select-option')

      expect(options[0]).toHaveTextContent('One')
      expect(options[1]).toHaveTextContent('Two')
      expect(options).toHaveLength(2)
    })

    it('has the correct value', () => {
      expect(wrapper.getByTestId('select-input')).toHaveValue('One')
    })
  })

  describe('when options are added while the menu is open', () => {
    beforeEach(async () => {
      wrapper = render(
        <Combobox
          id="autocomplete-id"
          label="Label"
          onChange={jest.fn()}
          value="one"
        >
          <>{}</>
        </Combobox>
      )

      await userEvent.click(wrapper.getByTestId('select-arrow-button'))

      wrapper.rerender(
        <Combobox
          id="autocomplete-id"
          label="Label"
          onChange={jest.fn()}
          value="one"
        >
          <AutocompleteOption value="one">One</AutocompleteOption>
          <AutocompleteOption value="two">Two</AutocompleteOption>
        </Combobox>
      )
    })

    it('displays the items', () => {
      const options = wrapper.getAllByTestId('select-option')

      expect(options[0]).toHaveTextContent('One')
      expect(options[1]).toHaveTextContent('Two')
      expect(options).toHaveLength(2)
    })

    it('has the correct value', () => {
      expect(wrapper.getByTestId('select-input')).toHaveValue('One')
    })
  })

  describe('when the default `id` is used and the arrow button is clicked', () => {
    let initialId: string

    beforeEach(() => {
      wrapper = render(
        <Combobox label="Label" initialValue="two">
          <AutocompleteOption value="one">One</AutocompleteOption>
        </Combobox>
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
        <Combobox label="Label" initialValue="two">
          <AutocompleteOption value="one">One</AutocompleteOption>
          <AutocompleteOption value="two">Two</AutocompleteOption>
          <AutocompleteOption value="three">Three</AutocompleteOption>
        </Combobox>
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
        <Combobox label="Label" initialValue="two" hideClearButton>
          <AutocompleteOption value="one">One</AutocompleteOption>
          <AutocompleteOption value="two">Two</AutocompleteOption>
          <AutocompleteOption value="three">Three</AutocompleteOption>
        </Combobox>
      )
    })

    it('does not show a clear button', () => {
      expect(
        wrapper.queryByTestId('select-clear-button')
      ).not.toBeInTheDocument()
    })
  })

  describe('when the `isInvalid` prop is set', () => {
    beforeEach(() => {
      onBlurSpy = jest.fn()
      onChangeSpy = jest.fn<void, [string | null]>()

      wrapper = render(
        <Combobox
          id="autocomplete-id"
          label="Label"
          onBlur={onBlurSpy}
          onChange={onChangeSpy}
          isInvalid
        >
          <AutocompleteOption value="one">One</AutocompleteOption>
        </Combobox>
      )
    })

    it('has an error border', () => {
      expect(wrapper.getByTestId('select-outer-wrapper')).toHaveStyleRule(
        'box-shadow',
        ERROR_BOX_SHADOW
      )
    })

    describe('when the input is focused and blurred', () => {
      beforeEach(() => {
        wrapper.getByTestId('select-input').focus()
        wrapper.getByTestId('select-input').blur()
      })

      it('still has an error border', () => {
        expect(wrapper.getByTestId('select-outer-wrapper')).toHaveStyleRule(
          'box-shadow',
          ERROR_BOX_SHADOW
        )
      })
    })
  })

  describe.each(['invalid', null])('when `value` is set to `%s`', (value) => {
    beforeEach(() => {
      wrapper = render(
        <Combobox label="Label" initialValue={value}>
          <AutocompleteOption value="one">One</AutocompleteOption>
          <AutocompleteOption value="two">Two</AutocompleteOption>
          <AutocompleteOption value="three">Three</AutocompleteOption>
        </Combobox>
      )
    })

    it('does not set the value', () => {
      expect(wrapper.getByTestId('select-input')).toHaveValue('')
    })
  })
})
