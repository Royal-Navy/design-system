import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color, fontSize } = selectors

export const StyledEventTitle = styled.span`
  font-size: ${fontSize('s')};
  font-weight: 400;
  color: ${color('neutral', '600')};
  white-space: nowrap;
`
