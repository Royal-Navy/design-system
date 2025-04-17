import { color, spacing, type Spacing } from '@royalnavy/design-tokens'
import styled, { css } from 'styled-components'

export interface StyledProgressBarProps {
  $height: Spacing
  $isDisabled: boolean
}

export const StyledProgressBar = styled.div<StyledProgressBarProps>`
  background-color: ${color('neutral', '100')};
  overflow: hidden;
  border-radius: 4px;
  height: ${({ $height }) => spacing($height)};
  flex: 1;

  ${({ $isDisabled }) =>
    $isDisabled &&
    css`
      cursor: not-allowed;
      background-color: ${color('neutral', '000')};
    `}
`
