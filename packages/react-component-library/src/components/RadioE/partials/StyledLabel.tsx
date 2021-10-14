import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

const { color, fontSize } = selectors

export const StyledLabel = styled.label`
  color: ${color('neutral', '400')};
  font-size: ${fontSize('m')};
  padding: 0 16px;
`
