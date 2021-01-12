import { selectors } from '@royalnavy/design-tokens'
import styled, { css } from 'styled-components'

const { zIndex } = selectors

interface StyledModalProps {
  $isOpen: boolean
}

export const StyledModal = styled.div<StyledModalProps>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.2);
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  z-index: ${zIndex('modal', 1)};
`
