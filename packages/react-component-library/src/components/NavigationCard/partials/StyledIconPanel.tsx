import { styled } from 'styled-components'

import { getShade } from '../helpers'

interface StyledIconPanelProps {
  $color: string
  $empty: boolean
}

/**
 * The icon panel always occupies the same space, even when `$empty`, so cards
 * with and without an icon stay left-aligned and equal-height within a grid.
 * When empty it is transparent (no tint) rather than removed.
 */
export const StyledIconPanel = styled.span<StyledIconPanelProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 96px;
  height: 96px;
  border-radius: 8px;
  color: ${({ $color }) => getShade($color, '600')};
  background-color: ${({ $empty, $color }) =>
    $empty ? 'transparent' : getShade($color, '100')};

  svg {
    width: 44px;
    height: 44px;
  }
`
