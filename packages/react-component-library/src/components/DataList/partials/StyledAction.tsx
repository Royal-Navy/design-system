import styled, { css } from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'
import { StyledDataListProps } from './StyledDataList'

const { animation, color, spacing } = selectors

export const StyledAction = styled.span<StyledDataListProps>`
  display: none;

  ${({ $isCollapsible }) =>
    $isCollapsible &&
    css`
      border-radius: 3px;
      padding: ${spacing('2')};
      display: flex;
      background: ${color('neutral', '100')};
      transition: background-color ${animation('default')};

      svg {
        transform: translate(-1px, 0);
        transition: transform ${animation('default')};
      }
    `}

  ${({ $isCollapsible, $isOpen }) =>
    $isCollapsible &&
    $isOpen &&
    css`
      svg {
        transform: rotate(180deg) translate(0, 1px);
      }
    `}
`
