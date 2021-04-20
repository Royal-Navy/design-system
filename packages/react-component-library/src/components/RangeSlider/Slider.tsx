import React, { useCallback, useState } from 'react'
import {
  SliderProps,
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
  Tick,
} from '.'
import { StyledSlider } from './partials/StyledSlider'
import { StyledIconLeft } from './partials/StyledIconLeft'
import { StyledIconRight } from './partials/StyledIconRight'
import { StyledRangeSlider } from './partials/StyledRangeSlider'
import { StyledRail } from './partials/StyledRail'
import { StyledRailInner } from './partials/StyledRailInner'
import { StyledTicks } from './partials/StyledTicks'

export interface RangeSliderProps
  extends Omit<SliderProps, 'children' | 'disabled' | 'reversed' | 'vertical'> {
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
  formatValue?: RangeSliderValueFormatter
}

export const RangeSlider: React.FC<RangeSliderProps> = ({
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

  const formatValueDefault: RangeSliderValueFormatter = useCallback(
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
            <StyledRail>
              <StyledRailInner {...getRailProps()} />
            </StyledRail>
          )}
        </Rail>
        <Handles>
          {({ activeHandleID, handles, getHandleProps }) => (
            <div>
              {handles.map((handle) => (
                <Handle
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
        {tickCount && (
          <Ticks count={tickCount}>
            {({ ticks }) => (
              <StyledTicks>
                {ticks.map((tick) => (
                  <Tick
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

RangeSlider.displayName = 'RangeSlider'
