import { css, styled } from 'styled-components'
import { color, Theme } from '@royalnavy/design-tokens'

export const StyledLoadingOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  border-radius: 4px;
  overflow: hidden;

  > div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  ${({ theme }) =>
    (theme as Theme)?.mode === 'dark' &&
    css`
      background-color: transparent;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: ${color('neutral', 'white')};
        opacity: 0.5;
      }
    `}
`
