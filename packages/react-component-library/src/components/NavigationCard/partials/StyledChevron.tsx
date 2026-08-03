import { color, spacing } from '@royalnavy/design-tokens'
import styled from 'styled-components'

import { NavigationCardColorType } from '../types'

interface StyledChevronProps {
  $color: NavigationCardColorType
}

export const StyledChevron = styled.span<StyledChevronProps>`
  display: inline-flex;
  flex-shrink: 0;
  margin-left: ${spacing('4')};
  color: ${({ $color }) => color($color, '600')};
  transition: transform 150ms ease;

  svg {
    width: 24px;
    height: 24px;
  }
`
