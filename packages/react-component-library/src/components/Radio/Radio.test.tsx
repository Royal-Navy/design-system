import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'
import {
  ColorNeutral200,
  ColorAction000,
  ColorNeutralWhite,
} from '@defencedigital/design-tokens'
import { render, RenderResult } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { RADIO_VARIANT, Radio } from '.'
import { FieldProps } from '../../common/FieldProps'
import { FormProps } from '../../common/FormProps'

describe('Radio', () => {
  let field: FieldProps
  let form: FormProps
  let label: string
  let radio: RenderResult

  beforeEach(() => {
    label = ''

    field = {
      name: 'colour',
      value: '',
      onChange: jest.fn(),
      onBlur: jest.fn(),
    }

    form = {
      errors: {},
      touched: {},
    }
  })

  describe('when the field has no errors, a label and a value', () => {
    let input: HTMLElement

    beforeEach(() => {
      label = 'My Label 1'
      field.value = 'option1'

      radio = render(
        <Radio
          name={field.name}
          value={field.value}
          onChange={field.onChange}
          label={label}
        />
      )

      input = radio.getByTestId('radio-input')
    })

    it('should render a container', () => {
      expect(radio.getByTestId('radio')).toHaveStyleRule(
        'border',
        `1px solid ${ColorNeutral200}`
      )
      expect(radio.getByTestId('radio')).toHaveStyleRule(
        'border-radius',
        '15px'
      )

      expect(radio.getByTestId('radio')).toHaveStyleRule(
        'background',
        ColorNeutralWhite
      )
    })

    it('should render a field with a label', () => {
      expect(radio.getByTestId('radio-label')).toHaveTextContent('My Label 1')
    })

    it('should not render a description', () => {
      expect(radio.queryAllByTestId('checkbox-description')).toHaveLength(0)
    })

    it('should populate the field value', () => {
      expect(input).toHaveAttribute('value', 'option1')
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

        it('styles the container as active', () => {
          expect(radio.getByTestId('radio')).toHaveStyleRule(
            'background',
            ColorAction000
          )
        })
      })
    })
  })

  describe('when an additional class is provided', () => {
    beforeEach(() => {
      radio = render(
        <Radio
          className="test"
          name={field.name}
          value={field.value}
          onChange={field.onChange}
          label={label}
        />
      )
    })

    it('should attach the class to the wrapper', () => {
      expect(radio.queryByTestId('radio')).toHaveClass('test')
    })
  })

  describe('when an id is provided', () => {
    beforeEach(() => {
      radio = render(
        <Radio
          id="test"
          name={field.name}
          value={field.value}
          onChange={field.onChange}
          label={label}
        />
      )
    })

    it('should attach the id to the field', () => {
      expect(radio.queryByTestId('radio-input')).toHaveAttribute('id', 'test')
    })

    it('should associate the label to the field with the custom id', () => {
      expect(radio.queryByTestId('radio-label')).toHaveAttribute('for', 'test')
    })
  })

  describe('when arbitrary props are provided', () => {
    beforeEach(() => {
      radio = render(
        <Radio
          data-arbitrary="arbitrary"
          name={field.name}
          value={field.value}
          onChange={field.onChange}
          label={label}
        />
      )
    })

    it('should spread arbitrary props', () => {
      expect(radio.getByTestId('radio-input')).toHaveAttribute(
        'data-arbitrary',
        'arbitrary'
      )
    })
  })

  describe('when a field has a description', () => {
    beforeEach(() => {
      radio = render(
        <Radio description="Description" label="Label" name={field.name} />
      )
    })

    it('should render a description', () => {
      expect(radio.getByTestId('checkbox-description')).toHaveTextContent(
        'Description'
      )
    })
  })

  describe('when a field has a description that is arbitrary JSX', () => {
    beforeEach(() => {
      radio = render(
        <Radio
          description={<div>Arbitrary content</div>}
          label="Label"
          name={field.name}
        />
      )
    })

    it('should render a arbitrary description', () => {
      expect(radio.getByText('Arbitrary content')).toBeInTheDocument()
    })
  })

  describe('when a field does not have a container', () => {
    beforeEach(() => {
      radio = render(
        <Radio
          label="Label"
          name={field.name}
          variant={RADIO_VARIANT.NO_CONTAINER}
        />
      )
    })

    it('should not render a container', () => {
      expect(radio.getByTestId('radio')).not.toHaveStyleRule(
        'border',
        `1px solid ${ColorNeutral200}`
      )
      expect(radio.getByTestId('radio')).not.toHaveStyleRule(
        'border-radius',
        '15px'
      )
    })
  })
})
