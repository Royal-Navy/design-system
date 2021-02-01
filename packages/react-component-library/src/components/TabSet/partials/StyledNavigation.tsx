import styled, { css } from 'styled-components'

import { StyledTabSetProps } from './StyledTabSet'

export const StyledNavigation = styled.div<StyledTabSetProps>`
  ${({ $isScrollable }) =>
    $isScrollable &&
    css`
      flex: 1;
      white-space: nowrap;
      overflow-x: hidden;
    `}
`
