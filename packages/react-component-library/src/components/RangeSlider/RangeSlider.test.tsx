import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult, fireEvent } from '@testing-library/react'

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

    it('should render the ticks', () => {
      expect(wrapper.getAllByTestId('rangeslider-tick')).toHaveLength(5)
    })

    it('should render a single handle', () => {
      expect(wrapper.queryAllByTestId('rangeslider-handle').length).toBe(1)
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
      expect(wrapper.queryAllByTestId('rangeslider-tick').length).toBe(5)
    })

    it('should not render any tracks', () => {
      expect(wrapper.queryAllByTestId('rangeslider-track').length).toBe(0)
    })

    it('should not render any labels', () => {
      expect(wrapper.queryAllByTestId('rangeslider-label').length).toBe(0)
    })

    describe('and the end user moves the handle to the right using keyboard', () => {
      beforeEach(() => {
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
      })

      it('should update the `aria-valuenow` attribute on the handle', () => {
        const handle = wrapper.getByTestId('rangeslider-handle')

        expect(handle).toHaveAttribute('aria-valuenow', '30')
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

    it('should apply the stateful `is-disabled` class', () => {
      expect(wrapper.queryByTestId('rangeslider').classList).toContain(
        'is-disabled'
      )
    })
  })

  describe('reversed', () => {
    beforeEach(() => {
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

    it('should apply the stateful `is-reversed` class', () => {
      expect(wrapper.queryByTestId('rangeslider').classList).toContain(
        'is-reversed'
      )
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
      expect(wrapper.queryAllByTestId('rangeslider-handle').length).toBe(3)
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
})
