import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color, fontSize } = selectors

export const StyledItemKey = styled.dt`
  color: ${color('neutral', '400')};
  font-weight: 400;
  font-size: ${fontSize('s')};
`
