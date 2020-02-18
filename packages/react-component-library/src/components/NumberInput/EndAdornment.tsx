import React from 'react'

import { EndAdornmentButton } from './EndAdornmentButton'
import { END_ADORNMENT_DIRECTION } from './constants'

interface EndAdornmentProps {
  max?: number
  min?: number
  name: string
  onChange: (event: any) => void
  step?: number
  value?: number
}

export const EndAdornment: React.FC<EndAdornmentProps> = ({
  max,
  min,
  name,
  onChange,
  step,
  value,
}) => {
  function onButtonClick(
    getNextValue: () => number,
    canRaiseOnChange: (newValue: number) => boolean
  ) {
    return (event: React.MouseEvent<HTMLButtonElement>) => {
      const target = event.currentTarget
      target.blur()

      const newValue = getNextValue()
      if (canRaiseOnChange(newValue)) {
        onChange({
          target: {
            name,
            value: newValue,
          },
        })
      }
    }
  }

  return (
    <div className="rn-numberinput__controls">
      <EndAdornmentButton
        onClick={onButtonClick(
          () => (value ? value + step : step),
          newValue => !max || newValue <= max
        )}
        type={END_ADORNMENT_DIRECTION.INCREASE}
      />
      <EndAdornmentButton
        onClick={onButtonClick(
          () => (value ? value - step : step),
          newValue => !min || newValue >= min
        )}
        type={END_ADORNMENT_DIRECTION.DECREASE}
      />
    </div>
  )
}

EndAdornment.displayName = 'EndAdornment'
