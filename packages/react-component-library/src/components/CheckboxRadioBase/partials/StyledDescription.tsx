import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

const { fontSize } = selectors

export const StyledDescription = styled.div`
  font-size: ${fontSize('base')};
  margin-top: 4px;
`
