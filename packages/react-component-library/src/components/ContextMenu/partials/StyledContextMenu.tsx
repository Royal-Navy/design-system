import { selectors } from '@defencedigital/design-tokens'
import styled, { css } from 'styled-components'

import { StyledText } from './StyledText'

interface StyledContextMenuProps {
  $hasIcons: boolean
  $isOpen: boolean
}

const { color, spacing, zIndex } = selectors

export const StyledContextMenu = styled.ol<StyledContextMenuProps>`
  position: fixed;
  min-width: 120px;
  max-width: 240px;
  padding: ${spacing('2')};
  list-style-type: none;
  background-color: ${color('neutral', 'white')};
  border-radius: 4px;
  border: 1px solid ${color('neutral', '200')};
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.04);
  z-index: ${zIndex('context', 1)};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};

  ${({ $hasIcons }) =>
    !$hasIcons &&
    css`
      ${StyledText} {
        margin-left: 0;
      }
    `}
`
