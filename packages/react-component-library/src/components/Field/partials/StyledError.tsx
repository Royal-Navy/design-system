import { css, styled } from 'styled-components'
import { color, fontSize } from '@royalnavy/design-tokens'

interface StyledErrorProps {
  $isReserved?: boolean
}

export const StyledError = styled.span<StyledErrorProps>`
  display: inline-block;
  font-size: ${fontSize('s')};
  color: ${color('danger', '800')};
  margin: 0 0 6px 12px;

  ${({ $isReserved }) =>
    $isReserved &&
    css`
      display: block;
      line-height: 1rem;
      min-height: 1rem;
    `}
`
