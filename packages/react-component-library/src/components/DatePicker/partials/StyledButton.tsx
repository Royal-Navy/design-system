import styled, { css } from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { spacing } = selectors

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  order: 3;
  text-align: center;
  padding: ${spacing('4')} ${spacing('5')} ${spacing('4')} 0;
  border: none;
  background: transparent;
  outline: none;

  &:disabled {
    cursor: not-allowed;
  }
`
