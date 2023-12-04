import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

import { StyledContent } from '../../../../primitives/FloatingBox/partials/StyledContent'

interface StyledSidebarProps {
  isOpen?: boolean
}

const { zIndex, color } = selectors

export const StyledSidebar = styled.aside<StyledSidebarProps>`
  display: inline-flex;
  flex-direction: column;
  position: relative;
  z-index: ${zIndex('sidebar', 0)};
  flex-shrink: 0;
  width: ${({ isOpen }) => (isOpen ? '18rem' : '3.75rem')};
  height: 100vh;
  background-color: ${color('neutral', '700')};
  color: ${color('neutral', 'white')};

  transition: ${({ isOpen }) =>
    isOpen
      ? '200ms width cubic-bezier(0.34, 1.56, 0.64, 1)'
      : '200ms width cubic-bezier(0.34, 1, 0.64, 1)'};

  > a:hover {
    text-decoration: none;
  }

  ${StyledContent} {
    margin: 0 0 0.5rem 0.5rem;
  }
`
