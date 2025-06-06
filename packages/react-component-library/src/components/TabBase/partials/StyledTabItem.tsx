import styled, { css } from 'styled-components'
import { color } from '@royalnavy/design-tokens'

import { StyledTabSetProps } from '../../TabSet/partials/StyledTabSet'

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

  a {
    color: ${color('neutral', 'black')};
  }
`
