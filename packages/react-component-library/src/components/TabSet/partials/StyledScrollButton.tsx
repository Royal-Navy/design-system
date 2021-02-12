import { selectors } from '@royalnavy/design-tokens'
import styled from 'styled-components'

const { color, spacing } = selectors

export const StyledScrollButton = styled.button`
  padding: ${spacing('6')} ${spacing('2')};
  background: ${color('neutral', 'white')};
  border: 1px solid ${color('neutral', '100')};
  border-radius: 3px;
  color: ${color('neutral', '300')};
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-self: flex-start;
`
