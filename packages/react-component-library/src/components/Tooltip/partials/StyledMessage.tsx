import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color, fontSize } = selectors

export const StyledMessage = styled.div`
  font-size: ${fontSize('base')};
  color: ${color('neutral', '100')};
`
