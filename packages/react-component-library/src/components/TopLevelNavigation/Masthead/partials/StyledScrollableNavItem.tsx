import { selectors } from '@royalnavy/design-tokens'
import styled, { css } from 'styled-components'
import { BTN_FOCUS_WIDTH } from './constants'

const { color, fontSize, spacing } = selectors

interface StyledScrollableNavItemProps {
  $isActive: boolean
}

export const StyledScrollableNavItem = styled.li<StyledScrollableNavItemProps>`
  & > a {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    margin: 0 ${spacing('2')};
    padding: 0 ${spacing('8')};
    height: 58px;
    font-size: ${fontSize('base')};
    color: ${color('neutral', '400')};
    text-align: center;
    text-decoration: none;
    border: none;
    border-top: 4px solid transparent;
    border-bottom: 4px solid transparent;
    cursor: pointer;

    &:hover {
      border-bottom: 4px solid ${color('action', '600')};
      text-decoration: none;
    }

    &:focus {
      box-shadow: 0 0 0 ${BTN_FOCUS_WIDTH} rgba(f.color('action', '700'), 0.5);
    }

    ${({ $isActive }) =>
      $isActive &&
      css`
        color: ${color('neutral', '500')};
        font-weight: 700;
        border-bottom: 4px solid ${color('action', '600')};
      `}
  }
`
