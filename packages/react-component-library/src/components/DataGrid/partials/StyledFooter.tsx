import { spacing } from '@royalnavy/design-tokens'
import styled, { css } from 'styled-components'

export const StyledFooter = styled.div<{ $isFullWidth: boolean }>`
  display: flex;
  align-items: center;
  margin-top: ${spacing('8')};
  padding: 0 ${spacing('1')};

  ${({ $isFullWidth }) =>
    $isFullWidth
      ? css`
          & > *:nth-child(1) {
            flex: 0 0 auto;
            margin-right: auto;
          }

          & > *:nth-child(2) {
            flex: 0 1 auto;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
          }

          & > *:nth-child(3) {
            flex: 0 0 auto;
            margin-left: auto;
          }
        `
      : css`
          justify-content: space-between;
          position: absolute;
          bottom: -${spacing('8')};
          transform: translateY(100%);
          width: max-content;
          gap: ${spacing('8')};

          & > * {
            flex: 0 0 auto;
          }
        `}
`
