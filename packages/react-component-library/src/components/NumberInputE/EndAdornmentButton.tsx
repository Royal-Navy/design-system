import React from 'react'
import capitalize from 'lodash/capitalize'

import { END_ADORNMENT_TYPE } from './constants'
import { StyledIncreaseButton } from './partials/StyledIncreaseButton'
import { StyledDecreaseButton } from './partials/StyledDecreaseButton'

type EndAdornmentType =
  | typeof END_ADORNMENT_TYPE.DECREASE
  | typeof END_ADORNMENT_TYPE.INCREASE

interface EndAdornmentButtonProps {
  isCondensed: boolean
  isDisabled: boolean
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  type: EndAdornmentType
}

export const EndAdornmentButton: React.FC<EndAdornmentButtonProps> = ({
  isCondensed,
  isDisabled,
  onClick,
  type,
}) => {
  const Button =
    type === END_ADORNMENT_TYPE.DECREASE
      ? StyledDecreaseButton
      : StyledIncreaseButton

  return (
    <Button
      $isCondensed={isCondensed}
      aria-label={`${capitalize(type)} the input value`}
      data-testid={`number-input-${type}`}
      type="button"
      disabled={isDisabled}
      onClick={onClick}
    >
      <svg xmlns="https://www.w3.org/2000/svg" width="11" height="7">
        <path
          fill="#6F798A"
          fillRule="evenodd"
          d="M5.66 4.49L9.19.95a1 1 0 1 1 1.42 1.41L6.36 6.61a1 1 0 0 1-1.41 0L.71 2.36A1 1 0 1 1 2.12.95l3.54 3.54z"
        />
      </svg>
    </Button>
  )
}

EndAdornmentButton.displayName = 'EndAdornmentButton'
