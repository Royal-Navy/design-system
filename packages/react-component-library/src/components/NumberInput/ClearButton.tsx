import React from 'react'
import { IconCancel } from '@royalnavy/icon-library'
import { selectors } from '@royalnavy/design-tokens'
import styled, { css } from 'styled-components'

const { color, spacing } = selectors

interface ClearButtonProps {
  isCondensed: boolean
  isDisabled: boolean
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

interface StyledButtonProps {
  isCondensed: boolean
}

const StyledButton = styled.button<StyledButtonProps>`
  background-color: ${color('neutral', 'white')};
  border: none;
  color: ${color('neutral', '300')};
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 1rem;
  right: 54px;
  padding: unset;
  display: flex;
  align-items: center;

  ${({ isCondensed }) =>
    isCondensed &&
    css`
      right: 44px;

      & > svg {
        transform: scale(0.8);
      }
    `}
`

export const ClearButton: React.FC<ClearButtonProps> = ({
  isCondensed,
  isDisabled,
  onClick,
}) => {
  return (
    <StyledButton
      aria-label="Clear the input value"
      data-testid="number-input-clear"
      disabled={isDisabled}
      isCondensed={isCondensed}
      onClick={onClick}
      type="button"
    >
      <IconCancel />
    </StyledButton>
  )
}

ClearButton.displayName = 'ClearButton'
