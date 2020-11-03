import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult, fireEvent } from '@testing-library/react'
import 'jest-styled-components'
import userEvent from '@testing-library/user-event'

import { IconBrightnessLow, IconBrightnessHigh } from '@royalnavy/icon-library'
import { RangeSlider } from '.'

describe('RangeSlider', () => {
  let wrapper: RenderResult
  let mode: number
  let onUpdateSpy: (values: readonly number[]) => void
  let domain: number[] // lower and upper bounds
  let values: number[] // initial handle values
  let step: number
  let tickCount: number

  describe('single handle, unstepped, with callbacks', () => {
    beforeEach(() => {
      mode = 1
      onUpdateSpy = jest.fn()
      domain = [0, 40]
      values = [20]
      step = 10
      tickCount = 4

      wrapper = render(
        <RangeSlider
          mode={mode}
          domain={domain}
          values={values}
          step={step}
          tickCount={tickCount}
          onUpdate={onUpdateSpy}
        />
      )
    })

    it('should set the correct `tabindex`', () => {
      expect(wrapper.getByTestId('rangeslider-handle')).toHaveAttribute(
        'tabindex',
        '0'
      )
    })

    it('should render the ticks', () => {
      expect(wrapper.getAllByTestId('rangeslider-tick')).toHaveLength(5)
    })

    it('should render a single handle', () => {
      expect(wrapper.queryAllByTestId('rangeslider-handle')).toHaveLength(1)
    })

    it('should set the ARIA attributes on the handle', () => {
      const handle = wrapper.getByTestId('rangeslider-handle')

      expect(handle).toHaveAttribute('role', 'slider')
      expect(handle).toHaveAttribute('aria-label', 'Select range')
      expect(handle).toHaveAttribute('aria-valuemin', '0')
      expect(handle).toHaveAttribute('aria-valuemax', '40')
      expect(handle).toHaveAttribute('aria-valuenow', '20')
    })

    it('should render correct number of ticks', () => {
      expect(wrapper.queryAllByTestId('rangeslider-tick')).toHaveLength(5)
    })

    it('should not render any tracks', () => {
      expect(wrapper.queryAllByTestId('rangeslider-track')).toHaveLength(0)
    })

    it('should not render any labels', () => {
      expect(wrapper.queryAllByTestId('rangeslider-label')).toHaveLength(0)
    })

    describe('and the end user moves the handle to the right using keyboard', () => {
      beforeEach(() => {
        userEvent.click(wrapper.getByTestId('rangeslider-handle'))

        fireEvent.keyDown(wrapper.getByTestId('rangeslider-handle'), {
          key: 'ArrowRight',
          code: 39,
        })
      })

      it('should update the `aria-valuenow` attribute on the handle', () => {
        expect(wrapper.getByTestId('rangeslider-handle')).toHaveAttribute(
          'aria-valuenow',
          '30'
        )
      })

      it('invokes the onUpdateSpy callback', () => {
        expect(onUpdateSpy).toHaveBeenCalled()
      })
    })
  })

  describe('single threshold', () => {
    beforeEach(() => {
      wrapper = render(
        <RangeSlider
          mode={mode}
          domain={domain}
          values={values}
          tracksLeft
          thresholds={[10]}
        />
      )
    })

    it('renders the correct track chunks', () => {
      expect(
        wrapper.queryByTestId('rangeslider-chunk-below-first-threshold')
      ).toBeInTheDocument()
    })
  })

  describe('double threshold', () => {
    beforeEach(() => {
      wrapper = render(
        <RangeSlider
          mode={mode}
          domain={domain}
          values={values}
          tracksLeft
          thresholds={[10, 15]}
        />
      )
    })

    it('renders the correct track chunks', () => {
      expect(
        wrapper.queryByTestId('rangeslider-chunk-below-first-threshold')
      ).toBeInTheDocument()
      expect(
        wrapper.queryByTestId('rangeslider-chunk-between-thresholds')
      ).toBeInTheDocument()
    })
  })

  describe('disabled', () => {
    beforeEach(() => {
      wrapper = render(
        <RangeSlider
          mode={mode}
          domain={domain}
          values={values}
          step={step}
          isDisabled
        />
      )
    })

    it('should apply the cursor `not-allowed` CSS property', () => {
      expect(wrapper.queryByTestId('rangeslider')).toHaveStyleRule(
        'cursor',
        'not-allowed'
      )
    })

    describe('and the user attempts to move the slider', () => {
      beforeEach(() => {
        userEvent.click(wrapper.getByTestId('rangeslider-handle'))

        fireEvent.keyDown(wrapper.getByTestId('rangeslider-handle'), {
          key: 'ArrowRight',
          code: 39,
        })
      })

      it('does not move', () => {
        expect(wrapper.getByTestId('rangeslider-handle')).toHaveAttribute(
          'aria-valuenow',
          '20'
        )
      })
    })
  })

  describe('includes user defined left and right icons', () => {
    beforeEach(() => {
      wrapper = render(
        <RangeSlider
          mode={mode}
          domain={domain}
          values={values}
          step={step}
          IconLeft={IconBrightnessLow}
          IconRight={IconBrightnessHigh}
        />
      )
    })

    it('should render the Icon component left of the slider', () => {
      expect(wrapper.queryByTestId('rangeslider-icon-left')).not.toBeNull()
    })

    it('should set the `aria-hidden` attribute to `true` for the left icon', () => {
      expect(wrapper.queryByTestId('rangeslider-icon-left')).toHaveAttribute(
        'aria-hidden',
        'true'
      )
    })

    it('should render the Icon component right of the slider', () => {
      expect(wrapper.queryByTestId('rangeslider-icon-right')).not.toBeNull()
    })

    it('should set the `aria-hidden` attribute to `true` for the right icon', () => {
      expect(wrapper.queryByTestId('rangeslider-icon-right')).toHaveAttribute(
        'aria-hidden',
        'true'
      )
    })
  })

  describe('multiple handles', () => {
    beforeEach(() => {
      values = [10, 20, 30]

      wrapper = render(
        <RangeSlider
          mode={mode}
          domain={domain}
          values={values}
          step={step}
          isReversed
        />
      )
    })

    it('should render two handles', () => {
      expect(wrapper.queryAllByTestId('rangeslider-handle')).toHaveLength(3)
    })
  })

  describe('when the `hasPercentage` prop is provided', () => {
    beforeEach(() => {
      wrapper = render(
        <RangeSlider
          domain={[0, 40]}
          mode={1}
          values={[20]}
          tracksLeft
          tickCount={4}
          thresholds={[40, 60]}
          hasPercentage
        />
      )
    })

    it('should display the percentage value next to the handle', () => {
      expect(wrapper.getByTestId('rangeslider-handle')).toHaveAttribute(
        'data-percent',
        '50%'
      )
    })
  })

  describe('when the `displayUnit` prop is provided', () => {
    beforeEach(() => {
      wrapper = render(
        <RangeSlider
          domain={[0, 40]}
          mode={1}
          values={[20]}
          tracksLeft
          tickCount={4}
          thresholds={[40, 60]}
          displayUnit="pt"
        />
      )
    })

    it('should append the display unit to the handle label', () => {
      expect(wrapper.getByTestId('rangeslider-handle')).toHaveAttribute(
        'data-value',
        '20pt'
      )
    })
  })

  describe('when the `formatValue` prop is provided', () => {
    beforeEach(() => {
      wrapper = render(
        <RangeSlider
          domain={[0, 40]}
          mode={1}
          values={[20]}
          tracksLeft
          tickCount={4}
          thresholds={[40, 60]}
          formatValue={({ value }) => `£${value}`}
        />
      )
    })

    it('formats the handle label using the provided formatter', () => {
      expect(wrapper.getByTestId('rangeslider-handle')).toHaveAttribute(
        'data-value',
        '£20'
      )
    })
  })

  describe('without the `onUpdate` callback', () => {
    beforeEach(() => {
      wrapper = render(
        <RangeSlider mode={mode} domain={domain} values={values} step={step} />
      )
    })

    describe('and the end user moves the handle to the right using keyboard', () => {
      it('does not throw an error', () => {
        expect(() => {
          fireEvent(
            wrapper.getByTestId('rangeslider-handle'),
            new MouseEvent('click', {
              bubbles: true,
              cancelable: true,
            })
          )

          fireEvent.keyDown(wrapper.getByTestId('rangeslider-handle'), {
            key: 'ArrowRight',
            code: 39,
          })
        }).not.toThrow(TypeError)
      })
    })
  })
})
