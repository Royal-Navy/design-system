import styled, { css } from 'styled-components'

import { StyledTabSetProps } from './StyledTabSet'

interface StyledTabItemProps extends StyledTabSetProps {
  $isFullWidth?: boolean
}

export const StyledTabItem = styled.li<StyledTabItemProps>`
  display: inline-block;

  ${({ $isFullWidth }) =>
    $isFullWidth &&
    css`
      flex: 1;
    `}

  &:not(:last-child) {
    padding-right: 6px;
  }
`
