import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

import { StyledContextMenuItem } from './StyledContextMenuItem'

interface StyledTextProps {
  hasIcon?: boolean
}

const { color, fontSize } = selectors

export const StyledText = styled.div<StyledTextProps>`
  color: ${color('neutral', '400')};
  font-weight: 600;
  font-size: ${fontSize('base')};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  ${({ hasIcon }) => !hasIcon && `margin-left: 1.25rem;`}

  ${StyledContextMenuItem}:hover & {
    color: ${color('neutral', '400')};
  }
`
