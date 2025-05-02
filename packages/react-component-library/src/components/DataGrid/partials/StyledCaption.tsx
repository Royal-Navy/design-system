import styled from 'styled-components'
import { color, spacing } from '@royalnavy/design-tokens'

export const StyledCaption = styled.caption`
  padding: ${spacing('8')} ${spacing('4')};
  text-align: left;
  background-color: ${color('neutral', '000')};
  border-bottom: 1px solid ${color('neutral', '200')};
`
