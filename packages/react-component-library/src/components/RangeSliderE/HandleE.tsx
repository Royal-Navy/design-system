import React from 'react'
import { GetHandleProps, SliderItem } from 'react-compound-slider'

import { RangeSliderEPositionBag, RangeSliderEValueFormatter } from '.'
import { StyledHandleWrapper } from './partials/StyledHandleWrapper'
import { StyledHandle } from './partials/StyledHandle'
import { StyledValue } from './partials/StyledValue'

export interface HandleEProps {
  domain: ReadonlyArray<number>
  handle: SliderItem
  getHandleProps: GetHandleProps
  formatValue: RangeSliderEValueFormatter
}

export const HandleE = React.forwardRef<HTMLDivElement, HandleEProps>(
  (
    {
      domain: [min, max],
      handle: { id, value, percent },
      getHandleProps,
      formatValue,
    },
    ref
  ) => {
    const positionBag: RangeSliderEPositionBag = {
      value,
      percentage: percent,
    }

    return (
      <StyledHandleWrapper $left={`${percent}%`} {...getHandleProps(id)}>
        <StyledHandle
          ref={ref}
          tabIndex={0}
          role="slider"
          aria-label="Select range"
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={value}
          data-testid="rangeslider-handle"
        />
        <StyledValue
          data-testid="rangeslider-value"
          onMouseDown={(_) =>
            (ref as React.RefObject<HTMLDivElement>).current.focus()
          }
        >
          {formatValue(positionBag)}
        </StyledValue>
      </StyledHandleWrapper>
    )
  }
)

HandleE.displayName = 'HandleE'
