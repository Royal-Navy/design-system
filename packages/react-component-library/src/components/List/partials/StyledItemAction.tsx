import { selectors } from '@royalnavy/design-tokens'
import styled from 'styled-components'

const { color, spacing } = selectors

export const StyledItemAction = styled.span`
  align-items: center;
  background-color: ${color('neutral', 'white')};
  border: 1px solid ${color('neutral', '200')};
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.07);
  color: ${color('neutral', '300')};
  display: inline-flex;
  height: 1.5rem;
  justify-content: center;
  margin-right: ${spacing('8')};
  padding: 0;
  position: relative;
  top: ${spacing('4')};
  width: 1.5rem;
`
