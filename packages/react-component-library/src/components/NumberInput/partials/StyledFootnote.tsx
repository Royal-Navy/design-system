import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color, fontSize } = selectors

export const StyledFootnote = styled.small`
  margin: 6px 12px;
  color: ${color('neutral', '400')};
  font-size: ${fontSize('s')};
`
