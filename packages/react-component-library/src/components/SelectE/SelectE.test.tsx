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
        userEvent.click(wrapper.getByTestId('select-arrow-button'))
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

      it('does not display badges', () => {
        expect(wrapper.queryAllByTestId('select-badge')).toHaveLength(0)
      })
    })
  })

  describe('when disabled', () => {
    beforeEach(() => {
      wrapper = render(
        <SelectE isDisabled label="Label">
          <SelectEOption value="one">One</SelectEOption>
          <SelectEOption value="two">Two</SelectEOption>
          <SelectEOption value="three">Three</SelectEOption>
        </SelectE>
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
        userEvent.tab()
      })

      it('does not show the items', () => {
        expect(wrapper.queryAllByTestId('select-option')).toHaveLength(0)
      })
    })

    describe('when clicking on the input', () => {
      beforeEach(() => {
        userEvent.click(wrapper.getByTestId('select-input'))
      })

      it('does not show the items', () => {
        expect(wrapper.queryAllByTestId('select-option')).toHaveLength(0)
      })
    })

    describe('when clicking on the arrow button', () => {
      beforeEach(() => {
        userEvent.click(wrapper.getByTestId('select-arrow-button'))
      })

      it('does not show the items', () => {
        expect(wrapper.queryAllByTestId('select-option')).toHaveLength(0)
      })
    })
  })

  describe('when invalid', () => {
    beforeEach(() => {
      wrapper = render(
        <SelectE isInvalid label="Label">
          <SelectEOption value="one">One</SelectEOption>
          <SelectEOption value="two">Two</SelectEOption>
          <SelectEOption value="three">Three</SelectEOption>
        </SelectE>
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

  describe('when `value` is set', () => {
    beforeEach(() => {
      wrapper = render(
        <SelectE label="Label" value="two">
          <SelectEOption value="one">One</SelectEOption>
          <SelectEOption value="two">Two</SelectEOption>
          <SelectEOption value="three">Three</SelectEOption>
        </SelectE>
      )
    })

    it('sets the value', () => {
      expect(wrapper.getByTestId('select-input')).toHaveValue('Two')
    })
  })

  describe('when `value` is invalidly set', () => {
    beforeEach(() => {
      wrapper = render(
        <SelectE label="Label" value="invalid">
          <SelectEOption value="one">One</SelectEOption>
          <SelectEOption value="two">Two</SelectEOption>
          <SelectEOption value="three">Three</SelectEOption>
        </SelectE>
      )
    })

    it('does not set the value', () => {
      expect(wrapper.getByTestId('select-input')).toHaveValue('')
    })
  })

  describe('when options have icons', () => {
    beforeEach(() => {
      wrapper = render(
        <SelectE id="select-id" label="Label">
          <SelectEOption
            icon={<IconAnchor data-testid="select-icon" />}
            value="one"
          >
            One
          </SelectEOption>
          <SelectEOption
            icon={<IconRemove data-testid="select-icon" />}
            value="two"
          >
            Two
          </SelectEOption>
          <SelectEOption
            icon={<IconAgriculture data-testid="select-icon" />}
            value="three"
          >
            Three
          </SelectEOption>
        </SelectE>
      )
    })

    describe('and clicking on the input', () => {
      beforeEach(() => {
        userEvent.click(wrapper.getByTestId('select-input'))
      })

      it('displays 3 icons', () => {
        expect(wrapper.queryAllByTestId('select-icon')).toHaveLength(3)
      })
    })
  })

  describe('when options have badges', () => {
    beforeEach(() => {
      wrapper = render(
        <SelectE id="select-id" label="Label">
          <SelectEOption badge={1} value="one">
            One
          </SelectEOption>
          <SelectEOption badge={2} value="two">
            Two
          </SelectEOption>
          <SelectEOption badge={3} value="three">
            Three
          </SelectEOption>
        </SelectE>
      )
    })

    describe('when clicking on the input', () => {
      beforeEach(() => {
        userEvent.click(wrapper.getByTestId('select-input'))
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
