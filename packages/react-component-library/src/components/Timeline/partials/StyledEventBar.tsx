import styled, { css } from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

import { StyledEventTitle } from './StyledEventTitle'

const { color } = selectors

interface StyledEventBarProps {
  width: string
  maxWidth?: string
  barColor: string
  startsBeforeStart?: boolean
  endsAfterEnd?: boolean
}

export const StyledEventBar = styled.div<StyledEventBarProps>`
  order: 1;
  position: relative;
  display: inline-block;
  border-radius: 4px;
  background-color: ${({ barColor = color('success', '500') }) => barColor};
  height: 16px;
  min-width: 1rem;
  width: ${({ width }) => width};
  max-width: ${({ maxWidth }) => maxWidth};

  ${({ startsBeforeStart, width, barColor = color('success', '500') }) =>
    startsBeforeStart &&
    css`
      border-top-left-radius: unset;
      border-bottom-left-radius: unset;
      margin-left: 14px;
      width: calc(${width} - 14px);

      &::before {
        content: '';
        position: absolute;
        left: -14px;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 8px 14px 8px 0;
        border-color: transparent ${barColor} transparent transparent;
      }

      + ${StyledEventTitle} {
        margin-left: 14px;
      }
    `}

  ${({ endsAfterEnd, maxWidth, barColor = color('success', '500') }) =>
    endsAfterEnd &&
    css`
      border-top-right-radius: unset;
      border-bottom-right-radius: unset;
      max-width: calc(${maxWidth} - 14px);

      &::after {
        content: '';
        position: absolute;
        right: -14px;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 8px 0 8px 14px;
        border-color: transparent transparent transparent ${barColor};
      }
    `}

    ${({ startsBeforeStart, endsAfterEnd, maxWidth }) =>
    startsBeforeStart &&
    endsAfterEnd &&
    css`
      max-width: calc(${maxWidth} - 28px);
    `}
`
