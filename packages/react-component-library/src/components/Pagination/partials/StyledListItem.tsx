import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'
import { StyledButton } from './StyledButton'

const { color, spacing } = selectors

export const StyledListItem = styled.li`
  padding: ${spacing('2')};
  display: inline-block;

  &:first-of-type,
  &:last-of-type {
    ${StyledButton} {
      display: flex;
      align-items: center;
      padding: ${spacing('4')} ${spacing('5')};
      background-color: transparent;
      border: 1px solid ${color('neutral', '200')};

      &:hover:not([disabled]) {
        color: ${color('neutral', '500')};
        background-color: ${color('neutral', '100')};
      }

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }
  }
`
