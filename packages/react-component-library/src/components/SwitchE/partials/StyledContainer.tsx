import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

const { color } = selectors

export const StyledContainer = styled.fieldset`
  display: inline-flex;
  height: 46px;
  background-color: ${color('neutral', 'white')};
  border-radius: 15px;
  border: none;
  padding: 0;
  margin: 0;
`
