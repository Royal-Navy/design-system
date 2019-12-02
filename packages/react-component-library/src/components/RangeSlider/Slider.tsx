import React, { useState } from 'react'
import classNames from 'classnames'

import {
  Slider,
  SliderProps,
  Rail,
  Handles,
  Tracks,
  Ticks,
} from 'react-compound-slider'

import { Handle, Track, Tick } from './index'

interface RangeSliderProps extends Omit<SliderProps, 'children'> {
  hasLabels?: boolean
  tracksLeft?: boolean
  tracksRight?: boolean
  tickCount?: number
  IconLeft?: React.ElementType
  IconRight?: React.ElementType
  disabled?: boolean
}

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
  reversed,
  disabled,
  values,
  onUpdate,
  ...rest
}) => {
  const [sliderValues, setSliderValues] = useState(values)

  const onUpdateHandler = (newValues: ReadonlyArray<number>): void => {
    setSliderValues(newValues)
    onUpdate(newValues)
  }

  const classes = classNames('rn-rangeslider', className, {
    'is-reversed': reversed,
    'is-disabled': disabled,
  })

  return (
    <div className={classes} data-testid="rangeslider">
      {IconLeft && (
        <IconLeft
          className="rn-rangeslider__icon rn-rangeslider__icon--left"
          data-testid="rangeslider-icon-left"
        />
      )}
      <Slider
        domain={domain}
        reversed={reversed}
        disabled={disabled}
        values={values}
        step={step}
        onUpdate={onUpdateHandler}
        {...rest}
      >
        <Rail>
          {({ getRailProps }) => (
            <div className="rn-rangeslider__rail">
              <div className="rn-rangeslider__rail-outer" {...getRailProps()} />
              <div className="rn-rangeslider__rail-inner" />
            </div>
          )}
        </Rail>
        <Handles>
          {({ activeHandleID, handles, getHandleProps }) => (
            <div className="rn-rangeslider__handles">
              {handles.map(handle => (
                <Handle
                  key={handle.id}
                  handle={handle}
                  domain={domain}
                  activeHandleID={activeHandleID}
                  getHandleProps={getHandleProps}
                />
              ))}
            </div>
          )}
        </Handles>
        <Tracks left={tracksLeft} right={tracksRight}>
          {({ tracks, getTrackProps }) => (
            <div className="rn-rangeslider__tracks">
              {tracks.map(({ id, source, target }) => (
                <Track
                  id={id}
                  key={id}
                  source={source}
                  target={target}
                  getTrackProps={getTrackProps}
                />
              ))}
            </div>
          )}
        </Tracks>
        {step && (
          <Ticks count={tickCount}>
            {({ ticks }) => (
              <div className="rn-rangeslider__ticks">
                {ticks.map(tick => (
                  <Tick
                    key={tick.id}
                    tick={tick}
                    count={ticks.length}
                    hasLabels={hasLabels}
                    values={sliderValues}
                    domain={domain}
                    reversed={reversed}
                  />
                ))}
              </div>
            )}
          </Ticks>
        )}
      </Slider>
      {IconRight && (
        <IconRight
          className="rn-rangeslider__icon rn-rangeslider__icon--right"
          data-testid="rangeslider-icon-right"
        />
      )}
    </div>
  )
}

RangeSlider.displayName = 'RangeSlider'
