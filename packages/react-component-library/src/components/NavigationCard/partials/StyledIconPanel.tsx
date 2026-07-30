import { color } from '@royalnavy/design-tokens'
import styled from 'styled-components'

import { NavigationCardColorType } from '../types'

interface StyledIconPanelProps {
  $color: NavigationCardColorType
}

export const StyledIconPanel = styled.span<StyledIconPanelProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 96px;
  height: 96px;
  border-radius: 8px;
  color: ${({ $color }) => color($color, '600')};
  background-color: ${({ $color }) => color($color, '100')};

  svg {
    width: 44px;
    height: 44px;
  }
`
