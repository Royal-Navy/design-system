import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {
  fireEvent,
  render,
  RenderResult,
  waitFor,
} from '@testing-library/react'
import 'jest-styled-components'

import { DatePicker, DATEPICKER_PLACEMENT } from '.'

const NOW = '2019-12-05T11:00:00.000Z'

function click(element: HTMLElement) {
  fireEvent.mouseDown(element)
  fireEvent.click(element)
}

describe('DatePicker', () => {
  let wrapper: RenderResult
  let startDate: Date
  let label: string
  let onChange: (data: { startDate: Date; endDate: Date }) => void
  let onBlur: (e: React.FormEvent) => void
  let dateSpy: jest.SpyInstance
  let days: string[]
  let onSubmitSpy: (e: React.FormEvent) => void

  function assertInputButtonAria({
    ariaExpanded,
    ariaLabel,
  }: {
    ariaExpanded: string
    ariaLabel: string
  }) {
    it('updates the ARIA attributes on the input button', () => {
      const button = wrapper.getByTestId('datepicker-input-button')
      const dayPickerId = wrapper
        .getByTestId('floating-box-content')
        .getAttribute('id')

      expect(button).toHaveAttribute('aria-expanded', ariaExpanded)
      expect(button).toHaveAttribute('aria-label', ariaLabel)
      expect(button).toHaveAttribute('aria-owns', dayPickerId)
    })
  }

  beforeAll(() => {
    dateSpy = jest
      .spyOn(Date, 'now')
      .mockImplementation(() => new Date(NOW).valueOf())

    function leadingZero(n: number): string {
      return n > 9 ? `${n}` : `0${n}`
    }

    days = new Array(31).map((i) => leadingZero(i + 1)) // [01, 02, ..., 31]
  })

  afterAll(() => {
    dateSpy.mockRestore()
  })

  describe('default props', () => {
    beforeEach(() => {
      startDate = new Date(2019, 11, 1)
      onChange = jest.fn()
      onBlur = jest.fn()

      wrapper = render(
        <>
          <DatePicker
            startDate={startDate}
            placement={DATEPICKER_PLACEMENT.BELOW}
            onChange={onChange}
            onBlur={onBlur}
          />
          <div data-testid="datepicker-outside" />
        </>
      )
    })

    it('applies the `aria-label` to the input', () => {
      expect(wrapper.getByTestId('datepicker-input')).toHaveAttribute(
        'aria-label',
        'Choose date'
      )
    })

    assertInputButtonAria({
      ariaExpanded: 'false',
      ariaLabel: 'Show day picker',
    })

    it('should set the `role` attribute for the Day buttons', () => {
      days.forEach((_, index) => {
        expect(
          wrapper.getByTestId(`datepicker-day-${index + 1}`)
        ).toHaveAttribute('role', 'option')
      })
    })

    it('should set the `aria-selected` attribute for the day buttons', () => {
      days.forEach((_, index) => {
        expect(
          wrapper.getByTestId(`datepicker-day-${index + 1}`)
        ).toHaveAttribute('aria-selected', 'false')
      })
    })

    it('renders the component', () => {
      expect(wrapper.queryByTestId('datepicker-wrapper')).toBeInTheDocument()
    })

    it('renders the correct sequence of days', () => {
      days.forEach((day) => {
        expect(
          wrapper.queryByTestId(`datepicker-day-${day}`)
        ).toBeInTheDocument()
      })
    })

    describe('when the end user clicks the open close button', () => {
      beforeEach(() => {
        wrapper.getByTestId('datepicker-input-button').click()
      })

      assertInputButtonAria({
        ariaExpanded: 'true',
        ariaLabel: 'Hide day picker',
      })

      it('displays the container', () => {
        return waitFor(() => {
          expect(wrapper.getByTestId('floating-box')).toBeVisible()
        })
      })

      describe('and the user clicks it again', () => {
        beforeEach(() => {
          wrapper.getByTestId('datepicker-input-button').click()
        })

        assertInputButtonAria({
          ariaExpanded: 'false',
          ariaLabel: 'Show day picker',
        })

        it('hides the container', () => {
          return waitFor(() => {
            expect(wrapper.getByTestId('floating-box')).toHaveStyleRule(
              'opacity',
              '0'
            )
          })
        })
      })
    })

    describe('when the end user focuses on the Input', () => {
      beforeEach(() => {
        wrapper.getByTestId('datepicker-input').focus()
      })

      it('shows the month', () => {
        expect(wrapper.queryByText('December 2019')).toBeInTheDocument()
      })

      it('displays the container', () => {
        return waitFor(() => {
          expect(wrapper.getByTestId('floating-box')).toBeVisible()
        })
      })

      describe('and clicks on a day', () => {
        beforeEach(() => {
          click(wrapper.getByText('31'))
        })

        it('set the value of the component to this date', () => {
          expect(
            wrapper.getByTestId('datepicker-input').getAttribute('value')
          ).toBe('31/12/2019')
        })

        it('invokes the onChange callback', () => {
          expect(onChange).toHaveBeenCalledTimes(1)
          expect(onChange).toHaveBeenCalledWith({
            startDate: new Date('2019-12-31T12:00:00.000Z'),
            endDate: new Date('2019-12-31T12:00:00.000Z'),
          })
        })

        it('does not hide the container', () => {
          expect(wrapper.getByTestId('floating-box')).toBeVisible()
        })
      })

      describe('and clicks outside the date picker', () => {
        beforeEach(() => {
          fireEvent.mouseDown(wrapper.getByTestId('datepicker-outside'))
        })

        it('hides the container', () => {
          return waitFor(() => {
            expect(wrapper.getByTestId('floating-box')).toHaveStyleRule(
              'opacity',
              '0'
            )
          })
        })
      })
    })
  })

  describe('when a custom label is provided', () => {
    beforeEach(() => {
      label = 'Custom Label'

      wrapper = render(
        <DatePicker label={label} placement={DATEPICKER_PLACEMENT.BELOW} />
      )
    })

    it('renders that label accordingly', () => {
      expect(wrapper.getByTestId('datepicker-label').innerHTML).toBe(label)
    })
  })

  describe('when isDisabled prop is provided', () => {
    beforeEach(() => {
      wrapper = render(
        <DatePicker placement={DATEPICKER_PLACEMENT.BELOW} isDisabled />
      )
    })

    it('applies the cursor not-allowed style rule', () => {
      expect(wrapper.getByTestId('datepicker-input-wrapper')).toHaveStyleRule(
        'cursor',
        'not-allowed'
      )
    })

    it('applies the disabled attribute to the input', () => {
      expect(wrapper.getByTestId('datepicker-input')).toHaveAttribute(
        'disabled'
      )
    })
  })

  describe('when selecting a date range', () => {
    beforeEach(() => {
      onChange = jest.fn()
      wrapper = render(
        <DatePicker
          startDate={new Date(2019, 11, 10)}
          placement={DATEPICKER_PLACEMENT.BELOW}
          onChange={onChange}
          isRange
        />
      )
    })

    describe('when the end user focuses on the Input', () => {
      beforeEach(() => {
        wrapper.getByTestId('datepicker-input').focus()
      })

      describe('and clicks on a day in the first month', () => {
        beforeEach(() => {
          click(wrapper.getAllByText('31')[0])
        })

        it('set the value of the component to this date', () => {
          expect(
            wrapper.getByTestId('datepicker-input').getAttribute('value')
          ).toBe('10/12/2019 - 31/12/2019')
        })

        it('invokes the onChange callback', () => {
          expect(onChange).toHaveBeenCalledTimes(1)
          expect(onChange).toHaveBeenCalledWith({
            startDate: new Date('2019-12-10T00:00:00.000Z'),
            endDate: new Date('2019-12-31T12:00:00.000Z'),
          })
        })
      })

      describe('and clicks on days in the second month', () => {
        beforeEach(() => {
          click(wrapper.getAllByText('20')[1])
        })

        it('set the value of the component to this date', () => {
          expect(
            wrapper.getByTestId('datepicker-input').getAttribute('value')
          ).toBe('10/12/2019 - 20/01/2020')
        })

        it('invokes the onChange callback', () => {
          expect(onChange).toHaveBeenCalledTimes(1)
          expect(onChange).toHaveBeenCalledWith({
            startDate: new Date('2019-12-10T00:00:00.000Z'),
            endDate: new Date('2020-01-20T12:00:00.000Z'),
          })
        })

        describe('and clicks on another day', () => {
          beforeEach(() => {
            click(wrapper.getAllByText('3')[0])
          })

          it('reset the value of the component to this date', () => {
            expect(
              wrapper.getByTestId('datepicker-input').getAttribute('value')
            ).toBe('03/12/2019')
          })

          it('invokes the onChange callback', () => {
            expect(onChange).toHaveBeenCalledTimes(2)
            expect(onChange).toHaveBeenCalledWith({
              startDate: new Date('2019-12-03T12:00:00.000Z'),
              endDate: undefined,
            })
          })
        })
      })

      describe('and clicks on a less than the first', () => {
        beforeEach(() => {
          click(wrapper.getAllByText('9')[0])
        })

        it('reset the value of the component to this date', () => {
          expect(
            wrapper.getByTestId('datepicker-input').getAttribute('value')
          ).toBe('09/12/2019')
        })

        it('invokes the onChange callback', () => {
          expect(onChange).toHaveBeenCalledTimes(1)
          expect(onChange).toHaveBeenCalledWith({
            startDate: new Date('2019-12-09T12:00:00.000Z'),
            endDate: undefined,
          })
        })
      })
    })
  })

  describe('when the isOpen prop is provided', () => {
    beforeEach(() => {
      wrapper = render(<DatePicker isOpen />)
    })

    it('displays the picker as open on initial render', () => {
      expect(wrapper.getByTestId('floating-box')).toBeVisible()
    })
  })

  describe('when the DatePicker is nested within a form', () => {
    beforeEach(() => {
      onSubmitSpy = jest.fn()
      wrapper = render(
        <form onSubmit={onSubmitSpy}>
          <DatePicker />
        </form>
      )
    })

    describe('and the open/close button is clicked', () => {
      beforeEach(() => {
        wrapper.getByTestId('datepicker-input-button').click()
      })

      it('does not submit the form', () => {
        expect(onSubmitSpy).not.toHaveBeenCalled()
      })
    })
  })

  describe('when the `disabled` prop is provided', () => {
    beforeEach(() => {
      wrapper = render(<DatePicker isDisabled />)
    })

    it('sets the disabled attribute correctly for the input', () => {
      expect(wrapper.getByTestId('datepicker-input')).toHaveAttribute(
        'disabled'
      )
    })
  })

  describe('when the `disabledDays` prop is provided', () => {
    beforeEach(() => {
      onChange = jest.fn()

      wrapper = render(
        <DatePicker
          isOpen
          onChange={onChange}
          startDate={new Date(2020, 3, 1)}
          disabledDays={[new Date(2020, 3, 12)]}
        />
      )
    })

    it('applies the disabled modifier class to the correct days', () => {
      expect(wrapper.getByText('12')).toHaveClass('DayPicker-Day--disabled')
    })

    describe('and a disabled day is clicked', () => {
      beforeEach(() => {
        click(wrapper.getByText('12'))
      })

      it('does not set the picker to that day', () => {
        expect(onChange).not.toHaveBeenCalled()
      })
    })
  })

  describe('when the `initialMonth` prop is provided and no `startDate`', () => {
    beforeEach(() => {
      wrapper = render(<DatePicker isOpen initialMonth={new Date(2020, 1)} />)
    })

    it('displays the correct month initially', () => {
      expect(wrapper.queryByText('February 2020')).toBeInTheDocument()
    })

    it('does not set a startDate', () => {
      expect(wrapper.getByTestId('datepicker-input')).toHaveAttribute(
        'value',
        ''
      )
    })
  })

  describe('when arbitrary props are provided', () => {
    beforeEach(() => {
      wrapper = render(<DatePicker data-arbitrary="arbitrary" />)
    })

    it('sets the disabled attribute correctly for the input', () => {
      expect(wrapper.getByTestId('datepicker-input')).toHaveAttribute(
        'data-arbitrary',
        'arbitrary'
      )
    })
  })
})
