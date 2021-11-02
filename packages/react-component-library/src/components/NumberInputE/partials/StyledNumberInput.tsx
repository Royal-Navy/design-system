import { selectors } from '@defencedigital/design-tokens'
import styled from 'styled-components'

const { spacing } = selectors

export const StyledNumberInput = styled.div`
  display: inline-flex;
  flex-direction: column;
  position: relative;
  margin: ${spacing('6')} 0;
  padding: 0;
  border: 0;
  vertical-align: top;
  width: 100%;
`
