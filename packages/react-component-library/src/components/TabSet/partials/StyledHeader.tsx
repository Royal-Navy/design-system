import { selectors } from '@royalnavy/design-tokens'
import styled, { css } from 'styled-components'
import { StyledTabSetProps } from './StyledTabSet'

const { color } = selectors

export const StyledHeader = styled.header<StyledTabSetProps>`
  border-bottom: 1px solid ${color('neutral', '100')};

  ${({ $isScrollable }) =>
    $isScrollable &&
    css`
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      border-bottom: none;
      position: relative;
      z-index: 1;
      margin-bottom: -1px;
    `}
`
