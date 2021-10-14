import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

const { color } = selectors

export const StyledLabel = styled.label`
  color: ${color('neutral', '400')};
`
