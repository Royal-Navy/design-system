import React from 'react'
import capitalize from 'lodash/capitalize'
import { selectors } from '@royalnavy/design-tokens'
import styled, { css } from 'styled-components'

import { END_ADORNMENT_TYPE } from './constants'

const { color } = selectors

type EndAdornmentType =
  | typeof END_ADORNMENT_TYPE.DECREASE
  | typeof END_ADORNMENT_TYPE.INCREASE

interface EndAdornmentButtonProps {
  isCondensed: boolean
  isDisabled: boolean
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  type: EndAdornmentType
}

interface StyledButtonProps {
  isCondensed: boolean
}

const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 42px;
  align-items: center;

  background: transparent;
  margin: 0;
  padding: 0;
  outline: 0;
  border: 0;

  flex-grow: 1;

  &:focus {
    border-radius: 4px;
    box-shadow: 2px 2px 0 0 ${color('action', '600')},
      -2px -2px 0 0 ${color('action', '600')},
      2px -2px 0 0 ${color('action', '600')},
      -2px 2px 0 0 ${color('action', '600')};
  }
`

const StyledDecreaseButton = styled(StyledButton)`
  border-top: 1px solid ${color('neutral', '100')};

  &:focus {
    border-color: transparent;
  }

  ${({ isCondensed }) =>
    isCondensed &&
    css`
      width: 36px;

      & > svg {
        transform: scale(0.7);
      }
    `}
`

const StyledIncreaseButton = styled(StyledButton)`
  & > svg {
    transform: rotate(180deg);
  }

  ${({ isCondensed }) =>
    isCondensed &&
    css`
      width: 36px;

      & > svg {
        transform: rotate(180deg) scale(0.7);
      }
    `}

  &:focus + ${StyledDecreaseButton} {
    border-color: transparent;
  }
`

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
      aria-label={`${capitalize(type)} the input value`}
      data-testid={`number-input-${type}`}
      isCondensed={isCondensed}
      type="button"
      disabled={isDisabled}
      onClick={onClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="11" height="7">
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
