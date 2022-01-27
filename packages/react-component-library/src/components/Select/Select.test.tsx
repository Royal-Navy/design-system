import React, { useState } from 'react'
import '@testing-library/jest-dom/extend-expect'
import {
  fireEvent,
  render,
  RenderResult,
  waitFor,
} from '@testing-library/react'
import { IconAnchor } from '@defencedigital/icon-library'
import userEvent from '@testing-library/user-event'

import { Select } from '.'
import { Button } from '../Button'

const options = [
  {
    badge: 'Badge 1',
    label: 'Option 1',
    value: '1',
  },
  {
    badge: 'Badge 2',
    label: 'Option 2',
    value: '2',
  },
]

describe('Select', () => {
  let wrapper: RenderResult
  let onChangeSpy: (event: any) => void

  describe('when provided with all props', () => {
    beforeEach(() => {
      onChangeSpy = jest.fn()

      wrapper = render(
        <Select
          className="rn-select--modifier"
          label="Select label"
          name="select-name"
          onChange={onChangeSpy}
          options={options}
          value="2"
        />
      )
    })

    it('should add the CSS modifier', () => {
      expect(wrapper.container.children[0].classList).toContain(
        'rn-select--modifier'
      )
    })

    it('should render the label', () => {
      expect(wrapper.getByText('Select label')).toBeInTheDocument()
    })

    it('should render the select with the selected value', () => {
      expect(
        wrapper.getByTestId('select-single-value-label')
      ).toHaveTextContent('Option 2')
    })

    it('should add the name', () => {
      const input = wrapper.getByTestId('react-select-vendor-input')

      expect(input.getAttribute('name')).toEqual('select-name')
    })

    describe('when the select is clicked', () => {
      beforeEach(() => {
        const input = wrapper.getByTestId('react-select-vendor-input')
        fireEvent.focus(input)
        fireEvent.keyDown(input, {
          key: 'ArrowDown',
          code: 40,
        })
      })

      it('should render two options', () => {
        expect(wrapper.getAllByTestId('select-option-label')).toHaveLength(2)
      })

      describe('when the first option is clicked', () => {
        beforeEach(() => {
          wrapper.getByText('Option 1').click()
        })

        it('should render a clear button', () => {
          const control = wrapper.container.children[0].children[1]
          const indicators = control.children[1]
          const firstIndicator = indicators.children[0]

          expect(firstIndicator.classList).toContain(
            'rn-select__clear-indicator'
          )
        })

        it('should render the select with the selected value', () => {
          return waitFor(() => {
            expect(
              wrapper.getByTestId('select-single-value-label')
            ).toHaveTextContent('Option 1')
          })
        })

        it('should call the `onChange` spy once', () => {
          expect(onChangeSpy).toHaveBeenCalledTimes(1)
          expect(onChangeSpy).toHaveBeenCalledWith({
            target: { name: 'select-name', value: '1' },
          })
        })
      })
    })
  })

  describe('when a downstream consumer provides a data-testid', () => {
    beforeEach(() => {
      wrapper = render(<Select options={options} data-testid="select-1" />)
    })

    it('should not find the input using the default `data-testid`', () => {
      expect(
        wrapper.queryAllByTestId('react-select-vendor-input')
      ).toHaveLength(0)
    })

    it('should find the input using the new `data-testid`', () => {
      expect(wrapper.getByTestId('select-1')).toBeInTheDocument()
    })
  })

  describe('when provided with options that have icons', () => {
    beforeEach(() => {
      onChangeSpy = jest.fn()

      const iconOptions = options.map((option) => ({
        ...option,
        icon: <IconAnchor data-testid="select-option-icon" />,
      }))

      wrapper = render(<Select label="Select label" options={iconOptions} />)

      const input = wrapper.getByTestId('react-select-vendor-input')
      fireEvent.focus(input)
      fireEvent.keyDown(input, {
        key: 'ArrowDown',
        code: 40,
      })
    })

    it('should render the icons', () => {
      expect(wrapper.getAllByTestId('select-option-icon')).toHaveLength(2)
    })
  })

  describe('when there is a clear button outside', () => {
    beforeEach(() => {
      const SelectWithOutsideClearButton: React.FC = () => {
        const [value, setValue] = useState<string>()
        const onChange = (event: any) => setValue(event.target.value)
        const onClick = () => setValue(null)

        return (
          <>
            <Select
              options={options}
              value={value}
              onChange={onChange}
              label="test"
            />
            <Button data-testid="clear-button" onClick={onClick}>
              Clear
            </Button>
          </>
        )
      }

      wrapper = render(<SelectWithOutsideClearButton />)
    })

    describe('and an option is selected', () => {
      beforeEach(async () => {
        const input = wrapper.getByTestId('react-select-vendor-input')
        fireEvent.focus(input)
        fireEvent.keyDown(input, {
          key: 'ArrowDown',
          code: 40,
        })

        wrapper.getByText('Option 1').click()
      })

      describe('and the `Clear` button is clicked', () => {
        beforeEach(() => {
          wrapper.getByTestId('clear-button').click()
        })

        it('should clear the select label', () => {
          return waitFor(() => {
            expect(
              wrapper.queryAllByTestId('select-single-value-label')
            ).toHaveLength(0)
          })
        })
      })
    })
  })

  describe('when `isClearable` is `false`', () => {
    beforeEach(() => {
      onChangeSpy = jest.fn()

      wrapper = render(
        <Select isClearable={false} onChange={onChangeSpy} options={options} />
      )
    })

    describe('when the select is clicked', () => {
      beforeEach(() => {
        const input = wrapper.getByTestId('react-select-vendor-input')
        fireEvent.focus(input)
        fireEvent.keyDown(input, {
          key: 'ArrowDown',
          code: 40,
        })
      })

      describe('when the first option is clicked', () => {
        beforeEach(() => {
          wrapper.getByText('Option 1').click()
        })

        it('should not render a clear button', () => {
          const control = wrapper.container.children[0].children[1]
          const indicators = control.children[1]
          const firstIndicator = indicators.children[0]

          expect(firstIndicator.classList).not.toContain(
            'rn-select__clear-indicator'
          )
        })
      })
    })
  })

  describe('when the options are updated externally', () => {
    beforeEach(() => {
      const initialOptions = options
      const updatedOptions = [
        {
          badge: 'Badge 2',
          label: 'Option 2',
          value: '2',
        },
        {
          badge: 'Badge 3',
          label: 'Option 3',
          value: '3',
        },
      ]

      const SelectWithUpdate = () => {
        const [selectOptions, updateSelectOptions] = useState(initialOptions)
        const [value, setValue] = useState('2')

        return (
          <>
            <Button
              onClick={() => {
                updateSelectOptions(updatedOptions)
                setValue('3')
              }}
            >
              Update
            </Button>
            <Select options={selectOptions} value={value} />
          </>
        )
      }

      wrapper = render(<SelectWithUpdate />)

      wrapper.getByText('Update').click()
    })

    it('should render the select with the selected value', () => {
      return waitFor(() => {
        expect(
          wrapper.getByTestId('select-single-value-label')
        ).toHaveTextContent('Option 3')
      })
    })
  })

  describe('when an option value is selected that overflows', () => {
    const label =
      'This is a really, really long select option label that overflows the container when selected'

    beforeEach(() => {
      wrapper = render(
        <Select
          options={[
            ...options,
            {
              label,
              value: 'foo',
            },
          ]}
        />
      )

      const input = wrapper.getByTestId('react-select-vendor-input')
      fireEvent.focus(input)
      fireEvent.keyDown(input, {
        key: 'ArrowDown',
        code: 40,
      })

      userEvent.click(wrapper.getByText(label))
    })

    describe('when the user hovers over the label', () => {
      beforeEach(() => {
        userEvent.hover(wrapper.getByText(label))
      })

      it('displays the Tooltip with the label content', () => {
        expect(wrapper.getByTestId('floating-box')).toBeInTheDocument()
        expect(wrapper.getByTestId('floating-box-content')).toHaveTextContent(
          label
        )
      })
    })
  })

  describe('when the optional `onChange` callback is not provided and the user selects an item', () => {
    beforeEach(() => {
      wrapper = render(
        <Select
          options={[
            ...options,
            {
              label: 'Foo',
              value: 'foo',
            },
          ]}
        />
      )

      const input = wrapper.getByTestId('react-select-vendor-input')
      fireEvent.focus(input)
      fireEvent.keyDown(input, {
        key: 'ArrowDown',
        code: 40,
      })
    })

    it('should not attempt to invoke the `onChange` callback', () => {
      expect(() => userEvent.click(wrapper.getByText('Foo'))).not.toThrow()
    })
  })
})
