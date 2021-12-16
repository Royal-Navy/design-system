import styled, { css } from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

import { StyledIconWrapper } from './StyledIconWrapper'
import { StyledInlineButton } from './StyledInlineButton'

const { color } = selectors

export interface StyledInlineButtonsProps {
  $isDisabled?: boolean
}

export const StyledInlineButtons = styled.div<StyledInlineButtonsProps>`
  position: relative;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;

  ${StyledInlineButton} + ${StyledInlineButton} {
    & > ${StyledIconWrapper} {
      margin-left: 0;
    }
  }

  ${({ $isDisabled }) =>
    !$isDisabled &&
    css`
      border-left: 1px solid ${color('neutral', '200')};
    `}
`
