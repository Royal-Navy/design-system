import React, { useCallback, useState } from 'react'
import styled, { css } from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'
import {
  Slider,
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
import { RANGE_SLIDER_BG_COLOR } from './constants'

export interface RangeSliderProps
  extends Omit<SliderProps, 'children' | 'disabled' | 'reversed'> {
  hasLabels?: boolean
  tracksLeft?: boolean
  tracksRight?: boolean
  tickCount?: number
  IconLeft?: React.ElementType
  IconRight?: React.ElementType
  isDisabled?: boolean
  isReversed?: boolean
  thresholds?: number[]
  hasPercentage?: boolean
  displayUnit?: string
  formatValue?: RangeSliderValueFormatter
}

interface StyledRangeSliderProps {
  $isReversed?: boolean
  $isDisabled?: boolean
  $hasPercentage?: boolean
}

const { color, spacing } = selectors

const StyledTicks = styled.div`
  div:first-of-type,
  div:last-of-type {
    div {
      height: 16px;
    }
  }
`

const StyledRailInner = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;
  height: 2px;
  transform: translateY(-50%);
  background-color: ${RANGE_SLIDER_BG_COLOR};
  pointer-events: none;
`

const StyledRail = styled.div`
  position: absolute;
  top: calc(50% + 20px);
  left: 0;
  display: inline-block;
  width: 100%;
  height: 40px;
  transform: translateY(-100%);
`

const StyledRangeSlider = styled.div<StyledRangeSliderProps>`
  display: inline-flex;
  align-items: center;
  width: 100%;

  > div {
    position: relative;
    width: 100%;
    height: 40px;
    padding-top: 20px;
  }

  ${({ $isDisabled }) =>
    $isDisabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;

      * {
        cursor: not-allowed;
      }
    `}
`

export const RangeSlider: React.FC<RangeSliderProps> = ({
  className,
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
  onUpdate,
  thresholds,
  hasPercentage,
  displayUnit = '',
  formatValue,
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

  const StyledIconLeft = IconLeft
    ? styled(IconLeft)`
        color: ${color('neutral', '400')};
        overflow: visible;
        margin-right: ${spacing('2')};
      `
    : undefined

  const StyledIconRight = IconRight
    ? styled(IconRight)`
        color: ${color('neutral', '400')};
        overflow: visible;
        margin-left: ${spacing('2')};
      `
    : undefined

  return (
    <StyledRangeSlider
      className={className}
      $isReversed={isReversed}
      $isDisabled={isDisabled}
      $hasPercentage={hasPercentage}
      data-testid="rangeslider"
    >
      {IconLeft && (
        <StyledIconLeft aria-hidden data-testid="rangeslider-icon-left" />
      )}
      <Slider
        domain={domain}
        reversed={isReversed}
        disabled={isDisabled}
        values={values}
        step={step}
        onUpdate={onUpdateHandler}
        {...rest}
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
      </Slider>
      {IconRight && (
        <StyledIconRight aria-hidden data-testid="rangeslider-icon-right" />
      )}
    </StyledRangeSlider>
  )
}

RangeSlider.displayName = 'RangeSlider'
