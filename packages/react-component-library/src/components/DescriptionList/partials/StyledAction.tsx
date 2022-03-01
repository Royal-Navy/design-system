import styled, { css } from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'
import { StyledDescriptionListProps } from './StyledDescriptionList'

const { animation, color, spacing } = selectors

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
