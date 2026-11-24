import { css, styled } from 'styled-components'
import { colorByMode, fontSize, Theme } from '@royalnavy/design-tokens'

interface StyledErrorProps {
  $isReserved?: boolean
}

export const StyledError = styled.span<StyledErrorProps>`
  display: inline-block;
  font-size: ${fontSize('s')};
  color: ${({ theme }) => colorByMode('danger', '800', '900', theme as Theme)};
  margin: 0 0 6px 12px;

  ${({ $isReserved }) =>
    $isReserved &&
    css`
      display: block;
      line-height: 1rem;
      min-height: 1rem;
    `}
`
