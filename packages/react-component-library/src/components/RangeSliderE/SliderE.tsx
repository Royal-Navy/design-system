import React, { useCallback, useState } from 'react'
import {
  SliderProps,
  CustomMode,
  Rail,
  Handles,
  Tracks,
  Ticks,
} from 'react-compound-slider'

import {
  HandleE,
  RangeSliderEValueFormatter,
  TrackE,
  ThresholdTrackE,
  TickE,
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

export interface RangeSliderEProps extends Omit<SliderProps, SliderOmitType> {
  /**
   * Two element array of numbers providing the min and max values for the slider [min, max] e.g. [0, 100].
   * It does not matter if the slider is reversed on the screen, domain is always [min, max] with min < max.
   */
  domain?: ReadonlyArray<number>
  /**
   * An array of numbers. You can supply one for a value slider, two for a range slider or more to create n-handled sliders.
   * The values should correspond to valid step values in the domain.
   * The numbers will be forced into the domain if they are two small or large.
   */
  values: ReadonlyArray<number>
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
   * Toggles whether to display colored tracks to the left of the handle.
   */
  tracksLeft?: boolean
  /**
   * Toggles whether to display colored tracks to the right of the handle.
   */
  tracksRight?: boolean
  /**
   * The number of tickets to display along the slider track.
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
   * Toggles whether to display percentage values alongside the draggable handles.
   */
  hasPercentage?: boolean
  /**
   * Toggles whether to display unit values alongside the draggable handles.
   */
  displayUnit?: string
  /**
   * Optional custom value formatter function.
   */
  formatValue?: RangeSliderEValueFormatter
}

export const RangeSliderE: React.FC<RangeSliderEProps> = ({
  domain,
  step,
  hasLabels,
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
  hasPercentage,
  displayUnit = '',
  formatValue,
  mode,
  onSlideStart,
  onSlideEnd,
  ...rest
}) => {
  const [sliderValues, setSliderValues] = useState(values)

  const onUpdateHandler = useCallback(
    (newValues: ReadonlyArray<number>): void => {
      setSliderValues(newValues)

      if (onUpdate) {
        onUpdate(newValues)
      }
    },
    [onUpdate, setSliderValues]
  )

  const formatValueDefault: RangeSliderEValueFormatter = useCallback(
    ({ value }) => `${Math.floor(value)}${displayUnit}`,
    [displayUnit]
  )

  return (
    <StyledRangeSlider
      $isReversed={isReversed}
      $isDisabled={isDisabled}
      $hasPercentage={hasPercentage}
      data-testid="rangeslider"
      {...rest}
    >
      {IconLeft && (
        <StyledIconLeft aria-hidden data-testid="rangeslider-icon-left">
          <IconLeft />
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
              <StyledRailInner />
            </StyledRail>
          )}
        </Rail>
        <Handles>
          {({ activeHandleID, handles, getHandleProps }) => (
            <div>
              {handles.map((handle) => (
                <HandleE
                  key={handle.id}
                  handle={handle}
                  domain={domain}
                  activeHandleID={activeHandleID}
                  getHandleProps={getHandleProps}
                  formatValue={formatValue ?? formatValueDefault}
                  thresholds={thresholds}
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
                    <ThresholdTrackE
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
                  <TrackE
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
        {tickCount && (
          <Ticks count={tickCount}>
            {({ ticks }) => (
              <StyledTicks>
                {ticks.map((tick) => (
                  <TickE
                    key={tick.id}
                    tick={tick}
                    count={ticks.length}
                    hasLabels={hasLabels}
                    values={sliderValues}
                    domain={domain}
                    isReversed={isReversed}
                    thresholds={thresholds}
                  />
                ))}
              </StyledTicks>
            )}
          </Ticks>
        )}
      </StyledSlider>
      {IconRight && (
        <StyledIconRight aria-hidden data-testid="rangeslider-icon-right">
          <IconRight />
        </StyledIconRight>
      )}
    </StyledRangeSlider>
  )
}

RangeSliderE.displayName = 'RangeSliderE'
