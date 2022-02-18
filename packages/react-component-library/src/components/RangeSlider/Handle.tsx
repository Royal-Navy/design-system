import React, { useState } from 'react'
import { GetHandleProps, SliderItem } from 'react-compound-slider'

import { RangeSliderPositionBag, RangeSliderValueFormatter } from '.'
import { StyledHandleWrapper } from './partials/StyledHandleWrapper'
import { StyledHandle } from './partials/StyledHandle'
import { StyledValue } from './partials/StyledValue'

export interface HandleProps {
  domain: ReadonlyArray<number>
  handle: SliderItem
  getHandleProps: GetHandleProps
  formatValue: RangeSliderValueFormatter
}

export const Handle = React.forwardRef<HTMLDivElement, HandleProps>(
  (
    {
      domain: [min, max],
      handle: { id, value, percent },
      getHandleProps,
      formatValue,
    },
    ref
  ) => {
    const [hasFocus, setHasFocus] = useState<boolean>(false)

    const positionBag: RangeSliderPositionBag = {
      value,
      percentage: percent,
    }

    return (
      <StyledHandleWrapper
        $left={`${percent}%`}
        $hasFocus={hasFocus}
        {...getHandleProps(id)}
      >
        <StyledHandle
          ref={ref}
          tabIndex={0}
          role="slider"
          aria-label="Select range"
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={value}
          data-testid="rangeslider-handle"
          onFocus={(_) => setHasFocus(true)}
          onBlur={(_) => setHasFocus(false)}
        />
        <StyledValue
          data-testid="rangeslider-value"
          onMouseDown={(_) =>
            (ref as React.RefObject<HTMLDivElement>).current?.focus()
          }
        >
          {formatValue(positionBag)}
        </StyledValue>
      </StyledHandleWrapper>
    )
  }
)

Handle.displayName = 'Handle'
