import React from 'react'

import { render, RenderResult, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { color, ColorDanger800 } from '@royalnavy/design-tokens'
import {
  IconAgriculture,
  IconAnchor,
  IconRemove,
} from '@royalnavy/icon-library'

import { BORDER_WIDTH } from '../../styled-components'
import { COMPONENT_SIZE } from '../Forms'
import { Select } from '.'
import { SelectOption } from './SelectOption'
import { TEXT_INPUT_INPUT_HEIGHT } from '../TextInput/partials/StyledInput'

describe('Select', () => {
  let onChangeSpy: (value: string | null) => void
  let wrapper: RenderResult

  describe('when using the default prop values', () => {
    beforeEach(() => {
      const canShowFourthOption = false

      onChangeSpy = jest.fn()

      wrapper = render(
        <Select
          className="custom-class"
          id="select-id"
          label="Label"
          onChange={onChangeSpy}
        >
          <SelectOption value="one">One</SelectOption>
          <SelectOption value="two">Two</SelectOption>
          <SelectOption value="three">Three</SelectOption>
          {canShowFourthOption && (
            <SelectOption value="three">Three</SelectOption>
          )}
        </Select>
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

    it('sets the custom class name', () => {
      expect(wrapper.getByTestId('select')).toHaveClass('custom-class')
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

    describe('when the arrow button is clicked', () => {
      beforeEach(() => {
        return userEvent.click(wrapper.getByTestId('select-arrow-button'))
      })

      it('displays the items', () => {
        const options = wrapper.getAllByTestId('select-option')

        expect(options[0]).toHaveTextContent('One')
        expect(options[1]).toHaveTextContent('Two')
        expect(options[2]).toHaveTextContent('Three')
        expect(options).toHaveLength(3)
      })

      it('displays the dropdown below the textbox', () => {
        expect(wrapper.getByTestId('select-options-wrapper')).toHaveStyle({
          position: 'absolute',
          marginBottom: '999',
        })

        expect(wrapper.getByTestId('select-options-wrapper')).toHaveStyleRule(
          'margin-bottom',
          '5px'
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

        it('calls the `onChange` callback', () => {
          expect(onChangeSpy).toHaveBeenCalledTimes(1)
          expect(onChangeSpy).toHaveBeenCalledWith('two')
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

      it('does not display badges', () => {
        expect(wrapper.queryAllByTestId('select-badge')).toHaveLength(0)
      })
    })
  })

  describe('when the component is controlled with "One" selected', () => {
    const ControlledSelect = () => {
      const [value, setValue] = React.useState<string | null>('one')

      return (
        <Select
          id="select-id"
          label="Label"
          onChange={(newValue) => setValue(newValue)}
          value={value}
        >
          <SelectOption value="one">One</SelectOption>
          <SelectOption value="two">Two</SelectOption>
        </Select>
      )
    }

    beforeEach(() => {
      wrapper = render(<ControlledSelect />)
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

  describe('when the component is uncontrolled with "One" selected', () => {
    beforeEach(() => {
      wrapper = render(
        <Select
          id="select-id"
          label="Label"
          onChange={jest.fn()}
          initialValue="one"
        >
          <SelectOption value="one">One</SelectOption>
          <SelectOption value="two">Two</SelectOption>
        </Select>
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
        <Select id="select-id" label="Label" onChange={jest.fn()} value="one">
          <>{}</>
        </Select>
      )
      wrapper.rerender(
        <Select id="select-id" label="Label" onChange={jest.fn()} value="one">
          <SelectOption value="one">One</SelectOption>
          <SelectOption value="two">Two</SelectOption>
        </Select>
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
        <Select id="select-id" label="Label" onChange={jest.fn()} value="one">
          <>{}</>
        </Select>
      )

      await userEvent.click(wrapper.getByTestId('select-arrow-button'))

      wrapper.rerender(
        <Select id="select-id" label="Label" onChange={jest.fn()} value="one">
          <SelectOption value="one">One</SelectOption>
          <SelectOption value="two">Two</SelectOption>
        </Select>
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
        <Select label="Label" value="two">
          <SelectOption value="one">One</SelectOption>
        </Select>
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

  describe('popupLocation', () => {
    describe('when unset', () => {
      beforeEach(() => {
        wrapper = render(
          <Select label="default props">
            <SelectOption value="one">One</SelectOption>
            <SelectOption value="two">Two</SelectOption>
            <SelectOption value="three">Three</SelectOption>
          </Select>
        )
      })
      it('should render the dropdown below the textbox', () => {
        const optionsWrapper = wrapper.getByTestId('select-options-wrapper')
        expect(optionsWrapper).toHaveStyleRule('margin-bottom', '5px')
        expect(optionsWrapper).toHaveStyleRule('top', undefined)
        expect(optionsWrapper).toHaveStyleRule('bottom', undefined)

        const expectedTopPosition = `-${
          TEXT_INPUT_INPUT_HEIGHT[COMPONENT_SIZE.FORMS]
        }`
        expect(optionsWrapper).toHaveStyleRule('top', expectedTopPosition, {
          modifier: '::after',
        })
        expect(optionsWrapper).toHaveStyleRule('bottom', '0', {
          modifier: '::after',
        })
      })
    })

    describe('when set to above', () => {
      beforeEach(() => {
        Element.prototype.getBoundingClientRect = jest.fn(() => ({
          top: 900,
          bottom: 950,
          left: 0,
          right: 100,
          width: 100,
          height: 50,
          x: 0,
          y: 900,
          toJSON: () => {},
        }))

        wrapper = render(
          <Select label="default props">
            <SelectOption value="one">One</SelectOption>
            <SelectOption value="two">Two</SelectOption>
            <SelectOption value="three">Three</SelectOption>
          </Select>
        )
      })

      it('should render the dropdown above the textbox', () => {
        const optionsWrapper = wrapper.getByTestId('select-options-wrapper')
        expect(optionsWrapper).toHaveStyleRule('margin-bottom', '0')
        expect(optionsWrapper).toHaveStyleRule('top', 'auto')
        expect(optionsWrapper).toHaveStyleRule('bottom', '100%')

        const expectedBottomPosition = `-${
          TEXT_INPUT_INPUT_HEIGHT[COMPONENT_SIZE.FORMS]
        }`
        expect(optionsWrapper).toHaveStyleRule(
          'bottom',
          expectedBottomPosition,
          {
            modifier: '::before',
          }
        )
        expect(optionsWrapper).toHaveStyleRule('top', '0', {
          modifier: '::before',
        })
      })
    })
  })

  describe('when disabled', () => {
    beforeEach(() => {
      wrapper = render(
        <Select isDisabled label="Label">
          <SelectOption value="one">One</SelectOption>
          <SelectOption value="two">Two</SelectOption>
          <SelectOption value="three">Three</SelectOption>
        </Select>
      )
    })

    describe('when tabbing to the input', () => {
      beforeEach(() => {
        return userEvent.tab()
      })

      it('does not show the items', () => {
        expect(wrapper.queryAllByTestId('select-option')).toHaveLength(0)
      })
    })

    describe('when clicking on the input', () => {
      beforeEach(() => {
        return userEvent.click(wrapper.getByTestId('select-input'))
      })

      it('does not show the items', () => {
        expect(wrapper.queryAllByTestId('select-option')).toHaveLength(0)
      })
    })

    describe('when clicking on the arrow button', () => {
      beforeEach(() => {
        return userEvent.click(wrapper.getByTestId('select-arrow-button'))
      })

      it('does not show the items', () => {
        expect(wrapper.queryAllByTestId('select-option')).toHaveLength(0)
      })
    })
  })

  describe('when invalid', () => {
    beforeEach(() => {
      wrapper = render(
        <Select isInvalid label="Label">
          <SelectOption value="one">One</SelectOption>
          <SelectOption value="two">Two</SelectOption>
          <SelectOption value="three">Three</SelectOption>
        </Select>
      )
    })

    it('displays in an error state', () => {
      expect(wrapper.getByTestId('select-outer-wrapper')).toHaveStyleRule(
        'box-shadow',
        `0 0 0 ${
          BORDER_WIDTH[COMPONENT_SIZE.FORMS]
        } ${ColorDanger800.toUpperCase()}`
      )
    })
  })

  describe('when `value` is set to a valid value', () => {
    beforeEach(() => {
      wrapper = render(
        <Select label="Label" value="two">
          <SelectOption value="one">One</SelectOption>
          <SelectOption value="two">Two</SelectOption>
          <SelectOption value="three">Three</SelectOption>
        </Select>
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
        <Select label="Label" value="two" hideClearButton>
          <SelectOption value="one">One</SelectOption>
          <SelectOption value="two">Two</SelectOption>
          <SelectOption value="three">Three</SelectOption>
        </Select>
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
        <Select label="Label" value={value}>
          <SelectOption value="one">One</SelectOption>
          <SelectOption value="two">Two</SelectOption>
          <SelectOption value="three">Three</SelectOption>
        </Select>
      )
    })

    it('does not set the value', () => {
      expect(wrapper.getByTestId('select-input')).toHaveValue('')
    })
  })

  describe('when options have icons', () => {
    beforeEach(() => {
      wrapper = render(
        <Select id="select-id" label="Label">
          <SelectOption
            icon={<IconAnchor data-testid="select-icon" />}
            value="one"
          >
            One
          </SelectOption>
          <SelectOption
            icon={<IconRemove data-testid="select-icon" />}
            value="two"
          >
            Two
          </SelectOption>
          <SelectOption
            icon={<IconAgriculture data-testid="select-icon" />}
            value="three"
          >
            Three
          </SelectOption>
        </Select>
      )
    })

    describe('and clicking on the input', () => {
      beforeEach(() => {
        return userEvent.click(wrapper.getByTestId('select-input'))
      })

      it('displays 3 icons', () => {
        expect(wrapper.queryAllByTestId('select-icon')).toHaveLength(3)
      })
    })
  })

  describe('when options have badges', () => {
    beforeEach(() => {
      wrapper = render(
        <Select id="select-id" label="Label">
          <SelectOption badge={1} value="one">
            One
          </SelectOption>
          <SelectOption badge={2} value="two">
            Two
          </SelectOption>
          <SelectOption badge={3} value="three">
            Three
          </SelectOption>
          <SelectOption
            badge="custom"
            badgeProps={{ color: 'supf', colorVariant: 'faded' }}
            value="custom"
          >
            Custom
          </SelectOption>
        </Select>
      )
    })

    describe('when clicking on the input', () => {
      beforeEach(() => {
        return userEvent.click(wrapper.getByTestId('select-input'))
      })

      it('displays 4 badges', () => {
        const badges = wrapper.queryAllByTestId('select-badge')
        expect(badges[0]).toHaveTextContent('1')
        expect(badges[1]).toHaveTextContent('2')
        expect(badges[2]).toHaveTextContent('3')
        expect(badges).toHaveLength(4)
      })

      it('displays custom badge props', () => {
        const customBadge = wrapper.queryAllByTestId('select-badge')[3]
        expect(customBadge).toHaveTextContent('custom')

        const backgroundColor = color('supf', '200')
        expect(customBadge).toHaveStyleRule('background-color', backgroundColor)
      })
    })
  })

  describe('when clicking to open, close, and reopen', () => {
    it('should toggle the dropdown on each click', async () => {
      render(
        <Select id="select-id" label="Label">
          <SelectOption value="option1">Option 1</SelectOption>
          <SelectOption value="option2">Option 2</SelectOption>
          <SelectOption value="option3">Option 3</SelectOption>
        </Select>
      )

      const input = screen.getByRole('textbox', { name: 'Label' })

      await userEvent.click(input)
      await waitFor(() => {
        expect(screen.getByText('Option 1')).toBeVisible()
        expect(screen.getByText('Option 2')).toBeVisible()
        expect(screen.getByText('Option 3')).toBeVisible()
      })

      await userEvent.click(input)
      await waitFor(() => {
        expect(screen.queryByText('Option 1')).not.toBeInTheDocument()
        expect(screen.queryByText('Option 2')).not.toBeInTheDocument()
        expect(screen.queryByText('Option 3')).not.toBeInTheDocument()
      })

      await userEvent.click(input)
      await waitFor(() => {
        expect(screen.getByText('Option 1')).toBeVisible()
        expect(screen.getByText('Option 2')).toBeVisible()
        expect(screen.getByText('Option 3')).toBeVisible()
      })
    })
  })

  describe('when focusing with keyboard and then interacting', () => {
    it('should open on focus and allow reopening after closing', async () => {
      render(
        <Select id="select-id" label="Label">
          <SelectOption value="option1">Option 1</SelectOption>
          <SelectOption value="option2">Option 2</SelectOption>
          <SelectOption value="option3">Option 3</SelectOption>
        </Select>
      )

      const input = screen.getByRole('textbox', { name: 'Label' })

      await userEvent.tab()
      expect(screen.getByRole('listbox', { name: 'Label' })).toHaveFocus()

      await waitFor(() => {
        expect(screen.getByText('Option 1')).toBeVisible()
        expect(screen.getByText('Option 2')).toBeVisible()
        expect(screen.getByText('Option 3')).toBeVisible()
      })

      await userEvent.keyboard('{Escape}')
      await waitFor(() => {
        expect(screen.queryByText('Option 1')).not.toBeInTheDocument()
        expect(screen.queryByText('Option 2')).not.toBeInTheDocument()
        expect(screen.queryByText('Option 3')).not.toBeInTheDocument()
      })

      await userEvent.click(input)
      await waitFor(() => {
        expect(screen.getByText('Option 1')).toBeVisible()
        expect(screen.getByText('Option 2')).toBeVisible()
        expect(screen.getByText('Option 3')).toBeVisible()
      })
    })
  })

  describe('when isMulti', () => {
    let onChangeIsMultiSpy: (value: string[] | null) => void

    beforeEach(() => {
      onChangeIsMultiSpy = jest.fn()

      wrapper = render(
        <Select
          className="custom-class"
          id="select-id"
          label="Label"
          isMulti
          onChange={onChangeIsMultiSpy}
        >
          <SelectOption value="one">One</SelectOption>
          <SelectOption value="two">Two</SelectOption>
          <SelectOption value="three">Three</SelectOption>
        </Select>
      )
    })

    it('displays checkboxes next to the options', async () => {
      await userEvent.click(wrapper.getByTestId('select-input'))

      const checkboxes = wrapper.getAllByRole('checkbox')
      expect(checkboxes).toHaveLength(3)
    })

    it('calls onChange with an array of selections', async () => {
      await userEvent.click(wrapper.getByTestId('select-input'))

      await userEvent.click(wrapper.getByText('One'))
      expect(onChangeIsMultiSpy).toHaveBeenCalledWith(['one'])

      await userEvent.click(wrapper.getByText('Two'))
      expect(onChangeIsMultiSpy).toHaveBeenCalledWith(['one', 'two'])

      await userEvent.click(wrapper.getByText('One'))
      expect(onChangeIsMultiSpy).toHaveBeenCalledWith(['two'])
    })

    it('correctly selects the initial selected values', async () => {
      wrapper.unmount()
      wrapper = render(
        <Select
          className="custom-class"
          id="select-id"
          label="Label"
          isMulti
          initialValue={['one', 'two']}
          onChange={onChangeIsMultiSpy}
        >
          <SelectOption value="one">One</SelectOption>
          <SelectOption value="two">Two</SelectOption>
          <SelectOption value="three">Three</SelectOption>
        </Select>
      )

      expect(wrapper.getByTestId('select-input')).not.toHaveValue('')

      await userEvent.click(wrapper.getByTestId('select-input'))

      const checkboxes = wrapper.getAllByRole('checkbox')
      expect(checkboxes[0]).toBeChecked()
      expect(checkboxes[1]).toBeChecked()
      expect(checkboxes[2]).not.toBeChecked()
    })

    it('correctly handles being in controlled mode', async () => {
      wrapper.unmount()
      wrapper = render(
        <Select
          className="custom-class"
          id="select-id"
          label="Label"
          isMulti
          value={['one', 'two']}
          onChange={onChangeIsMultiSpy}
        >
          <SelectOption value="one">One</SelectOption>
          <SelectOption value="two">Two</SelectOption>
          <SelectOption value="three">Three</SelectOption>
        </Select>
      )

      expect(wrapper.getByTestId('select-input')).not.toHaveValue('')

      await userEvent.click(wrapper.getByTestId('select-input'))

      const checkboxes = wrapper.getAllByRole('checkbox')
      expect(checkboxes[0]).toBeChecked()
      expect(checkboxes[1]).toBeChecked()
      expect(checkboxes[2]).not.toBeChecked()

      // Because we don't handle the value updating in this test expect the third checkbox to still be unchecked
      await userEvent.click(wrapper.getByText('Three'))

      expect(checkboxes[0]).toBeChecked()
      expect(checkboxes[1]).toBeChecked()
      expect(checkboxes[2]).not.toBeChecked()
    })
  })
})
