import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

export interface StyledButtonProps {
  $isCondensed: boolean
}

const { color } = selectors

export const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 42px;
  align-items: center;

  background: transparent;
  margin: 0;
  padding: 0;
  outline: 0;
  border: 0;

  flex-grow: 1;

  &:focus {
    border-radius: 4px;
    box-shadow: 2px 2px 0 0 ${color('action', '600')},
      -2px -2px 0 0 ${color('action', '600')},
      2px -2px 0 0 ${color('action', '600')},
      -2px 2px 0 0 ${color('action', '600')};
  }
`
