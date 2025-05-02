import { color } from '@royalnavy/design-tokens'
import styled, { css } from 'styled-components'

export interface StyledTabSetProps {
  $isScrollable?: boolean
  $isFullWidth?: boolean
}

export const StyledTabSet = styled.article<StyledTabSetProps>`
  display: flex;
  flex-flow: column;
  background-color: ${color('neutral', 'white')};
  height: 100%;

  ${({ $isFullWidth }) =>
    $isFullWidth &&
    css`
      width: 100%;
    `}
`
