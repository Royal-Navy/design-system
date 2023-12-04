import { selectors } from '@royalnavy/design-tokens'
import styled from 'styled-components'

const { color, fontSize, spacing } = selectors

export const StyledTitle = styled.h2`
  color: ${color('neutral', '600')};
  font-size: ${fontSize('l')};
  font-weight: bold;
  margin-bottom: ${spacing('2')};
`
