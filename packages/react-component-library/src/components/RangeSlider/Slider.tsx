import React from 'react'
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
}

export const RangeSlider: React.FC<RangeSliderProps> = ({
  className,
  children,
  domain,
  hasLabels,
  tracksLeft = false,
  tracksRight = false,
  ...rest
}) => {
  const classes = classNames('rn-rangeslider', className, {
    //
  })

  return (
    <Slider className={classes} domain={domain} {...rest}>
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
      <Ticks>
        {({ ticks }) => (
          <div className="rn-rangeslider__ticks">
            {ticks.map(tick => (
              <Tick
                key={tick.id}
                tick={tick}
                count={ticks.length}
                hasLabels={hasLabels}
              />
            ))}
          </div>
        )}
      </Ticks>
    </Slider>
  )
}

RangeSlider.displayName = 'RangeSlider'
