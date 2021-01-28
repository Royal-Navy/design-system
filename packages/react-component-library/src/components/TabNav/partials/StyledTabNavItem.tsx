import styled, { css } from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'
import { rgba } from 'polished'

import { TAB_NAV_ACTIVE_BORDER_COLOR, TAB_NAV_FOCUS_WIDTH } from '../constants'

interface StyledTabNavItemProps {
  $isActive?: boolean
}

const { color, spacing, fontSize } = selectors

export const StyledTabNavItem = styled.li<StyledTabNavItemProps>`
  display: inline-block;
  color: ${color('neutral', '400')};
  margin-bottom: 0;
  text-align: center;
  line-height: 1;

  > a {
    border-bottom: 4px solid transparent;
    display: block;
    margin: 0 ${spacing('1')};
    padding: ${spacing('9')} ${spacing('12')} ${spacing('9')};
    font-size: ${fontSize('base')};
    font-weight: 600;
    color: inherit;
    text-align: center;
    text-decoration: none;

    &:hover {
      text-decoration: none;
    }

    &:focus {
      box-shadow: 0 0 0 ${TAB_NAV_FOCUS_WIDTH}
        ${rgba(color('action', '700'), 0.5)};
    }
  }

  ${({ $isActive }) =>
    $isActive &&
    css`
      > a {
        color: ${color('neutral', '500')};
        border-color: ${TAB_NAV_ACTIVE_BORDER_COLOR};
      }
    `}
`
