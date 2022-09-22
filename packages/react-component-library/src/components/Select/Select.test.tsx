import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render, RenderResult } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ColorAction000, ColorDanger800 } from '@defencedigital/design-tokens'
import {
  IconAgriculture,
  IconAnchor,
  IconRemove,
} from '@defencedigital/icon-library'

import { BORDER_WIDTH } from '../../styled-components'
import { COMPONENT_SIZE } from '../Forms'
import { Select } from '.'
import { SelectOption } from './SelectOption'

describe('Select', () => {
  let onChangeSpy: (value: string | null) => void
  let wrapper: RenderResult

  describe('when using the default prop values', () => {
    beforeEach(() => {
      const canShowFourthOption = false

      onChangeSpy = jest.fn()

      wrapper = render(
        <Select id="select-id" label="Label" onChange={onChangeSpy}>
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

    describe('when the mouse enters the input', () => {
      beforeEach(() => {
        fireEvent.mouseEnter(wrapper.getByTestId('select-input'))
      })

      it.skip('shows the arrow button in a hover state', () => {
        expect(wrapper.getByTestId('select-arrow-button')).toHaveStyleRule(
          'background-color',
          ColorAction000
        )
      })

      describe('and the mouse leaves the input', () => {
        beforeEach(() => {
          fireEvent.mouseLeave(wrapper.getByTestId('select-input'))
        })

        it.skip('shows the arrow button in a hover state', () => {
          expect(wrapper.getByTestId('select-arrow-button')).toHaveStyleRule(
            'background-color',
            'transparent'
          )
        })
      })
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

    describe('when the mouse enters the input', () => {
      beforeEach(() => {
        fireEvent.mouseEnter(wrapper.getByTestId('select-input'))
      })

      it.skip('does not show the arrow button in a hover state', () => {
        expect(wrapper.getByTestId('select-arrow-button')).toHaveStyleRule(
          'background-color',
          'transparent'
        )
      })
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
        </Select>
      )
    })

    describe('when clicking on the input', () => {
      beforeEach(() => {
        return userEvent.click(wrapper.getByTestId('select-input'))
      })

      it('displays 3 badges', () => {
        const badges = wrapper.queryAllByTestId('select-badge')
        expect(badges[0]).toHaveTextContent('1')
        expect(badges[1]).toHaveTextContent('2')
        expect(badges[2]).toHaveTextContent('3')
        expect(badges).toHaveLength(3)
      })
    })
  })
})
