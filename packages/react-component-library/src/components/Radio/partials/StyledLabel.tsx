import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color, spacing } = selectors

export const StyledLabel = styled.label`
  color: ${color('neutral', '400')};
  padding: ${spacing('1')} 0;
`
