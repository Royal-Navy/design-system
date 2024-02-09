import React, { useCallback, useState, createRef } from 'react'
import intersection from 'lodash/intersection'
import {
  SliderProps,
  CustomMode,
  Rail,
  Handles,
  Tracks,
  Ticks,
} from 'react-compound-slider'

import {
  Handle,
  RangeSliderValueFormatter,
  Track,
  ThresholdTrack,
  ThresholdRail,
  Tick,
} from '.'
import { StyledSlider } from './partials/StyledSlider'
import { StyledIconLeft } from './partials/StyledIconLeft'
import { StyledIconRight } from './partials/StyledIconRight'
import { StyledRangeSlider } from './partials/StyledRangeSlider'
import { StyledRail } from './partials/StyledRail'
import { StyledRailInner } from './partials/StyledRailInner'
import { StyledTicks } from './partials/StyledTicks'

type SliderOmitType =
  | 'children'
  | 'disabled'
  | 'reversed'
  | 'vertical'
  | 'domain'
  | 'values'
  | 'mode'
  | 'step'

type SliderModeType = 1 | 2 | 3 | CustomMode

export interface RangeSliderProps extends Omit<SliderProps, SliderOmitType> {
  /**
   * Two element array of numbers providing the min and max values for the slider [min, max] e.g. [0, 100].
   * It does not matter if the slider is reversed on the screen, domain is always [min, max] with min < max.
   */
  domain: readonly [number, number]
  /**
   * An array of numbers. You can supply one for a value slider, two for a range slider.
   * The values should correspond to valid step values in the domain.
   * The numbers will be forced into the domain if they are two small or large.
   */
  values: readonly [number] | readonly [number, number]
  /**
   * The step value for the slider.
   */
  step?: number
  /**
   * The interaction mode. Value of 1 will allow handles to cross each other.
   * Value of 2 will keep the sliders from crossing and separated by a step.
   * Value of 3 will make the handles pushable and keep them a step apart.
   * You can also supply a function that will be passed the current values and the incoming update. Your function should return what the state should be set as.
   */
  mode?: SliderModeType
  /**
   * Toggles whether or not to display labels below the slider.
   */
  hasLabels?: boolean
  /**
   * Toggles whether or not to display value markers along the slider.
   */
  hasMarkers?: boolean
  /**
   * Toggles whether to display colored tracks to the left of the handle.
   */
  tracksLeft?: boolean
  /**
   * Toggles whether to display colored tracks to the right of the handle.
   */
  tracksRight?: boolean
  /**
   * The number of Tickts to display along the slider track.
   */
  tickCount?: number
  /**
   * Optional JSX icon element to display to the left of the component.
   */
  IconLeft?: React.ElementType
  /**
   * Optional JSX icon element to display to the right of the component.
   */
  IconRight?: React.ElementType
  /**
   * Toggles whether the component is disabled or not (preventing user interaction).
   */
  isDisabled?: boolean
  /**
   * Toggles whether to reverse the scale of the slider.
   */
  isReversed?: boolean
  /**
   * Optional numeric array of thresholds to display on the slider bar (up to 2).
   */
  thresholds?: number[]
  /**
   * Toggles whether to display unit values alongside the draggable handles.
   */
  displayUnit?: string
  /**
   * Optional custom value formatter function.
   */
  formatValue?: RangeSliderValueFormatter
}

