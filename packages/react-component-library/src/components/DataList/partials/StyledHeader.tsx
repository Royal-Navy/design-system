import styled, { css } from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

import { StyledAction } from './StyledAction'
import { StyledDataListProps } from './StyledDataList'

const { animation, color, spacing } = selectors

export const StyledHeader = styled.button<StyledDataListProps>`
  padding: ${spacing('3')} ${spacing('0')} ${spacing('3')} ${spacing('2')};
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border: none;
  pointer-events: none;

  ${({ $isCollapsible }) =>
    $isCollapsible &&
    css`
      padding: ${spacing('3')} ${spacing('2')} ${spacing('3')} ${spacing('2')};
      background-color: ${color('neutral', 'white')};
      border-bottom: 1px solid ${color('neutral', '100')};
      transition: color ${animation('default')};
      cursor: pointer;
      outline: none;
      pointer-events: all;

      &:hover {
        background-color: ${color('neutral', '000')};
        
        ${StyledAction} {
          background-color: ${color('neutral', '200')};
        }
      }
    `}
`
