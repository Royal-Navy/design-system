import styled, { css } from 'styled-components'
import { StyledTabSetProps } from './StyledTabSet'

export const StyledHeader = styled.header<StyledTabSetProps>`
  position: relative;
  margin-bottom: -1px;

  ${({ $isScrollable }) =>
    $isScrollable &&
    css`
      display: flex;
      flex-direction: row;
      align-items: flex-end;
    `}
`