export const RangeSlider = ({
  domain,
  step,
  hasLabels,
  hasMarkers,
  tracksLeft = false,
  tracksRight = false,
  tickCount = 10,
  IconLeft,
  IconRight,
  isReversed,
  isDisabled,
  values,
  onChange,
  onUpdate,
  thresholds,
  displayUnit = '',
  formatValue,
  mode,
  onSlideStart,
  onSlideEnd,
  ...rest
}: RangeSliderProps) => {
  const [sliderValues, setSliderValues] =
    useState<ReadonlyArray<number>>(values)
  const handleRefs = values.map(() => createRef<HTMLDivElement>())

  const focusHandle = useCallback(
    (newValues: ReadonlyArray<number>): void => {
      const staticValues = intersection(sliderValues, newValues)

      // Single handle
      if (sliderValues.length === 1) {
        handleRefs[0].current?.focus()
      }

      // Multiple handles
      if (sliderValues.length === 2 && staticValues.length === 1) {
        const refId = sliderValues.indexOf(staticValues[0]) === 1 ? 0 : 1
        handleRefs[refId].current?.focus()
      }
    },
    [sliderValues, handleRefs]
  )

  const onUpdateHandler = useCallback(
    (newValues: ReadonlyArray<number>): void => {
      focusHandle(newValues)
      setSliderValues(newValues)

      if (onUpdate) {
        onUpdate(newValues)
      }
    },
    [onUpdate, setSliderValues, focusHandle]
  )

  const formatValueDefault: RangeSliderValueFormatter = useCallback(
    ({ value }) => `${Math.floor(value)}${displayUnit}`,
    [displayUnit]
  )

  return (
    <StyledRangeSlider
      $isReversed={isReversed}
      $isDisabled={isDisabled}
      data-testid="rangeslider"
      {...rest}
    >
      {IconLeft && (
        <StyledIconLeft aria-hidden data-testid="rangeslider-icon-left">
          <IconLeft size={22} />
        </StyledIconLeft>
      )}
      <StyledSlider
        domain={domain}
        reversed={isReversed}
        disabled={isDisabled}
        values={values}
        step={step}
        mode={mode}
        onChange={onChange}
        onUpdate={onUpdateHandler}
        onSlideStart={onSlideStart}
        onSlideEnd={onSlideEnd}
        data-testid="rangeslider-slider"
      >
        <Rail>
          {({ getRailProps }) => (
            <StyledRail {...getRailProps()} data-testid="rangeslider-rail">
              <StyledRailInner>
                {thresholds && <ThresholdRail thresholds={thresholds} />}
              </StyledRailInner>
            </StyledRail>
          )}
        </Rail>
        <Handles>
          {({ handles, getHandleProps }) => (
            <div>
              {handles.map((handle, index) => (
                <Handle
                  ref={handleRefs[index]}
                  key={handle.id}
                  handle={handle}
                  domain={domain}
                  getHandleProps={getHandleProps}
                  formatValue={formatValue ?? formatValueDefault}
                />
              ))}
            </div>
          )}
        </Handles>
        <Tracks left={tracksLeft} right={tracksRight}>
          {({ tracks, getTrackProps }) => (
            <div>
              {tracks.map(({ id, source, target }) => {
                if (thresholds) {
                  return (
                    <ThresholdTrack
                      id={id}
                      key={id}
                      source={source}
                      target={target}
                      getTrackProps={getTrackProps}
                      thresholds={thresholds}
                    />
                  )
                }

                return (
                  <Track
                    id={id}
                    key={id}
                    source={source}
                    target={target}
                    getTrackProps={getTrackProps}
                  />
                )
              })}
            </div>
          )}
        </Tracks>
        {!!tickCount && (
          <Ticks count={tickCount}>
            {({ ticks }) => (
              <StyledTicks>
                {ticks.map((tick) => (
                  <Tick
                    key={tick.id}
                    tick={tick}
                    count={ticks.length}
                    hasMarkers={hasMarkers}
                    hasLabels={hasLabels}
                    values={sliderValues}
                    domain={domain}
                    isReversed={isReversed}
                    thresholds={thresholds}
                    tracksLeft={tracksLeft}
                    tracksRight={tracksRight}
                  />
                ))}
              </StyledTicks>
            )}
          </Ticks>
        )}
      </StyledSlider>
      {IconRight && (
        <StyledIconRight aria-hidden data-testid="rangeslider-icon-right">
          <IconRight size={22} />
        </StyledIconRight>
      )}
    </StyledRangeSlider>
  )
}

RangeSlider.displayName = 'RangeSlider'
