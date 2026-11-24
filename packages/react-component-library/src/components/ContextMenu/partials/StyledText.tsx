import { styled } from 'styled-components'
import { themeColor, fontSize } from '@royalnavy/design-tokens'

import { StyledContextMenuItem } from './StyledContextMenuItem'

interface StyledTextProps {
  $hasIcon?: boolean
}

export const StyledText = styled.span<StyledTextProps>`
  display: block;
  color: ${themeColor('neutral', '400')};
  font-weight: 600;
  font-size: ${fontSize('base')};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  ${({ $hasIcon }) => !$hasIcon && `margin-left: 1.25rem;`}

  ${StyledContextMenuItem}:hover & {
    color: ${themeColor('neutral', '400')};
  }
`
