import { color, zIndex } from '@royalnavy/design-tokens'
import styled from 'styled-components'

export const StyledModal = styled.dialog`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.2);
  /* Native <dialog> defaults its text colour to CanvasText; set a themed
     colour so content without an explicit colour stays legible in dark mode. */
  color: ${color('neutral', '600')};
  z-index: ${zIndex('modal', 1)};
`
