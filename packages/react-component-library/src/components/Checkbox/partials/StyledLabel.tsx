import { selectors } from '@defencedigital/design-tokens'
import styled from 'styled-components'

const { color } = selectors

export const StyledLabel = styled.label`
  color: ${color('neutral', '400')};
`
