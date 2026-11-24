import { color, Theme, zIndex } from '@royalnavy/design-tokens'
import { css, styled } from 'styled-components'

export const StyledModal = styled.dialog`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: ${zIndex('modal', 1)};

  ${({ theme }) =>
    (theme as Theme)?.mode === 'dark' &&
    css`
      color: ${color('neutral', '600')};
    `}
`
