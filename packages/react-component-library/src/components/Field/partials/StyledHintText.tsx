import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color, fontSize } = selectors

export const StyledHintText = styled.span`
  display: inline-block;
  font-size: ${fontSize('s')};
  color: ${color('neutral', '400')};
  margin: 6px 0 0 12px;
`
