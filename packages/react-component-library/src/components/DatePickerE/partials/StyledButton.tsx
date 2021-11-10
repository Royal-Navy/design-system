import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'
import { StyledIconEventWrapper } from './StyledIconEventWrapper'

const { color } = selectors

export const StyledButton = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0;
  cursor: pointer;
  background: transparent;
  outline: none;
  color: ${color('action', '700')};
  border: none;
  border-left: 1px solid ${color('neutral', '200')};

  &:disabled {
    color: ${color('neutral', '300')};
    cursor: not-allowed;
  }

  &:focus {
    outline: none;
  }

  &:enabled:focus,
  &:enabled:hover {
    ${StyledIconEventWrapper} {
      background-color: ${color('action', '000')};
    }
  }

  &:enabled:active {
    ${StyledIconEventWrapper} {
      background-color: ${color('action', '100')};
    }
  }
`
