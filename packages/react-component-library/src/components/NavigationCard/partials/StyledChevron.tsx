import { spacing } from '@royalnavy/design-tokens'
import { styled } from 'styled-components'

import { getShade } from '../helpers'

interface StyledChevronProps {
  $color: string
}

export const StyledChevron = styled.span<StyledChevronProps>`
  display: inline-flex;
  flex-shrink: 0;
  margin-left: ${spacing('4')};
  color: ${({ $color }) => getShade($color, '600')};
  transition: transform 150ms ease;

  svg {
    width: 24px;
    height: 24px;
  }
`
