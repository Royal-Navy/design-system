import React from 'react'

import { END_ADORNMENT_DIRECTION } from './constants'

interface EndAdornmentButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  type:
    | typeof END_ADORNMENT_DIRECTION.DECREASE
    | typeof END_ADORNMENT_DIRECTION.INCREASE
}

export const EndAdornmentButton: React.FC<EndAdornmentButtonProps> = ({
  onClick,
  type,
}) => (
  <button
    data-testid={`number-input-${type}`}
    type="button"
    className={`rn-numberinput__${type}`}
    onClick={onClick}
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="7">
      <path
        fill="#6F798A"
        fillRule="evenodd"
        d="M5.66 4.49L9.19.95a1 1 0 1 1 1.42 1.41L6.36 6.61a1 1 0 0 1-1.41 0L.71 2.36A1 1 0 1 1 2.12.95l3.54 3.54z"
      />
    </svg>
  </button>
)

EndAdornmentButton.displayName = 'EndAdornmentButton'
