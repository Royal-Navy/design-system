import { spacing } from '@royalnavy/design-tokens'
import styled, { css } from 'styled-components'

export const StyledFooter = styled.div<{ $isFullWidth: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: ${spacing('8')};

  ${({ $isFullWidth }) =>
    !$isFullWidth &&
    css`
      position: absolute;
      bottom: -${spacing('8')};
      transform: translateY(100%);
      width: max-content;
      gap: ${spacing('8')};
    `}
`
