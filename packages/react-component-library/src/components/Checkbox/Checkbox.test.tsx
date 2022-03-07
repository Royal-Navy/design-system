import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'
import { ColorNeutral200 } from '@defencedigital/design-tokens'
import { render, RenderResult } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Checkbox } from '.'
import { CHECKBOX_RADIO_VARIANT } from '../CheckboxRadioBase'
import { FieldProps } from '../../common/FieldProps'

describe('Checkbox', () => {
  let field: FieldProps
  let label: string
  let checkbox: RenderResult
  let onChangeSpy: jest.Mock

  beforeEach(() => {
    label = ''
    onChangeSpy = jest.fn()

    field = {
      name: 'example1',
      value: 'false',
      onChange: onChangeSpy,
      onBlur: jest.fn(),
    }
  })

  describe('when a field has no errors, a label and a value', () => {
    let input: HTMLElement

    beforeEach(() => {
      label = 'My Label 1'
      field.value = 'false'

      checkbox = render(
        <Checkbox
          name={field.name}
          value={field.value}
          label={label}
          onChange={field.onChange}
        />
      )

      input = checkbox.getByTestId('checkbox-input')
    })

    it('should render a field with a label', () => {
      expect(checkbox.getByTestId('checkbox-label')).toHaveTextContent(
        'My Label 1'
      )
    })

    it('should not render a description', () => {
      expect(checkbox.queryAllByTestId('checkbox-description')).toHaveLength(0)
    })

    it('should populate the field value', () => {
      expect(input).toHaveAttribute('value', 'false')
    })

    it('should not initially render as checked', () => {
      expect(input).not.toBeChecked()
    })

    describe('and tab is pressed', () => {
      beforeEach(() => {
        userEvent.tab()
      })

      it('focuses the input', () => {
        expect(input).toHaveFocus()
      })

      describe('and space is pressed', () => {
        beforeEach(() => {
          userEvent.keyboard('[Space]')
        })

        it('checks the input', () => {
          expect(input).toBeChecked()
        })

        it('calls onChange once', () => {
          expect(field.onChange).toHaveBeenCalledTimes(1)
        })

        describe('and space is pressed again', () => {
          beforeEach(() => {
            onChangeSpy.mockReset()
            userEvent.keyboard('[Space]')
          })

          it('unchecks the input', () => {
            expect(input).not.toBeChecked()
          })

          it('calls onChange once', () => {
            expect(field.onChange).toHaveBeenCalledTimes(1)
          })
        })
      })
    })

    it('should render a container', () => {
      expect(checkbox.getByTestId('checkbox')).toHaveStyleRule(
        'border',
        `1px solid ${ColorNeutral200}`
      )
      expect(checkbox.getByTestId('checkbox')).toHaveStyleRule(
        'border-radius',
        '15px'
      )
    })
  })

  describe('when a field has defaultChecked prop set', () => {
    beforeEach(() => {
      label = 'My Label 1'
      field.value = 'false'

      checkbox = render(
        <Checkbox
          name={field.name}
          value={field.value}
          label={label}
          onChange={field.onChange}
          defaultChecked
        />
      )
    })

    it('should initially render as checked', () => {
      expect(checkbox.getByTestId('checkbox-input')).toBeChecked()
    })
  })

  describe('when an additional class it provided', () => {
    beforeEach(() => {
      checkbox = render(
        <Checkbox
          className="test"
          name={field.name}
          value={field.value}
          label={label}
          onChange={field.onChange}
        />
      )
    })

    it('should attach the class to the wrapper', () => {
      expect(checkbox.queryByTestId('checkbox')).toHaveClass('test')
    })
  })

  describe('when an id is provided', () => {
    beforeEach(() => {
      checkbox = render(
        <Checkbox
          id="test"
          name={field.name}
          value={field.value}
          label={label}
          onChange={field.onChange}
        />
      )
    })

    it('should attach the id to the field', () => {
      expect(checkbox.queryByTestId('checkbox-input')).toHaveAttribute(
        'id',
        'test'
      )
    })

    it('should associate the label to the field with the custom id', () => {
      expect(checkbox.queryByTestId('checkbox-label')).toHaveAttribute(
        'for',
        'test'
      )
    })
  })

  describe('when an arbitrary prop is provided', () => {
    beforeEach(() => {
      checkbox = render(
        <Checkbox
          data-arbitrary="arbitrary"
          name={field.name}
          value={field.value}
          label={label}
          onChange={field.onChange}
        />
      )
    })

    it('should drill the arbitrary prop', () => {
      expect(checkbox.queryByTestId('checkbox-input')).toHaveAttribute(
        'data-arbitrary',
        'arbitrary'
      )
    })
  })

  describe('when a field has a description', () => {
    beforeEach(() => {
      checkbox = render(
        <Checkbox description="Description" label="Label" name={field.name} />
      )
    })

    it('should render a description', () => {
      expect(checkbox.getByTestId('checkbox-description')).toHaveTextContent(
        'Description'
      )
    })
  })

  describe('when a field has a description that is arbitrary JSX', () => {
    beforeEach(() => {
      checkbox = render(
        <Checkbox
          description={<div>Arbitrary content</div>}
          label="Label"
          name={field.name}
        />
      )
    })

    it('should render a arbitrary description', () => {
      expect(checkbox.getByText('Arbitrary content')).toBeInTheDocument()
    })
  })

  describe('when a field does not have a container', () => {
    beforeEach(() => {
      checkbox = render(
        <Checkbox
          label="Label"
          name={field.name}
          variant={CHECKBOX_RADIO_VARIANT.NO_CONTAINER}
        />
      )
    })

    it('should not render a container', () => {
      expect(checkbox.getByTestId('checkbox')).not.toHaveStyleRule(
        'border',
        `1px solid ${ColorNeutral200}`
      )
      expect(checkbox.getByTestId('checkbox')).not.toHaveStyleRule(
        'border-radius',
        '15px'
      )
    })
  })
})
