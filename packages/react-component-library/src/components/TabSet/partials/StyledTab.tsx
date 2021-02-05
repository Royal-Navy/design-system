import { selectors } from '@royalnavy/design-tokens'
import styled, { css } from 'styled-components'

import { StyledTabSetProps } from './StyledTabSet'

const { color, fontSize, mq, spacing } = selectors

interface StyledTabProps extends StyledTabSetProps {
  $isActive: boolean
}

function getDefaultTab($isActive: boolean) {
  return css`
    width: 100%;
    display: flex;
    align-items: center;
    text-align: center;
    cursor: pointer;
    font-size: ${fontSize('base')};
    font-weight: 600;
    color: ${color('neutral', $isActive ? '500' : '400')};

    background-color: ${color('neutral', 'white')};

    border: none;
    border-bottom: 4px solid
      ${$isActive ? color('action', '600') : 'transparent'};

    padding: ${spacing('10')} ${spacing('6')} ${spacing('9')} ${spacing('6')};

    & > div {
      margin: 0 auto;
    }

    &:focus {
      outline: none;
    }
  `
}

function getScrollableTab($isActive: boolean) {
  return css`
    padding: ${spacing('5')} ${spacing('10')};
    border-radius: 4px 4px 0 0;
    border: 1px solid ${color('neutral', $isActive ? '200' : '100')};
    border-bottom: ${$isActive
      ? css`1px solid ${color('neutral', 'white')}`
      : 'none'};
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 0;
    color: ${$isActive ? color('neutral', '500') : 'unset'};
    background-color: ${color('neutral', $isActive ? 'white' : '000')};

    ${mq({ gte: 'm' })`
      width: auto;
    `}
  `
}

export const StyledTab = styled.button<StyledTabProps>`
  ${({ $isActive, $isScrollable }) => css`
    ${getDefaultTab($isActive)}
    ${$isScrollable && getScrollableTab($isActive)}
  `}
`
