import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

const { color, fontSize } = selectors

export const StyledError = styled.span`
  display: inline-block;
  font-size: ${fontSize('s')};
  color: ${color('danger', '800')};
  margin: 0 0 6px 12px;
`
