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

    it('should render a single handle', () => {
      expect(wrapper.queryAllByTestId('rangeslider-handle').length).toBe(1)
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

    it('should render the Icon component right of the slider', () => {
      expect(wrapper.queryByTestId('rangeslider-icon-right')).not.toBeNull()
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
})
