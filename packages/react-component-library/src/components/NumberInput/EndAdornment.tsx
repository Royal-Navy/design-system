import React from 'react'

import { EndAdornmentButton } from './EndAdornmentButton'
import { END_ADORNMENT_TYPE } from './constants'

interface EndAdornmentProps {
  isDisabled: boolean
  max?: number
  min?: number
  name: string
  onClick: (event: React.MouseEvent<HTMLButtonElement>, value: number) => void
  step?: number
  value: number
}

export const EndAdornment: React.FC<EndAdornmentProps> = ({
  isDisabled,
  onClick,
  step,
  value,
}) => {
  function onButtonClick(getNewValue: () => number) {
    return (event: React.MouseEvent<HTMLButtonElement>) => {
      const target = event.currentTarget
      target.blur()

      const newValue = getNewValue()
      onClick(event, newValue)
    }
  }

  return (
    <div className="rn-numberinput__controls">
      <EndAdornmentButton
        isDisabled={isDisabled}
        onClick={onButtonClick(() => (value || 0) + step)}
        type={END_ADORNMENT_TYPE.INCREASE}
      />
      <EndAdornmentButton
        isDisabled={isDisabled}
        onClick={onButtonClick(() => (value || 0) - step)}
        type={END_ADORNMENT_TYPE.DECREASE}
      />
    </div>
  )
}

EndAdornment.displayName = 'EndAdornment'
