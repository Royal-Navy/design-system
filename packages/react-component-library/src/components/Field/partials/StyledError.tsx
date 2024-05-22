import styled from 'styled-components'
import { color, fontSize } from '@royalnavy/design-tokens'

export const StyledError = styled.span`
  display: inline-block;
  font-size: ${fontSize('s')};
  color: ${color('danger', '800')};
  margin: 0 0 6px 12px;
`
