import { color } from '@royalnavy/design-tokens'
import styled, { css } from 'styled-components'

export interface StyledProgressBarProps {
  $isDisabled: boolean
}

export const StyledProgressBar = styled.div<StyledProgressBarProps>`
  background-color: ${color('neutral', '100')};
  overflow: hidden;
  border-radius: 4px;

  ${({ $isDisabled }) =>
    $isDisabled &&
    css`
      cursor: not-allowed;
      background-color: ${color('neutral', '000')};
    `}
`
