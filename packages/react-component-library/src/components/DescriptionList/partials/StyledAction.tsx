import styled, { css } from 'styled-components'
import { animation, color, spacing } from '@royalnavy/design-tokens'
import { StyledDescriptionListProps } from './StyledDescriptionList'

export const StyledAction = styled.span<StyledDescriptionListProps>`
  display: none;

  ${({ $isCollapsible }) =>
    $isCollapsible &&
    css`
      border-radius: 3px;
      padding: ${spacing('2')};
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${color('neutral', '100')};
      transition: background-color ${animation('default')};

      svg {
        transition: transform ${animation('default')};
      }
    `}

  ${({ $isCollapsible, $isOpen }) =>
    $isCollapsible &&
    $isOpen &&
    css`
      svg {
        transform: rotate(180deg);
      }
    `}
`
