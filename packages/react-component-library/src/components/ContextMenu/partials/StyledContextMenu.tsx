import { selectors } from '@royalnavy/design-tokens'
import styled, { css } from 'styled-components'

import { StyledText } from './StyledText'

interface StyledContextMenuProps {
  top: number
  left: number
  $hasIcons: boolean
}

const { color, spacing, zIndex } = selectors

export const StyledContextMenu = styled.ol<StyledContextMenuProps>`
  position: fixed;
  top: ${({ top }) => `${top}px`};
  left: ${({ left }) => `${left}px`};
  min-width: 120px;
  max-width: 240px;
  padding: ${spacing('2')};
  list-style-type: none;
  background-color: ${color('neutral', 'white')};
  border-radius: 4px;
  border: 1px solid ${color('neutral', '200')};
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.04);
  z-index: ${zIndex('context', 1)};

  ${({ $hasIcons }) =>
    !$hasIcons &&
    css`
      ${StyledText} {
        margin-left: 0;
      }
    `}
`
