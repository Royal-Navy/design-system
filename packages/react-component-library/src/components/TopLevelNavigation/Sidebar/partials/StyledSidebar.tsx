import styled from 'styled-components'
import { color, zIndex } from '@royalnavy/design-tokens'

import { StyledContent } from '../../../../primitives/FloatingBox/partials/StyledContent'

interface StyledSidebarProps {
  $isOpen?: boolean
}

export const SIDEBAR_OPEN_WIDTH = '18rem'
export const SIDEBAR_CLOSED_WIDTH = '3.75rem'

export const StyledSidebar = styled.aside<StyledSidebarProps>`
  display: inline-flex;
  flex-direction: column;
  position: fixed;
  z-index: ${zIndex('sidebar', 0)};
  flex-shrink: 0;
  width: ${({ $isOpen }) =>
    $isOpen ? SIDEBAR_OPEN_WIDTH : SIDEBAR_CLOSED_WIDTH};
  height: 100vh;
  background-color: ${color('neutral', '700')};
  color: ${color('neutral', 'white')};

  transition: ${({ $isOpen }) =>
    $isOpen
      ? '200ms width cubic-bezier(0.34, 1.56, 0.64, 1)'
      : '200ms width cubic-bezier(0.34, 1, 0.64, 1)'};

  > a:hover {
    text-decoration: none;
  }

  ${StyledContent} {
    margin: 0 0 0.5rem 0.5rem;
  }
`
